# Ghi nhớ dự án NOXH Yên Sở (cho Claude)

Người dùng là cán bộ BCH Yên Sở (VNCN E&C), xưng "tao – mày". Lãnh đạo duyệt: anh Nguyễn Duy Quang (TGĐ, "anh Q", "AQ").

## Cách làm việc đã thống nhất
- Văn bản trả ra dạng Word (.docx). Sửa hợp đồng/phụ lục luôn bằng **track changes**, người sửa "BCH Yên Sở".
- Chủ trương: **ngắn gọn, đủ pháp lý, không trùng lặp, bảo vệ tối đa Bên A**; nhà thầu chịu trách nhiệm đúng phạm vi công việc của họ.
- Báo cáo trình anh Q: 1–3 trang, có bảng so sánh và mức độ (Cao/Trung bình/Thấp).
- File lớn (pdf, xlsx, zip…) lưu bằng Git LFS: đọc bằng `git show <ref>:<path> | git lfs smudge > file`. PDF ký thường là bản scan (không có chữ), phải render ảnh để đọc.
- Thư mục chính: `01. DỰ ÁN NOXH - YÊN SỞ/01. DỰ ÁN NOXH - ÁNH/` (03. HỢP ĐỒNG, 04. DỰ THẢO HĐ, 05. VĂN BẢN, 06. THEO DÕI ĐNTT).

## Dự án
- Nhà ở cho LLVT CAND (NOXH) tại ô đất C3-ODK3, C3-ODK4, phân khu H2-4, phường Yên Sở, Hà Nội. Khối CT1.2, CT2 (CT2.1, CT2.2, CT2.3).
- Chủ đầu tư: Liên danh IFT – Tiền Phong. Tổng thầu: Liên danh VNCN E&C – Việt Hùng, HĐ tổng thầu số 01/2026/HĐTTXL/LDIFT-TP & LD VNCNEC-VH ngày 16/7/2026 (có PL03 về thanh toán đã ký).
- Nhà thầu/đơn vị liên quan: Hà Quỳnh (cọc, tường vây; lấp mặt bằng), Phục Hưng (phần ngầm, HĐXD số 40/2026/HĐXD/VNCNEC-PHC ngày 31/10/2026), Mỏ Địa Chất (quan trắc), Hoàng Minh (đào đắp, vận chuyển đất), Gamuda (dự án liền kề, mượn đường).

## Hoàng Minh – HĐKT số 39/2026/HĐKT/VNCN-HM ký ngày 12/10/2026
- Bên B ký: ông Nguyễn Hữu Tuấn, Phó Giám đốc (GUQ số 02/UQ-2025 ngày 02/08/2025). Bản ký = bản "CHỐT KÝ 11-10 V1".
- Giá trị tạm tính 19.970.293.060 đ (chưa VAT 8%). Đơn giá cố định. Bãi đổ Nguyên Khê – Đông Anh (~29 km).
- Phụ lục A: mục 5–6 vét/vận chuyển bùn ao 3.424 m³ (25.000 + 170.000 đ/m³); mục 13 trung chuyển nội bộ (gồm xúc, vận chuyển, san, lu) 60.000 đ/m³; vận chuyển mùn khoan 170.000 đ/m³; đất cấp II đổ thải 110.000 đ/m³.
- Thanh toán 90%, 15 ngày làm việc, giữ lại thanh toán sau 60 ngày; tạm ứng 500 triệu; phạt 8%, chậm tiến độ 0,5%/ngày.
- 8.5(e): Bên A không làm đường tạm cho HM; đoạn cuối 8.5: Bên A được yêu cầu HM làm đường tạm bằng vật liệu có sẵn cho đơn vị khác, giá theo trung chuyển nội bộ. 6.1(g): công việc phát sinh phải ký phụ lục trước, làm trước không được thanh toán.
- Chủ trương 10/10: không thể hiện bentonite, bỏ GPS, Bên A không làm đường tạm.
- Điểm yếu đã báo cáo (12/10): bỏ cam kết bồi hoàn 8.3(h), xóa định nghĩa Chất Thải/Điểm Chuyển Giao/Chứng Từ Đổ Thải Hợp Lệ, không còn cách tính khối lượng mùn khoan, bảo hiểm bên thứ ba chỉ 5.000.000 đ/vụ, hệ số quy đổi chưa chốt.
- Phụ lục 01 đường công vụ (11/2026): trạc mua mới 2.748 m³ × 200.000 đ/m³ = 549.600.000 đ (TTr 10112026-01, nội bộ); tận dụng 1.377 m³ theo mục 13; bùn nền đường theo mục 5–6.
- Khi rà soát phụ lục/hợp đồng do người khác soạn: **giữ nguyên mọi số liệu, ngày, giá trị của bản gốc người dùng gửi**; chỉ sửa chỗ sai/bất lợi cho Bên A. Không lấy số liệu tờ trình (nội bộ) đưa vào. Chỗ nào cần dẫn sang bảng chi tiết thì ghi "phụ lục bổ sung" (không đặt tên/số riêng); "Phụ lục A – Giá hợp đồng" chỉ dùng cho Phụ lục A của HĐ gốc.
- Không xóa bớt trách nhiệm Bên B cho ngắn: rút gọn câu chữ nhưng phải giữ đủ nghĩa vụ chuyên môn của công việc.

## Hồ sơ đã làm (thư mục `04. HOÀNG MINH - ĐÀO ĐẤT` và `3. DỰ THẢO HĐ`, `4. TỜ TRÌNH`)
- R10.2, R11 (track changes trên bản AQ), báo cáo rà soát 3 dự thảo (10/10), so sánh bản chốt ký với bản AQ và báo cáo (12/10).
- PL01 đường công vụ: R1–R4 (12/11) là các bản thử; **R5 là bản dùng** – track changes trên dự thảo 11/11, giữ nguyên số liệu gốc (593.568.000 đ, 1.377 m³ × 60.000 đ, các mốc 5 ngày, 13/11, 14/11, 16/11), sửa căn cứ sang HĐKT 39/2026, bám đoạn cuối khoản 8.5, trạc mua bổ sung là phát sinh 6.1(g), bổ sung trách nhiệm Bên B (i)–(n).
