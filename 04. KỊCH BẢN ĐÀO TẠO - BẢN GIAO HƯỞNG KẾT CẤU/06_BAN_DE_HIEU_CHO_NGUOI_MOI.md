# BẢN DỄ HIỂU — Giải thích 40 bước xây tòa nhà chọc trời cho người chưa biết gì về xây dựng

Cú pháp mỗi slide (để `build_slides.py` đọc được):
`nói:` giải thích ngắn · `giống:` ví dụ đời thường · `bước:` các bước, ngăn bằng `||` · `sợ:` nếu làm sai thì sao ·
`số:` con số đáng nhớ dạng `giá trị | ý nghĩa`, ngăn bằng `||` · `từ:` từ khó dạng `từ = nghĩa`, ngăn bằng `||`

## 1 | Khoan thăm dò đất — "khám sức khỏe" cho mảnh đất
nói: Trước khi xây, người ta khoan nhiều lỗ sâu 80–90 m để lấy đất đá lên xem bên dưới có gì: chỗ nào mềm như bùn, chỗ nào cứng như đá.
giống: Giống bác sĩ chụp X-quang trước khi mổ. Không biết bên dưới có gì thì không dám đặt một tòa nhà nặng hàng trăm nghìn tấn lên trên.
bước: Đánh dấu 7 vị trí cần khoan trên mảnh đất || Mũi khoan xoay, đi dần xuống qua từng lớp đất || Lấy lõi đất đá lên, đem vào phòng thí nghiệm || Vẽ ra "bản đồ lòng đất" theo từng lớp
sợ: Nếu khảo sát sơ sài, cọc có thể dừng ở lớp đất yếu mà tưởng là đá. Vài năm sau tòa nhà sẽ lún hoặc nghiêng.
số: 7 lỗ | Số lỗ khoan tối thiểu cho một tòa tháp, rải đều quanh khu đất || 80–90 m | Độ sâu phải khoan, bằng một tòa nhà 25–30 tầng úp ngược xuống đất || 2 mùa | Đo nước ngầm cả mùa khô lẫn mùa mưa, vì mực nước thay đổi
từ: Địa chất = các lớp đất đá nằm dưới chân ta || Đá gốc = lớp đá cứng nằm sâu nhất, là nền đỡ tốt nhất || Nước ngầm = nước nằm trong đất, có loại ăn mòn được bê tông

## 2 | BIM — xây thử tòa nhà trên máy tính trước
nói: BIM là mô hình 3D của cả tòa nhà trên máy tính, có đủ tường, cột, ống nước, dây điện. Kỹ sư "xây thử" trên máy để tìm chỗ sai trước khi xây thật.
giống: Như lắp thử bộ Lego trên máy trước khi lắp miếng thật: thấy miếng nào chồng lên miếng nào thì sửa ngay.
bước: Dựng hình dáng tòa nhà || Thêm khung bê tông: cột, dầm, sàn || Thêm đường ống nước, ống gió, dây điện || Máy tự tìm chỗ ống đâm vào dầm: báo đỏ, sửa xong thành xanh
sợ: Nếu đến lúc đổ bê tông xong mới phát hiện ống đâm vào dầm thì phải đục phá, tốn tiền và chậm hàng tuần.
số: 0 | Số chỗ "va chạm" còn lại được phép khi đưa bản vẽ ra công trường || 37 | Ví dụ số lỗi máy tìm ra trong một lần kiểm tra; mỗi lỗi là một lần đục phá được tránh
từ: BIM = mô hình 3D chứa đủ thông tin của tòa nhà, như bản sao số || Va chạm (clash) = hai thứ chiếm cùng một chỗ, ví dụ ống nước xuyên qua dầm || LOD = mức độ chi tiết của mô hình; số càng cao càng chi tiết

## 3 | Chống gió bão và động đất — nhà cao luôn đung đưa
nói: Nhà càng cao càng bị gió đẩy mạnh, nó lắc nhẹ qua lại như cây tre. Kỹ sư thử gió trên mô hình thu nhỏ và treo một khối rất nặng trên nóc để giảm lắc.
giống: Như người đứng trên xe buýt: nghiêng người ngược chiều xe là đứng vững. Khối nặng trên nóc cũng lắc ngược chiều tòa nhà để bù lại.
bước: Gió thổi ngang làm tòa nhà cong nhẹ || Chân tòa nhà chịu lực nhiều nhất (màu càng nóng là chịu càng nhiều) || Bật bộ giảm chấn trên nóc: khối nặng lắc ngược chiều || Tòa nhà lắc ít hẳn, người ở trên không thấy chóng mặt
sợ: Không giảm lắc thì người ở tầng cao thấy say như say sóng, đồ đạc rung, lâu dài kết cấu bị mỏi.
số: 500 tấn | Khối giảm chấn treo trên nóc, nặng bằng khoảng 350 chiếc ô tô || 5,4 giây | Thời gian tòa tháp lắc một vòng qua lại || 30–45% | Mức giảm rung lắc nhờ bộ giảm chấn
từ: Hầm gió = phòng thổi gió vào mô hình nhà thu nhỏ để đo lực || Bộ giảm chấn (TMD) = khối nặng treo trên nóc, lắc ngược chiều để triệt rung || Gia tốc = độ "giật" mà người cảm thấy khi nhà lắc

## 4 | Lập kế hoạch và sắp xếp công trường chật chội
nói: Giữa phố đông, công trường rất chật. Phải lên lịch việc nào làm trước, việc nào sau, và cho xe chở vật liệu đến đúng giờ, không để chờ.
giống: Như nấu cỗ trong căn bếp nhỏ: biết món nào nấu trước, nguyên liệu mang tới vừa lúc cần, không chất đầy bếp.
bước: Vẽ ranh giới khu đất || Sắp chỗ cho cần cẩu, kho thép, lán trại, cổng ra vào || Xe chở vật liệu chạy đúng tuyến, tránh giờ cao điểm || Lịch tiến độ chạy, đánh dấu những việc không được phép chậm
sợ: Một việc quan trọng chậm 1 ngày là cả dự án chậm 1 ngày. Xe đến sai giờ thì tắc đường và bị phạt.
số: ±15 phút | Xe vật liệu phải đến đúng khung giờ đã hẹn || 3 ngày | Thép chỉ chứa đủ dùng 3 ngày, không chất đống || 20% | Diện tích luôn để trống làm đường đi và lối cho xe cứu hỏa
từ: Tiến độ = lịch làm việc theo ngày || Đường găng = chuỗi việc quan trọng nhất; chậm một việc là chậm cả dự án || JIT = giao hàng "vừa đúng lúc cần"

