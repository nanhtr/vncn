#!/usr/bin/env node
/*
 * VNCN – Bộ định dạng Hợp đồng / Phụ lục theo chuẩn "NDA style".
 *
 * Cách dùng:   node vncn_hd.js <nội-dung.txt> <kết-quả.docx>
 *
 * Cú pháp file nội dung: xem README.md trong cùng thư mục.
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, Header, Footer, PageNumber, LevelFormat,
  TabStopType, ImageRun, HeadingLevel,
} = require('docx');

// ───────────────────────────── HOUSE STYLE ─────────────────────────────
const S = {
  font: 'Arial',
  body: 20,          // 10pt
  heading: 22,       // 11pt – tên Điều, mục chữ in hoa
  title: 32,         // 16pt – tiêu đề trang bìa
  small: 16,         // 8pt  – header/footer
  red: 'C00000',     // ô cần điền [ ... ]
  brand: '9E2A2B',   // màu chữ logo khi không có ảnh logo
  line: 276,         // giãn dòng 1.15
  after: 160,        // cách đoạn sau 8pt
  col1: 850,         // lề chữ cấp 1 (≈1,5 cm) – số Điều/Khoản nằm ở lề trái
  step: 567,         // mỗi cấp sâu hơn thụt thêm 1 cm
  page: { width: 11906, height: 16838, margin: { top: 1440, right: 1440, bottom: 1134, left: 1440, header: 567, footer: 567 } },
};
const TEXT_W = S.page.width - S.page.margin.left - S.page.margin.right; // 9026

// ───────────────────────────── INLINE MARKUP ───────────────────────────
// **đậm**  __nghiêng__  [ô cần điền → chữ đỏ]  ==bôi vàng== (chỗ chờ số liệu)
function runs(text, base = {}) {
  const out = [];
  const re = /(==.+?==|\*\*.+?\*\*|__.+?__|\[[^\]]*\])/g;
  let last = 0, m;
  const push = (t, o) => t && out.push(new TextRun({ text: t, font: S.font, size: S.body, ...base, ...o }));
  while ((m = re.exec(text))) {
    push(text.slice(last, m.index), {});
    const t = m[0];
    if (t.startsWith('==')) {
      runs(t.slice(2, -2), { ...base, highlight: 'yellow' }).forEach(r => out.push(r));
    } else if (t.startsWith('**')) runs(t.slice(2, -2), { ...base, bold: true }).forEach(r => out.push(r));
    else if (t.startsWith('__')) runs(t.slice(2, -2), { ...base, italics: true }).forEach(r => out.push(r));
    else push(t, { color: S.red });
    last = m.index + t.length;
  }
  push(text.slice(last), {});
  return out;
}

const indentFor = (level) => ({ left: S.col1 + S.step * (level - 1), hanging: level === 1 ? S.col1 : S.step });

const para = (children, o = {}) => new Paragraph({
  children,
  alignment: o.align ?? AlignmentType.JUSTIFIED,
  spacing: { after: o.after ?? S.after, before: o.before ?? 0, line: S.line },
  indent: o.indent,
  tabStops: o.tabStops,
  keepNext: o.keepNext,
  keepLines: o.keepLines,
  style: o.style,
  pageBreakBefore: o.pageBreakBefore,
  border: o.border,
});

// ───────────────────────────── PARSER ──────────────────────────────────
function parse(src) {
  const lines = src.replace(/\r/g, '').split('\n');
  const meta = { ben: [], phu_de: [] };
  let i = 0;
  // front matter until a line '---'
  if (lines.some(l => l.trim() === '---')) {
    for (; i < lines.length; i++) {
      const l = lines[i];
      if (l.trim() === '---') { i++; break; }
      const m = l.match(/^([a-z_]+)\s*:\s*(.*)$/);
      if (!m) continue;
      const [, k, v] = m;
      if (k === 'ben' || k === 'phu_de') meta[k].push(v.trim());
      else meta[k] = v.trim();
    }
  }
  return { meta, body: lines.slice(i) };
}

// ───────────────────────────── BUILDERS ────────────────────────────────
function coverPage(meta, baseDir) {
  const out = [];
  if ((meta.quoc_hieu || 'co') !== 'khong') {
    out.push(para(runs('**CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM**'), { align: AlignmentType.CENTER, after: 0 }));
    out.push(para(runs('**Độc lập – Tự do – Hạnh phúc**'), { align: AlignmentType.CENTER, after: 0 }));
    out.push(para([new TextRun({ text: '———————', font: S.font, size: S.body })], { align: AlignmentType.CENTER, after: 0 }));
  }
  out.push(para([], { before: 2400, after: 0 }));
  out.push(para(runs(`**${meta.tieu_de || '[TÊN HỢP ĐỒNG]'}**`, { size: S.title }), { align: AlignmentType.LEFT, after: 200 }));
  if (meta.so) out.push(para(runs(`Số: ${meta.so}`, { size: S.heading }), { align: AlignmentType.LEFT, after: 120 }));
  meta.phu_de.forEach(p => out.push(para(runs(p, { size: S.heading }), { align: AlignmentType.LEFT, after: 120 })));
  if (meta.ben.length) {
    out.push(para([], { after: 240 }));
    meta.ben.forEach((b, k) => out.push(para(
      [new TextRun({ text: `(${k + 1})\t`, bold: true, font: S.font, size: S.heading }), ...runs(`**${b}**`, { size: S.heading })],
      { align: AlignmentType.LEFT, indent: indentFor(1), tabStops: [{ type: TabStopType.LEFT, position: S.col1 }], after: 80 })));
  }
  return out;
}

function buildTable(rows) {
  const cells = rows.map(r => r.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => c.trim()));
  const sepIdx = cells.findIndex(r => r.every(c => /^:?-{2,}:?$/.test(c)));
  const header = sepIdx === 1;
  const data = cells.filter((_, k) => k !== sepIdx);
  const n = Math.max(...data.map(r => r.length));
  // width: key/value tables 30/70, otherwise proportional to text length
  let widths;
  if (!header && n === 2) widths = [Math.round(TEXT_W * 0.28), TEXT_W - Math.round(TEXT_W * 0.28)];
  else {
    const len = Array.from({ length: n }, (_, j) => Math.max(6, ...data.map(r => Math.min(60, (r[j] || '').length))));
    const tot = len.reduce((a, b) => a + b, 0);
    widths = len.map(l => Math.floor(TEXT_W * l / tot));
    widths[n - 1] += TEXT_W - widths.reduce((a, b) => a + b, 0);
  }
  const line = { style: BorderStyle.SINGLE, size: 4, color: '808080' };
  const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const b = header ? { top: line, bottom: line, left: line, right: line } : { top: none, bottom: none, left: none, right: none };
  return new Table({
    width: { size: TEXT_W, type: WidthType.DXA },
    columnWidths: widths,
    rows: data.map((r, ri) => new TableRow({
      tableHeader: header && ri === 0,
      cantSplit: true,
      children: Array.from({ length: n }, (_, j) => new TableCell({
        width: { size: widths[j], type: WidthType.DXA },
        borders: b,
        margins: { top: 40, bottom: 40, left: 80, right: 80 },
        shading: header && ri === 0 ? { type: ShadingType.CLEAR, fill: 'D9D9D9', color: 'auto' } : undefined,
        children: (r[j] || '').split('<br>').map(t => para(runs(t, (header && ri === 0) || (!header && j === 0) ? { bold: true } : {}), { align: AlignmentType.LEFT, after: 40 })),
      })),
    })),
  });
}

function signatureBlock(spec) {
  // @ky TIÊU ĐỀ | TÊN CÔNG TY | Họ tên | Chức vụ
  const [title, company, name, pos] = spec.split('|').map(s => (s || '').trim());
  const dots = '…………………………………………';
  const o = { align: AlignmentType.LEFT, keepNext: true, keepLines: true, after: 40 };
  return [
    para(runs(`**${title || 'ĐẠI DIỆN'}**`), { ...o, before: 360 }),
    ...(company ? [para(runs(`**${company}**`), o)] : []),
    para([], { ...o, after: 600 }),
    para(runs(dots), o), para(runs('Chữ ký và đóng dấu'), { ...o, after: 160 }),
    para(runs(name || '[Họ và tên]'), o), para(runs(dots), o), para(runs('Họ và tên'), { ...o, after: 160 }),
    para(runs(pos || '[Chức vụ]'), o), para(runs(dots), o), para(runs('Chức vụ'), { align: AlignmentType.LEFT, after: 40 }),
  ];
}

function body(lines, meta) {
  const out = [];
  let inClause = false;   // đã gặp "## " → chữ thường thụt theo cột 1
  let tbl = [];
  const flushTable = () => { if (tbl.length) { out.push(buildTable(tbl)); out.push(para([], { after: 80 })); tbl = []; } };
  let kys = [];
  const flushKy = () => { if (kys.length) { out.push(...signatures(kys)); kys = []; } };

  for (let li = 0; li < lines.length; li++) {
    const raw = lines[li];
    const nextKy = /^\s*@ky\s/.test((lines.slice(li + 1).find(x => x.trim()) || ''));
    if (/^\s*\|/.test(raw)) { tbl.push(raw); continue; }
    flushTable();
    if (!/^\s*@ky\s/.test(raw) && raw.trim()) flushKy();
    if (!raw.trim()) continue;
    const lead = raw.match(/^ */)[0].length;
    const extra = Math.floor(lead / 2);
    const l = raw.trim();
    let m;

    if (l === '@trang_moi') { out.push(new Paragraph({ pageBreakBefore: true, children: [] })); continue; }
    if ((m = l.match(/^@ky\s+(.*)$/))) { kys.push(m[1]); continue; }
    if ((m = l.match(/^@phu_luc\s+(.*)$/))) {
      inClause = false;
      out.push(para(runs(`**${m[1]}**`, { size: S.heading }), { align: AlignmentType.CENTER, pageBreakBefore: true, after: 240 }));
      continue;
    }
    if ((m = l.match(/^@giua\s+(.*)$/))) { out.push(para(runs(m[1]), { align: AlignmentType.CENTER })); continue; }
    if ((m = l.match(/^##\s+(.*)$/))) { // Điều – tự động đánh số
      inClause = true;
      out.push(para(runs(m[1], { bold: true, size: S.heading }), { style: 'VNCNDieu' }));
      continue;
    }
    if ((m = l.match(/^#\s+(.*)$/))) { // mục chữ in hoa không đánh số (CĂN CỨ, CÁC BÊN, …)
      inClause = false;
      out.push(para(runs(m[1].toUpperCase(), { bold: true, size: S.heading }), { style: 'VNCNMuc' }));
      continue;
    }
    if ((m = l.match(/^-\s+(.*)$/))) { // Khoản – tự động đánh số N.M
      out.push(para(runs(m[1]), { style: 'VNCNKhoan' }));
      continue;
    }
    // nhãn tường minh: (A) (1) (a) (i) a) đ) 1)
    if ((m = l.match(/^(\([0-9A-Za-zđĐ]{1,5}\)|[a-zđ]\)|[0-9]{1,2}\))\s+(.*)$/))) {
      const level = (inClause ? 2 : 1) + extra;
      out.push(para([new TextRun({ text: m[1] + '\t', font: S.font, size: S.body }), ...runs(m[2])],
        { indent: indentFor(level), tabStops: [{ type: TabStopType.LEFT, position: indentFor(level).left }] }));
      continue;
    }
    // đoạn thường
    const level = (inClause ? 1 : 0) + extra;
    out.push(para(runs(l), { indent: level ? { left: S.col1 + S.step * (level - 1) } : undefined, keepNext: nextKy }));
  }
  flushTable();
  flushKy();
  return out;
}

