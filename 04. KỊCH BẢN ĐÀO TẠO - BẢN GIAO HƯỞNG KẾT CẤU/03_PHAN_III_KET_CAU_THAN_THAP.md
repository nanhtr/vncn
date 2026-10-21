# PHẦN III — GIAI ĐOẠN THI CÔNG KẾT CẤU PHẦN THÂN THÁP (Slide 14 – 24)

---

## SLIDE 14 — Tháp cẩu tự leo (Tower Crane) và vận thăng lồng (Construction Hoist)

**Mã hồ sơ:** EPC-SPEC-14-CRN · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| TCVN 4244:2005 | Thiết bị nâng — thiết kế, chế tạo và kiểm tra kỹ thuật |
| QCVN 7:2012/BLĐTBXH | An toàn lao động thiết bị nâng |
| EN 14439:2006+A2:2009 / ISO 4301-1 | Cẩu tháp; phân nhóm chế độ làm việc |
| EN 12159:2012 | Vận thăng lồng chở người và vật liệu |
| ISO 12480-1 | Sử dụng an toàn cần trục |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Cẩu tháp chính (luffing/flat-top tự leo trong lõi) | Tầm với 60–70 m; sức nâng đầu cần 3,5–5 t; sức nâng max 16–24 t | Biểu đồ tải không vượt 100% | R |
| Thử tải tĩnh / động | 125% / 110% sức nâng định mức (TCVN 4244) | Không biến dạng dư | **H** — Kiểm định viên độc lập |
| Độ thẳng đứng thân cẩu | ≤ 1/1 000 dưới điểm neo; ≤ 2/1 000 phần tự do | Đo kinh vĩ 2 phương | W |
| Khoảng cách neo thân cẩu vào kết cấu | Mỗi 3–4 tầng (≈ 12–16 m) theo nhà sản xuất | Neo vào sàn ≥ 70% f'c | H |
| Chiều cao tự do trên neo cuối | ≤ giá trị nhà sản xuất (thường 40–60 m) | | R |
| Gió dừng làm việc | ≥ 20 m/s (72 km/h) giật; dừng leo/tháo lắp ≥ 12,5 m/s | Phong kế trên đỉnh cần, báo động 2 cấp | W |
| Vận thăng lồng đôi | Tải 2 × 2 000 kg; tốc độ 60–100 m/min | Bộ hãm dù (safety device) kích hoạt ở ≤ 1,4 × tốc độ định mức; thử rơi 3 tháng/lần | H |
| Neo vận thăng | Mỗi 6–9 m chiều cao | | W |
| Hệ chống va chạm nhiều cẩu (anti-collision) | Bắt buộc khi vùng quay chồng lấn; giảm tốc ở 10 m, dừng ở 5 m | | W |
| Công tắc giới hạn (Limit switches) | Chiều cao móc, tầm với, quay, mômen tải ở 90% cảnh báo, 105% ngắt | Kiểm tra hằng ngày | W |

### 3. Nội dung chữ trên slide
- Cẩu tháp tự leo trong lõi, tầm với 65 m, thử tải tĩnh 125% / động 110% bởi kiểm định viên độc lập trước vận hành.
- Vận thăng lồng đôi 2 × 2 t, 100 m/min, bộ hãm dù tự động kích hoạt ở ≤ 1,4 × tốc độ định mức, thử rơi định kỳ 3 tháng.
- Phong kế, hệ chống va chạm và công tắc giới hạn mômen 90%/105% — dừng cẩu khi gió giật ≥ 20 m/s.

### 4. Visual điện ảnh
- **Low-angle Hero Shot:** camera đặt sát mặt đất, ống kính 12 mm, ngước thẳng lên; thân cẩu `#F2B705` vươn vào mây cumulus, mặt trời sau cần tạo lens flare.
- **Close-up Climbing Cage:** ống kính 50 mm, f/2.8, ty thủy lực chrome `#B8BDC4` đẩy lên 40 mm/s; chốt an toàn bập vào "cách" — đồng bộ âm thanh tại frame chính xác.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 000 | Tilt-up từ chân cẩu đến đỉnh, cần quay chậm 0,6 vòng/phút |
| 2 000 – 4 500 | Kích thủy lực đẩy cụm quay lên 1 đốt (3 m), đồng hồ áp lực `28 MPa` |
| 4 500 – 6 500 | Đốt thân mới 3 m trượt vào khung leo trên ray đẩy; 8 bu lông chốt siết — mỗi bu lông sáng xanh trễ 120 ms |
| 6 500 – 8 500 | Khung neo ôm thân cẩu, kẹp vào vách lõi BTCT; nhãn `TIE-IN #07 @ L24` |
| 8 500 – 10 500 | Vận thăng lồng chạy song song lên 100 m/min; thử bộ hãm dù — lồng dừng trong 0,9 m |
| 10 500 – 12 000 | Màn hình cabin: biểu đồ tải 74% `#00C853`, gió 9,2 m/s |

### 6. Mã màu & tham số
- Vùng quét cần: bán kính 65 m `#FFAB00` 12%; vùng cấm quay (no-fly zone qua trường học, đường sắt) `#D50000` 25%.
- Biểu đồ tải: tải hiện tại `#00B8D4`, đường cong giới hạn `#D50000`.

### 7. Hold Point & điểm mù
- **H:** Giấy chứng nhận kiểm định + giấy phép người vận hành + kế hoạch nâng cho mỗi lần leo cẩu.
- **Điểm mù 1:** Tải trọng do cẩu tác dụng lên lõi và sàn tại điểm neo/khung leo không có trong thiết kế kết cấu — phải được kỹ sư kết cấu kiểm tra.
- **Điểm mù 2:** Cẩu tự quay tự do (weathervaning) khi hết ca bị cản bởi cẩu khác/công trình lân cận.
- **Điểm mù 3:** Tín hiệu viên không có liên lạc vô tuyến kênh riêng khi nâng mù (blind lift).

### 8. Lời thoại giảng viên
"Tháp cẩu và vận thăng là đôi cánh tay và mạch máu của công trường cao tầng — mỗi ngày chúng nâng hai trăm tấn vật liệu và năm trăm con người lên bầu trời. Mỗi lần cẩu tự leo là một ca phẫu thuật được lên kịch bản chính xác đến từng chốt. Và quy tắc ở đây không có ngoại lệ: gió giật chạm hai mươi mét mỗi giây, mọi móc cẩu đều phải dừng, dù tiến độ có gấp đến đâu."

---

## SLIDE 15 — Lõi cứng trung tâm (Core-Wall) bằng ván khuôn leo thủy lực tự động

**Mã hồ sơ:** EPC-SPEC-15-COR · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| ACI 347R-14 | Hướng dẫn ván khuôn bê tông |
| ACI 347.3R-13 | Bề mặt bê tông tạo hình (phân loại CSC) |
| TCVN 4453:1995 | Ván khuôn, cốt thép, bê tông toàn khối |
| EN 12812 / EN 12811 | Giàn chống và sàn công tác tạm |
| EN 81-20 §5.2 | Dung sai giếng thang máy |
| ACI 117-10 | Dung sai thi công |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Chu kỳ leo lõi (jump-form) | 1 tầng (3,6 m) / 3–4 ngày, đi trước sàn 3–5 tầng | | R |
| Phương án trượt liên tục (slipform) | 150–300 mm/h (≈ 4–6 m/ngày) | Bê tông ra khuôn đạt 0,1–0,3 MPa | R |
| Cường độ bê tông tại côn neo trước khi leo | ≥ 10–15 MPa (theo nhà sản xuất hệ leo) | Mẫu bảo dưỡng cạnh khuôn | **H** |
| Độ lệch trục đứng mỗi tầng | ≤ ±5 mm | Plumb laser 4 điểm | W |
| Độ lệch đứng tích lũy lõi | ≤ H/2 000, tối đa 50 mm qua 55 tầng | | H |
| Giếng thang máy (EN 81-20) | Kích thước thông thủy dung sai 0 / +25 mm (H ≤ 30 m); 0 / +35 mm (30–60 m); 0 / +50 mm (60–90 m) — đo theo từng đoạn | | H |
| Chiều dày vách | −5 / +10 mm | | W |
| Vị trí lỗ mở cửa | ±10 mm; hộp chờ / bản mã chờ ±10 mm | | W |
| Gió dừng leo | ≥ 72 km/h (20 m/s) | | W |
| Bề mặt bê tông lõi | CSC2 (ACI 347.3R) — cho phép sơn trực tiếp | | W |