## 5 | Đo đạc bằng tia laser — giữ tòa nhà thẳng đứng
nói: Người ta chiếu tia laser từ dưới lên qua một lỗ nhỏ ở mỗi sàn, để tầng nào cũng nằm đúng vị trí, không bị lệch dần theo chiều cao.
giống: Như xếp chồng 55 cái hộp: hộp dưới lệch một chút, lên trên cùng sẽ lệch rất nhiều. Tia laser đóng vai sợi dây dọi thẳng tắp.
bước: Đặt máy ở điểm mốc dưới móng || Tia laser bắn thẳng lên qua lỗ chừa ở từng sàn || Máy đo ghi lại vị trí từng góc cột || So độ lệch với giới hạn: nằm trong vùng xanh là đạt
sợ: Tòa nhà lệch thì thang máy chạy kẹt, các tấm kính mặt ngoài không lắp khớp.
số: 2 mm | Sai lệch tối đa khi chuyển vị trí từ tầng này lên tầng trên || 1 mm trên 200 m | Độ chính xác của máy laser || 5–7 giờ sáng | Giờ đo tốt nhất, khi nắng chưa làm tòa nhà cong nhẹ
từ: Trắc địa = đo đạc vị trí và độ cao || Mốc chuẩn = điểm gốc cố định để so sánh || Lún = nhà bị chìm dần xuống vì nặng

## 6 | Tường vây — bức tường dưới đất chắn quanh hố móng
nói: Trước khi đào hố sâu làm tầng hầm, người ta đổ một vòng tường bê tông dày ngay trong lòng đất. Tường này giữ đất và nước xung quanh không sụp vào hố.
giống: Như cắm một vòng ván quanh chỗ đào cát ở bãi biển để cát không sạt vào hố.
bước: Máy gàu ngoạm đào một rãnh hẹp và sâu || Bơm bùn sệt bentonite (màu hồng) vào để rãnh không sập || Thả lồng thép xuống rãnh || Đổ bê tông từ đáy lên, đẩy bùn ra ngoài: thành một tấm tường
sợ: Mối nối giữa các tấm tường dính bùn thì sau này nước ngầm phun vào tầng hầm. Tường yếu thì nhà bên cạnh có thể nứt, lún.
số: 50 m | Độ sâu tường, bằng một tòa nhà 16 tầng || 1,2 m | Độ dày tường || 1,5 m | Mặt bùn trong rãnh luôn phải cao hơn mực nước ngầm ít nhất chừng này
từ: Tường vây (Barrette) = tường bê tông đổ trong lòng đất || Bentonite = đất sét pha nước, sệt như cháo, giữ vách rãnh không sập || Lồng thép = khung thép bện sẵn đặt trong bê tông

## 7 | Cọc khoan nhồi — những "chân" khổng lồ cắm sâu xuống đất
nói: Tòa nhà quá nặng nên không đặt thẳng lên đất được. Người ta khoan hàng trăm lỗ sâu tới lớp đá, rồi đổ bê tông cốt thép thành các cây cọc để đỡ tòa nhà.
giống: Như nhà sàn có chân cắm qua lớp bùn xuống tới đất cứng. Ở đây mỗi "chân" dài gần 90 m và to bằng chiều cao một người.
bước: Khoan lỗ sâu, hút sạch cặn dưới đáy || Thả lồng thép có gắn sẵn ống nhỏ để kiểm tra sau này || Đổ bê tông từ đáy lên || Cho sóng âm chạy qua cọc để tìm chỗ rỗng, chỗ hỏng
sợ: Đáy hố còn nhiều cặn bùn thì cọc "đứng trên bùn" chứ không đứng trên đá. Cọc chịu tải kém, nhà lún.
số: 420 cọc | Số cọc đỡ tòa tháp trong ví dụ || 2 m | Đường kính một cây cọc || 5 cm | Lớp cặn bùn dưới đáy được dày tối đa; dày hơn phải làm sạch lại
từ: Cọc = cột bê tông chôn dưới đất để đỡ nhà || Siêu âm cọc = cho sóng âm đi qua cọc, giống siêu âm thai, để "nhìn" bên trong || Thử tĩnh = chất tải thật lên cọc xem nó lún bao nhiêu

## 8 | Neo đất và thanh chống — "cánh tay" giữ tường vây
nói: Khi đào sâu, đất bên ngoài đẩy tường vây vào trong rất mạnh. Người ta đặt các thanh thép to chống ngang giữa hai bên tường, hoặc dùng dây neo kéo tường ra phía ngoài.
giống: Như kê thanh gỗ chống ngang giữa hai bức tường hành lang để chúng không đổ vào nhau.
bước: Khoan xiên qua tường ra phía đất bên ngoài || Bơm vữa xi măng tạo thành "củ neo" bám chặt trong đất || Kéo căng dây neo bằng kích thủy lực || Lắp các tầng thanh thép chống ngang, kiểm tra lực mỗi ngày
sợ: Thanh chống không đủ chặt thì tường bị đẩy dịch vào. Đất phía ngoài lún theo, kéo nhà hàng xóm nứt.
số: 1,33 lần | Mỗi neo được thử kéo mạnh hơn lực thiết kế 1,33 lần cho chắc || 2 lần/ngày | Số lần đọc lực trong thanh chống || 6 cm | Ngưỡng đỏ: tường dịch vào tới mức này là phải dừng đào
từ: Neo đất = dây cáp chôn xiên trong đất để kéo giữ tường || Thanh chống = dầm thép đặt ngang hố, chống hai bên tường || Kích thủy lực = máy đẩy/kéo bằng dầu, tạo lực rất lớn

## 9 | Đào hố móng và bơm nước ngầm
nói: Đất dưới sâu chứa nhiều nước. Trước khi đào, người ta khoan giếng xung quanh và bơm nước ra cho mực nước hạ thấp hơn đáy hố, rồi mới đào từng lớp.
giống: Như đào hố sâu trên bãi biển: muốn hố không ngập thì phải múc nước ra liên tục.
bước: Bơm nước ngầm: mực nước tụt dần xuống || Máy xúc đào từng lớp đất || Đào tới đâu lắp thanh chống ngang tới đó || Xe chở đất ra ngoài, rửa bánh xe cho sạch đường phố
sợ: Mất điện, máy bơm ngừng thì nước dâng có thể đẩy trồi đáy hố trong vài giờ. Bơm quá tay thì đất cả khu phố lún theo.
số: 22 m | Độ sâu hố móng, bằng một tòa nhà 7 tầng || 420 m³/giờ | Lượng nước bơm ra mỗi giờ, đủ đổ đầy một bể bơi nhỏ || 1 m | Mực nước luôn phải thấp hơn đáy hố ít nhất chừng này
từ: Hố móng = hố đào để làm móng và tầng hầm || Hạ mực nước ngầm = bơm nước trong đất ra ngoài || Quan trắc = đo theo dõi liên tục để phát hiện sớm nguy hiểm

