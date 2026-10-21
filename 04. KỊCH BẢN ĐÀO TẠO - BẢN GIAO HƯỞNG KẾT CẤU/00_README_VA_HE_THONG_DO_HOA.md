# BẢN GIAO HƯỞNG KẾT CẤU
## Quy trình tổng thầu thi công toàn diện tòa nhà cao tầng từ A đến Z — Từ móng cọc nhồi sâu đến nghiệm thu vận hành Smart Building

**Loại tài liệu:** Kịch bản Masterclass 40 slide + Hồ sơ đặc tả thi công chuẩn EPC (World-class EPC Specification)
**Đối tượng:** Chủ đầu tư · Kỹ sư Tư vấn giám sát trưởng · Tổng thầu EPC · Nghiên cứu sinh xây dựng
**Phiên bản:** Rev.02 — đã hiệu chỉnh viện dẫn tiêu chuẩn, điền đủ các thông số định lượng bị bỏ trống ở bản nháp Rev.01

---

## 0.1. Cấu trúc bộ hồ sơ

| Tệp | Nội dung | Slide |
|---|---|---|
| `00_README_VA_HE_THONG_DO_HOA.md` | Hệ thống đồ họa chung (Visual Design System), quy ước mã màu, thông số render, danh mục hiệu chỉnh | — |
| `01_PHAN_I_TIEN_KHAO_SAT_THIET_KE_BIM.md` | Khảo sát, BIM, động lực học, tiến độ CPM, trắc địa | 1 – 5 |
| `02_PHAN_II_PHAN_NGAM_HO_MONG_SAU.md` | Tường vây, cọc nhồi, neo/chống, dewatering, chống thấm đáy, móng bè, bê tông khối lớn | 6 – 13 |
| `03_PHAN_III_KET_CAU_THAN_THAP.md` | Cẩu tháp, lõi cứng, sàn toàn khối, dự ứng lực, CFT, ván khuôn nhôm, dầm chuyển, an toàn, NDT, cất nóc | 14 – 24 |
| `04_PHAN_IV_HOAN_THIEN_CO_DIEN_MEP.md` | Mặt dựng, trục MEP, thang máy, điện, PCCC, tường AAC, chống thấm, sảnh, BMS, commissioning | 25 – 34 |
| `05_PHAN_V_KIEM_DINH_NGHIEM_THU_BAN_GIAO.md` | Thử tải, PCCC cấp nhà nước, hồ sơ pháp lý, nghiệm thu 3 bên, O&M, LEED | 35 – 40 |

## 0.2. Khung chuẩn của mỗi slide (Slide Specification Template)

Mỗi slide được trình bày như một **hồ sơ đặc tả thi công** gồm 8 khối cố định:

1. **Tiêu chuẩn viện dẫn** — mã tiêu chuẩn quốc tế/Việt Nam và phạm vi áp dụng.
2. **Ngưỡng dung sai (Tolerance Thresholds)** — giá trị thiết kế, dung sai chấp nhận (mm, ‰, %), phương pháp & tần suất kiểm tra.
3. **Nội dung chữ trên slide** — 3 gạch đầu dòng hiển thị.
4. **Visual điện ảnh** — góc máy, tiêu cự, khẩu độ, quỹ đạo camera, các lớp vật liệu xuyên thấu.
5. **Timeline animation đến mili-giây** — chuẩn 25 fps (1 frame = 40 ms).
6. **Mã màu BIM & tham số mô phỏng** — HEX/RGB, thông số PBR, thang màu FEA.
7. **Điểm dừng kiểm soát (Hold Point) & điểm mù** — những lỗi thường bị bỏ sót và cách khóa chặn.
8. **Lời thoại giảng viên** — 3–4 câu thuyết minh.

Ký hiệu trong bảng ITP: **H** = Hold point (dừng bắt buộc, TVGS phải ký mới được làm tiếp) · **W** = Witness (TVGS chứng kiến) · **R** = Review (xem xét hồ sơ).

---

## 0.3. HỆ THỐNG ĐỒ HỌA CHUNG (Global Visual Design System)

### 0.3.1. Thông số kết xuất (Render Spec)

