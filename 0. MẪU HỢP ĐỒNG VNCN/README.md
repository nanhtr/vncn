# Mẫu định dạng Hợp đồng / Phụ lục VNCN E&C

Mọi hợp đồng và phụ lục của VNCN theo **một format chung, lấy từ NDA Curate It**:

- Trang bìa: Quốc hiệu, tiêu ngữ, tên hợp đồng chữ to, Số, các bên (1), (2). Trang 2 bắt đầu phần nội dung.
- Header: chữ **VNCN E&C** bên trái; "Tên công ty / Số HĐ" bên phải.
- Footer: "© Công ty …" bên trái; "Trang X / Y" bên phải.
- Chữ Arial 10, căn đều hai bên, giãn dòng 1,15, cách đoạn 8pt, khổ A4.
- Số Điều (1, 2, 3…) và số Khoản (1.1, 1.2…) nằm ở lề trái, nội dung thụt vào 1,5 cm (thụt treo). Điểm a), b)… thụt thêm 1 cm.
- Tên mục không đánh số (CÁC CĂN CỨ KÝ KẾT, GIỮA, …) viết hoa, in đậm.
- Ô cần điền `[ … ]` hiển thị **chữ đỏ**.
- Phần ký: ĐẠI DIỆN / tên công ty / dòng chấm ký / Họ và tên / Chức vụ. Từ 2 người ký trở xuống thì xếp dọc; từ 3 người trở lên thì chia 2 cột.

## Cách 1 – Soạn trực tiếp trong Word

Mở `mau/Mau_Hop_dong_VNCN.docx` hoặc `mau/Mau_Phu_luc_VNCN.docx`, chọn **Save As…** rồi soạn tiếp. Các style có sẵn trong mục Styles:

| Style | Dùng cho | Đánh số |
|---|---|---|
| **VNCN Điều** | Tên Điều | tự động 1, 2, 3… |
| **VNCN Khoản** | Khoản | tự động 1.1, 1.2… (tự đánh lại số khi chuyển sang Điều mới) |
| **VNCN Mục** | Tiêu đề in hoa không đánh số | – |

Chèn hoặc xóa một Điều hay Khoản thì Word tự đánh lại số. Nên lưu mẫu thành `.dotx` (File → Save As → Word Template) để mỗi lần tạo văn bản mới đều dùng mẫu này.

## Cách 2 – Tạo tự động từ file nội dung (.txt)

```bash
node vncn_hd.js "noi_dung.txt" "ket_qua.docx"
```

Cần Node.js và thư viện `docx` (`npm install docx`).

### Cú pháp file nội dung

Phần đầu (trước dòng `---`):

```
tieu_de: HỢP ĐỒNG THI CÔNG XÂY DỰNG
so: 01/2026/HĐTC/ABC-VNCN          ← hiện ở trang bìa và header
phu_de: Gói thầu: …                ← có thể lặp nhiều dòng
ben: CÔNG TY ABC (Bên A – Chủ đầu tư)   ← lặp mỗi bên một dòng, tự đánh (1), (2)
cong_ty: VNCN E&C                  ← chữ trên header (thay bằng logo: logo.png nếu có)
ban_quyen: Công ty CP Đầu tư Xây dựng và Kỹ thuật VNCN E&C
quoc_hieu: khong                   ← tùy chọn: bỏ Quốc hiệu (vd. hợp đồng tiếng Anh)
kieu_dieu: Điều %1.                ← tùy chọn: hiện "Điều 1." thay vì "1"
---
```

Phần nội dung:

| Viết | Kết quả |
|---|---|
| `# Các căn cứ ký kết` | Tiêu đề in hoa, không đánh số |
| `## Giá hợp đồng` | Điều mới, tự đánh số **1, 2, 3…** |
| `- nội dung` | Khoản tự đánh số **1.1, 1.2…** |
| `(A) …`  `(1) …`  `a) …`  `(i) …` | Đoạn có nhãn, thụt treo (mỗi 2 dấu cách đầu dòng thụt thêm một cấp) |
| dòng thường | Đoạn văn, căn theo cột nội dung |
| `**đậm**`, `__nghiêng__`, `[cần điền]` | Đậm, nghiêng, chữ đỏ |
| `==…==` | Bôi vàng (chỗ chờ số liệu cụ thể, vd. `==[…]== đồng`) |
| `\| a \| b \|` (thêm dòng `\|---\|` dưới tiêu đề) | Bảng có viền; không có dòng `---` thì là bảng 2 cột không viền |
| `@ky TIÊU ĐỀ \| CÔNG TY \| Họ tên \| Chức vụ` | Khối chữ ký |
| `@phu_luc PHỤ LỤC 01 – …` | Sang trang mới, tiêu đề phụ lục căn giữa |
| `@trang_moi` | Ngắt trang |

File mẫu: `mau/Mau_Hop_dong.txt`, `mau/Mau_Phu_luc.txt`. Ví dụ thực tế: `vi_du/PL03_dinh_dang_moi.txt`, là PL03 của HĐ NOXH Yên Sở đã chuyển sang format mới.

## Cách 3 – Nhờ Claude

Ví dụ: "Soạn phụ lục … theo mẫu VNCN" hoặc "Chuyển file `3. DỰ THẢO HĐ/…docx` sang format VNCN". File `CLAUDE.md` ở thư mục gốc repo đã ghi quy tắc này, nên Claude sẽ tự áp dụng.
