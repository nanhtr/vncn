# PHẦN V — GIAI ĐOẠN KIỂM ĐỊNH, NGHIỆM THU VÀ BÀN GIAO VẬN HÀNH (Slide 35 – 40)

---

## SLIDE 35 — Kiểm định khả năng chịu lực công trình: thử tải tĩnh, quan trắc và đối chiếu FEA

**Mã hồ sơ:** EPC-SPEC-35-SHM · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| TCVN 9344:2012 | Kết cấu BTCT — Đánh giá độ bền cấu kiện chịu uốn bằng thí nghiệm chất tải tĩnh |
| ACI 437.2-13 / ACI 318-19 Chương 27 | Thử tải hiện trường kết cấu bê tông |
| TCVN 9360:2012 / TCVN 9400:2012 | Quan trắc lún / nghiêng |
| ISO 4866 / ISO 18649 | Đo dao động công trình |
| ISO 13822 | Đánh giá kết cấu hiện hữu |
| Thông tư 10/2021/TT-BXD và văn bản hiện hành | Kiểm tra công tác nghiệm thu, quan trắc công trình |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng chấp nhận | Kiểm tra |
|---|---|---|---|
| Tải thử (ACI 437.2 / ACI 318 Ch.27) | Lớn nhất của: 1,3(D+L); 1,0D + 1,1L + 1,6(Lr hoặc S hoặc R); 1,3D (đã tính tải bản thân hiện hữu) | | R |
| Chất tải | ≥ 4 cấp tăng dần, giữ ≥ 24 h ở cấp tối đa (ACI 318 Ch.27) | Không nứt bất thường, không vỡ | **H** |
| Độ võng tối đa | Δ₁ ≤ ℓt² / (20 000 h) **hoặc** đạt tiêu chí phục hồi | | H |
| Phục hồi sau dỡ tải 24 h | Δr ≤ Δ₁/4 (phục hồi ≥ 75%) | | H |
| Độ võng thực tế vs lý thuyết | Spec dự án: Δ_đo ≤ 1,0 × Δ_tính toán theo FEA với độ cứng nứt; tỷ lệ > 1,2 → điều tra | | R |
| Cảm biến biến dạng | Dây rung (VW) độ phân giải 1 µε, gắn trên cốt thép trước khi đổ | | W |
| Lún móng tổng | Lún trung bình theo giới hạn thiết kế (dự án: dự báo 45 mm, giới hạn 80 mm); lún lệch ≤ 1/500 (ngưỡng thiết kế cho khung BTCT — đối chiếu TCVN 9362) | | R |
| Độ nghiêng tổng thể tháp | ≤ 1/1 000 do lún lệch (Spec dự án) | | W |
| Tần số dao động riêng đo vs FEA | Sai lệch ≤ ±15% (f₁ đo bằng dao động môi trường — ambient vibration, phương pháp FDD/SSI) | | R |
| Hệ quan trắc dài hạn (SHM) | ≥ 120 cảm biến: biến dạng, nghiêng, gia tốc kế đỉnh tháp, trạm khí tượng, GNSS đỉnh tháp | Cảnh báo theo 3 cấp | R |

### 3. Nội dung chữ trên slide
- Thử tải tĩnh sàn điển hình theo TCVN 9344 / ACI 437.2: ≥ 4 cấp tải, giữ 24 h, độ võng ≤ ℓt²/(20 000h) hoặc phục hồi ≥ 75%.
- Hiệu chỉnh mô hình FEA bằng số liệu thực: biến dạng VW, lún, nghiêng, tần số dao động riêng (sai lệch ≤ ±15%).
- Hệ quan trắc sức khỏe kết cấu (SHM) 120+ cảm biến chuyển giao cho vận hành; chứng nhận an toàn chịu lực bởi đơn vị kiểm định độc lập.

### 4. Visual điện ảnh
- **Wide Structural Stress Heatmap View:** tòa tháp xoay chậm 4°/s trên nền `#05080D`, vỏ ngoài tan biến để lộ khung kết cấu với heatmap Turbo; ống kính 50 mm.
- Cận cảnh: các bồn nước/bao cát chất tải trên ô sàn, dây cảm biến `#FFC400` chạy về bộ ghi dữ liệu, đồng hồ đo võng điện tử.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Bồn nước xếp lên ô sàn thử theo 4 cấp tải (25 – 50 – 75 – 100%), mỗi cấp nước dâng trong bồn |
| 2 500 – 5 000 | Cảm biến VW truyền dữ liệu; sàn võng (phóng đại ×500) theo heatmap; đồ thị tải – độ võng tuyến tính |
| 5 000 – 7 000 | Giữ tải 24 h (tua) → dỡ tải; độ võng phục hồi 86% `#00C853` |
| 7 000 – 9 500 | Toàn tháp: mô hình FEA chạy, đường dạng dao động 1 (uốn) với f₁ FEA 0,182 Hz và f₁ đo 0,191 Hz (+4,9%) |
| 9 500 – 12 000 | Heatmap toàn tháp ổn định trong vùng xanh lam – xanh lá (η ≤ 0,7), không điểm đỏ; con dấu `STRUCTURAL SAFETY CERTIFIED` |