## 10 | Lót đáy và chống thấm đáy móng
nói: Trước khi làm móng, người ta đổ một lớp bê tông mỏng cho phẳng và sạch, rồi trải tấm màng chống thấm kín như áo mưa để nước ngầm không thấm lên tầng hầm.
giống: Như lót tấm ni-lông dưới đáy chậu cây, nhưng làm ngược lại: chặn nước từ dưới lên.
bước: Lu lèn cho đất đáy chặt || Đổ lớp bê tông lót mỏng 10 cm cho phẳng || Trải màng chống thấm, các mép chồng lên nhau || Trộn chất chống thấm vào bê tông móng: tinh thể tự mọc lấp kín các lỗ nhỏ
sợ: Chỗ này không sửa được nữa vì 4 m bê tông móng sẽ đè lên. Thủng một lỗ nhỏ là tầng hầm ẩm, rỉ nước suốt đời.
số: 10 cm | Độ dày lớp bê tông lót || 7,5–15 cm | Mép màng phải chồng lên nhau tối thiểu chừng này || 70 m | Màng chịu được áp lực nước bằng một cột nước cao 70 m
từ: Bê tông lót = lớp bê tông mỏng, rẻ, tạo mặt phẳng sạch || Màng chống thấm = tấm nhựa đặc biệt không cho nước đi qua || Chống thấm tinh thể = hóa chất tạo tinh thể bịt lỗ nhỏ trong bê tông

## 11 | Đan thép móng — bộ xương của nền nhà
nói: Móng là một tấm bê tông khổng lồ dày 4 m nằm trên đầu các cọc. Bên trong có hàng nghìn tấn thép đan dày đặc thành lưới nhiều lớp.
giống: Bê tông giống xương, chịu nén giỏi. Thép giống gân, chịu kéo giỏi. Kết hợp lại thì vừa cứng vừa dẻo dai.
bước: Trải các lớp lưới thép dưới cùng || Dựng giá đỡ thép để giữ lưới phía trên || Cẩu lưới thép trên xuống, nối các thanh bằng khớp ren || Kiểm tra vị trí từng thanh so với bản vẽ
sợ: Giá đỡ yếu thì cả lưới thép phía trên sập xuống, đã từng có tai nạn chết người. Thép quá dày không chừa khe thì bê tông không chảy lọt xuống.
số: 3.000 tấn | Thép trong móng ví dụ, nặng bằng khoảng 2.000 ô tô || 4 m | Độ dày tấm móng || 7,5 cm | Lớp bê tông phủ ngoài thép ở đáy, giữ cho thép không gỉ
từ: Móng bè = tấm móng lớn liền khối nằm dưới cả tòa nhà || Cốt thép = thanh thép đặt trong bê tông || Khớp nối ren (coupler) = ống ren nối hai đầu thép, vặn như vặn ốc

## 12 | Đổ bê tông móng liền mạch — và giữ cho nó không quá nóng
nói: Cả tấm móng phải đổ liền một mạch hơn 30 giờ không nghỉ. Bê tông khi đông cứng tự sinh nhiệt: lõi rất nóng còn mặt ngoài nguội, chênh nhau nhiều sẽ nứt.
giống: Như rót nước sôi vào cốc thủy tinh lạnh, cốc nứt vì trong nóng ngoài lạnh. Người ta luồn ống nước mát trong bê tông như một chiếc "điều hòa".
bước: Hàng chục xe bơm bê tông chạy liên tục || Bên trong bê tông nóng dần lên (màu đỏ là nóng) || Nước mát chảy trong ống hạ nhiệt lõi, cảm biến đo nhiệt mỗi 30 phút || Phủ bạt giữ ấm mặt ngoài để trong và ngoài không chênh nhau nhiều
sợ: Dừng giữa chừng sẽ tạo "vết nối lạnh", một đường yếu để nước thấm vào. Chênh nhiệt quá lớn làm móng nứt toác.
số: 7.200 m³ | Lượng bê tông, đủ đổ đầy gần 3 bể bơi Olympic || 70°C | Lõi bê tông không được nóng hơn mức này || 20°C | Chênh lệch nhiệt độ trong và ngoài tối đa
từ: Nhiệt thủy hóa = nhiệt tự sinh ra khi xi măng gặp nước || Bê tông khối lớn = khối bê tông rất dày, dễ nứt vì nhiệt || Cảm biến nhiệt = que đo nhiệt chôn trong bê tông

## 13 | Tháo thanh chống và nghiệm thu phần dưới đất
nói: Khi móng và các sàn tầng hầm đã đủ cứng, chính các sàn đó sẽ chống đỡ tường vây. Lúc này mới tháo dần các thanh thép chống tạm và kiểm tra lại toàn bộ phần dưới đất.
giống: Như tháo nẹp sau khi xương gãy đã liền: chỉ tháo khi chụp phim thấy chắc rồi.
bước: Nén thử mẫu bê tông xem đã đủ cứng chưa || Tháo từng thanh chống theo đúng thứ tự, hai bên đều nhau || Cẩu thanh chống ra ngoài, đo xem tường có bị dịch không || Ký biên bản xong phần dưới đất, chuyển sang xây phần trên
sợ: Tháo vội khi bê tông chưa đủ cứng thì tường vây bị đẩy vào đột ngột. Tắt máy bơm nước quá sớm thì tầng hầm có thể bị nước đẩy nổi lên như phao.
số: 70% | Bê tông phải đạt ít nhất 70% độ cứng thiết kế mới được tháo chống || 5 mm | Tường dịch thêm quá mức này khi tháo là phải dừng lại
từ: Nghiệm thu = kiểm tra và ký xác nhận đạt yêu cầu || Phần ngầm = mọi thứ nằm dưới mặt đất || Lực đẩy nổi = nước ngầm đẩy tầng hầm lên như đẩy chiếc phao

## 14 | Cần cẩu tháp và thang tải công trình
nói: Cần cẩu tháp nhấc thép, khuôn và vật nặng lên cao; thang tải chở người và vật liệu nhỏ. Cẩu tự "leo" cao dần theo tòa nhà.
giống: Cẩu tháp là "cánh tay", thang tải là "thang máy tạm" của công trường.
bước: Kích thủy lực đẩy phần đầu cẩu lên cao || Lắp thêm một đốt thân 3 m vào khoảng trống || Neo thân cẩu vào tòa nhà cho vững || Thang tải chạy lên xuống, có phanh tự động chống rơi
sợ: Gió mạnh mà vẫn cẩu thì vật nặng đung đưa, có thể đâm vào người hoặc làm đổ cẩu.
số: 65 m | Chiều dài cánh tay cẩu || 72 km/giờ | Gió giật tới mức này (khoảng cấp 8) là bắt buộc dừng cẩu || 125% | Trước khi dùng, cẩu được thử nhấc nặng hơn sức định mức 25%
từ: Cẩu tháp = cần cẩu dạng tháp cao, đứng cố định || Vận thăng = thang tải chạy bên ngoài tòa nhà || Kiểm định = cơ quan độc lập kiểm tra an toàn thiết bị