// ≤ 2 người ký: xếp dọc như NDA; ≥ 3 người ký: lưới 2 cột không viền
function signatures(specs) {
  if (specs.length <= 2) return specs.flatMap(signatureBlock);
  const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const nb = { top: none, bottom: none, left: none, right: none };
  const w = Math.floor(TEXT_W / 2);
  const rows = [];
  for (let k = 0; k < specs.length; k += 2) {
    rows.push(new TableRow({ cantSplit: true, children: [specs[k], specs[k + 1]].map(sp => new TableCell({
      width: { size: w, type: WidthType.DXA }, borders: nb, margins: { right: 200 },
      children: sp ? signatureBlock(sp) : [new Paragraph({ children: [] })],
    })) }));
  }
  return [new Table({ width: { size: w * 2, type: WidthType.DXA }, columnWidths: [w, w], rows })];
}

function headerFooter(meta, baseDir) {
  const company = meta.cong_ty || 'VNCN E&C';
  const left = [];
  if (meta.logo) {
    const p = path.resolve(baseDir, meta.logo);
    const ext = path.extname(p).slice(1).toLowerCase().replace('jpeg', 'jpg');
    left.push(new ImageRun({ type: ext, data: fs.readFileSync(p), transformation: { width: 120, height: 36 } }));
  } else {
    left.push(new TextRun({ text: meta.logo_chu || company, bold: true, font: S.font, size: 28, color: S.brand }));
  }
  const rightText = [`Tên công ty: ${company}`, `Số: ${meta.so || '[Số hợp đồng]'}`];
  const none = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  const nb = { top: none, bottom: none, left: none, right: none };
  const header = new Header({ children: [new Table({
    width: { size: TEXT_W, type: WidthType.DXA }, columnWidths: [3009, 6017],
    rows: [new TableRow({ children: [
      new TableCell({ width: { size: 3009, type: WidthType.DXA }, borders: nb, children: [new Paragraph({ children: left })] }),
      new TableCell({ width: { size: 6017, type: WidthType.DXA }, borders: nb, children: rightText.map(t => new Paragraph({ alignment: AlignmentType.RIGHT, children: runs(t, { size: S.small }) })) }),
    ] })],
  }), new Paragraph({ spacing: { after: 120 }, children: [] })] });
  const footer = new Footer({ children: [new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: TEXT_W }],
    children: [
      new TextRun({ text: `© ${meta.ban_quyen || company}`, font: S.font, size: S.small }),
      new TextRun({ children: ['\tTrang ', PageNumber.CURRENT, ' / ', PageNumber.TOTAL_PAGES], font: S.font, size: S.small }),
    ],
  })] });
  return { header, footer };
}