### 6. Mã màu & tham số
- Heatmap D/C toàn tháp: thang Turbo, η ≤ 0,6 xanh, 0,6–0,9 vàng – cam, ≥ 1,0 đỏ nhấp nháy (không được xuất hiện ở bản cuối).
- Đồ thị tải – võng: đo `#00B8D4`, FEA `#7E57C2` nét đứt, giới hạn `#D50000`.

### 7. Hold Point & điểm mù
- **H:** Chứng nhận an toàn chịu lực / kết luận kiểm tra của cơ quan chuyên môn về xây dựng trước khi nghiệm thu hoàn thành.
- **Điểm mù 1:** Thử tải gây hại cho cấu kiện tốt (quá tải) — tải thử phải do kỹ sư kết cấu tính toán và giám sát, có hệ chống an toàn bên dưới.
- **Điểm mù 2:** Chỉ thử tải sàn mà bỏ qua kiểm chứng tổng thể (lún, nghiêng, tần số) — tổng thể mới phản ánh làm việc của hệ.
- **Điểm mù 3:** Hệ SHM bị bỏ quên sau bàn giao — phải đưa vào hợp đồng vận hành, có ngưỡng cảnh báo và người chịu trách nhiệm.

### 8. Lời thoại giảng viên
"Chúng ta đã tính toán bằng hàng triệu phần tử hữu hạn — nhưng một mô hình chỉ có giá trị khi thực tế xác nhận nó. Hôm nay, tòa tháp tự lên tiếng: sàn võng đúng như dự báo và phục hồi tám mươi sáu phần trăm, tần số dao động lệch chưa đến năm phần trăm so với mô hình. Những con số này nằm trọn trong giới hạn an toàn — và đó là lời khẳng định hùng hồn nhất cho chất lượng kết cấu."

---

## SLIDE 36 — Nghiệm thu phòng cháy chữa cháy và diễn tập cứu nạn cứu hộ

**Mã hồ sơ:** EPC-SPEC-36-FAC · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| Luật Phòng cháy, chữa cháy và Cứu nạn, cứu hộ số 55/2024/QH15 (hiệu lực 01/7/2025) | Khung pháp lý PCCC & CNCH |
| Nghị định 105/2025/NĐ-CP (thay thế NĐ 136/2020/NĐ-CP) và văn bản hướng dẫn hiện hành | Thẩm duyệt, nghiệm thu PCCC |
| QCVN 06:2022/BXD + Sửa đổi 1:2023 | An toàn cháy — đường cho xe chữa cháy, bãi đỗ xe thang |
| NFPA 14 | Áp lực họng nước chữa cháy vách tường (đối chiếu) |
| NFPA 4 | Thử nghiệm tích hợp |

> Ghi chú: Tổng thầu/TVGS phải rà soát lại số hiệu và hiệu lực Nghị định hướng dẫn tại thời điểm nghiệm thu.

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Hồ sơ nghiệm thu PCCC | Đủ 100% thành phần theo quy định (thẩm duyệt thiết kế, biên bản thử nghiệm, IST, chứng nhận kiểm định phương tiện PCCC) | | **H** |
| Đường cho xe chữa cháy | Rộng ≥ 3,5 m thông thủy, cao ≥ 4,25 m, chịu tải xe chữa cháy; bãi đỗ xe thang theo QCVN 06 (khoảng cách mép bãi đến mặt nhà theo quy định) | | W |
| Tầm với xe thang | Xe thang thông dụng ~ 32–55 m (một số đô thị có 70–100 m) — **phần nhà cao hơn tầm xe thang phải dựa hoàn toàn vào hệ thống bên trong** (thang chữa cháy, họng nước, sprinkler, tầng lánh nạn) | | R |
| Áp lực họng nước vách tường | Lăng phun tạo cột nước đặc ≥ 6 m (Spec: thử tại họng bất lợi nhất); NFPA 14 đối chiếu: 6,9 bar tại họng 65 mm xa nhất | Thử thực tế | H |
| Họng tiếp nước xe chữa cháy (Siamese) | Đủ số lượng, có biển chỉ dẫn, thử bơm tiếp nước từ xe chữa cháy | | H |
| Tầng lánh nạn / gian lánh nạn | Theo QCVN 06 cho nhà > 100 m (khoảng cách theo quy định) | Kiểm tra tăng áp, chiếu sáng, liên lạc | H |
| Thời gian thoát nạn diễn tập | Đối chiếu kết quả mô phỏng thoát nạn (Pathfinder/STEPS): RSET < ASET với hệ số an toàn ≥ 1,5 | | W |
| Hệ thông tin liên lạc | Âm thanh thông báo bằng giọng nói (EVAC) độ rõ STI ≥ 0,5 | | W |

### 3. Nội dung chữ trên slide
- Phối hợp Cảnh sát PCCC & CNCH diễn tập thực chiến toàn tòa: báo cháy, thoát nạn, cứu nạn, tiếp nước từ xe chữa cháy.
- Thử họng nước vách tường bất lợi nhất, họng tiếp nước Siamese, tầng lánh nạn; xác nhận phần nhà vượt tầm xe thang được bảo vệ bằng hệ thống bên trong.
- Nghiệm thu PCCC theo Luật PCCC & CNCH 2024 và nghị định hướng dẫn — điều kiện tiên quyết để đưa công trình vào sử dụng.

