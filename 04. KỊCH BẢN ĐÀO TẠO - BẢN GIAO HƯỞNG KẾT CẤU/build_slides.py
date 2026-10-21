#!/usr/bin/env python3
"""Sinh bộ slide HTML 40 trang từ các tệp kịch bản Markdown trong thư mục này.

Cách dùng:  python3 build_slides.py [đường_dẫn_fragment_tùy_chọn]
Kết quả:    BAN_GIAO_HUONG_KET_CAU_40_SLIDE.html (mở trực tiếp bằng trình duyệt)
"""
import html
import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
PART_FILES = [
    "01_PHAN_I_TIEN_KHAO_SAT_THIET_KE_BIM.md",
    "02_PHAN_II_PHAN_NGAM_HO_MONG_SAU.md",
    "03_PHAN_III_KET_CAU_THAN_THAP.md",
    "04_PHAN_IV_HOAN_THIEN_CO_DIEN_MEP.md",
    "05_PHAN_V_KIEM_DINH_NGHIEM_THU_BAN_GIAO.md",
]

# Cảnh animation canvas cho từng slide: (tên cảnh, tùy chọn)
SCENES = {
    1: ("strata", {"drill": 1}), 2: ("tower", {"mode": "clash"}), 3: ("tower", {"mode": "sway"}),
    4: ("plan", {}), 5: ("tower", {"mode": "laser"}), 6: ("strata", {"panel": 1}),
    7: ("strata", {"pile": 1}), 8: ("strata", {"excav": 1, "anchors": 1}),
    9: ("strata", {"excav": 1, "water": 1}), 10: ("layers", {"mode": "base"}),
    11: ("grid", {"mode": "rebar"}), 12: ("heat", {"mode": "thermal"}),
    13: ("strata", {"excav": 1, "unstrut": 1}), 14: ("tower", {"mode": "crane"}),
    15: ("tower", {"mode": "core"}), 16: ("tower", {"mode": "build"}), 17: ("cable", {}),
    18: ("column", {}), 19: ("grid", {"mode": "form"}), 20: ("beam", {}),
    21: ("tower", {"mode": "screen"}), 22: ("wave", {}), 23: ("tower", {"mode": "cloud"}),
    24: ("tower", {"mode": "dismantle"}), 25: ("grid", {"mode": "facade"}),
    26: ("pipes", {"mode": "riser"}), 27: ("tower", {"mode": "elevator"}),
    28: ("pipes", {"mode": "power"}), 29: ("sprinkler", {}), 30: ("grid", {"mode": "brick"}),
    31: ("layers", {"mode": "wet"}), 32: ("heat", {"mode": "lux"}), 33: ("network", {"mode": "bms"}),
    34: ("status", {"mode": "ist"}), 35: ("tower", {"mode": "fea"}), 36: ("tower", {"mode": "ladder"}),
    37: ("network", {"mode": "docs"}), 38: ("status", {"mode": "punch"}),
    39: ("status", {"mode": "key"}), 40: ("tower", {"mode": "lights"}),
}

HEX = re.compile(r"#[0-9A-Fa-f]{6}\b")