function build(src, baseDir) {
  const { meta, body: lines } = parse(src);
  const dieuText = (meta.kieu_dieu || '%1').trim(); // vd: "Điều %1." cho kiểu Việt Nam truyền thống
  const children = [...coverPage(meta, baseDir), new Paragraph({ pageBreakBefore: true, children: [] }), ...body(lines, meta)];
  const { header, footer } = headerFooter(meta, baseDir);
  return new Document({
    creator: meta.cong_ty || 'VNCN E&C',
    title: meta.tieu_de || 'Hợp đồng',
    styles: {
      default: { document: { run: { font: S.font, size: S.body }, paragraph: { spacing: { line: S.line, after: S.after } } } },
      paragraphStyles: [
        { id: 'VNCNMuc', name: 'VNCN Mục', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { font: S.font, size: S.heading, bold: true },
          paragraph: { spacing: { before: 240, after: 160 }, keepNext: true, outlineLevel: 0 } },
        { id: 'VNCNDieu', name: 'VNCN Điều', basedOn: 'Normal', next: 'VNCNKhoan', quickFormat: true,
          run: { font: S.font, size: S.heading, bold: true },
          paragraph: { spacing: { before: 240, after: 160 }, keepNext: true, outlineLevel: 0, numbering: { reference: 'vncn-dieu', level: 0 } } },
        { id: 'VNCNKhoan', name: 'VNCN Khoản', basedOn: 'Normal', next: 'VNCNKhoan', quickFormat: true,
          run: { font: S.font, size: S.body },
          paragraph: { alignment: AlignmentType.JUSTIFIED, spacing: { after: S.after, line: S.line }, numbering: { reference: 'vncn-dieu', level: 1 } } },
      ],
    },
    numbering: { config: [{ reference: 'vncn-dieu', levels: [
      { level: 0, format: LevelFormat.DECIMAL, text: dieuText, alignment: AlignmentType.LEFT, suffix: /[A-Za-zĐđ]/.test(dieuText) ? 'space' : 'tab',
        style: { paragraph: { indent: { left: S.col1, hanging: S.col1 }, tabStops: [{ type: TabStopType.LEFT, position: S.col1 }] }, run: { bold: true, font: S.font, size: S.heading } } },
      { level: 1, format: LevelFormat.DECIMAL, text: '%1.%2', alignment: AlignmentType.LEFT, suffix: 'tab',
        style: { paragraph: { indent: { left: S.col1, hanging: S.col1 }, tabStops: [{ type: TabStopType.LEFT, position: S.col1 }] }, run: { font: S.font, size: S.body } } },
    ] }] },
    sections: [{
      properties: { page: { size: { width: S.page.width, height: S.page.height }, margin: S.page.margin } },
      headers: { default: header }, footers: { default: footer },
      children,
    }],
  });
}

if (require.main === module) {
  const [, , input, output] = process.argv;
  if (!input || !output) { console.error('Cách dùng: node vncn_hd.js <nội-dung.txt> <kết-quả.docx>'); process.exit(1); }
  const doc = build(fs.readFileSync(input, 'utf8'), path.dirname(path.resolve(input)));
  Packer.toBuffer(doc).then(b => { fs.writeFileSync(output, b); console.log('Đã tạo', output); });
}
module.exports = { build };