### 3. Nội dung chữ trên slide
- Ván khuôn leo thủy lực tự động (ACS) 4 sàn công tác, leo không cần cẩu, chu kỳ 3–4 ngày/tầng, đi trước sàn 3–5 tầng.
- Cuốn chiếu cốt thép vách, hộp chờ dầm/sàn, bản mã chờ; leo chỉ khi bê tông tại côn neo ≥ 10–15 MPa.
- Kiểm soát thẳng đứng bằng plumb laser: ±5 mm/tầng, tích lũy ≤ H/2 000; giếng thang đạt dung sai EN 81-20.

### 4. Visual điện ảnh
- **Cinematic Cross-section Interior:** mặt cắt ngang xuyên lõi, camera đặt trong giếng thang rỗng, ống kính 16 mm nhìn lên 45°.
- Giàn leo `#FF6D00` 4 tầng, sàn lưới thép, ty thủy lực chrome; ván khuôn phủ film `#5D4037`. Ánh sáng: LED dây trên giàn 4 000 K + tia nắng xuyên qua từ đỉnh.
- Ô cửa quan sát: thợ đầm dùi, rung lan truyền như sóng trên mặt bê tông.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 1 500 | Ván khuôn tách khỏi vách (lùi 600 mm trên ray) |
| 1 500 – 4 500 | 12 xi lanh đồng bộ đẩy toàn hệ lên 3,6 m (sai lệch đồng bộ ≤ 5 mm hiển thị); thanh leo bám côn neo mới |
| 4 500 – 7 000 | Lưới thép vách tiền chế được cẩu hạ, coupler nối; hộp chờ `#00E5FF` gắn đúng cao độ |
| 7 000 – 10 000 | Ván khuôn đóng lại, bơm bê tông lấp đầy theo lớp 500 mm |
| 10 000 – 12 000 | Plumb laser chiếu bia: `Δ = +2 mm` PASS; bộ đếm `CORE L28 — CYCLE 3.5 DAYS` |

### 6. Mã màu & tham số
- Độ lệch lõi theo chiều cao (BIM vs đo): đường đo `#00B8D4`, ống dung sai ±H/2 000 `#00C853`, ống EN 81-20 `#7E57C2`.
- Tải gió lên giàn leo: mũi tên `#90A4AE`, áp lực thiết kế khi leo ≤ 0,2 kPa (≈ 72 km/h).

### 7. Hold Point & điểm mù
- **H:** Mỗi lần leo: kiểm tra côn neo, cường độ bê tông, dọn vật rơi, phong kế; trưởng ca ký "Climb Permit".
- **Điểm mù 1:** Hộp chờ thép dầm/sàn bị bê tông lấp hoặc lệch → phải khoan cấy thép hàng loạt. Dùng hộp chờ có nắp và đối chiếu BIM trước khi đóng khuôn.
- **Điểm mù 2:** Lõi đi trước sàn quá xa làm lõi đứng tự do chịu gió vượt thiết kế (kiểm tra ổn định tạm thời).
- **Điểm mù 3:** Co ngắn khác biệt lõi – cột (xem Slide 5) không được bù khi định vị bản mã chờ.

### 8. Lời thoại giảng viên
"Lõi cứng là cột sống của tòa tháp, và hệ ván khuôn leo thủy lực là trái tim đập đều đặn cứ ba ngày rưỡi một nhịp, đẩy cột sống đó lên thêm một tầng mà không cần một móc cẩu. Nó đi trước, độc lập, kéo cả công trường theo sau. Nhưng mỗi mi-li-mét nghiêng ở đây là một mi-li-mét mà thang máy mười mét mỗi giây phải chịu đựng — vì thế chúng ta leo theo laser, không leo theo cảm giác."

---

## SLIDE 16 — Hệ dầm cột sàn bê tông cốt thép toàn khối (Cast-in-place RC System)

**Mã hồ sơ:** EPC-SPEC-16-SLB · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| TCVN 5574:2018 | Thiết kế kết cấu BTCT |
| TCVN 4453:1995 | Thi công và nghiệm thu BTCT toàn khối |
| ACI 117-10 / ASTM E1155 | Dung sai, độ phẳng sàn F-number |
| ACI 347.2R | Chống và chống lại (shoring/reshoring) nhà nhiều tầng |
| TCVN 3105 / 3118 | Lấy mẫu, nén mẫu |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Cấp độ bền | Sàn B30–B35; cột tầng dưới B50–B60 | | R |
| Chiều dày sàn điển hình | 200–250 mm | −5 / +10 mm | W |
| Cao độ mặt sàn | ±10 mm so với cao độ thiết kế (đã cộng bù co ngắn) | | W |
| Độ phẳng sàn | ≤ 5 mm/3 m (thước nhôm) hoặc FF 35 / FL 25 tổng thể | | W |
| Kích thước tiết diện cột/dầm | −5 / +10 mm | | W |
| Độ thẳng đứng cột mỗi tầng | ≤ ±8 mm (Spec dự án) | | W |
| Lớp bảo vệ sàn (REI 120) | 25–35 mm | −5 / +10 mm | **H** |
| Lấy mẫu bê tông | 1 tổ / 20 m³ cho kết cấu khung, dầm, sàn (TCVN 4453); tối thiểu 1 tổ/ngày/mỗi cấp bê tông | | W |
| Tháo ván khuôn đáy sàn (TCVN 4453 Bảng 3) | Nhịp ≤ 2 m: ≥ 50% R28; 2–8 m: ≥ 70%; > 8 m: ≥ 90% | | H |
| Chống lại (reshore) | Duy trì 2–3 tầng dưới tầng đang đổ | Tải mỗi tầng ≤ khả năng sàn tại tuổi tương ứng | R |
| Độ sụt bơm cao | 160–200 mm; dùng bơm tĩnh áp lực cao ≥ 20 MPa cho cao độ > 150 m | | W |

### 3. Nội dung chữ trên slide
- Giàn chống định hình + xà gồ nhôm; chống lại 2–3 tầng dưới theo tính toán ACI 347.2R.
- Cốt thép dầm sàn hai lớp theo shop drawing LOD 400; lớp bảo vệ 25–35 mm đạt chịu lửa REI 120.
- Đổ bằng cần phân phối thủy lực (placing boom), đầm dùi, xoa máy; cao độ ±10 mm, độ phẳng ≤ 5 mm/3 m.

### 4. Visual điện ảnh
- **Wide Aerial Panorama:** drone quỹ đạo 120° quanh tầng đang thi công, ống kính 24 mm, giờ xanh (blue hour) với ánh đèn công trường ấm 3 200 K.
- Cần phân phối 32 m đỏ `#C62828` xoay, dòng bê tông `#6E6A64` chảy; máy xoa bàn tạo vân vòng cung bóng loáng (roughness 0.2).

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 000 | Giàn chống và ván khuôn sàn lắp kín ô sàn theo kiểu "lát gạch" mỗi tấm trễ 15 ms |
| 2 000 – 4 500 | Lưới thép dưới, con kê, ống điện âm sàn `#FBC02D`, lưới thép trên lần lượt hiện |
| 4 500 – 8 500 | Bê tông lan theo dải 6 m, đầm dùi rung, thước laser tự động cân mặt (laser screed) |
| 8 500 – 10 500 | Máy xoa chạy, mặt sàn chuyển từ xám ướt sang mờ |
| 10 500 – 12 000 | Bản đồ cao độ quét laser: 96% điểm trong ±5 mm `#00C853` |