## 15 | Lõi thang máy — xương sống của tòa nhà
nói: Giữa tòa nhà có một "ống" bê tông rất cứng chứa thang máy và cầu thang. Nó được đổ trước, leo lên từng tầng bằng bộ khuôn tự nâng.
giống: Như cột sống trong cơ thể: mọi tầng sàn bám vào nó, nó giữ cho tòa nhà không bị gió xô ngã.
bước: Khuôn tách ra khỏi tường bê tông đã cứng || Kích thủy lực nâng cả bộ khuôn lên một tầng || Đặt thép, đóng khuôn lại || Đổ bê tông, đo laser xem có thẳng đứng không
sợ: Lõi bị nghiêng thì giếng thang máy cong; thang chạy nhanh sẽ rung lắc hoặc không lắp được.
số: 3–4 ngày | Thời gian lõi lên được 1 tầng || 5 mm | Mỗi tầng được lệch tối đa || 3–5 tầng | Lõi luôn đi trước các sàn chừng này tầng
từ: Lõi cứng (core) = khối tường bê tông bao quanh thang máy ở giữa nhà || Ván khuôn = khuôn để đổ bê tông, giống khuôn bánh || Ván khuôn leo = khuôn tự nâng lên tầng trên bằng kích

## 16 | Đổ cột, dầm, sàn — mỗi tầng là một vòng lặp
nói: Mỗi tầng làm theo cùng một vòng: dựng giàn chống, đóng khuôn, đặt thép, đi sẵn ống điện, đổ bê tông, chờ cứng, tháo khuôn đem lên tầng trên.
giống: Như làm bánh nhiều tầng: tầng dưới chắc rồi mới đặt tầng trên lên.
bước: Dựng giàn chống và khuôn sàn || Đặt thép và ống điện nằm trong sàn || Đổ bê tông, máy san phẳng mặt sàn || Kiểm tra độ phẳng và độ cao
sợ: Quên chừa lỗ cho ống nước thì sau phải khoan cắt, có thể đứt thép chịu lực. Tháo cây chống sớm thì sàn võng, nứt.
số: 20–25 cm | Độ dày một sàn || 1 cm | Mặt sàn được cao thấp tối đa so với thiết kế || 70% | Bê tông đạt 70% độ cứng mới được tháo khuôn đáy sàn (với nhịp vừa)
từ: Cột = cấu kiện đứng, chịu lực || Dầm = thanh nằm ngang đỡ sàn || Sàn = tấm bê tông làm mặt đi lại của mỗi tầng

## 17 | Sàn căng cáp — sàn rộng mà không cần thêm cột
nói: Trong sàn người ta luồn những sợi cáp thép rất khỏe, uốn cong. Khi bê tông cứng thì kéo căng cáp: sàn bị "ép" lại nên chịu tải tốt hơn, vượt được khoảng rộng mà không cần thêm cột.
giống: Như cầm một chồng sách nằm ngang: ép mạnh hai đầu thì cả chồng không rơi. Cáp căng chính là đôi tay ép đó.
bước: Luồn cáp thép uốn cong trong ống mềm || Đổ bê tông bọc kín cáp || Kéo căng cáp bằng kích: sàn hơi vồng lên || Bơm vữa vào ống để cáp không bị gỉ
sợ: Sau này ai khoan trần bừa bãi có thể cắt đứt cáp đang căng, rất nguy hiểm. Vị trí cáp phải được đánh dấu vĩnh viễn.
số: 12–15 m | Khoảng cách giữa hai cột mà sàn vẫn vượt qua được || 20 tấn | Lực kéo một sợi cáp || 7% | Độ giãn dài đo thực tế được lệch tối đa so với tính toán
từ: Dự ứng lực = tạo sẵn lực ép vào bê tông trước khi nó chịu tải || Cáp 7 sợi = dây cáp gồm 7 sợi thép xoắn lại || Vồng = cong nhẹ lên trên

## 18 | Cột ống thép nhồi bê tông
nói: Ở các tầng dưới chịu nặng nhất, cột là một ống thép rỗng được bơm đầy bê tông bên trong. Thép ôm bê tông, bê tông đỡ thép: cột nhỏ mà rất khỏe.
giống: Như ống tre nhồi chặt cát: riêng ống tre dễ bẹp, riêng cát thì rời rạc, kết hợp lại thì rất cứng.
bước: Cẩu đốt cột thép đặt lên cột bên dưới || Hàn nối hai đốt, kiểm tra mối hàn bằng siêu âm || Bơm bê tông thật lỏng từ chân cột lên đầy ống || Thép bó chặt bê tông, cột chịu được lực ép rất lớn
sợ: Bê tông không đầy, còn chỗ rỗng thì cột yếu đi. Thiếu lỗ thoát hơi thì khi cháy ống có thể nổ.
số: 30–40% | Cột nhỏ hơn chừng này so với cột bê tông thường cùng sức chịu || 100% | Tỷ lệ mối hàn được kiểm tra bằng siêu âm || 70 cm | Khi thử, bê tông tự loang rộng chừng này: đủ lỏng để không cần đầm
từ: CFT = cột ống thép nhồi bê tông || Bê tông tự đầm (SCC) = bê tông rất lỏng, tự chảy lấp đầy khuôn || Mối hàn = chỗ nối thép bằng nhiệt

## 19 | Ván khuôn nhôm — 4 ngày xong một tầng
nói: Thay vì khuôn gỗ, người ta dùng những tấm nhôm đúc sẵn, nhẹ, ghép bằng chốt. Tháo ra lắp lên tầng trên rất nhanh, mặt bê tông lại phẳng mịn đến mức khỏi cần trát.
giống: Như khay làm đá viên dùng lại hàng trăm lần, lần nào viên đá cũng đẹp như nhau.
bước: Ngày 1: lắp khuôn tường || Ngày 2: lắp khuôn sàn || Ngày 3: đặt thép, đi ống || Ngày 4: đổ bê tông, rồi tháo khuôn chuyển lên tầng trên
sợ: Nếu tháo cây chống theo lịch trong khi bê tông chưa đủ cứng (trời lạnh, mưa) thì sàn võng. Phải tháo theo kết quả thử, không theo ngày.
số: 4 ngày | Thời gian xong một tầng || 23 kg | Một mét vuông khuôn nhôm nặng chừng này, một người bê được || 200+ lần | Số lần dùng lại một bộ khuôn
từ: Ván khuôn nhôm = khuôn đổ bê tông bằng nhôm đúc || Chốt nêm = chốt kim loại để ghép các tấm khuôn || Trát = phủ một lớp vữa lên tường cho phẳng