### 4. Visual điện ảnh
- **Epic Cinematic Rescue Drone Shot:** chiều tà 17h30, drone quỹ đạo thấp quanh đội hình 6 xe chữa cháy đỏ `#C62828` đèn ưu tiên xanh đỏ nhấp nháy; xe thang vươn 54 m, vòi rồng phun cột nước trắng xóa với cầu vồng trong ánh nắng.
- Cắt sang nội thất: lính cứu hỏa trong khoang đệm thang chữa cháy tầng 50 nối vòi vào họng nước vách tường.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 000 | Còi báo động toàn tháp; bản đồ thoát nạn hiển thị dòng người `#00C853` di chuyển xuống thang bộ |
| 2 000 – 4 500 | Xe chữa cháy vào vị trí bãi đỗ; xe thang vươn lên — vạch giới hạn tầm với `54 m` hiện ngang tòa nhà `#FFAB00` |
| 4 500 – 7 500 | Phía trên vạch giới hạn: hệ thống bên trong sáng lên (thang chữa cháy `#D32F2F`, họng nước, sprinkler, tầng lánh nạn `#7E57C2`) |
| 7 500 – 10 000 | Xe chữa cháy bơm tiếp nước vào họng Siamese; áp lực truyền lên tầng 50; lăng phun tạo cột nước đặc 8 m |
| 10 000 – 12 000 | Cán bộ PCCC ký văn bản chấp thuận kết quả nghiệm thu dưới ánh đèn flash |

### 6. Mã màu & tham số
- Mô phỏng thoát nạn: mật độ người < 1 người/m² `#00C853`, 1–2 `#FFAB00`, > 2 `#D50000`; RSET/ASET dạng thanh so sánh.
- Vạch tầm với xe thang: mặt phẳng ngang `#FFAB00` 25% xuyên tòa nhà.

### 7. Hold Point & điểm mù
- **H:** Văn bản chấp thuận kết quả nghiệm thu PCCC của cơ quan có thẩm quyền.
- **Điểm mù 1:** Thay đổi thiết kế (layout, vật liệu) sau khi thẩm duyệt PCCC mà không thẩm duyệt điều chỉnh → không được nghiệm thu.
- **Điểm mù 2:** Bãi đỗ xe thang bị cây xanh, mái che, biển quảng cáo, đường dây điện lấn chiếm.
- **Điểm mù 3:** Diễn tập chỉ một lần khi nghiệm thu — kế hoạch vận hành phải có diễn tập định kỳ hằng năm.

### 8. Lời thoại giảng viên
"Hãy nhìn vạch ngang trên tòa tháp kia — đó là giới hạn với tới của chiếc xe thang dài nhất thành phố. Phía trên nó, không một lính cứu hỏa nào có thể tiếp cận từ bên ngoài; sự sống của hàng nghìn người phụ thuộc hoàn toàn vào những gì chúng ta đã xây bên trong. Vượt qua kỳ nghiệm thu phòng cháy chữa cháy không chỉ là một thủ tục pháp lý — đó là lời cam kết rằng mọi hệ thống đã sẵn sàng cho ngày mà chúng ta mong sẽ không bao giờ đến."

---

## SLIDE 37 — Hồ sơ pháp lý hoàn công, môi trường và hồ sơ số hóa

**Mã hồ sơ:** EPC-SPEC-37-DOC · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| Luật Xây dựng 2014 (sửa đổi, bổ sung bởi Luật 62/2020/QH14) và văn bản thay thế hiện hành | Khung pháp lý xây dựng |
| Nghị định 06/2021/NĐ-CP | Quản lý chất lượng, thi công và bảo trì — hồ sơ hoàn thành công trình (Phụ lục VIB) |
| Nghị định 175/2024/NĐ-CP | Quản lý hoạt động xây dựng |
| Luật Bảo vệ môi trường 2020 + Nghị định 08/2022/NĐ-CP | ĐTM, giấy phép môi trường |
| ISO 19650-2/-3, COBie | Bàn giao thông tin số |
| Luật Lưu trữ / quy định lưu trữ hồ sơ công trình | Thời hạn lưu trữ |

> Ghi chú: Văn bản pháp luật thay đổi thường xuyên; danh mục phải được cập nhật tại thời điểm lập hồ sơ.

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Bản vẽ hoàn công | 100% hạng mục, ký đủ thành phần; khớp mô hình BIM LOD 500 | 0 hạng mục thiếu | **H** |
| Chứng chỉ vật liệu (CO/CQ), kết quả thí nghiệm | 100% lô vật liệu chính, truy vết được đến cấu kiện (GUID BIM) | | H |
| Biên bản nghiệm thu công việc / giai đoạn | 100% theo kế hoạch ITP | | R |
| Nhật ký thi công | Đầy đủ, liên tục, có chữ ký hằng ngày | | R |
| Hồ sơ môi trường | Quyết định phê duyệt ĐTM; giấy phép môi trường trước khi vận hành; kết quả quan trắc môi trường giai đoạn thi công | | H |
| Đấu nối hạ tầng | Văn bản thỏa thuận/nghiệm thu đấu nối điện, cấp nước, thoát nước, giao thông, viễn thông | | H |
| Định dạng số | PDF/A cho văn bản, IFC 4.x + RVT cho mô hình, COBie (xlsx) cho tài sản; đặt tên theo ISO 19650 | 100% tệp có metadata | R |
| Chữ ký số | Hồ sơ điện tử ký số hợp lệ theo quy định giao dịch điện tử | | R |