| Hạng mục | Giá trị chuẩn |
|---|---|
| Độ phân giải master | 3840 × 2160 (UHD 4K), xuất phụ 1920 × 1080 |
| Tốc độ khung hình | 25 fps (1 frame = 40 ms); cảnh hyper-lapse dựng ở 25 fps từ dữ liệu 1 frame/30 s |
| Không gian màu | Làm việc ACEScg, xuất Rec.709 Gamma 2.4 (bản LED wall: Rec.2020 PQ) |
| Engine đề xuất | Unreal Engine 5.4+ (Lumen + Nanite) cho cảnh điện ảnh; Navisworks/Revit cho lớp BIM gốc; Ansys/ETABS/Midas xuất trường ứng suất dạng `.vtk` → Houdini để dựng heatmap |
| Motion blur | Shutter 180° (1/50 s) |
| Đường cong chuyển động mặc định | `cubic-bezier(0.65, 0, 0.35, 1)` (ease-in-out); vật thể "bay vào lắp ráp": `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) + overshoot 2% |
| Thời lượng chuẩn mỗi slide | 12 000 ms animation + 3 000 ms giữ khung để đọc chữ = 15 s |
| Chuyển cảnh giữa slide | Match-cut theo hình khối hoặc "BIM dissolve" 600 ms (vật liệu thực → wireframe → slide sau) |
| Typography | Tiêu đề: Inter Tight Bold 64 pt; số liệu kỹ thuật: JetBrains Mono 28 pt; chú thích: Inter 22 pt; hỗ trợ đầy đủ dấu tiếng Việt |
| Vùng an toàn chữ | Title-safe 90%, chữ không đè lên vùng hành động chính |

### 0.3.2. Bảng màu trạng thái (Status Tokens — dùng xuyên suốt 40 slide)

| Token | HEX | RGB | Ý nghĩa |
|---|---|---|---|
| `status.pass` | `#00C853` | 0,200,83 | Đạt, trong dung sai |
| `status.warn` | `#FFAB00` | 255,171,0 | Ngưỡng cảnh báo (≥ 70% giới hạn) |
| `status.fail` | `#D50000` | 213,0,0 | Vượt ngưỡng / xung đột / khuyết tật |
| `status.info` | `#00B8D4` | 0,184,212 | Dữ liệu đo thời gian thực |
| `bim.wire` | `#00E5FF` | 0,229,255 | Wireframe hologram, độ dày nét 0.6 px, glow 35% |
| `bim.ghost` | `#B0BEC5` @ 15% opacity | — | Lớp kiến trúc mờ (ghosted) |
| `bg.void` | `#05080D` | 5,8,13 | Nền không gian tối cho cảnh hologram |
| `laser.survey` | `#1DE9B6` | 29,233,182 | Tia laser trắc đạc |
| `ui.gold` | `#FFC400` | 255,196,0 | Mốc milestone, chìa khóa vàng, mục tiêu |

### 0.3.3. Thang màu phân tích phần tử hữu hạn (FEA Heatmap)

Dùng thang **Turbo 11 nấc** (không dùng "Jet" vì sai lệch cảm nhận độ sáng). Giá trị được chuẩn hóa theo tỷ số khai thác `η = σ/σ_cho phép` (hoặc `D/C ratio`).

| η | HEX | Diễn giải |
|---|---|---|
| 0.0 | `#30123B` | Không ứng suất |
| 0.1 | `#4145AB` | |
| 0.2 | `#4675ED` | Xanh dương — làm việc rất thấp |
| 0.3 | `#39A2FC` | |
| 0.4 | `#1BCFD4` | Xanh lơ |
| 0.5 | `#24ECA6` | |
| 0.6 | `#61FC6C` | Xanh lá — vùng thiết kế tối ưu |
| 0.7 | `#A4FC3B` | |
| 0.8 | `#D1E834` | Vàng — tiệm cận |
| 0.9 | `#F3C63A` / `#FE9B2D` | Cam — cảnh báo |
| 1.0+ | `#D23105` → `#7A0403` | Đỏ — vượt khả năng chịu lực (nhấp nháy 2 Hz) |