## 20 | Dầm chuyển — "cây cầu" đỡ các cột phía trên
nói: Tầng trên là khách sạn cần nhiều cột sát nhau, tầng dưới là trung tâm thương mại cần không gian rộng, ít cột. Một dầm bê tông khổng lồ cao 4 m gom lực từ các cột trên và chuyển xuống vài cột lớn bên dưới.
giống: Như cây cầu: trên cầu có nhiều người đứng, nhưng cầu chỉ tì xuống hai trụ.
bước: Dựng rừng giàn chống dày đặc bên dưới || Đan thép dầm nhiều lớp || Đổ bê tông làm hai đợt || Lực từ cột trên đi theo đường xiên xuống hai cột lớn
sợ: Lúc mới đổ, dầm nặng hàng nghìn tấn mà chưa tự đỡ được mình. Giàn chống bên dưới yếu là sập.
số: 4 m | Chiều cao dầm, hơn cả trần một tầng nhà || 5 mm | Giàn chống lún quá mức này khi đổ là dừng ngay || 2 đợt | Lớp dưới cứng rồi mới đỡ lớp trên
từ: Dầm chuyển = dầm rất lớn chuyển lực từ cột phía trên sang chỗ khác || Giàn chống = hệ cột thép tạm đỡ bê tông khi chưa cứng || Nhịp = khoảng cách giữa hai chỗ đỡ

## 21 | Lưới bao che an toàn trên cao
nói: Mấy tầng trên cùng đang thi công được bọc kín bằng khung thép và tấm tôn đục lỗ. Lớp bao này tự leo lên theo tòa nhà, để không ai ngã và không vật gì rơi xuống phố.
giống: Như lan can và lưới chắn ở ban công chung cư, nhưng bọc kín cả 4 tầng và tự di chuyển được.
bước: Neo khung bao che vào mép sàn || Kích tự nâng cả lớp bao che lên tầng mới || Thử: dụng cụ rơi vào bị giữ lại || Ban đêm bật đèn cho công nhân làm việc an toàn
sợ: Một chiếc cờ lê rơi từ độ cao 200 m có thể làm chết người dưới đường. Khe hở ở góc nhà là chỗ hay bị bỏ sót.
số: 4 tầng | Số tầng trên cùng được bọc kín || 1,07 m | Chiều cao lan can tối thiểu || 0 | Mục tiêu số vụ tai nạn
từ: Sàn bao che = lớp khung và tấm chắn bao quanh các tầng đang thi công || Lan can = thanh chắn ở mép sàn || Vật rơi = dụng cụ, vật liệu rơi từ trên cao

## 22 | Kiểm tra mà không phá: siêu âm bê tông và mối hàn
nói: Không thể đập vỡ cột để xem bên trong. Người ta dùng sóng siêu âm, súng bật nảy và máy quét để "nhìn xuyên" bê tông, mối hàn, mối nối thép.
giống: Như siêu âm thai hay chụp X-quang: thấy được bên trong mà không cần mổ.
bước: Hai đầu dò áp hai bên cột, sóng âm chạy xuyên qua || Sóng chạy nhanh nghĩa là bê tông đặc chắc || Quét mối hàn thép: không có tiếng vọng lạ là tốt || Đóng dấu ĐẠT và ghi kết quả vào đúng cấu kiện trên mô hình
sợ: Chỉ nhìn bằng mắt thì bỏ sót chỗ rỗng bên trong và vết nứt ngầm trong mối hàn.
số: 4 km/giây | Sóng âm chạy qua bê tông tốt nhanh hơn mức này || 100% | Mối hàn nối cột chính đều được siêu âm || 1/500 | Cứ 500 mối nối thép lấy 1 mẫu kéo đứt thử
từ: NDT = kiểm tra không phá hủy || Siêu âm = dùng sóng âm tần số cao để dò bên trong vật || Súng bật nảy = dụng cụ bắn vào bề mặt, đo độ nảy để đoán độ cứng

## 23 | Cất nóc và quét laser 3D cả tòa nhà
nói: Đổ xong sàn mái là lễ cất nóc. Sau đó máy quét laser chụp hàng triệu điểm để dựng lại hình dáng thật của tòa nhà, rồi so với thiết kế xem lệch bao nhiêu.
giống: Như chụp ảnh 3D cả tòa nhà rồi đặt chồng lên bản vẽ gốc để so từng chút.
bước: Đổ mẻ bê tông cuối cùng trên mái || Máy quét laser xoay tròn, chụp hàng triệu điểm || Các điểm ghép lại thành hình tòa nhà thật || So với thiết kế: xanh là đúng, đỏ là lệch
sợ: Đo lúc gió to hay nắng gắt, tòa nhà đang cong nhẹ, kết quả sẽ sai.
số: 6,4 cm | Ví dụ: đỉnh tháp lệch so với chân, trên chiều cao 220 m || 11 cm | Giới hạn cho phép (bằng 1/2000 chiều cao) || 2 triệu | Số điểm một máy chụp được mỗi giây
từ: Cất nóc = hoàn thành phần kết cấu cao nhất || Đám mây điểm = hàng triệu điểm đo ghép thành hình 3D || Hoàn công = hình dạng thực tế sau khi xây xong

## 24 | Tháo cần cẩu khỏi đỉnh tháp
nói: Cẩu lớn đang đứng trên nóc cao 200 m. Nó được tháo từng mảnh bằng một cẩu nhỏ hơn, rồi cẩu nhỏ lại được tháo bằng cẩu nhỏ hơn nữa, cuối cùng chở xuống bằng thang.
giống: Như búp bê Nga làm ngược: dùng con nhỏ để tháo con lớn.
bước: Cẩu lớn tự hạ thấp xuống sát mái || Cẩu phụ nhấc từng đốt, cánh tay, khối đối trọng xuống đất || Cẩu phụ lại được tháo bằng cẩu nhỏ hơn || Lỗ để lại trên sàn được đổ bù bê tông và chống thấm
sợ: Lỗ không được bù kỹ thì sau này dột nước, sàn yếu đúng chỗ đó.
số: 12,5 m/giây | Gió vượt mức này là dừng tháo || 48 giờ | Ngâm nước thử chống thấm chỗ lỗ đã bù
từ: Cẩu phụ (derrick) = cẩu nhỏ đặt trên mái || Đối trọng = khối nặng cân bằng phía sau cẩu || Đổ bù = lấp lỗ bằng bê tông mới