### 3. Nội dung chữ trên slide
- Tổng hợp và số hóa 100% hồ sơ hoàn công trên CDE: bản vẽ As-built khớp BIM LOD 500, CO/CQ truy vết đến từng cấu kiện.
- Hoàn tất hồ sơ môi trường (ĐTM, giấy phép môi trường), đấu nối hạ tầng, chứng nhận PCCC và kết luận kiểm tra nghiệm thu của cơ quan nhà nước.
- Bàn giao bộ hồ sơ pháp lý giấy + số (PDF/A, IFC, COBie) cho Chủ đầu tư và Ban quản lý vận hành.

### 4. Visual điện ảnh
- **Close-up Cinematic Document Stamp Shot:** ống kính macro 100 mm, f/2.8, đèn bàn 2 700 K ấm áp; bộ hồ sơ bìa da `#3E2723` chữ nhũ vàng `#FFC400`.
- Con dấu đỏ son `#B71C1C` đóng xuống chậm (slow-motion 4×), mực thấm vào giấy; cắt sang màn hình CDE với cây thư mục ISO 19650.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 3 000 | Ma trận dữ liệu: hàng nghìn tệp (icon PDF, IFC, XLSX) bay vào thư mục CDE theo mã ISO 19650, bộ đếm `48 312 files` |
| 3 000 – 5 500 | Mô hình BIM LOD 500: chọn một cột → hiện CO/CQ thép, kết quả nén mẫu, biên bản nghiệm thu, ảnh 360° |
| 5 500 – 8 000 | Con dấu đóng xuống văn bản pháp lý, tiếng vang trầm; chữ ký số hiện chứng thư hợp lệ |
| 8 000 – 10 500 | Hồ sơ giấy xếp vào hộp lưu trữ chống ẩm; ổ cứng mã hóa + bản sao đám mây |
| 10 500 – 12 000 | Danh mục kiểm tra 100% tích xanh |

### 6. Mã màu & tham số
- Trạng thái hồ sơ CDE theo ISO 19650: WIP `#90A4AE`, Shared `#00B8D4`, Published `#00C853`, Archived `#7E57C2`.

### 7. Hold Point & điểm mù
- **H:** Hồ sơ hoàn thành công trình đủ thành phần trước khi tổ chức nghiệm thu hoàn thành.
- **Điểm mù 1:** Bản vẽ hoàn công lập "cho đủ" bằng cách đổi tên bản vẽ thiết kế — không phản ánh thay đổi thực tế. Đối chiếu bắt buộc với quét laser.
- **Điểm mù 2:** Hồ sơ số không có metadata → không tìm kiếm được sau 5 năm.
- **Điểm mù 3:** Giấy phép môi trường (vận hành) bị quên vì chỉ chú ý ĐTM giai đoạn đầu tư.

### 8. Lời thoại giảng viên
"Một tòa nhà không có hồ sơ hoàn công chuẩn mực giống như một con người không có giấy khai sinh — nó tồn tại nhưng không được pháp luật và thị trường thừa nhận. Bốn mươi tám nghìn tệp tài liệu này, mỗi tệp gắn với một cấu kiện cụ thể trên mô hình số, là ký ức trọn vẹn của dự án. Hai mươi năm sau, khi một kỹ sư cần biết cây cột tầng mười hai được đổ bằng mẻ bê tông nào, câu trả lời sẽ chỉ cách họ một cú nhấp chuột."

---

## SLIDE 38 — Nghiệm thu ba bên (Chủ đầu tư – Tư vấn giám sát – Tổng thầu EPC)

**Mã hồ sơ:** EPC-SPEC-38-ACC · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| Nghị định 06/2021/NĐ-CP (Điều 23, 24, 28) | Nghiệm thu hoàn thành; kiểm tra của cơ quan nhà nước; bảo hành |
| TCVN 5637:1991 | Quản lý chất lượng xây lắp — nguyên tắc cơ bản |
| FIDIC Silver Book 2017 (EPC/Turnkey) Clause 9–11 | Thử nghiệm hoàn thành, nhận bàn giao, trách nhiệm sửa chữa sai sót |
| ISO 9001:2015 | Hệ thống quản lý chất lượng |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Phân loại tồn tại (Punch List) | **Loại A**: ảnh hưởng an toàn/công năng; **Loại B**: ảnh hưởng thẩm mỹ/vận hành nhỏ; **Loại C**: chi tiết hoàn thiện | Tại thời điểm ký nghiệm thu: **0 lỗi loại A** | **H** |
| Lỗi loại B, C | Được phép tồn tại kèm kế hoạch khắc phục | Đóng 100% trong ≤ 30 ngày (Spec dự án) | R |
| Phủ kiểm tra | 100% không gian công cộng, kỹ thuật; 100% căn hộ/văn phòng (đi kiểm theo phòng) | | W |
| Thời gian bảo hành | ≥ 24 tháng với công trình cấp đặc biệt và cấp I (NĐ 06/2021) | | R |
| Mức bảo đảm bảo hành | ≥ 3% giá trị hợp đồng với công trình cấp đặc biệt và cấp I (NĐ 06/2021) | | R |
| Kết luận kiểm tra của cơ quan nhà nước | Văn bản chấp thuận kết quả nghiệm thu (đối với công trình thuộc diện kiểm tra) | | H |
| Thiết bị kiểm tra | Máy đo ẩm, camera nhiệt, thước laser, máy đo độ rọi, đo ồn, đo lực mở cửa | Hiệu chuẩn còn hạn | R |