Quy ước: ứng suất kéo hiển thị dải đỏ/cam, ứng suất nén hiển thị dải xanh dương khi dùng bản đồ phân kỳ (diverging) `#2166AC ← #F7F7F7 → #B2182B`, điểm 0 MPa = trắng. Hệ số phóng đại biến dạng (deformation scale) ghi rõ trên khung hình, ví dụ `×200`.

### 0.3.4. Thư viện vật liệu PBR (dùng thống nhất)

| Vật liệu | Base Color HEX | Metallic | Roughness | Ghi chú dựng hình |
|---|---|---|---|---|
| Bê tông tươi | `#6E6A64` | 0.0 | 0.25 (ướt) → 0.85 (khô) | Animate roughness theo thời gian ninh kết; normal map độ sâu 0.3 mm |
| Bê tông đã ninh kết | `#9A9893` | 0.0 | 0.80 | Có lỗ khí micro Ø 0.5–2 mm (mật độ < 1%) |
| Cốt thép CB500-V ánh kim | `#7A7F87` | 1.0 | 0.38 | Gân xoắn theo TCVN 1651-2, highlight anisotropic 0.4 |
| Cáp DUL 7 sợi | `#B8BDC4` | 1.0 | 0.22 | Xoắn 7 sợi bước 12–16 × D |
| Thép kết cấu sơn chống gỉ | `#C1440E` | 0.1 | 0.55 | |
| Thanh chống tạm H-beam | `#F2B705` | 0.2 | 0.50 | Vàng nghệ an toàn |
| Ván khuôn nhôm | `#C9CDD2` | 1.0 | 0.30 | |
| Dung dịch Bentonite | `#B5838D` | 0.0 | 0.05 | SSS (tán xạ dưới bề mặt) 0.6, độ nhớt mô phỏng 40 cP |
| Màng chống thấm HDPE/SBS | `#111316` | 0.0 | 0.15 | Clear-coat 0.8 |
| Gel tinh thể chống thấm "pha lê" | `#7FFFD4` @ 40% transmission | 0.0 | 0.02 | IOR 1.45, caustics bật |
| Kính hộp Low-E | `#7FB3B5` | 0.0 | 0.02 | IOR 1.52, reflectance 18%, tint xanh ngọc |
| Đá marble sảnh | `#EDE9E3` (vân `#9C9488`) | 0.0 | 0.08 | Bóng gương |
| Gạch AAC | `#ECEAE4` | 0.0 | 0.92 | Lỗ rỗng macro Ø 0.5–1.5 mm |

### 0.3.5. Mã màu hệ thống MEP trên mô hình BIM (áp dụng mọi slide MEP)

| Hệ thống | HEX | Viết tắt |
|---|---|---|
| Nước lạnh cấp (CHWS) | `#0057B8` | CHWS |
| Nước lạnh hồi (CHWR) | `#5BA4E6` | CHWR |
| Nước giải nhiệt (CDW) | `#00897B` | CDW |
| Chữa cháy — sprinkler/họng | `#D32F2F` | FP |
| Cấp nước sinh hoạt | `#00ACC1` | DW |
| Thoát nước thải/xí | `#6D4C41` | SAN |
| Thoát nước mưa | `#43A047` | RWD |
| Ống gió cấp | `#90A4AE` | SA |
| Ống gió hồi/thải | `#CFD8DC` | RA/EA |
| Hút khói/tăng áp | `#7E57C2` | SE/SP |
| Máng cáp điện động lực | `#FBC02D` | PWR |
| Máng cáp ELV/BMS | `#F57C00` | ELV |
| Busway | `#BDBDBD` (vỏ nhôm) + dòng chảy `#00E5FF` | BUS |

Quy ước khoảng cách thông thủy kiểm tra va chạm "mềm" (soft clash): ống có bảo ôn ≥ 25 mm tính từ mặt ngoài bảo ôn; vùng bảo trì van/thiết bị ≥ 600 mm; khoảng hở đến cáp trung thế ≥ 300 mm.

---

## 0.4. Danh mục hiệu chỉnh kỹ thuật so với bản nháp Rev.01