### 6. Mã màu & tham số
- Bản đồ độ phẳng sàn: ±3 mm `#00C853`, ±3–8 mm `#FFAB00`, > ±8 mm `#D50000`.
- Tải thi công phân bố qua các tầng chống lại: thanh màu theo η (Turbo).

### 7. Hold Point & điểm mù
- **H:** Nghiệm thu cốt thép + ống chờ MEP + lỗ mở sàn trước khi đổ (có ảnh 360° lưu CDE).
- **Điểm mù 1:** Lỗ mở sàn cho MEP bị bỏ sót → khoan cắt sau làm đứt thép chịu lực. Dùng bản vẽ lỗ mở tổng hợp (combined builders work drawing).
- **Điểm mù 2:** Sàn tuổi non chịu tải chồng tầng (stacking loads) vượt khả năng — phải có bản tính chống lại.
- **Điểm mù 3:** Bê tông cột cường độ cao giao với sàn cường độ thấp — đổ "puddling" vùng nút cột bằng bê tông cột (ACI 318 §15.5) khi f'c cột > 1,4 f'c sàn.

### 8. Lời thoại giảng viên
"Mỗi tầng nhà mọc lên là một vòng tuần hoàn khép kín của kỷ luật: chống, khuôn, thép, MEP chờ, bê tông, bảo dưỡng, tháo, luân chuyển. Không một bước nào được nhảy cóc, vì sai sót ở tầng mười sẽ lặp lại bốn mươi lăm lần nữa ở các tầng trên. Và hãy để ý vùng nút cột — nơi bê tông sáu mươi MPa gặp bê tông ba mươi lăm MPa — đó là chỗ một kỹ sư giỏi luôn dừng lại kiểm tra."

---

## SLIDE 17 — Sàn căng cáp dự ứng lực (Post-Tensioned Slab) vượt nhịp lớn không dầm

**Mã hồ sơ:** EPC-SPEC-17-PTS · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| ACI 318-19 Ch. 8, §20.3, §25.8–25.9 | Sàn hai phương ứng suất trước, giới hạn ứng suất cáp, vùng neo |
| PTI M10.3 / PTI TAB.1 | Hướng dẫn thiết kế và thi công sàn PT |
| PTI M55.1-19 | Vữa bơm cho cáp dính kết |
| ASTM A416/A416M | Cáp 7 sợi cấp 270 (1 860 MPa) |
| EN 13391 / ETAG 013 | Hệ neo cáp ứng suất trước |
| ACI 117-10 §2.2 | Dung sai vị trí cáp |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Cáp | 7 sợi Ø 15,2 mm, low-relaxation, f_pu = 1 860 MPa, F_pu = 260,7 kN | Chứng chỉ mỗi lô | R |
| Ứng suất kích | ≤ 0,80 f_pu và ≤ 0,94 f_py (ACI 318); thực tế 0,75–0,78 f_pu | | W |
| Ứng suất ngay sau neo | ≤ 0,70 f_pu | | R |
| Cường độ bê tông khi căng | ≥ 75% f'c (Spec: ≥ 25 MPa) — căng sơ bộ 25% lực ở 12–24 h chống nứt co ngót | Mẫu bảo dưỡng hiện trường | **H** |
| Độ giãn dài đo vs tính toán | ±7% (PTI); vượt ±7% phải dừng và điều tra | Đo từng cáp | H |
| Tụt neo (wedge draw-in) | 6 ± 2 mm | | W |
| Dung sai cao độ cáp | ±6 mm với tiết diện ≤ 200 mm; ±10 mm với 200–600 mm (ACI 117) | Đo ghế đỡ cáp mỗi 1 m | W |
| Ứng suất nén trước trung bình | ≥ 0,9 MPa (ACI 318), khuyến nghị 1,0–2,5 MPa | | R |
| Nhịp / chiều dày | 12–15 m / 250–300 mm (L/45–L/50) | | R |
| Vữa bơm | Tách nước 0% (PTI M55.1), cường độ ≥ 30 MPa @ 7 ngày (Spec), thời gian chảy côn 5–30 s | Bơm trong ≤ 7 ngày sau căng | H |
| Độ vồng sau căng | Theo tính toán ±5 mm | Đo cao độ trước/sau | W |

### 3. Nội dung chữ trên slide
- Cáp 7 sợi Ø15,2 mm trong ống gen dẹt, profile parabol theo biểu đồ mômen; dung sai cao độ ±6 mm.
- Căng khi bê tông ≥ 75% f'c (≥ 25 MPa), kích ≤ 0,80 f_pu, độ giãn dài sai lệch ≤ ±7% so với tính toán.
- Bơm vữa không tách nước (PTI M55.1) trong vòng 7 ngày, bảo vệ cáp chống ăn mòn suốt tuổi thọ công trình.

### 4. Visual điện ảnh
- **Macro Close-up X-Ray Slab:** cắt lớp sàn bằng mặt phẳng phát sáng, camera 65 mm, f/4, dolly dọc theo cáp.
- Bó cáp `#B8BDC4` uốn parabol trong ống gen tôn `#F2B705` mờ 40%; đầu neo đúc `#455A64` với nêm 3 mảnh.
- Kích căng tâm rỗng với tia laser đo hành trình `#1DE9B6` và màn hình số độ giãn dài.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 000 | Ghế đỡ cáp nhiều cao độ (20–230 mm) cắm xuống; cáp luồn theo đường parabol, nhãn cao độ |
| 2 000 – 4 000 | Bê tông bao phủ (dissolve sang X-ray) |
| 4 000 – 7 500 | Kích kéo căng: lực 0 → 195 kN; độ giãn dài 0 → 98 mm (tính toán 102 mm, sai lệch −3,9% PASS); dải ứng suất đỏ `#D23105` chạy dọc cáp |
| 7 500 – 10 000 | Sàn vồng lên (phóng đại ×300) và đường ứng suất nén màu xanh `#2166AC` lan ra toàn bản; nêm cắn vào cáp — tụt neo 6 mm |
| 10 000 – 12 000 | Vữa bơm `#E0E0E0` chảy lấp ống gen từ đầu thấp lên đầu cao, ống xả khí phun vữa đặc |