### 3. Nội dung chữ trên slide
- Đoàn kiểm tra liên danh ba bên rà soát 100% không gian với thiết bị đo; mỗi tồn tại được ghi nhận số hóa có ảnh và vị trí BIM.
- Punch List phân loại A/B/C: 0 lỗi loại A khi ký; lỗi B/C đóng trong ≤ 30 ngày.
- Ký biên bản nghiệm thu hoàn thành; khởi động thời gian bảo hành ≥ 24 tháng, bảo đảm bảo hành ≥ 3% giá trị hợp đồng.

### 4. Visual điện ảnh
- **Medium Professional Conference Shot:** sảnh chính, bàn gỗ óc chó `#4E342E`, đại diện ba bên mặc vest, ống kính 50 mm, f/2, ánh sáng mềm từ vách kính.
- Cảnh hành trình kiểm tra: máy tính bảng hiển thị BIM, chạm vào tường → tạo "ghim" tồn tại kèm ảnh; camera nhiệt quét trần tìm vết ẩm.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 3 000 | Đoàn kiểm tra đi qua các phòng (montage 6 cảnh × 500 ms); ghim tồn tại hiện trên mô hình: A `#D50000`, B `#FFAB00`, C `#00B8D4` |
| 3 000 – 6 000 | Tua 30 ngày: ghim lần lượt chuyển `#00C853` khi được khắc phục; bộ đếm `Punch items: 1 846 → 0` (loại A: 0 ngay từ đầu ngày ký) |
| 6 000 – 8 500 | Ba chữ ký điện tử trên máy tính bảng, chứng thư số xác thực |
| 8 500 – 10 500 | Biên bản chuyển trạng thái `APPROVED` xanh lá rực sáng |
| 10 500 – 12 000 | Bắt tay ba bên, máy ảnh chớp |

### 6. Mã màu & tham số
- Ghim tồn tại: hình giọt 3D, kích thước tỷ lệ mức độ; đã đóng mờ 30%.

### 7. Hold Point & điểm mù
- **H:** Biên bản nghiệm thu hoàn thành chỉ ký khi 0 lỗi loại A và có văn bản chấp thuận của cơ quan nhà nước (nếu thuộc diện kiểm tra).
- **Điểm mù 1:** Ranh giới trách nhiệm giữa tổng thầu và nhà thầu fit-out khách thuê — lập biên bản hiện trạng (condition survey) khi bàn giao mặt bằng cho khách thuê.
- **Điểm mù 2:** Phụ tùng thay thế, dụng cụ đặc chủng, chìa khóa (key schedule) không được kiểm đếm khi bàn giao.
- **Điểm mù 3:** Thời điểm bắt đầu bảo hành từng hệ thống khác nhau (đưa vào sử dụng sớm) không được ghi rõ → tranh chấp.

### 8. Lời thoại giảng viên
"Nghiệm thu ba bên là khoảnh khắc mà Chủ đầu tư, Tư vấn và Tổng thầu cùng nhìn vào một sự thật duy nhất. Một nghìn tám trăm bốn mươi sáu tồn tại đã được tìm ra và khép lại — không phải vì chúng ta làm kém, mà vì chúng ta tìm kỹ. Quy tắc ở đây rất đơn giản: không một lỗi nào ảnh hưởng đến an toàn được phép đi qua cánh cửa này. Khi ba chữ ký cùng hiện lên, hành trình thi công khép lại và cuộc đời thương mại của tòa nhà bắt đầu."

---

## SLIDE 39 — Sổ tay vận hành & bảo trì (O&M Manual) và đào tạo đội ngũ quản lý tòa nhà