## 25 | Lắp kính mặt ngoài
nói: Vỏ kính được làm sẵn ở nhà máy thành từng tấm lớn có cả khung, mang lên móc vào mép sàn. Kính phải chịu được bão, không cho nước mưa lọt vào và giảm nóng.
giống: Như lắp các ô cửa sổ khổng lồ đã làm sẵn, khớp vào nhau như vảy cá.
bước: Tấm kính được cẩu nhỏ đưa lên || Công nhân bên trong kéo vào, móc lên giá đỡ || Tấm sau khớp ngàm với tấm trước, gioăng cao su ép kín || Thử mưa gió: nước bị dẫn ra ngoài, không lọt vào nhà
sợ: Khe giữa mép sàn và kính không được chặn lửa thì khi cháy, lửa leo từ tầng này lên tầng khác.
số: 350 kg | Một tấm kính lớn || 400 kg/m² | Kính chịu được gió bão đẩy mạnh cỡ này ở góc nhà || 2 mm | Hai tấm kế nhau được lệch tối đa
từ: Mặt dựng = lớp vỏ ngoài của tòa nhà || Unitized = kiểu tấm làm sẵn trọn bộ ở nhà máy || Kính Low-E = kính phủ lớp mỏng để giảm nóng

## 26 | Đường ống dọc tòa nhà — hệ "mạch máu"
nói: Trong các hộp kỹ thuật chạy dọc tòa nhà có ống nước lạnh cho điều hòa, ống nước sinh hoạt, ống chữa cháy, ống gió, dây điện, đưa nước, không khí và điện lên mọi tầng.
giống: Như mạch máu và dây thần kinh chạy dọc cơ thể.
bước: Gắn giá đỡ vào tường lõi || Kéo từng đoạn ống lên nối lại với nhau || Bơm nước áp lực cao thử xem có rò không || Bọc cách nhiệt ống lạnh, bịt kín chỗ ống xuyên sàn bằng vật liệu chống cháy
sợ: Nhà cao, nước ở đáy ống bị dồn áp lực rất lớn; không chia vùng thì vỡ van. Lỗ ống xuyên sàn không bịt thì thành ống khói dẫn lửa khi cháy.
số: 13,8 bar | Áp lực thử ống chữa cháy trong 2 giờ, gấp khoảng 6 lần lốp ô tô || 6 bar | Mỗi vùng áp lực không quá mức này, nhờ van giảm áp || 2 giờ | Lớp bịt lỗ ống chịu lửa được chừng này
từ: Trục kỹ thuật = hộp rỗng chạy dọc nhà để đi ống và dây || MEP = cơ khí, điện, nước nói chung || Bảo ôn = lớp xốp bọc ống lạnh để không đọng nước

## 27 | Thang máy tốc độ cao
nói: Thang máy chạy 7 mét mỗi giây, lên tầng 55 trong khoảng nửa phút. Ray dẫn hướng phải thẳng tuyệt đối để thang êm. Có thang riêng cho lính cứu hỏa.
giống: Như tàu cao tốc chạy thẳng đứng: đường ray cong một chút là rung lắc ngay.
bước: Dựng ray dẫn hướng thẳng bằng laser || Đặt máy kéo lên phòng máy trên đỉnh || Cho thang chạy thử, đo rung và tiếng ồn || Thử mất điện: thang tự về tầng gần nhất và mở cửa
sợ: Thang kẹt giữa tầng khi mất điện, hoặc khi cháy không có thang cho lính cứu hỏa lên.
số: 7 m/giây | Tốc độ thang, khoảng 25 km/giờ theo chiều đứng || 1 mm trên 5 m | Ray được lệch tối đa || 60 giây | Thang cứu hỏa phải lên tới tầng cao nhất trong thời gian này
từ: Ray dẫn hướng = thanh thép đứng giữ cho buồng thang chạy thẳng || Cabin = buồng chở người || Bộ cứu hộ tự động (ARD) = thiết bị đưa cabin về tầng khi mất điện

## 28 | Điện: trạm biến áp và máy phát dự phòng
nói: Điện lưới 22.000 vôn vào trạm biến áp, được hạ xuống thành điện dùng được, rồi chạy lên các tầng qua những thanh dẫn điện lớn. Mất điện thì máy phát tự chạy trong vài giây.
giống: Như nhà có bộ lưu điện: cúp điện là tự bật, nhưng ở quy mô cả tòa nhà.
bước: Đưa máy phát nặng 20 tấn vào phòng máy || Nối các thanh dẫn điện, siết ốc đúng lực || Đóng điện: dòng điện chạy lên cả tòa nhà || Thử cắt điện lưới: máy phát tự chạy, đèn sáng lại
sợ: Mất điện mà máy phát không lên thì thang máy dừng, quạt hút khói tắt, cực kỳ nguy hiểm nếu đang có cháy.
số: 10 giây | Máy phát phải cấp điện lại trong thời gian này || 22.000 V | Điện lưới trung thế đi vào tòa nhà || 10.000 kVA | Công suất trạm biến áp ví dụ, đủ cho hàng nghìn căn hộ
từ: Trạm biến áp = thiết bị hạ điện áp cao xuống mức dùng được || Busway = thanh dẫn điện lớn bọc vỏ, thay cho dây cáp || Máy phát dự phòng = máy nổ tạo điện khi mất điện lưới

## 29 | Phòng cháy chữa cháy
nói: Khi có khói, đầu báo phát hiện và kêu. Khi trần nóng tới 68°C, đầu phun tự vỡ và phun nước. Quạt thổi không khí vào cầu thang để khói không lọt vào lối thoát.
giống: Như mỗi phòng có một bình xịt tự động trên trần, còn cầu thang luôn được thổi gió cho sạch khói.
bước: Đám cháy nhỏ, khói bốc lên trần, đầu báo kêu || Trần nóng 68°C: bóng thủy tinh đầu phun vỡ, nước phun ra || Quạt thổi khí vào cầu thang, hút khói ở hành lang || Bơm chữa cháy tự chạy, lửa bị khống chế
sợ: Khói giết người nhiều hơn lửa. Cầu thang đầy khói thì không ai thoát ra được.
số: 68°C | Nhiệt độ làm bóng đầu phun vỡ || 20–50 Pa | Không khí trong cầu thang được giữ áp cao hơn bên ngoài chừng này để đẩy khói ra || 10 kg | Lực đẩy cửa thoát hiểm tối đa, trẻ em vẫn đẩy được
từ: Sprinkler = đầu phun nước tự động gắn trên trần || Tăng áp = thổi không khí vào để áp suất cao hơn, khói không vào được || PCCC = phòng cháy chữa cháy