### 6. Mã màu & tham số
- Ứng suất bê tông sàn sau căng (thang phân kỳ): nén −3 MPa `#2166AC` → 0 `#F7F7F7` → kéo +2 MPa `#B2182B` (giới hạn kéo 0,5√f'c).
- Profile cáp: đường thiết kế `#FFC400` nét đứt, đường thực đo `#00E5FF`.

### 7. Hold Point & điểm mù
- **H:** Biên bản căng từng cáp (lực, độ giãn dài, tụt neo) phải được kỹ sư PT ký trước khi cắt đuôi cáp.
- **Điểm mù 1:** Khoan cấy bu lông/khoan lỗ MEP sau này cắt đứt cáp — đánh dấu vĩnh viễn vị trí cáp trên trần, cấm khoan > 50 mm khi chưa quét GPR.
- **Điểm mù 2:** Sàn PT bị ràng buộc bởi vách cứng làm mất lực nén trước và nứt (restraint cracking) — bố trí khe trượt/dải đổ sau (pour strip).
- **Điểm mù 3:** Rỗ bê tông sau vùng neo dẫn đến vỡ khi căng — đầm kỹ vùng neo, thép xoắn chống bửa (bursting).

### 8. Lời thoại giảng viên
"Công nghệ dự ứng lực là nghệ thuật đặt lực vào đúng nơi bê tông cần nó: dây cáp uốn theo đường parabol để đẩy ngược mômen uốn của chính trọng lượng sàn. Nhờ đó chúng ta có những nhịp mười lăm mét không dầm, không cột — tự do tuyệt đối cho kiến trúc nội thất. Nhưng đổi lại, mỗi sợi cáp mang hai trăm kilonewton chỉ cách mặt trần vài centimet; nên quy tắc vàng cho mọi người vận hành sau này là: không khoan khi chưa quét."

---

## SLIDE 18 — Cột ống thép nhồi bê tông (CFT — Concrete Filled Steel Tube) cho khối đế

**Mã hồ sơ:** EPC-SPEC-18-CFT · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| AISC 360-22 Chương I | Thiết kế cấu kiện liên hợp (composite) |
| AISC 303-22 | Quy tắc thực hành — dung sai lắp dựng thép |
| AWS D1.1/D1.1M:2020 | Hàn kết cấu thép, kiểm tra UT |
| EN 1994-1-1 (Eurocode 4) | Kết cấu liên hợp thép – bê tông (đối chiếu) |
| GB/T 1591 (Q355B) / JIS G3106 (SM490) | Mác thép |
| EN 206 / EN 12350-8, -10, -12 / ASTM C1611 | Bê tông tự đầm SCC |
| TCVN 5575:2024 | Thiết kế kết cấu thép |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Ống thép | Ø 1 200 × 30 mm hoặc hộp 1 000 × 1 000 × 32, Q355B / SM490 | Tỷ lệ thép ρ_s ≥ 1% (AISC I2.2) | R |
| Độ mảnh thành ống | Tròn: D/t ≤ 0,15 E/F_y (compact); Hộp: b/t ≤ 2,26 √(E/F_y) | | R |
| Bê tông lõi | SCC B50 (≈ M650–700) | | R |
| Slump-flow SCC | 650–750 mm (SF2), T500 = 2–5 s, J-ring chênh ≤ 50 mm, chỉ số phân tầng VSI ≤ 1 | Mỗi xe | W |
| Bơm từ chân cột | Van một chiều tại cổng bơm, áp lực theo dõi ≤ thiết kế ống (kiểm tra phình ống) | | H |
| Lỗ thoát hơi | Ø 20 mm, 2 lỗ/tầng tại đầu và chân cột (thoát hơi nước khi cháy) | | W |
| Mối hàn nối cột | CJP, kiểm tra UT 100% (AWS D1.1), MT 10% | Không khuyết tật vượt chuẩn chấp nhận Bảng 8.2 / 8.3 | **H** |
| Độ thẳng đứng cột | ≤ 1/500 giữa các mối nối; cột biên ≤ 25 mm về phía ranh giới và ≤ 50 mm ra ngoài trong 20 tầng đầu (AISC 303) | | W |
| Cao độ mối nối | ±5 mm (Spec), có bù co ngắn | | W |
| Độ đặc lõi bê tông | Gõ búa / siêu âm xuyên ống: không có vùng rỗng tách lớp > 3 mm | 100% cột | H |

### 3. Nội dung chữ trên slide
- Cẩu lắp đốt cột ống thép Q355B, nối hàn CJP kiểm tra UT 100% theo AWS D1.1.
- Bơm bê tông tự đầm SCC B50 từ chân cột (slump-flow 650–750 mm) — không đầm, không rỗ khí, không phân tầng.
- Hiệu ứng bó (confinement) của vỏ thép và khả năng chống mất ổn định của lõi bê tông: cột nhỏ hơn 30–40% so với BTCT cùng tải.

### 4. Visual điện ảnh
- **Eye-level Action Shot:** ống kính 35 mm, f/2.8, cột thép `#C1440E` hạ xuống trong khung; 4 thợ hàn lóe hồ quang xanh trắng `#E1F5FE` bloom 3.0, tia lửa particle trọng lực thật.
- Mặt cắt X-ray: SCC `#7D7A74` dâng từ dưới lên, mặt dòng chảy tự san phẳng (self-levelling), bọt khí bị đẩy ra lỗ thoát.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Cẩu hạ đốt cột 12 m (3 tầng), bản mã dẫn hướng (erection lug) khớp; nêm căn chỉnh |
| 2 500 – 5 500 | Robot hàn quỹ đạo chạy vòng chu vi, 6 lượt hàn (mỗi lượt đổi màu nhiệt `#FFE0B2 → #FF6D00 → #3E2723`) |
| 5 500 – 7 000 | Đầu dò UT quét mối hàn, ảnh A-scan sạch, `UT 100% — ACCEPT` |
| 7 000 – 10 500 | SCC bơm vào từ cổng chân cột, mặt bê tông dâng 3 tầng; áp lực bơm `2,8 MPa` |
| 10 500 – 12 000 | Mặt cắt hiển thị ứng suất bó (hoop stress) trong vỏ thép `#D23105` và lõi bê tông chịu nén 3 trục `#2166AC` |

### 6. Mã màu & tham số
- Mô hình FEA cột liên hợp: thép đàn dẻo tuyến tính, bê tông mô hình Concrete Damaged Plasticity; hệ số bó K_e hiển thị.
- Sơn chống gỉ `#C1440E`; sơn chống cháy intumescent sau khi lắp `#ECEFF1` (dày 1,5–3,0 mm cho R120).

### 7. Hold Point & điểm mù
- **H:** UT mối hàn trước khi bơm bê tông; bơm thử áp lực trên cột mẫu (mock-up) để kiểm tra phình ống.
- **Điểm mù 1:** Bản sàn/dầm liên kết với cột CFT chỉ hàn vào vỏ thép — kiểm tra truyền lực cắt vào lõi bê tông (AISC I6 — load introduction).
- **Điểm mù 2:** Bê tông co ngót tách khỏi vỏ thép → mất hiệu ứng liên hợp. Dùng phụ gia bù co ngót, kiểm tra gõ búa sau 28 ngày.
- **Điểm mù 3:** Thiếu lỗ thoát hơi → nổ ống khi cháy.

### 8. Lời thoại giảng viên
"Cột CFT là cuộc hôn nhân hoàn hảo giữa thép và bê tông: lớp vỏ thép ôm chặt lõi bê tông làm nó chịu nén cao hơn, còn lõi bê tông chống không cho vỏ thép bị oằn. Kết quả là những chiếc trụ thanh mảnh gánh vạn tấn của khối đế thương mại, giải phóng không gian cho kiến trúc. Nhưng sự liên hợp đó chỉ tồn tại khi bê tông lấp đầy tuyệt đối — vì vậy chúng ta bơm từ chân lên, và chúng ta gõ kiểm tra từng cột."

---

## SLIDE 19 — Chu trình ván khuôn nhôm (Aluminum Formwork) 4 ngày/tầng

**Mã hồ sơ:** EPC-SPEC-19-ALF · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| ACI 347R-14 | Ván khuôn — thiết kế, tháo dỡ sớm |
| ACI 347.3R-13 / ACI 301-20 | Phân loại bề mặt CSC1–CSC4; dung sai Class A |
| ACI 117-10 | Dung sai độ phẳng bề mặt tạo hình |
| TCVN 4453:1995 | Thời gian tháo ván khuôn |
| EN 12812 | Giàn chống |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Chu kỳ tầng điển hình | 4 ngày (tối ưu 3 ngày khi dùng 2 bộ chống) | | R |
| Tấm ván khuôn | Hợp kim 6061-T6, mặt dày 4 mm, 22–25 kg/m², tuổi thọ ≥ 200–300 lần quay vòng | Kiểm tra cong vênh ≤ 1 mm/1,2 m | W |
| Bề mặt hoàn thiện | Class A (ACI 301): độ lồi lõm từ từ ≤ 3 mm/1,5 m; gờ đột ngột ≤ 3 mm → bả mỏng sơn trực tiếp | Thước 1,5 m | W |
| Thẳng đứng vách | ±3 mm/tầng | | W |
| Tháo ván khuôn vách/cột | Sau 12–24 h, bê tông ≥ 2,5 MPa (TCVN 4453: 25 daN/cm²) | | W |
| Tháo ván khuôn sàn (drop-head early stripping) | 36–48 h, chống đầu rơi giữ nguyên | | W |
| Tháo cây chống đầu rơi | Khi đạt ≥ 70% R28 (nhịp ≤ 8 m) | Mẫu hiện trường | **H** |
| Bước chống | ≤ 1,2 × 1,2 m (theo bản tính nhà sản xuất) | | W |
| Chốt nêm (pin & wedge) | 100% đủ số lượng tại mép tấm; khoảng cách chốt ≤ 300 mm | | W |

**Chu trình 4 ngày (ví dụ):**
| Ngày | Ca sáng | Ca chiều |
|---|---|---|
| D1 | Tháo vách tầng dưới, chuyển lên; lắp ván khuôn vách tầng mới | Lắp cốt thép vách, MEP chờ vách |
| D2 | Đóng ván khuôn vách; lắp ván khuôn dầm sàn | Lắp ván khuôn sàn, nghiệm thu khuôn |
| D3 | Cốt thép dầm sàn, MEP âm sàn | Nghiệm thu (H) |
| D4 | Đổ bê tông vách + dầm + sàn (đổ đêm D3–D4 nếu nóng) | Bảo dưỡng; bắt đầu chu kỳ mới |

### 3. Nội dung chữ trên slide
- Tấm nhôm đúc 6061-T6 nhẹ 23 kg/m², ghép chốt nêm thủ công, không cần cẩu — 200+ lần quay vòng.
- Tháo vách sau 12–24 h, tháo sàn sớm ở 36–48 h nhờ chống đầu rơi; cây chống giữ đến ≥ 70% R28.
- Chu trình 4 ngày/tầng, bề mặt Class A (≤ 3 mm/1,5 m): bỏ trát, bả mỏng sơn trực tiếp.

### 4. Visual điện ảnh
- **Dynamic Motion Tracking:** steadicam bám theo đội thợ, ống kính 28 mm, f/4, nhịp chuyển động nhanh; âm thanh búa cao su và chốt nêm kim loại.
- Ván khuôn `#C9CDD2` ánh bạc, chốt nêm đỏ `#D32F2F`; gỡ tấm để lộ mặt bê tông nhẵn như gương (roughness 0.35, phản chiếu mờ).

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Các tấm vách khớp nhau, chốt nêm cắm — mỗi chốt chớp đỏ 80 ms |
| 2 500 – 5 000 | Tấm sàn được thợ đẩy lên đặt vào dầm nhôm; đầu chống đầu rơi `#FFC400` |
| 5 000 – 7 000 | Bê tông đổ (tua), đồng hồ giờ: `+36 h` |
| 7 000 – 9 500 | Đầu rơi hạ 50 mm, tấm sàn rời ra; cây chống ở lại; mặt bê tông Class A hiện ra |
| 9 500 – 12 000 | Tấm ván khuôn bay vút qua lỗ chuyển (pass-through slot 600 × 300 mm) lên tầng trên theo quỹ đạo mũi tên `#00C853`; lịch D1–D4 hiển thị |

### 6. Mã màu & tham số
- Mỗi tấm mang mã QR + màu theo vị trí: vách `#C9CDD2`, sàn `#B0BEC5`, góc `#FFC400`, đặc biệt (custom) `#7E57C2`.
- Bản đồ độ phẳng bề mặt sau tháo: ≤ 3 mm `#00C853`.

### 7. Hold Point & điểm mù
- **H:** Tháo cây chống chỉ khi có kết quả nén mẫu hiện trường; chống lại tối thiểu 2 tầng dưới.
- **Điểm mù 1:** Tháo sớm theo lịch thay vì theo cường độ thực tế (mùa lạnh/mưa bê tông phát triển chậm) — dùng cảm biến maturity không dây.
- **Điểm mù 2:** Thiết kế ván khuôn nhôm "đóng băng" kiến trúc — mọi thay đổi bố trí căn hộ sau khi đặt hàng đều tốn kém. Chốt thiết kế trước khi sản xuất ≥ 10 tuần.
- **Điểm mù 3:** Rơi tấm qua lỗ chuyển gây tai nạn — lưới bao và vùng cấm bên dưới.

### 8. Lời thoại giảng viên
"Ván khuôn nhôm là động cơ của mọi kỷ lục tốc độ cao tầng: bốn ngày một tầng, hai trăm lần quay vòng, không cần móc cẩu. Nhưng tốc độ thực sự đến từ chỗ khác — từ bề mặt bê tông phẳng đến mức chúng ta bỏ hẳn công đoạn trát, tiết kiệm hàng chục nghìn mét vuông vữa và hàng tháng trời. Chỉ có một điều không bao giờ được vội: cây chống chỉ rời đi khi kết quả nén mẫu nói được, chứ không phải khi lịch trình nói được."

---

## SLIDE 20 — Dầm chuyển (Transfer Girder) chịu siêu tải trọng chuyển đổi công năng

**Mã hồ sơ:** EPC-SPEC-20-TRG · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| ACI 318-19 §9.9 (dầm cao ℓn/h ≤ 4), Ch. 23 (Strut-and-Tie) | Thiết kế dầm chuyển |
| TCVN 5574:2018 | Thiết kế BTCT |
| ACI 347.2R / EN 12812 | Giàn chống tải nặng |
| ACI 207.1R / TCVN 305:2004 | Kiểm soát nhiệt khối lớn |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Kích thước dầm chuyển | h = 2,5–4,5 m; b = 1,5–3,0 m; nhịp 12–18 m | −5 / +15 mm | W |
| Cấp bê tông | B50 | | R |
| Hàm lượng thép | 300–450 kg/m³ (D36–D40 nhiều lớp, đai kín 4–6 nhánh, thép giá chống nứt mặt bên ≤ 300 mm) | | W |
| Giàn chống tải nặng | Tháp chống thép tải 100–250 kN/chân; truyền tải qua ≥ 3–4 tầng dưới (đã kiểm tra khả năng chịu tải từng sàn) | Hệ số an toàn giàn ≥ 2,0 với ổn định | R + **H** |
| Lún giàn chống khi đổ | ≤ 5 mm (quan trắc thời gian thực bằng cảm biến dịch chuyển) | Dừng đổ nếu > 5 mm | H |
| Đổ phân lớp | 2 đợt: đợt 1 (≈ 1/3 chiều cao) được thiết kế như dầm liên hợp gánh đợt 2 | Khe thi công nhám ≥ 6 mm biên độ (ACI 318 §22.9) | H |
| Độ vồng trước (pre-camber) ván khuôn | Theo tính toán (thường L/1 000 – L/750) | ±3 mm | W |
| Độ võng dài hạn | ≤ L/480 (cấu kiện đỡ tường/cấu kiện dễ hư hỏng — ACI 318 Bảng 24.2.2) | | R |
| Nhiệt thủy hóa | T_max ≤ 70 °C; ΔT ≤ 20 °C | Thermocouple 3 cụm | H |

### 3. Nội dung chữ trên slide
- Giàn chống tải nặng truyền tải qua 3–4 tầng dưới, quan trắc lún thời gian thực ≤ 5 mm trong khi đổ.
- Thép D40 nhiều lớp, đai kín 6 nhánh, thép giá chống nứt mặt bên; thiết kế dầm cao theo Strut-and-Tie.
- Đổ 2 đợt: đợt 1 gánh đợt 2 như dầm liên hợp; kiểm soát nhiệt T_max ≤ 70 °C, ΔT ≤ 20 °C.

### 4. Visual điện ảnh
- **Low-angle Monumental Shot:** camera dưới đáy dầm, ống kính 14 mm, khối dầm đen sẫm `#4E4B47` vắt ngang khung như cầu cạn; rừng tháp chống `#F2B705` đan dày bên dưới, ánh sáng xuyên kẽ (god rays) qua lớp bụi.
- Lớp FEA overlay: mô hình Strut-and-Tie — thanh chống nén `#2166AC` dạng hình quạt từ cột trên xuống gối, thanh giằng kéo `#B2182B` ở đáy dầm.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Tháp chống mọc lên lấp đầy 2 tầng chuyển, mỗi tháp trễ 20 ms; mũi tên tải xuyên qua 4 tầng dưới |
| 2 500 – 5 500 | Lồng thép dầm hình thành: thép chủ 4 lớp, đai 6 nhánh bọc lại |
| 5 500 – 8 000 | Đổ đợt 1, sau đó đợt 2 (tua 7 ngày); cảm biến lún `2,1 mm` `#00C853` |
| 8 000 – 10 500 | Cột thưa phía trên (khách sạn) đổ tải xuống; mô hình STM sáng lên: chống nén xanh, giằng kéo đỏ, nút CCT/CTT |
| 10 500 – 12 000 | Tải truyền xuống 2 cột lớn khối đế; nhãn `D/C = 0,86 PASS` |

### 6. Mã màu & tham số
- STM: thanh chống `#2166AC` độ dày tỷ lệ lực; giằng `#B2182B`; nút `#FFC400`.
- Giàn chống: η theo Turbo; chân chống vượt 90% chớp `#FE9B2D`.

### 7. Hold Point & điểm mù
- **H:** Bản tính giàn chống tải nặng + kiểm tra khả năng chịu tải từng sàn đỡ, có kỹ sư kết cấu độc lập thẩm tra.
- **Điểm mù 1:** Tháo chống dầm chuyển trước khi các tầng trên được thi công đủ để đạt sự làm việc như thiết kế (hoặc ngược lại tải thi công tầng trên đè lên dầm chưa đủ tuổi) — trình tự tháo chống phải do thiết kế quy định.
- **Điểm mù 2:** Mật độ thép quá dày + đầm dùi không xuống được → rỗ đáy dầm. Dùng SCC hoặc bê tông có cốt liệu 10–14 mm và cửa sổ đầm hai bên ván khuôn.
- **Điểm mù 3:** Co ngắn từ biến khác biệt giữa cột trên dầm chuyển và lõi.

### 8. Lời thoại giảng viên
"Dầm chuyển là điểm mà kiến trúc đòi hỏi điều không tưởng: hàng chục cột của khối khách sạn phía trên phải biến mất để nhường chỗ cho một sảnh thương mại rộng thênh thang phía dưới. Khối bê tông bốn mét cao này nhận toàn bộ lực ấy và bẻ cong dòng lực sang những cột khổng lồ bên dưới. Trong lúc đổ, nó nặng hàng nghìn tấn mà chưa tự chịu được chính mình — vì vậy rừng giàn chống bên dưới cũng quan trọng như chính cái dầm."

---

## SLIDE 21 — Hệ sàn bao che an toàn tự leo (Safety Screen Platform) chống vật rơi

**Mã hồ sơ:** EPC-SPEC-21-SFT · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| QCVN 18:2021/BXD | Quy chuẩn kỹ thuật quốc gia về an toàn trong thi công xây dựng |
| TCVN 5308:1991 | Quy phạm kỹ thuật an toàn trong xây dựng |
| OSHA 29 CFR 1926 Subpart M (§1926.502) | Bảo vệ chống ngã cao |
| EN 13374:2013 Class C | Hệ lan can bảo vệ mép tạm thời |
| EN 1263-1/-2 | Lưới an toàn |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Chiều cao bao che | 3,5–4,5 tầng (≈ 13–16 m) phủ tầng đang đổ + 2 tầng dưới | | R |
| Tấm chắn | Tôn đục lỗ dày 1,0–1,2 mm, tỷ lệ lỗ 25–35% (giảm tải gió) hoặc lưới thép mạ | Không khe hở > 25 mm giữa tấm và sàn | W |
| Tải gió thiết kế | Làm việc 0,6–1,0 kPa; tồn tại (cố định tạm) theo gió bão vùng | Kiểm tra neo | R |
| Leo | Kích thủy lực tự leo; dừng leo khi gió ≥ 20 m/s | | W |
| Lan can mép | Cao 1 070 ± 75 mm (OSHA); chịu lực đỉnh 890 N bất kỳ hướng | Kiểm tra mỗi tầng | W |
| Bản chắn chân (toe board) | ≥ 89 mm (OSHA) / ≥ 150 mm (Spec dự án) | | W |
| Sàn đón vật rơi (catch fan) tại tầng 2–3 | Vươn ra ≥ 3 m, nghiêng 20–45° | | W |
| Lưới an toàn ngang | Rơi tối đa ≤ 6 m xuống lưới (EN 1263) | | W |
| Chiếu sáng thao tác | ≥ 100 lux lối đi, ≥ 200 lux khu thao tác | | W |
| Neo vào kết cấu | Bê tông neo ≥ 15 MPa (theo nhà sản xuất) | | **H** |

### 3. Nội dung chữ trên slide
- Hệ bao che tự leo thủy lực phủ 4 tầng trên cùng, tôn đục lỗ 30% chịu gió và va đập, không khe hở > 25 mm.
- Lan can 1 070 mm chịu 890 N, bản chắn chân 150 mm, sàn đón vật rơi vươn 3 m tại tầng thấp.
- Chiếu sáng ban đêm ≥ 200 lux, lối đi an toàn, nhà vệ sinh/trạm nước trên cao — biến tầng thi công thành pháo đài.

### 4. Visual điện ảnh
- **Exterior Drone Orbit Shot:** quỹ đạo 360° quanh tháp bán kính 120 m, 18 s/vòng (dùng 8 s), ống kính 35 mm.
- Lớp áo giáp bao che: khung `#F2B705`, tấm tôn đục lỗ `#ECEFF1` với logo nhà thầu; ánh nắng chiều xuyên lỗ tạo hoa văn sáng trên sàn bên trong.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Khung bao che neo vào biên sàn, mỗi console neo sáng xanh |
| 2 500 – 5 500 | Kích tự leo đẩy cả lồng lên 1 tầng đồng bộ với ván khuôn lõi (mũi tên `#00C853`) |
| 5 500 – 8 000 | Mô phỏng vật rơi (cờ lê 1 kg) va vào tấm chắn bị giữ lại, véc-tơ năng lượng triệt tiêu |
| 8 000 – 10 500 | Đêm xuống, đèn LED bao che bật thành dải sáng 4 tầng |
| 10 500 – 12 000 | Bảng LTI: `0 tai nạn mất ngày công — 1 250 000 giờ công an toàn` |

### 6. Mã màu & tham số
- Vùng nguy hiểm vật rơi trên mặt đất: bán kính theo chiều cao (≈ H/10 tối thiểu 6 m) `#D50000` 20%, lối đi có mái che `#00C853`.
- Áp lực gió trên tấm chắn (CFD) theo thang phân kỳ.

### 7. Hold Point & điểm mù
- **H:** Nghiệm thu neo + chứng chỉ kiểm định hệ leo; trưởng ca an toàn ký sau mỗi lần leo.
- **Điểm mù 1:** Khe hở tại góc tòa nhà và tại vị trí vận thăng/cẩu — chi tiết bịt góc riêng.
- **Điểm mù 2:** Tải gió lên tấm chắn truyền vào sàn tuổi non — kiểm tra kết cấu.
- **Điểm mù 3:** Thời điểm "chuyển giao" khi mặt dựng bắt đầu lắp ở tầng dưới — phải có giải pháp lan can mép tạm thay thế.

### 8. Lời thoại giảng viên
"An toàn không phải là một hạng mục chi phí, nó là điều kiện để được phép xây dựng. Tấm áo giáp tự leo này bọc kín bốn tầng cao nhất — nơi con người làm việc ở độ cao hai trăm mét — để không một cái cờ lê nào rơi xuống phố. Một triệu giờ công không tai nạn không phải là may mắn; đó là kết quả của từng lan can một nghìn không trăm bảy mươi mi-li-mét được kiểm tra mỗi sáng."

---

## SLIDE 22 — Kiểm tra không phá hủy (NDT) bê tông và mối nối cốt thép qua các tầng

**Mã hồ sơ:** EPC-SPEC-22-NDT · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| TCVN 9357:2012 / ASTM C597 | Vận tốc xung siêu âm (UPV) |
| TCVN 9334:2012 / ASTM C805 | Súng bật nẩy |
| TCVN 9335:2012 | Phương pháp kết hợp siêu âm – bật nẩy (SONREB) |
| BS 1881-204 / ACI 228.2R | Đo lớp bảo vệ, GPR, các phương pháp NDT |
| AWS D1.1 Ch. 8 / ISO 17640 | Kiểm tra siêu âm (UT) mối hàn |
| ASTM E709 | Kiểm tra bột từ (MT) |
| ASTM E165 | Kiểm tra thẩm thấu chất lỏng (PT) |
| TCVN 8163:2009 / ISO 15835-2 | Thử nghiệm mối nối ống ren |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| UPV bê tông | > 4,5 km/s rất tốt; 3,5–4,5 tốt; 3,0–3,5 nghi ngờ; < 3,0 kém | Cấu kiện chính ≥ 4,0 km/s | W |
| Súng bật nẩy | ≥ 10 điểm/vùng 300 × 300 mm, loại bỏ giá trị lệch > 6 đơn vị | Hiệu chuẩn đe thép 80 ± 2 | W |
| Cường độ quy đổi SONREB | ≥ f'c thiết kế với hệ số hiệu chỉnh từ lõi khoan | | R |
| Lớp bảo vệ (cover meter) | Thiết kế −5 / +10 mm; ≥ 90% điểm đạt | 1 cột + 1 vách + 1 ô sàn mỗi tầng | W |
| UT mối hàn CJP | 100% | Theo tiêu chí chấp nhận AWS D1.1 Bảng 8.2 (tĩnh) | H |
| MT mối hàn góc | 10–20% | Không có vết nứt bề mặt | W |
| Coupler | 1 mẫu thử kéo / 500 mối (hoặc mỗi lô); kéo ≥ 1,25 f_y thanh; độ trượt ≤ 0,10 mm | | H |
| Lực siết coupler | 100% có vạch sơn, kiểm tra ngẫu nhiên 10% bằng cờ lê lực | | W |
| Phòng thí nghiệm | Đạt ISO/IEC 17025 (VILAS) | | R |

### 3. Nội dung chữ trên slide
- Kết hợp siêu âm – bật nẩy (SONREB, TCVN 9335) hiệu chỉnh bằng lõi khoan; UPV cấu kiện chính ≥ 4,0 km/s.
- UT 100% mối hàn CJP theo AWS D1.1, MT mối hàn góc, thử kéo coupler 1 mẫu/500 mối (≥ 1,25 f_y, trượt ≤ 0,1 mm).
- Phòng thí nghiệm độc lập ISO/IEC 17025 lập biên bản cho từng tầng trước khi chuyển giai đoạn.

### 4. Visual điện ảnh
- **Close-up Tech Inspection View:** macro 85 mm, f/2, đầu dò siêu âm áp lên cột (gel tiếp âm trong suốt), màn hình cầm tay hiện dạng sóng A-scan `#00C853`.
- Cảnh phụ: GPR quét sàn, ảnh hyperbol các thanh thép và cáp PT hiện trên màn hình.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Hai đầu dò UPV đối diện trên cột; xung siêu âm truyền xuyên (sóng nén `#00B8D4`), `V = 4,62 km/s` |
| 2 500 – 5 000 | Súng bật nẩy bắn 10 điểm lưới; giá trị trung bình 46 |
| 5 000 – 8 000 | Đầu dò góc 70° quét mối hàn cột thép, chùm tia khúc xạ trong thép; A-scan không có phản xạ vượt mức |
| 8 000 – 10 000 | Máy kéo coupler: biểu đồ lực – biến dạng vượt 1,25 f_y, thanh đứt ngoài mối nối |
| 10 000 – 12 000 | Con dấu `PASS` `#00C853` phát sáng; cấu kiện trên BIM chuyển sang trạng thái "Đã kiểm định" |

### 6. Mã màu & tham số
- Trạng thái kiểm định cấu kiện trong BIM: chưa kiểm `#B0BEC5`, đang kiểm `#00B8D4`, đạt `#00C853`, nghi ngờ `#FFAB00`, không đạt `#D50000`.
- GPR: phản xạ thép hyperbol `#FFC400` trên nền xám.

### 7. Hold Point & điểm mù
- **H:** Không đổ bê tông tầng trên khi biên bản NDT tầng dưới còn hạng mục "nghi ngờ" chưa xử lý.
- **Điểm mù 1:** Súng bật nẩy chỉ đánh giá lớp mặt 30 mm — bị ảnh hưởng bởi cacbonat hóa và độ ẩm; không dùng một mình để kết luận cường độ.
- **Điểm mù 2:** Coupler đủ lực nhưng thanh thép không vặn đủ chiều dài ren (thread engagement) — kiểm tra vạch đánh dấu trên thanh.
- **Điểm mù 3:** Hồ sơ NDT không liên kết với vị trí BIM → không truy vết được. Mỗi kết quả gắn GUID cấu kiện.

### 8. Lời thoại giảng viên
"Trong xây dựng cao tầng, không có chỗ cho câu 'chắc là đạt'. Mỗi mét khối bê tông, mỗi mối hàn, mỗi khớp nối ren đều phải có một con số — và con số đó phải được gắn vào đúng cấu kiện trên mô hình số. Sóng siêu âm cho chúng ta nhìn thấy bên trong vật liệu mà không cần phá hủy nó — đó là con mắt của người kỹ sư giám sát hiện đại."

---

## SLIDE 23 — Cất nóc (Topping Out) và đo sai số hình học bằng quét laser 3D

**Mã hồ sơ:** EPC-SPEC-23-TOP · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| ACI 117-10 §4 | Dung sai thẳng đứng công trình |
| USIBD Level of Accuracy Specification v3.1 | Cấp độ chính xác đám mây điểm (LOA) |
| ISO 17123-9 | Kiểm tra máy quét laser mặt đất |
| TCVN 9400:2012 | Quan trắc độ nghiêng |
| BIMForum LOD 500 | Mô hình hoàn công |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Độ lệch ngang đỉnh tháp so với trục gốc | Spec dự án ≤ H/2 000 → ≤ 110 mm cho H = 220 m (ACI 117: H/1 000, ≤ 150 mm) | Đo lúc 5–7h, gió < 5 m/s | **H** |
| Độ chính xác đám mây điểm | LOA30 (≤ 15 mm, 2σ) cho tổng thể; LOA40 (≤ 5 mm) cho giếng thang, mặt dựng | | W |
| Sai số ghép trạm (registration RMS) | ≤ 3 mm (có bia chuẩn), ≤ 5 mm (cloud-to-cloud) | | R |
| Mật độ điểm | ≤ 5 mm khoảng cách điểm ở 10 m | | R |
| So sánh As-built vs Design | 95% bề mặt trong ±15 mm; giếng thang trong dung sai EN 81-20 | Heatmap sai lệch | H |
| Co ngắn tích lũy dự báo vs đo | Sai lệch ≤ 20% giá trị dự báo | | R |

### 3. Nội dung chữ trên slide
- Hoàn thành mẻ bê tông cuối cùng tầng mái — lễ cất nóc; khóa đường găng phần thân.
- Quét laser 3D toàn tháp trong & ngoài (LOA30–LOA40), ghép trạm RMS ≤ 3 mm.
- So sánh As-built point cloud với BIM: độ lệch đỉnh tháp ≤ H/2 000; giếng thang đạt EN 81-20.

### 4. Visual điện ảnh
- **Epic Sunset Drone Shot:** drone cao 300 m, ống kính 50 mm, tháp xuyên tầng mây, hoàng hôn 18h05 nhiệt độ màu 3 000 K, mặt trời 4° trên chân trời.
- Cẩu treo dải băng đỏ `#C62828` + cờ; hàng triệu tia laser quét `#00E5FF` lan phủ tòa tháp như lưới, chuyển thành đám mây điểm màu thật.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 000 | Mẻ bê tông cuối rót xuống sàn mái; công nhân giơ cờ |
| 2 000 – 4 500 | 24 máy quét đặt trên các tầng xoay 360°, tia laser bùng phát (2 triệu điểm/s mỗi máy) |
| 4 500 – 7 500 | Đám mây điểm tích tụ từ hạt đơn lẻ đến khối đặc (point splat size 1 → 3 px) |
| 7 500 – 10 000 | Mô hình BIM wireframe `#00E5FF` chồng lên; heatmap sai lệch: 97% xanh `#00C853` |
| 10 000 – 12 000 | Nhãn `Top drift = 64 mm ≤ 110 mm (H/2000) — PASS`; pháo hoa nhẹ nhàng |

### 6. Mã màu & tham số
- Heatmap sai lệch đám mây điểm: −15 mm `#2166AC` → 0 `#00C853` → +15 mm `#B2182B`; ngoài ±15 mm `#D50000` đậm.
- Xử lý: Cyclone/Recap → Navisworks/Revit; voxel downsample 5 mm.

### 7. Hold Point & điểm mù
- **H:** Báo cáo hình học tổng thể sau cất nóc trước khi đặt hàng ray thang máy và chốt kích thước tấm mặt dựng tầng cao.
- **Điểm mù 1:** Đo trong lúc tháp đang dao động do gió/nhiệt → kết quả sai. Đo trung bình nhiều lần, ghi điều kiện môi trường.
- **Điểm mù 2:** Lún móng làm nghiêng toàn tháp (rigid tilt) bị nhầm với sai số thi công.
- **Điểm mù 3:** Co ngắn từ biến tiếp tục 3–5 năm sau cất nóc — mặt dựng và ống đứng phải có khe co giãn tính toán.

### 8. Lời thoại giảng viên
"Khoảnh khắc cất nóc là khi ngọn tháp chạm vào bầu trời và cả công trường được phép tự hào. Nhưng một tổng chỉ huy thực thụ sẽ hỏi ngay: chúng ta đã đứng thẳng đến đâu? Hai triệu điểm laser mỗi giây trả lời câu hỏi đó — sáu mươi tư mi-li-mét trên hai trăm hai mươi mét. Đó không phải là may mắn; đó là kết quả của năm mươi lăm lần chuyển trục được kiểm soát nghiêm ngặt."

---

## SLIDE 24 — Tháo dỡ thiết bị thi công siêu cao tầng

**Mã hồ sơ:** EPC-SPEC-24-DSM · **Thời lượng:** 15 000 ms

### 1. Tiêu chuẩn viện dẫn
| Mã | Phạm vi |
|---|---|
| TCVN 4244:2005 / QCVN 7:2012/BLĐTBXH | Thiết bị nâng |
| ISO 12480-1 / BS 7121-5 | Kế hoạch nâng, tháo lắp cẩu tháp |
| ASTM C1107 | Vữa không co ngót |
| ACI 318-19 §26.5 / ACI 546R | Sửa chữa, bù lỗ mở bê tông |

### 2. Ngưỡng dung sai & thông số định lượng
| Thông số | Giá trị | Ngưỡng | Kiểm tra |
|---|---|---|---|
| Gió khi tháo dỡ | ≤ 12,5 m/s (theo nhà sản xuất, thường 10–12,5 m/s) | Dừng ngay khi vượt | W |
| Cẩu phụ trên mái (derrick/cẩu nhỏ) | Tải định mức ≥ 1,25 × cấu kiện nặng nhất (thường 6–10 t) | Kiểm tra sàn mái chịu tải tập trung | **H** |
| Vùng cấm dưới mặt đất | Bán kính ≥ 1,5 × chiều cao rơi tiềm năng hạn chế bằng phương án; phong tỏa giao thông theo giấy phép | | W |
| Vữa bù lỗ mở sàn/vách | Không co ngót, cường độ ≥ cấp bê tông gốc + 5 MPa; cấy thép chờ đủ chiều dài neo | | H |
| Bề mặt tiếp giáp | Đục nhám biên độ ≥ 6 mm, quét chất kết dính epoxy | | W |
| Chống thấm lỗ mở mái | Thử ngâm nước 48 h, không rò | | H |

### 3. Nội dung chữ trên slide
- Phương án tháo dỡ cẩu tháp bằng chuỗi cẩu phụ thu nhỏ dần trên mái (derrick → cẩu mini), gió ≤ 12,5 m/s.
- Hạ đốt thân cẩu, cabin, vận thăng; phong tỏa vùng nguy hiểm theo giấy phép giao thông đô thị.
- Bù lỗ mở sàn/vách bằng vữa không co ngót + cấy thép; chống thấm và thử ngâm nước 48 h.

### 4. Visual điện ảnh
- **High-speed Action Timelapse:** camera trên tòa nhà lân cận, ống kính 70–200 mm zoom chậm, 48 giờ nén còn 10 s, mây chạy nhanh.
- Đốt cẩu `#F2B705` lần lượt được nhấc khỏi đỉnh, hạ xuống theo dây cáp mảnh lấp lánh; kết thúc với đỉnh mái kiến trúc thanh thoát (crown) lộ diện.

### 5. Timeline animation
| ms | Sự kiện |
|---|---|
| 0 – 2 500 | Cẩu tháp tự hạ thấp (climbing down) về sát mái |
| 2 500 – 5 500 | Derrick nhấc cần, đối trọng, cabin, đốt thân lần lượt — mỗi cấu kiện 600 ms |
| 5 500 – 7 500 | Derrick tự tháo, cẩu mini nhỏ hơn tháo derrick, cẩu mini được hạ bằng vận thăng hàng |
| 7 500 – 10 000 | Lỗ mở sàn: thép cấy, vữa rót tự chảy lấp đầy, lớp chống thấm phủ kín |
| 10 000 – 12 000 | Drone kéo ra: tòa tháp hoàn toàn độc lập, đường chân trời sạch |

### 6. Mã màu & tham số
- Trình tự tháo: cấu kiện chờ `#F2B705`, đang nâng `#00E5FF` glow, đã hạ `#9E9E9E` mờ 40%.
- Vùng cấm mặt đất `#D50000` 20%.

### 7. Hold Point & điểm mù
- **H:** Kế hoạch nâng chi tiết (lift plan) cho từng cấu kiện, có kiểm tra kết cấu sàn mái tại điểm đặt cẩu phụ.
- **Điểm mù 1:** Cẩu tháp đặt trong lõi — lỗ mở qua mỗi sàn trong lõi phải được bù đầy đủ cả phần thép chịu lực.
- **Điểm mù 2:** Vị trí vận thăng ngoài để lại "khoảng trống" mặt dựng — tấm mặt dựng cuối (closure units) cần đặt hàng riêng và lắp từ bên trong.
- **Điểm mù 3:** Neo cẩu/vận thăng cắt qua lớp chống thấm vách tầng hầm hoặc mái.

### 8. Lời thoại giảng viên
"Khi những chiếc cẩu cuối cùng rời khỏi đỉnh tháp, tòa nhà chính thức lột xác: nó không còn là công trường, nó là kiến trúc. Nhưng đây cũng là một trong những thao tác nguy hiểm nhất của dự án — tháo một cỗ máy hàng trăm tấn ở độ cao hai trăm mét bằng một cỗ máy nhỏ hơn, rồi lại nhỏ hơn nữa. Và đừng quên những lỗ mở mà chúng để lại: mỗi lỗ là một đường rò nước tiềm tàng nếu không được bù và thử nghiệm."