**Mã hồ sơ:** EPC-SPEC-39-OAM · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| ISO 41001:2018 | Hệ thống quản lý cơ sở vật chất (Facility Management) |
| ISO 55001:2024 | Quản lý tài sản |
| ISO 19650-3:2020 / COBie | Thông tin giai đoạn vận hành |
| BSRIA BG 54 (Soft Landings) | Chuyển tiếp mềm từ thi công sang vận hành |
| Nghị định 06/2021/NĐ-CP (Chương bảo trì) | Quy trình bảo trì công trình |
| SFG20 / NFPA 25 | Lịch bảo dưỡng định kỳ chuẩn; kiểm tra bảo dưỡng hệ thống chữa cháy bằng nước |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Quy trình bảo trì công trình | Lập và phê duyệt trước khi nghiệm thu đưa vào sử dụng (NĐ 06/2021) | | **H** |
| O&M Manual | 100% hệ thống: mô tả, sơ đồ, chuỗi điều khiển, lịch PPM, danh mục phụ tùng, liên hệ bảo hành | Liên kết vào BIM/CAFM | H |
| Dữ liệu COBie | 100% tài sản bảo trì được (≈ 25 000–40 000 tài sản): mã, nhà sản xuất, model, serial, ngày bảo hành | Kiểm tra tự động (COBie QC) không lỗi nghiêm trọng | H |
| Đào tạo | ≥ 200 giờ tổng (Spec dự án), mỗi hệ thống chính ≥ 8–16 giờ lý thuyết + thực hành; quay video lưu trữ | Kiểm tra sát hạch đạt ≥ 80% | W |
| Phụ tùng dự phòng | Theo danh mục khuyến nghị nhà sản xuất cho 2 năm vận hành | | R |
| Soft Landings / hậu kiểm | Đội ngũ tổng thầu/thiết kế có mặt tại chỗ 4–12 tuần đầu; đánh giá sau sử dụng (POE) ở tháng 12 và 36 | | R |
| Chỉ tiêu vận hành bàn giao | MTTR, tỷ lệ PPM hoàn thành ≥ 95%, thời gian phản hồi sự cố khẩn cấp ≤ 15 phút | | R |

### 3. Nội dung chữ trên slide
- O&M Manual số hóa liên kết trực tiếp với mô hình BIM/CAFM và dữ liệu COBie cho 100% tài sản bảo trì được.
- Đào tạo thực chiến ≥ 200 giờ cho đội kỹ thuật vận hành (MEP, BMS, PCCC, thang máy), có sát hạch và video lưu trữ.
- Chuyển giao quyền kiểm soát kỹ thuật theo mô hình Soft Landings: tổng thầu đồng hành 4–12 tuần, đánh giá sau sử dụng ở tháng 12.

### 4. Visual điện ảnh
- **Over-the-shoulder Training Shot:** ống kính 85 mm, f/2, qua vai kỹ thuật viên nhìn vào màn hình cảm ứng 86 inch hiển thị sơ đồ chiller plant động; ánh sáng màn hình phản chiếu lên khuôn mặt.
- Cảnh phụ: kính thực tế tăng cường (AR) hiển thị thông tin bảo trì nổi trên một AHU thực tế.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Máy tính bảng trao tay; giao diện O&M mở — cây hệ thống → thiết bị → tài liệu |
| 2 500 – 5 000 | Chạm vào AHU-38-01 trên BIM: hiện thông số, lịch PPM, lịch sử, video hướng dẫn |
| 5 000 – 8 000 | Kỹ thuật viên thao tác tại tủ điều khiển chiller; AR hiển thị thứ tự van cần đóng |
| 8 000 – 10 500 | Bảng đào tạo: `Giờ đào tạo 236/200 — Sát hạch đạt 100%` |
| 10 500 – 12 000 | Biểu tượng chìa khóa vàng `#FFC400` xuất hiện xoay chậm, phát sáng |

### 6. Mã màu & tham số
- Trạng thái tài sản trên CAFM: hoạt động `#00C853`, đến hạn bảo trì `#FFAB00`, quá hạn/hỏng `#D50000`, ngừng `#90A4AE`.

### 7. Hold Point & điểm mù
- **H:** Quy trình bảo trì được phê duyệt + biên bản hoàn thành đào tạo được ký trước khi bàn giao.
- **Điểm mù 1:** O&M Manual là bản "copy catalogue" không có thông số thực tế đã cân chỉnh (TAB, cài đặt BMS) — yêu cầu ghi giá trị as-commissioned.
- **Điểm mù 2:** Đội vận hành được tuyển quá muộn, không tham gia commissioning — Chủ đầu tư phải tuyển đội vận hành từ giai đoạn L3.
- **Điểm mù 3:** Bảo hành bị mất hiệu lực do vận hành sai quy định nhà sản xuất — đưa điều kiện bảo hành vào O&M.

### 8. Lời thoại giảng viên
"Một công trình vĩ đại cần một đội ngũ vận hành xuất chúng — vì chi phí vận hành năm mươi năm lớn gấp nhiều lần chi phí xây dựng. Sổ tay O&M này không phải là chồng catalogue; nó là bộ não số của tòa nhà, nơi mỗi thiết bị biết mình là ai, cần chăm sóc khi nào và ai chịu trách nhiệm. Khi chúng ta trao chiếc chìa khóa vàng, chúng ta không trao một tòa nhà — chúng ta trao một cơ thể sống cùng với tri thức để giữ nó khỏe mạnh."

---

## SLIDE 40 — Lễ bàn giao chìa khóa vàng & kỷ nguyên vận hành công trình xanh (LEED / LOTUS / EDGE)