## 30 | Xây tường ngăn bằng gạch nhẹ
nói: Tường ngăn phòng dùng gạch bê tông khí (AAC) nhẹ, cách âm và chịu lửa tốt. Gạch được xây bằng keo mỏng và chừa một khe mềm sát trần, để sàn võng nhẹ không làm nứt tường.
giống: Như kê tủ sát trần mà chừa một khe nhỏ: trần hơi võng xuống cũng không ép vỡ tủ.
bước: Bắn tia laser kẻ đường thẳng trên sàn và trần || Xếp từng viên gạch bằng lớp keo mỏng 2–3 mm || Chừa khe 2 cm sát trần, nhét vật liệu chống cháy || Trát mặt tường phẳng mịn
sợ: Xây chèn kín sát trần thì khi sàn võng, tường bị ép nứt chéo.
số: 1/3 | Gạch AAC chỉ nặng khoảng 1/3 gạch đất nung || 2 cm | Khe mềm chừa sát trần || 3 mm trên 2 m | Mặt tường trát được lồi lõm tối đa
từ: AAC = gạch bê tông khí, có nhiều bọt khí nhỏ nên rất nhẹ || Khe mềm = khe chừa lại, nhét vật liệu đàn hồi || Trát = phủ vữa lên tường cho phẳng

## 31 | Chống thấm nhà vệ sinh, ban công, mái
nói: Sàn nhà vệ sinh, ban công, mái được quét nhiều lớp chống thấm co giãn, rồi đổ nước ngâm 48 giờ xem có rỉ xuống tầng dưới không.
giống: Như thử một cái chậu mới: đổ nước vào để qua đêm xem có rỉ không rồi mới dùng.
bước: Quét 3 lớp chống thấm thành một tấm thảm liền mạch || Bịt kỹ quanh các ống xuyên sàn || Đổ nước ngâm 48 giờ, theo dõi mực nước || Tầng dưới khô ráo là đạt, lúc đó mới lát gạch
sợ: Chỗ hay rò nhất là quanh chân ống và ngưỡng cửa. Thợ lát gạch đến sau có thể đục thủng lớp chống thấm.
số: 48 giờ | Thời gian ngâm thử || 1,5 mm | Lớp chống thấm khô phải dày tối thiểu chừng này || 30 cm | Lớp chống thấm được quét lên chân tường chừng này
từ: Chống thấm = làm cho nước không xuyên qua được || Ngâm thử = đổ nước lên rồi chờ xem có rò không || Cổ ống = chỗ ống đi xuyên qua sàn

## 32 | Hoàn thiện sảnh, hành lang và ánh sáng
nói: Sảnh lát đá, có trần đèn, cửa chống cháy. Đẹp nhưng phải an toàn: đá không trơn khi ướt, đèn đủ sáng, mất điện vẫn có đèn chỉ lối thoát.
giống: Sảnh là bộ mặt của tòa nhà, giống phòng khách của một ngôi nhà.
bước: Lắp khung trần treo || Lắp đèn âm trần || Lát đá, chỉnh cho các viên bằng mặt nhau || Đo độ sáng khắp sảnh
sợ: Đá quá bóng thì trơn ngã. Đá không xử lý mặt sau thì bị ố vàng. Đèn thoát hiểm không đủ sáng thì không tìm được lối ra khi mất điện.
số: 0,5 mm | Mép hai viên đá được cao thấp tối đa || 200–300 lux | Độ sáng sảnh (một văn phòng sáng khoảng 500 lux) || 1 giờ | Đèn thoát hiểm phải sáng ít nhất chừng này khi mất điện
từ: Lux = đơn vị đo độ sáng || Cửa chống cháy = cửa chặn được lửa trong một thời gian nhất định || Trần treo = trần giả treo bên dưới sàn bê tông

## 33 | Bộ não của tòa nhà (BMS)
nói: Hàng chục nghìn cảm biến đo nhiệt độ, độ ẩm, khí CO₂, có người hay không, rồi gửi về phòng điều khiển. Hệ thống tự bật tắt điều hòa và đèn cho tiết kiệm.
giống: Như nhà thông minh điều khiển bằng điện thoại, nhưng tự động và lớn gấp nghìn lần.
bước: Cảm biến trong phòng gửi dữ liệu về trung tâm || Màn hình hiện tòa nhà 3D với nhiệt độ từng tầng || Tối, văn phòng vắng: tự giảm điều hòa, tắt bớt đèn || Phòng họp đông, CO₂ tăng: tự thổi thêm gió tươi
sợ: Kết nối mạng không bảo mật thì kẻ xấu có thể xâm nhập và điều khiển tòa nhà.
số: 30.000 | Số điểm đo và điều khiển || 2 giây | Báo động phải hiện lên màn hình trong thời gian này || 1.000 ppm | Mức CO₂ trong phòng không nên vượt; cao hơn sẽ thấy buồn ngủ
từ: BMS = hệ thống quản lý tòa nhà || IoT = các thiết bị nhỏ kết nối mạng || CO₂ = khí con người thở ra, nhiều thì thấy ngột ngạt

## 34 | Diễn tập tổng: mọi hệ thống chạy cùng lúc
nói: Từng hệ thống chạy riêng tốt vẫn chưa đủ. Người ta giả lập cháy và cúp điện cùng lúc, xem báo cháy, quạt, thang máy, cửa chống cháy, máy phát có phối hợp đúng không.
giống: Như dàn nhạc tập chung: từng người chơi giỏi chưa đủ, phải vào nhịp cùng nhau.
bước: Bật giả lập cháy ở tầng hầm || Chuông kêu, quạt thổi cầu thang chạy, cửa chống cháy tự đóng || Thang máy về tầng trệt, mở cửa || Cắt điện lưới: máy phát lên, mọi thứ vẫn chạy, tất cả báo xanh
sợ: Mỗi hệ thống thử riêng đều đạt, nhưng chạy cùng lúc thì máy phát quá tải, quạt không lên.
số: 1.284 | Số bước kiểm tra trong buổi diễn tập ví dụ || 60 giây | Quạt hút khói và quạt cầu thang phải chạy trong thời gian này || 10% | Lượng gió, lượng nước được lệch tối đa so với thiết kế
từ: Chạy thử tổng thể (commissioning) = chạy thử và chỉnh hệ thống trước khi bàn giao || Liên động = hệ thống này tự kích hoạt hệ thống kia || Bảng nhân – quả = bảng ghi "có tín hiệu A thì thiết bị B phải làm gì"

## 35 | Thử tải: tòa nhà có chịu nổi không?
nói: Người ta chất tải thật (bồn nước, bao cát) lên một sàn mẫu, đo xem sàn võng bao nhiêu, rồi dỡ tải xem sàn có trở lại như cũ không. Đồng thời đo độ lún, độ nghiêng và độ rung của cả tòa tháp.
giống: Như thử ghế mới: ngồi lên xem có lún không, đứng dậy xem có bật lại không.
bước: Chất bồn nước lên sàn theo 4 mức || Cảm biến trong bê tông báo sàn võng bao nhiêu || Giữ 24 giờ rồi dỡ tải: sàn hồi lại || Máy tính xác nhận cả tòa nhà làm việc an toàn
sợ: Tính toán trên máy đẹp nhưng thực tế khác nhiều thì phải tìm nguyên nhân ngay, trước khi cho người vào ở.
số: 24 giờ | Thời gian giữ tải thử || 75% | Sàn phải hồi lại ít nhất chừng này sau khi dỡ tải || 15% | Độ rung đo thực tế được lệch tối đa so với máy tính tính ra
từ: Thử tải = chất tải thật để kiểm tra || Độ võng = mức cong xuống của sàn, dầm || FEA = cách máy tính chia công trình thành hàng triệu mảnh nhỏ để tính lực