Để tài liệu "không có điểm mù", các điểm sau đã được hiệu chỉnh trong Rev.02:

| Slide | Bản nháp | Hiệu chỉnh | Lý do |
|---|---|---|---|
| 1 | TCVN 9436 | **TCVN 9437:2012** (Khoan thăm dò ĐCCT) + TCVN 9363:2012 | TCVN 9436 là tiêu chuẩn nền đường ô tô |
| 2 | LOD 500 cho phối hợp thiết kế | **LOD 350/400** cho phối hợp & chế tạo; **LOD 500** chỉ cho mô hình hoàn công đã kiểm chứng hiện trường | Theo định nghĩa BIMForum LOD Specification |
| 3 | ASCE 7-16 | **ASCE 7-22** (bản hiện hành) + TCVN 2737:2023 + TCVN 9386:2012 cho động đất | Cập nhật phiên bản |
| 6 | TCVN 9396:2012 cho tường vây | **EN 1538:2010+A1:2015** + TCVN 9395:2012 (thông số bentonite) | TCVN 9396 là tiêu chuẩn siêu âm cọc |
| 7 | — | Bổ sung **TCVN 9396:2012 / ASTM D6760** cho siêu âm, **TCVN 9393:2012** cho nén tĩnh | |
| 8 | TCVN 11821:2017 | **TCVN 8870:2011** + EN 1537:2013 + PTI DC35.1 | Đúng phạm vi neo trong đất |
| 9 | TCVN 9362 cho hạ nước ngầm | TCVN 9362:2012 giữ cho kiểm tra nền; bổ sung **CIRIA C750** và EN 1997-1 (trạng thái UPL/HYD) | TCVN 9362 là tiêu chuẩn thiết kế nền |
| 10 | M150 (B10) | **B7.5–B12.5** (tương đương M100–M150) | Đối chiếu bảng tương quan TCVN 5574 |
| 15 | ACI 347.3R cho tốc độ leo | **ACI 347R-14** (ván khuôn) ; ACI 347.3R chỉ dùng cho chất lượng bề mặt | |
| 22 | ASTM E165 cho UT/MT | **ASTM E165** = thẩm thấu chất lỏng (PT); UT: **AWS D1.1 / ISO 17640**; MT: **ASTM E709** | |
| 26 | TCVN 2622:1995 | **QCVN 06:2022/BXD + Sửa đổi 1:2023** | TCVN 2622 đã được thay thế |
| 27 | TCVN 6395:2008 | **TCVN 6396-20:2017 / -50** (EN 81-20/50) + EN 81-72 thang chữa cháy | |
| 29 | — | Bổ sung **TCVN 7336:2021** (sprinkler), NFPA 20, NFPA 92 | |
| 30 | TCVN 7959:2011 | **TCVN 7959:2017** | Bản thay thế |
| 35 | TCVN 9343:2012 | **TCVN 9344:2012** (thử tải tĩnh cấu kiện chịu uốn) + ACI 437.2-13 | TCVN 9343 là hướng dẫn bảo trì |
| 36 | NĐ 136/2020 | **Luật PCCC & CNCH 2024 (55/2024/QH15)** + NĐ 105/2025/NĐ-CP | Văn bản thay thế, hiệu lực từ 01/7/2025 |
| 40 | LOTES | **LOTUS** (VGBC) / EDGE / LEED v4.1 | Sửa tên chứng chỉ |

> **Lưu ý pháp lý:** Văn bản quy phạm pháp luật Việt Nam thay đổi nhanh. Trước khi dùng tài liệu cho một dự án cụ thể, Tư vấn giám sát trưởng phải rà soát hiệu lực của mọi Luật, Nghị định, QCVN, TCVN được viện dẫn tại thời điểm ký hợp đồng và thời điểm nghiệm thu. Các giá trị dung sai ghi "Spec dự án" là ngưỡng khuyến nghị khắt khe hơn tiêu chuẩn tối thiểu, cần được đưa vào Chỉ dẫn kỹ thuật (Technical Specification) của hợp đồng mới có giá trị ràng buộc.