**Mã hồ sơ:** EPC-SPEC-40-GRN · **Thời lượng:** 15 000 ms (+ 5 000 ms kết phim)

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| LEED v4.1 BD+C (hoặc LEED v5 khi áp dụng) — USGBC | Chứng nhận công trình xanh: Gold 60–79 điểm, Platinum ≥ 80 điểm |
| LOTUS (Hội đồng Công trình xanh Việt Nam — VGBC) | Chứng nhận công trình xanh Việt Nam |
| EDGE (IFC) | Tiết kiệm ≥ 20% năng lượng, nước, năng lượng hàm chứa |
| ANSI/ASHRAE/IES 90.1 Phụ lục G | Mô hình năng lượng cơ sở so sánh |
| QCVN 09:2017/BXD | Công trình sử dụng năng lượng hiệu quả (bắt buộc với công trình ≥ 2 500 m²) |
| ISO 50001:2018 | Hệ thống quản lý năng lượng |
| ISO 14064 / GHG Protocol | Kiểm kê phát thải khí nhà kính |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị mục tiêu | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Hạng chứng nhận | LEED Gold (≥ 60 điểm), hướng Platinum (≥ 80 điểm) | Điều kiện tiên quyết đạt 100% | R |
| Tiết kiệm năng lượng (chi phí) so với ASHRAE 90.1 Phụ lục G | ≥ 20–30% (Spec dự án) | Mô hình năng lượng được hiệu chỉnh bằng số liệu đo 12 tháng | **H** |
| EUI (cường độ sử dụng năng lượng) | Văn phòng nhiệt đới ≤ 120–150 kWh/m²·năm | Đo sub-metering | R |
| Hiệu suất chiller plant | ≤ 0,65 kW/RT toàn nhà máy (Spec dự án) | Đo liên tục | W |
| Tiết kiệm nước | ≥ 35–40% so với cơ sở (thiết bị lưu lượng thấp, thu nước mưa, tái sử dụng nước xám) | | R |
| QCVN 09:2017/BXD | Tuân thủ 100% chỉ tiêu bắt buộc: OTTV/SHGC mặt dựng, hiệu suất thiết bị, mật độ công suất chiếu sáng (LPD) | | H |
| Chất lượng môi trường trong nhà | CO₂ ≤ 800 ppm; TVOC ≤ 500 µg/m³; PM2.5 ≤ 15 µg/m³ (đo trước khi sử dụng) | | W |
| Giảm phát thải carbon vận hành | Kiểm kê hằng năm theo ISO 14064; lộ trình Net Zero vận hành | | R |
| Năng lượng hàm chứa (embodied carbon) | Báo cáo LCA toàn công trình, giảm ≥ 10% so với cơ sở (tro bay/xỉ trong bê tông, thép tái chế) | | R |

### 3. Nội dung chữ trên slide
- Lễ bàn giao chìa khóa vàng và cắt băng khánh thành — tòa tháp chính thức bước vào kỷ nguyên vận hành thương mại.
- Chứng nhận LEED Gold/Platinum (hoặc LOTUS, EDGE): tiết kiệm ≥ 20–30% năng lượng so với ASHRAE 90.1, ≥ 35% nước, tuân thủ QCVN 09:2017/BXD.
- Vận hành theo ISO 50001 với EUI ≤ 150 kWh/m²·năm, kiểm kê carbon hằng năm — biểu tượng kỹ thuật và phát triển bền vững của đô thị.

### 4. Visual điện ảnh
- **Grand Cinematic Finale Shot:** flycam bay xoắn ốc từ chân tháp lên đỉnh trong đêm, ống kính 24 mm, 3 vòng quanh tháp trong 10 s, tăng độ cao 0 → 260 m; thành phố lấp lánh `#FFB300` bên dưới.
- Mặt dựng kính phát sáng chiếu sáng kiến trúc (LED media facade) `#00E5FF` → `#FFC400`; logo chứng nhận công trình xanh hiện trên mặt dựng sảnh chính.
- Bầu trời đầy sao với đường chân trời mờ sương; nhạc nền orchestral crescendo.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Chìa khóa vàng `#FFC400` (metallic 1.0, roughness 0.15) hiện lơ lửng, xoay chậm, tiếng vỗ tay vang dội |
| 2 500 – 4 500 | Kéo băng đỏ cắt, pháo giấy vàng; Chủ đầu tư nhận chìa khóa |
| 4 500 – 7 000 | Biểu tượng chứng nhận công trình xanh bay nhẹ nhàng gắn lên mặt tiền sảnh chính; dòng số `Energy −28% · Water −38% · CO₂ −3 400 t/năm` |
| 7 000 – 12 000 | Flycam xoắn ốc lên đỉnh; tòa tháp bừng sáng từng tầng từ dưới lên (mỗi tầng 90 ms) |
| 12 000 – 15 000 | Đỉnh tháp chạm bầu trời sao; toàn bộ mô hình chuyển thành wireframe BIM `#00E5FF` rồi tái hiện vật liệu thực — tóm lược hành trình 40 slide trong 3 s |
| 15 000 – 20 000 | Kết phim: tiêu đề "BẢN GIAO HƯỞNG KẾT CẤU" Inter Tight Bold, fade to black 1 200 ms |

### 6. Mã màu & tham số
- Bảng điểm LEED theo hạng mục: Năng lượng & Khí quyển `#FFC400`, Nước `#00ACC1`, Vật liệu `#8D6E63`, Môi trường trong nhà `#7E57C2`, Địa điểm & Giao thông `#43A047`.
- Chiếu sáng mặt dựng cuối phim: gradient dọc `#00E5FF` (chân) → `#FFC400` (đỉnh), cường độ animate 0 → 100% trong 5 s.