def inline(s):
    s = html.escape(s, quote=False)

    def code(m):
        c = m.group(1)
        if re.fullmatch(r"#[0-9A-Fa-f]{6}", c):
            return f'<code class="hex"><i style="background:{c}"></i>{c}</code>'
        return f"<code>{c}</code>"

    s = re.sub(r"`([^`]+)`", code, s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    return s


def md(lines):
    out, i = [], 0
    while i < len(lines):
        l = lines[i]
        if not l.strip() or l.strip() == "---":
            i += 1
            continue
        if l.lstrip().startswith("|"):
            rows = []
            while i < len(lines) and lines[i].lstrip().startswith("|"):
                rows.append([c.strip() for c in lines[i].strip().strip("|").split("|")])
                i += 1
            head, body = rows[0], [r for r in rows[1:] if not re.fullmatch(r"[-: ]+", "".join(r))]
            t = ['<div class="tw"><table><thead><tr>']
            t += [f"<th>{inline(c)}</th>" for c in head]
            t.append("</tr></thead><tbody>")
            for r in body:
                t.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
            t.append("</tbody></table></div>")
            out.append("".join(t))
        elif l.startswith("- "):
            items = []
            while i < len(lines) and (lines[i].startswith("- ") or lines[i].startswith("  ")):
                if lines[i].startswith("- "):
                    items.append([lines[i][2:], []])
                else:
                    m = re.match(r"\s+(?:\d+\.|-)\s+(.*)", lines[i])
                    if m and items:
                        items[-1][1].append(m.group(1))
                i += 1
            li = []
            for txt, sub in items:
                s = "".join(f"<li>{inline(x)}</li>" for x in sub)
                li.append(f"<li>{inline(txt)}" + (f"<ol>{s}</ol>" if s else "") + "</li>")
            out.append("<ul>" + "".join(li) + "</ul>")
        elif l.startswith(">"):
            q = []
            while i < len(lines) and lines[i].startswith(">"):
                q.append(lines[i].lstrip("> ").strip())
                i += 1
            out.append(f'<p class="note">{inline(" ".join(q))}</p>')
        else:
            out.append(f"<p>{inline(l.strip())}</p>")
            i += 1
    return "".join(out)


def ms(cell):
    a, _, b = cell.partition("–")
    num = lambda x: int(re.sub(r"[^\d]", "", x) or 0)
    return num(a), num(b)


def parse_slide(block, part):
    lines = block.split("\n")
    m = re.match(r"## SLIDE (\d+) — (.*)", lines[0])
    n, title = int(m.group(1)), m.group(2).strip()
    code = dur = ""
    secs, cur = {}, None
    for l in lines[1:]:
        mm = re.match(r"\*\*Mã hồ sơ:\*\* (.*?) · \*\*Thời lượng:\*\* (.*)", l)
        if mm:
            code, dur = mm.group(1), mm.group(2)
            continue
        hs = re.match(r"### (\d)\. ", l)
        if hs:
            cur = int(hs.group(1))
            secs[cur] = []
            continue
        if cur:
            secs[cur].append(l)
    bullets = [inline(x[2:]) for x in secs[3] if x.startswith("- ")]
    timeline = []
    for l in secs[5]:
        if l.startswith("|"):
            c = [x.strip() for x in l.strip().strip("|").split("|")]
            if "–" in c[0] and re.search(r"\d", c[0]):
                a, b = ms(c[0])
                timeline.append([a, b, inline(c[1])])
    quote = " ".join(x.strip() for x in secs[8] if x.strip() and x.strip() != "---").strip('"“”')
    swatches = []
    for k in (4, 6):
        for h in HEX.findall("\n".join(secs.get(k, []))):
            h = h.upper()
            if h not in swatches:
                swatches.append(h)
    scene, opts = SCENES.get(n, ("tower", {"mode": "build"}))
    return {
        "n": n, "title": title, "code": code, "dur": dur, "part": part,
        "std": md(secs[1]), "tol": md(secs[2]), "bul": bullets, "vis": md(secs[4]),
        "tl": timeline, "bim": md(secs[6]), "hold": md(secs[7]), "quote": html.escape(quote),
        "sw": swatches[:18], "scene": scene, "opts": opts,
    }


def main():
    slides, parts, appendix = [], [], ""
    for f in PART_FILES:
        text = (HERE / f).read_text(encoding="utf-8")
        head = re.search(r"^# (.*)$", text, re.M).group(1)
        pname, prange = re.match(r"(.*?) \(Slide (.*)\)", head).groups()
        roman = re.match(r"PHẦN (\w+)", pname).group(1)
        label = pname.split("—", 1)[1].strip()
        parts.append({"roman": roman, "name": label, "range": prange})
        body, _, tail = text.partition("## PHỤ LỤC")
        for blk in re.split(r"\n(?=## SLIDE )", body)[1:]:
            slides.append(parse_slide(blk.strip(), roman))
        if tail:
            appendix = md(tail.split("\n")[1:])
    readme = (HERE / "00_README_VA_HE_THONG_DO_HOA.md").read_text(encoding="utf-8")
    corr = readme.split("## 0.4.")[1].split("\n")[1:]
    data = {
        "slides": slides, "parts": parts,
        "itp": appendix, "corr": md([l for l in corr if l.startswith("|") or l.startswith(">")]),
    }
    assert len(slides) == 40, len(slides)
    payload = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
    tpl = (HERE / "slides_template.html").read_text(encoding="utf-8")
    fragment = tpl.replace("/*__DATA__*/", payload)
    full = "<!doctype html>\n<html lang=\"vi\">\n<head>\n<meta charset=\"utf-8\">\n" \
           "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n" \
           + fragment.replace("<!--BODY-->", "</head>\n<body>", 1) + "\n</body>\n</html>\n"
    (HERE / "BAN_GIAO_HUONG_KET_CAU_40_SLIDE.html").write_text(full, encoding="utf-8")
    if len(sys.argv) > 1:
        Path(sys.argv[1]).write_text(fragment.replace("<!--BODY-->", "", 1), encoding="utf-8")
    print(f"OK: {len(slides)} slide, {len(full)//1024} KB")


if __name__ == "__main__":
    main()
