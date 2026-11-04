# VNCN – hướng dẫn cho Claude

## Định dạng hợp đồng / phụ lục (BẮT BUỘC)

Khi soạn mới, chỉnh sửa hoặc chuyển đổi bất kỳ **hợp đồng, phụ lục hợp đồng, thỏa thuận, biên bản thỏa thuận** nào cho VNCN, luôn xuất file Word theo **format chuẩn VNCN**. Format này lấy theo NDA Curate It.

- Công cụ: `0. MẪU HỢP ĐỒNG VNCN/vncn_hd.js`. Cú pháp xem trong `0. MẪU HỢP ĐỒNG VNCN/README.md`.
- Quy trình: viết nội dung ra file `.txt` theo cú pháp đó, đặt cạnh file `.docx` đầu ra, rồi chạy `node "0. MẪU HỢP ĐỒNG VNCN/vncn_hd.js" in.txt out.docx`. Render ra PDF để kiểm tra trước khi giao.
- Khi chuyển đổi một hợp đồng có sẵn:
  - giữ nguyên **toàn bộ nội dung chữ**, chỉ đổi format;
  - giữ đúng số Điều/Khoản để các tham chiếu chéo ("điểm 2.2", "Mục 6") vẫn đúng;
  - khi đổi bố cục (ví dụ bảng thông tin các bên thành đoạn văn (1), (2)), phải báo cho người dùng biết.
- Không tự bịa số hợp đồng, tên người ký hay số liệu. Thông tin còn thiếu thì để dạng `[ … ]` (hiển thị chữ đỏ).
- Không sửa định dạng (font, cỡ chữ, thụt lề, header/footer) trừ khi người dùng yêu cầu. Nếu cần sửa thì sửa trong `vncn_hd.js`, mục `HOUSE STYLE`.
- Hợp đồng gửi đối tác nước ngoài: dùng `quoc_hieu: khong`.

## Tài liệu bảo mật

Không commit lên repo các NDA hay tài liệu của đối tác bên ngoài (ví dụ NDA Curate It) khi người dùng chưa đồng ý.