### 7. Hold Point & điểm mù
- **H:** Đo đạc & kiểm chứng (M&V) 12 tháng đầu vận hành để xác nhận hiệu quả năng lượng thực tế khớp mô hình — điều kiện để giải tỏa phần giữ lại liên quan đến cam kết hiệu suất (nếu hợp đồng có).
- **Điểm mù 1:** "Khoảng cách hiệu suất" (performance gap) — tòa nhà tiêu thụ nhiều hơn mô hình 30–50% do vận hành sai cài đặt. Seasonal commissioning + phân tích dữ liệu BMS liên tục.
- **Điểm mù 2:** Chứng nhận công trình xanh dừng ở giai đoạn thiết kế — cần chương trình chứng nhận vận hành (LEED O+M) để duy trì.
- **Điểm mù 3:** Fit-out của khách thuê phá vỡ chiến lược năng lượng — ban hành Sổ tay hướng dẫn thiết kế & thi công cho khách thuê (Green Fit-out Guide).

### 8. Lời thoại giảng viên
"Từ một bản vẽ phác thảo trên giấy và một hố móng sâu giữa lòng đất, giờ đây tòa tháp đã hiện hữu kiêu hãnh bằng tất cả bản lĩnh, trí tuệ và kỷ luật của hàng nghìn con người. Nhưng thước đo cuối cùng của một công trình vĩ đại không phải là chiều cao — mà là nó tiêu thụ ít hơn bao nhiêu năng lượng, phục vụ con người tốt hơn bao nhiêu và tồn tại bền vững bao lâu. Bốn mươi bước trong bản giao hưởng này đã hoàn tất. Chào mừng các bạn đến với tương lai của kỷ nguyên xây dựng thông minh và bền vững!"

---

## PHỤ LỤC — Bảng tổng hợp Hold Point toàn dự án (ITP Master Checklist)

| # | Hold Point | Slide | Người ký |
|---|---|---|---|
| 1 | Báo cáo khảo sát địa kỹ thuật + lõi đá mũi cọc | 1 | TVGS + Thiết kế |
| 2 | 0 clash trước phát hành bản vẽ thi công | 2 | BIM Manager + TVGS |
| 3 | Báo cáo hầm gió đối chiếu tiêu chuẩn | 3 | Thẩm tra kết cấu |
| 4 | Baseline tiến độ đạt ≥ 12/14 chỉ số DCMA | 4 | Chủ đầu tư |
| 5 | Biên bản chuyển trục/cao độ từng tầng | 5 | TVGS trắc địa |
| 6 | Bentonite đáy hố + độ thẳng đứng panel/cọc | 6, 7 | TVGS |
| 7 | Cặn lắng đáy cọc ≤ 50 mm | 7 | TVGS |
| 8 | Thử neo 100% / gia tải trước thanh chống | 8 | TVGS + Địa kỹ thuật |
| 9 | Quan trắc Xanh trước mỗi lớp đào | 9 | Chỉ huy trưởng + TVGS |
| 10 | Màng chống thấm đáy 100% | 10 | TVGS |
| 11 | Cốt thép móng bè + giá đỡ có bản tính | 11 | TVGS + Kết cấu |
| 12 | Pour Permit đổ bê tông khối lớn | 12 | Chỉ huy trưởng + TVGS + CĐT |
| 13 | Nghiệm thu hoàn thành phần ngầm | 13 | 3 bên |
| 14 | Kiểm định cẩu/vận thăng; Climb Permit | 14, 15 | Kiểm định viên + An toàn |
| 15 | Cường độ trước tháo chống / căng cáp | 16, 17, 19 | TVGS |
| 16 | UT mối hàn CFT; NDT từng tầng | 18, 22 | Phòng thí nghiệm độc lập |
| 17 | Giàn chống dầm chuyển — thẩm tra độc lập | 20 | Kết cấu độc lập |
| 18 | Hình học tổng thể sau cất nóc | 23 | TVGS trắc địa |
| 19 | PMU mặt dựng đạt toàn bộ thử nghiệm | 25 | Tư vấn mặt dựng |
| 20 | Thử áp/kín MEP trước khi che khuất | 26, 31 | TVGS MEP |
| 21 | Kiểm định thang máy | 27 | Tổ chức kiểm định |
| 22 | Thử nghiệm điện độc lập + đấu nối | 28 | Điện lực + TVGS |
| 23 | Point-to-point BMS 100% | 33 | Cx Authority |
| 24 | IST — ma trận C&E 100% | 34 | Cx Authority + PCCC |
| 25 | Thử tải / chứng nhận an toàn chịu lực | 35 | Đơn vị kiểm định |
| 26 | Văn bản chấp thuận nghiệm thu PCCC | 36 | Cảnh sát PCCC & CNCH |
| 27 | Hồ sơ hoàn thành công trình | 37 | TVGS + CĐT |
| 28 | Nghiệm thu hoàn thành — 0 lỗi loại A | 38 | 3 bên + Cơ quan nhà nước |
| 29 | Quy trình bảo trì + đào tạo | 39 | CĐT + Đơn vị vận hành |
| 30 | M&V năng lượng 12 tháng | 40 | CĐT + Tư vấn công trình xanh |