## 36 | Nghiệm thu phòng cháy cùng cảnh sát PCCC
nói: Cảnh sát PCCC đến kiểm tra và diễn tập cứu hỏa thật. Xe thang chỉ với tới khoảng 50 m, phần nhà cao hơn phải tự bảo vệ bằng hệ thống bên trong.
giống: Như một kỳ thi bắt buộc: không qua thì tòa nhà không được đón người vào.
bước: Còi báo cháy toàn tòa nhà, mọi người thoát xuống theo cầu thang || Xe thang vươn lên, chỉ tới vạch khoảng 50 m || Phía trên vạch: thang cứu hỏa, vòi nước, đầu phun bên trong đảm nhận || Bơm nước từ xe vào tòa nhà, vòi phun đạt: ký chấp thuận
sợ: Tầng 55 cao gấp 4 lần tầm với của xe thang. Nếu hệ thống bên trong hỏng, không ai cứu được từ bên ngoài.
số: ~54 m | Tầm với của xe thang thông dụng || 6 m | Tia nước từ vòi phun phải bắn xa ít nhất chừng này || 3,5 m | Đường cho xe cứu hỏa phải rộng tối thiểu
từ: Nghiệm thu PCCC = cảnh sát kiểm tra và chấp thuận hệ thống chữa cháy || Họng nước = vòi nước chữa cháy gắn trên tường || Tầng lánh nạn = tầng an toàn để người tạm trú khi cháy

## 37 | Hồ sơ hoàn công
nói: Mọi bản vẽ thực tế, giấy chứng nhận vật liệu, biên bản kiểm tra, nhật ký công trường được gom lại và số hóa, gắn với từng cột, từng dầm trên mô hình 3D.
giống: Như giấy khai sinh và sổ khám bệnh của tòa nhà, dùng suốt 50 năm.
bước: Hàng chục nghìn tệp được sắp vào thư mục chuẩn || Bấm vào một cây cột: hiện giấy tờ thép, kết quả thử bê tông || Đóng dấu, ký số các văn bản pháp lý || Lưu cả bản giấy và bản số, kiểm tra đủ 100%
sợ: Bản vẽ hoàn công làm cho có, không giống thực tế, thì 20 năm sau sửa chữa không ai biết bên trong có gì.
số: 48.000 | Số tệp hồ sơ ví dụ || 100% | Hạng mục phải có bản vẽ hoàn công
từ: Hoàn công = ghi lại đúng những gì đã xây trên thực tế || CO/CQ = giấy xuất xứ và giấy chất lượng của vật liệu || ĐTM = đánh giá tác động môi trường

## 38 | Nghiệm thu ba bên
nói: Chủ đầu tư, tư vấn giám sát và nhà thầu cùng đi kiểm tra từng phòng, ghi lại mọi lỗi. Lỗi ảnh hưởng an toàn phải sửa hết mới được ký.
giống: Như khi nhận bàn giao căn hộ: đi soi từng góc, ghi lỗi lại để chủ thầu sửa.
bước: Đoàn kiểm tra đi từng phòng, đánh dấu lỗi trên máy tính bảng || Lỗi đỏ là an toàn, vàng là vận hành, xanh dương là thẩm mỹ || Nhà thầu sửa dần, dấu lỗi chuyển xanh lá || Ba bên ký số: ĐÃ DUYỆT
sợ: Nhận nhà còn lỗi an toàn thì người ở gánh rủi ro. Không ghi rõ ai chịu trách nhiệm thì về sau cãi nhau.
số: 0 | Số lỗi an toàn được phép còn lại khi ký || 24 tháng | Thời gian bảo hành tối thiểu cho công trình lớn || 3% | Số tiền giữ lại để bảo hành, tối thiểu
từ: Chủ đầu tư = bên bỏ tiền ra xây || Tư vấn giám sát = bên thay chủ đầu tư kiểm tra chất lượng || Danh sách lỗi (punch list) = danh sách những chỗ cần sửa

## 39 | Sổ tay vận hành và đào tạo người quản lý
nói: Nhà thầu bàn giao sổ tay hướng dẫn mọi thiết bị (cách chạy, khi nào bảo dưỡng) và đào tạo đội kỹ thuật của tòa nhà cho đến khi họ tự làm được.
giống: Như mua ô tô mới: có sổ hướng dẫn, lịch bảo dưỡng và người dạy lái.
bước: Trao sổ tay số trên máy tính bảng || Bấm vào thiết bị: hiện thông số, lịch bảo dưỡng, video hướng dẫn || Kỹ thuật viên thực hành trên thiết bị thật || Đủ giờ học, thi đạt: trao quyền vận hành
sợ: Đội vận hành không hiểu hệ thống thì tòa nhà tốn điện, thiết bị hỏng sớm, mất quyền bảo hành.
số: 200 giờ | Tổng thời gian đào tạo tối thiểu || 30.000+ | Số thiết bị có hồ sơ riêng || 4–12 tuần | Nhà thầu ở lại hỗ trợ sau khi bàn giao
từ: O&M = vận hành và bảo trì || Bảo trì = chăm sóc định kỳ để thiết bị chạy tốt || COBie = bảng dữ liệu chuẩn về thiết bị

## 40 | Bàn giao chìa khóa và công trình xanh
nói: Lễ bàn giao diễn ra, tòa nhà bắt đầu hoạt động. Chứng nhận "công trình xanh" xác nhận tòa nhà tiết kiệm điện, nước và thân thiện với môi trường.
giống: Như dán nhãn tiết kiệm năng lượng 5 sao cho tủ lạnh, nhưng cho cả tòa nhà.
bước: Trao chìa khóa vàng, cắt băng khánh thành || Gắn chứng nhận công trình xanh lên sảnh || Tòa nhà sáng đèn từng tầng || Theo dõi điện nước 12 tháng để chứng minh tiết kiệm thật
sợ: Thiết kế tiết kiệm nhưng vận hành sai thì vẫn tốn điện như thường.
số: 28% | Tiết kiệm năng lượng so với tòa nhà thông thường (ví dụ) || 38% | Tiết kiệm nước || 3.400 tấn | Lượng khí CO₂ giảm mỗi năm
từ: LEED / LOTUS = các bộ chứng nhận công trình xanh (của Mỹ / của Việt Nam) || Công trình xanh = tòa nhà tiết kiệm tài nguyên, tốt cho sức khỏe || Năng lượng = điện và nhiên liệu tòa nhà dùng
