import React, { useState, useMemo } from 'react';
import {
  Trees,
  Scale,
  Newspaper,
  Leaf,
  GraduationCap,
  Layers,
  Search,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  BookOpen,
  MapPin,
  FileText,
  PlusCircle,
  Filter,
  Calendar,
  Building2,
  UserCheck,
  Sparkles,
  Compass,
  ShieldAlert,
  Download,
  Globe,
  ChevronRight,
  Eye,
  X,
  ArrowUpRight,
  Database,
  Satellite,
  Sprout,
  Award,
  Check,
  Menu,
  Phone,
  Mail,
  Info
} from 'lucide-react';

// ==========================================
// DỮ LIỆU MẪU CHUẨN CHUYÊN NGÀNH LÂM NGHIỆP
// ==========================================

const INITIAL_NEWS = [
  {
    id: 'news-1',
    title: 'Bộ Nông nghiệp và Môi trường đẩy mạnh chuyển đổi số và chuẩn hóa cơ sở dữ liệu rừng quốc gia trên nền tảng WebGIS',
    category: 'Bộ NN&MT',
    author: 'Cổng TTĐT Bộ Nông nghiệp & Môi trường',
    date: '15/11/2026',
    readTime: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
    summary: 'Chỉ đạo mới nhất từ Bộ Nông nghiệp và Môi trường về việc tích hợp ảnh viễn thám độ phân giải cao và hệ thống thông tin địa lý (GeoGIS) phục vụ giám sát diễn biến rừng tự nhiên và kiểm kê tín chỉ carbon rừng.',
    content: `Bộ Nông nghiệp và Môi trường vừa ban hành kế hoạch hành động đẩy mạnh ứng dụng công nghệ số trong quản lý, bảo vệ và phát triển rừng bền vững giai đoạn 2026 - 2030. Trọng tâm của kế hoạch là đồng bộ hóa dữ liệu bản đồ giải thửa đất lâm nghiệp với hệ thống theo dõi diễn biến rừng toàn quốc.

Các hạt kiểm lâm và ban quản lý rừng phòng hộ, rừng đặc dụng trên toàn quốc sẽ chuyển sang sử dụng đồng bộ các công cụ bản đồ địa không gian trực tuyến (WebGIS), thiết bị di động thông minh kết hợp trạm định vị vệ tinh để cập nhật ranh giới tiểu khu, khoảnh, lô theo thời gian thực.

Bên cạnh đó, việc số hóa hồ sơ lâm sản và liên thông dữ liệu văn bản quy phạm pháp luật hợp nhất giúp lực lượng kiểm lâm tra cứu nhanh các quy định xử phạt hành chính ngay tại hiện trường.`,
    tags: ['Chuyển đổi số', 'Bộ NN&MT', 'Kiểm kê rừng', 'Tín chỉ Carbon'],
    isFeatured: true
  },
  {
    id: 'news-2',
    title: 'Cục Lâm nghiệp & Kiểm lâm cảnh báo nguy cơ cháy rừng cấp cực kỳ nguy hiểm và hướng dẫn tuần tra bằng công nghệ số',
    category: 'Cục Lâm nghiệp - Kiểm lâm',
    author: 'Phòng Quản lý Bảo vệ rừng & PCCCR',
    date: '12/11/2026',
    readTime: '4 phút đọc',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    summary: 'Cập nhật danh sách các vùng trọng điểm có nguy cơ cháy rừng cao và quy trình sử dụng hệ thống cảnh báo điểm cháy vệ tinh kết hợp ứng dụng Bảo vệ rừng tại hiện trường.',
    content: `Theo thông báo từ Cục Lâm nghiệp và Cục Kiểm lâm, tình hình thời tiết hanh khô kéo dài tại nhiều khu vực dẫn đến nguy cơ cháy rừng ở mức cấp IV, cấp V (cấp cực kỳ nguy hiểm).

Cục yêu cầu lực lượng Kiểm lâm địa phương phối hợp chặt chẽ với chủ rừng tăng cường tuần tra, sử dụng hệ thống bản đồ số GeoGIS để xác định nhanh tọa độ điểm phát nhiệt từ vệ tinh MODIS/VIIRS, đồng thời thiết lập đường băng cản lửa đúng quy phạm kỹ thuật.`,
    tags: ['Kiểm lâm', 'PCCC Rừng', 'Cảnh báo sớm', 'Viễn thám'],
    isFeatured: false
  },
  {
    id: 'news-3',
    title: '[Bài viết định kỳ] Kỹ thuật nhân giống và trồng cây dược liệu Sâm cau, Cây An xoa dưới tán rừng tự nhiên bền vững',
    category: 'Góc Chuyên Gia (Định kỳ)',
    author: 'Nhóm Nghiên cứu Lâm sinh & Lâm sản ngoài gỗ - Ban Biên tập',
    date: '10/11/2026',
    readTime: '8 phút đọc',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80',
    summary: 'Báo cáo chuyên đề định kỳ của đội ngũ chuyên gia trang: Quy trình tuyển chọn cây trội, xử lý hom giống và mô hình canh tác dược liệu dưới tán rừng phù hợp với Nghị định 91/2024/NĐ-CP.',
    content: `Phát triển lâm sản ngoài gỗ và cây dược liệu dưới tán rừng đang là hướng đi chiến lược giúp nâng cao sinh kế cho người làm nghề rừng mà không làm thay đổi cấu trúc tán rừng tự nhiên.

1. Đối với cây Sâm cau (Curculigo orchioides Gaertn):
- Điều kiện lập địa: Ưa bóng nhẹ (độ tàn che từ 0.4 - 0.6), đất thịt nhẹ giàu mùn dưới tán rừng thứ sinh hoặc rừng trồng cây bản địa lâu năm.
- Kỹ thuật nhân giống: Nhân giống từ đoạn thân ngầm hoặc nuôi cấy mô tế bào giúp hệ số nhân cao và giữ nguyên hàm lượng hoạt chất saponin.

2. Đối với Cây An xoa (Helicteres hirsuta Lour.):
- Đặc tính sinh thái: Cây bụi gỗ nhỏ, sinh trưởng mạnh ở vùng đất đồi thoát nước tốt.
- Quy định pháp lý: Căn cứ Nghị định 91/2024/NĐ-CP sửa đổi Nghị định 156/2018/NĐ-CP, chủ rừng cần lập phương án nuôi trồng dược liệu dưới tán rừng trình cơ quan có thẩm quyền phê duyệt, đảm bảo không chặt phá cây rừng tự nhiên.`,
    tags: ['Dược liệu dưới tán rừng', 'Sâm cau', 'Cây An xoa', 'Lâm sinh'],
    isFeatured: true
  },
  {
    id: 'news-4',
    title: '[Bài viết định kỳ] Hướng dẫn chuẩn hóa lớp bản đồ lô rừng (Shapefile/GeoJSON) lên hệ thống WebGIS Bảo Vệ Rừng',
    category: 'Góc Chuyên Gia (Định kỳ)',
    author: 'KS. Địa không gian & Lâm nghiệp - Ban Quản trị GIS.VN',
    date: '06/11/2026',
    readTime: '7 phút đọc',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80',
    summary: 'Quy trình chuyển đổi hệ tọa độ VN-2000 sang WGS84 và đồng bộ thuộc tính Tiểu khu - Khoảnh - Lô - Trạng thái rừng theo Thông tư 33/2018/TT-BNNPTNT và Thông tư 24/2024/TT-BNNPTNT.',
    content: `Trong công tác điều tra, quy hoạch và theo dõi diễn biến rừng, việc chuyển đổi dữ liệu từ phần mềm MapInfo, QGIS hoặc ArcGIS lên nền tảng WebGIS trực tuyến đòi hỏi sự chuẩn hóa nghiêm ngặt về hệ quy chiếu và bảng thuộc tính (Attribute Table).

Bài viết hướng dẫn chi tiết các bước:
- Kiểm tra lỗi hình học (Topology) của các polygon lô rừng.
- Thiết lập tham số lưới chiếu VN-2000 múi 3 độ theo từng tỉnh thành trước khi xuất sang chuẩn GeoJSON hiển thị trên https://baoverung.vercel.app/geogis.
- Đối chiếu mã loại đất, loại rừng theo bảng mã quy định mới nhất của Bộ Nông nghiệp và Môi trường.`,
    tags: ['WebGIS', 'VN-2000', 'Bản đồ lâm nghiệp', 'QGIS'],
    isFeatured: false
  },
  {
    id: 'news-5',
    title: 'Thị trường tín chỉ Carbon rừng Việt Nam: Cơ hội tài chính xanh mới cho các Ban quản lý rừng và cộng đồng địa phương',
    category: 'Báo chí Lâm nghiệp',
    author: 'Tổng hợp từ Báo Nông nghiệp & Môi trường',
    date: '02/11/2026',
    readTime: '6 phút đọc',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    summary: 'Sau thành công bước đầu từ chuyển nhượng kết quả giảm phát thải vùng Bắc Trung Bộ, nhiều địa phương đang hoàn thiện hồ sơ đo đạc, báo cáo và thẩm định (MRV) trữ lượng carbon rừng.',
    content: `Việt Nam sở hữu tiềm năng lớn về hấp thụ và lưu giữ carbon rừng với hơn 14,7 triệu ha rừng. Việc vận hành sàn giao dịch tín chỉ carbon trong nước và tham gia thị trường quốc tế đòi hỏi hệ thống đo đếm sinh khối rừng chính xác thông qua kết hợp ô tiêu chuẩn định vị ngoài thực địa và giải đoán ảnh vệ tinh đa phổ.`,
    tags: ['Tín chỉ Carbon', 'Tài chính lâm nghiệp', 'MRV', 'Báo chí'],
    isFeatured: false
  }
];

const LEGAL_DOCUMENTS = [
  {
    id: 'vb-1',
    code: '16/2017/QH14 (Đã sửa đổi, bổ sung bởi Luật Đất đai 2024)',
    title: 'Luật Lâm nghiệp năm 2017 (Kèm Văn bản hợp nhất quy định sửa đổi tại Điều 248 Luật Đất đai số 31/2024/QH15)',
    type: 'Luật / Văn bản hợp nhất',
    issuer: 'Quốc hội / Bộ Nông nghiệp và Môi trường tổng hợp',
    issueDate: '15/11/2017',
    effectiveDate: '01/01/2019 (Các điều khoản sửa đổi có hiệu lực từ 01/08/2024)',
    status: 'Còn hiệu lực',
    field: 'Quản lý chung & Đất rừng',
    isConsolidated: true,
    vbplUrl: 'https://vbpl.vn/TW/Pages/vbpq-timkiem.aspx?dvid=13&Keyword=16/2017/QH14',
    summary: 'Quy định toàn diện về quản lý, bảo vệ, phát triển, sử dụng rừng; chế biến và thương mại lâm sản. Đã được hợp nhất các nội dung sửa đổi về giao rừng, cho thuê rừng và chuyển mục đích sử dụng rừng sang mục đích khác đồng bộ với Luật Đất đai 2024.',
    verificationNote: 'Đã đối chiếu trên Cổng thông tin VBPL Quốc gia (vbpl.vn): Đang còn hiệu lực thi hành; lưu ý áp dụng các điều khoản chuyển mục đích sử dụng rừng đã được sửa đổi bởi Luật Đất đai 2024.'
  },
  {
    id: 'vb-2',
    code: '31/2024/QH15',
    title: 'Luật Đất đai năm 2024 (Các quy định về Đất lâm nghiệp: Đất rừng sản xuất, Đất rừng phòng hộ, Đất rừng đặc dụng)',
    type: 'Luật',
    issuer: 'Quốc hội',
    issueDate: '18/01/2024',
    effectiveDate: '01/08/2024',
    status: 'Còn hiệu lực',
    field: 'Đất lâm nghiệp',
    isConsolidated: false,
    vbplUrl: 'https://vbpl.vn/TW/Pages/vbpq-timkiem.aspx?dvid=13&Keyword=31/2024/QH15',
    summary: 'Quy định chế độ quản lý, sử dụng nhóm đất nông nghiệp trong đó có đất rừng sản xuất, đất rừng phòng hộ, đất rừng đặc dụng; điều kiện cấp Giấy chứng nhận quyền sử dụng đất lâm nghiệp và kết hợp đa mục đích.',
    verificationNote: 'Đã đối chiếu vbpl.vn: Còn hiệu lực toàn bộ (hiệu lực sớm từ 01/08/2024 theo Luật số 43/2024/QH15).'
  },
  {
    id: 'vb-3',
    code: '91/2024/NĐ-CP',
    title: 'Nghị định sửa đổi, bổ sung một số điều của Nghị định số 156/2018/NĐ-CP quy định chi tiết thi hành một số điều của Luật Lâm nghiệp',
    type: 'Nghị định',
    issuer: 'Chính phủ (Bộ NN&MT chủ trì soạn thảo)',
    issueDate: '18/07/2024',
    effectiveDate: '18/07/2024',
    status: 'Còn hiệu lực',
    field: 'Quản lý bảo vệ rừng',
    isConsolidated: false,
    vbplUrl: 'https://vbpl.vn/TW/Pages/vbpq-timkiem.aspx?dvid=13&Keyword=91/2024/N%C4%90-CP',
    summary: 'Cập nhật quy định mới về tiêu chí xác định rừng tự nhiên, rừng trồng; quy chế quản lý rừng; nuôi trồng, phát triển, thu hoạch cây dược liệu dưới tán rừng và thủ tục chuyển mục đích sử dụng rừng, tạm sử dụng rừng.',
    verificationNote: 'Đã đối chiếu vbpl.vn: Còn hiệu lực đầy đủ. Đây là văn bản pháp lý cốt lõi hiện hành khi thẩm định hồ sơ lâm nghiệp.'
  },
  {
    id: 'vb-4',
    code: 'VBHN-BNNMT (Hợp nhất NĐ 156/2018 & NĐ 91/2024)',
    title: 'Văn bản hợp nhất Nghị định quy định chi tiết thi hành một số điều của Luật Lâm nghiệp (Hợp nhất 156/2018/NĐ-CP, 27/2024/NĐ-CP và 91/2024/NĐ-CP)',
    type: 'Văn bản hợp nhất',
    issuer: 'Bộ Nông nghiệp và Môi trường',
    issueDate: '25/08/2024',
    effectiveDate: 'Áp dụng hiện hành',
    status: 'Còn hiệu lực',
    field: 'Quản lý chung & Đất rừng',
    isConsolidated: true,
    vbplUrl: 'https://vbpl.vn/bonongnghiep/Pages/vbpq-timkiem.aspx?Keyword=156/2018/N%C4%90-CP',
    summary: 'Văn bản hợp nhất chính thức giúp cán bộ lâm nghiệp, kiểm lâm và chủ rừng tra cứu liền mạch toàn bộ quy định hướng dẫn Luật Lâm nghiệp mà không bị chồng chéo giữa các lần sửa đổi năm 2018 và 2024.',
    verificationNote: 'Văn bản hợp nhất của Bộ Nông nghiệp & Môi trường: Còn hiệu lực áp dụng thực tiễn.'
  },
  {
    id: 'vb-5',
    code: '24/2024/TT-BNNPTNT',
    title: 'Thông tư sửa đổi, bổ sung một số điều của các Thông tư trong lĩnh vực Lâm nghiệp (Sửa đổi quy định trồng rừng thay thế, điều tra rừng, lâm sinh)',
    type: 'Thông tư',
    issuer: 'Bộ Nông nghiệp và Môi trường',
    issueDate: '12/12/2024',
    effectiveDate: '01/02/2025',
    status: 'Còn hiệu lực',
    field: 'Lâm sinh & Điều tra rừng',
    isConsolidated: true,
    vbplUrl: 'https://vbpl.vn/bonongnghiep/Pages/vbpq-timkiem.aspx?Keyword=24/2024/TT-BNNPTNT',
    summary: 'Sửa đổi, đồng bộ hóa hàng loạt thông tư kỹ thuật lâm nghiệp về trồng rừng thay thế (TT 22/2023), các biện pháp kỹ thuật lâm sinh (TT 29/2018) và điều tra, kiểm kê, theo dõi diễn biến rừng (TT 33/2018).',
    verificationNote: 'Đã đối chiếu vbpl.vn: Còn hiệu lực hiện hành.'
  },
  {
    id: 'vb-6',
    code: '84/2021/NĐ-CP (Hợp nhất NĐ 06/2019/NĐ-CP)',
    title: 'Văn bản hợp nhất Nghị định về quản lý thực vật rừng, động vật rừng nguy cấp, quý, hiếm và thực thi Công ước CITES',
    type: 'Văn bản hợp nhất',
    issuer: 'Chính phủ / Bộ Nông nghiệp và Môi trường',
    issueDate: '22/09/2021',
    effectiveDate: '30/11/2021',
    status: 'Còn hiệu lực',
    field: 'Bảo tồn đa dạng sinh học',
    isConsolidated: true,
    vbplUrl: 'https://vbpl.vn/TW/Pages/vbpq-timkiem.aspx?dvid=13&Keyword=84/2021/N%C4%90-CP',
    summary: 'Ban hành Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm (Nhóm IA, IB, IIA, IIB) và quy trình khai thác, nuôi trồng, chế biến, kinh doanh, cất giữ mẫu vật loài hoang dã.',
    verificationNote: 'Đã đối chiếu vbpl.vn: Còn hiệu lực toàn bộ.'
  },
  {
    id: 'vb-7',
    code: '35/2019/NĐ-CP (Sửa đổi bởi 07/2022/NĐ-CP)',
    title: 'Văn bản hợp nhất Nghị định quy định xử phạt vi phạm hành chính trong lĩnh vực Lâm nghiệp',
    type: 'Văn bản hợp nhất',
    issuer: 'Chính phủ / Bộ Nông nghiệp và Môi trường',
    issueDate: '10/01/2022',
    effectiveDate: '28/02/2022',
    status: 'Còn hiệu lực',
    field: 'Thanh tra & Xử phạt Kiểm lâm',
    isConsolidated: true,
    vbplUrl: 'https://vbpl.vn/TW/Pages/vbpq-timkiem.aspx?dvid=13&Keyword=07/2022/N%C4%90-CP',
    summary: 'Quy định khung hình phạt, thẩm quyền lập biên bản và xử phạt của Kiểm lâm đối với các hành vi phá rừng trái pháp luật, lấn chiếm đất rừng, vi phạm quy định PCCC rừng và vận chuyển lâm sản trái phép.',
    verificationNote: 'Đã đối chiếu vbpl.vn: Còn hiệu lực (Áp dụng bản hợp nhất giữa NĐ 35/2019/NĐ-CP và NĐ 07/2022/NĐ-CP).'
  },
  {
    id: 'vb-8',
    code: '26/2022/TT-BNNPTNT (Sửa đổi bởi TT 22/2023)',
    title: 'Thông tư quy định về quản lý, truy xuất nguồn gốc lâm sản',
    type: 'Thông tư',
    issuer: 'Bộ Nông nghiệp và Môi trường',
    issueDate: '30/12/2022',
    effectiveDate: '15/02/2023',
    status: 'Hết hiệu lực một phần',
    field: 'Quản lý bảo vệ rừng',
    isConsolidated: true,
    vbplUrl: 'https://vbpl.vn/bonongnghiep/Pages/vbpq-timkiem.aspx?Keyword=26/2022/TT-BNNPTNT',
    summary: 'Quy định về bảng kê lâm sản, xác nhận nguồn gốc gỗ, lâm sản ngoài gỗ khai thác từ rừng tự nhiên, rừng trồng và nhập khẩu.',
    verificationNote: 'Đã đối chiếu vbpl.vn: Hết hiệu lực một phần (Một số điều khoản đã được sửa đổi, bổ sung bởi Thông tư 22/2023/TT-BNNPTNT và Thông tư 24/2024/TT-BNNPTNT).'
  },
  {
    id: 'vb-9',
    code: '23/2017/TT-BNNPTNT',
    title: 'Thông tư quy định về trồng rừng thay thế khi chuyển mục đích sử dụng rừng sang mục đích khác (Văn bản cũ)',
    type: 'Thông tư',
    issuer: 'Bộ NN&PTNT (Nay là Bộ NN&MT)',
    issueDate: '15/11/2017',
    effectiveDate: '01/01/2019',
    status: 'Hết hiệu lực',
    field: 'Lâm sinh & Điều tra rừng',
    isConsolidated: false,
    vbplUrl: 'https://vbpl.vn/bonongnghiep/Pages/vbpq-timkiem.aspx?Keyword=23/2017/TT-BNNPTNT',
    summary: 'Văn bản cũ quy định về trồng rừng thay thế, hiện đã được thay thế hoàn toàn bởi Thông tư 25/2022/TT-BNNPTNT và các văn bản sửa đổi năm 2023, 2024.',
    verificationNote: 'Cảnh báo pháp lý: Đã hết hiệu lực toàn bộ trên vbpl.vn. Chuyển sang áp dụng Thông tư 25/2022/TT-BNNPTNT (hợp nhất với TT 22/2023 và TT 24/2024).'
  }
];

const SPECIES_DATABASE = [
  {
    id: 'sp-1',
    vietnameseName: 'Lim xanh (Lim Hòa Bình)',
    scientificName: 'Erythrophleum fordii Oliv.',
    family: 'Fabaceae (Họ Đậu)',
    kingdom: 'Thực vật rừng',
    conservationGroup: 'Nhóm IIA (NĐ 84/2021/NĐ-CP)',
    redBookStatus: 'VU (Sẽ nguy cấp - Sách Đỏ VN)',
    woodGroup: 'Gỗ Nhóm II (Gỗ nặng, thiết mộc)',
    habitat: 'Phân bố tại các rừng nhiệt đới thường xanh từ Bắc Bộ đến Bắc Trung Bộ (Lạng Sơn, Quảng Ninh, Thanh Hóa, Nghệ An, Hà Tĩnh, Quảng Bình).',
    morphology: 'Cây gỗ lớn cao 25 - 30m, đường kính ngang ngực có thể đạt trên 1m. Vỏ màu nâu xám có nhiều nốt sần; lá kép lông chim 2 lần mọc cách; gỗ giác màu xám trắng, gỗ lõi màu nâu sẫm rất cứng và bền.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-2',
    vietnameseName: 'Sưa đỏ (Trắc thối / Huê mộc vàng)',
    scientificName: 'Dalbergia tonkinensis Prain',
    family: 'Fabaceae (Họ Đậu)',
    kingdom: 'Thực vật rừng',
    conservationGroup: 'Nhóm IA (Nghiêm cấm khai thác thương mại)',
    redBookStatus: 'EN (Nguy cấp - Sách Đỏ VN & IUCN)',
    woodGroup: 'Gỗ Nhóm I (Đặc biệt quý hiếm)',
    habitat: 'Phân bố rải rác ở rừng mưa nhiệt đới núi thấp và trung bình từ miền Bắc vào đến Tây Nguyên, mọc trên đất feralit giàu mùn.',
    morphology: 'Cây gỗ nhỡ, cao 10 - 20m, thân có vỏ màu vàng nâu hay xám nứt dọc. Lá kép lông chim lẻ 1 lần, gồm 9 - 17 lá chét. Gỗ có lõi màu đỏ bầm vân tứ diện rất đẹp và có mùi thơm nhẹ của trầm.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-3',
    vietnameseName: 'Sâm Ngọc Linh (Sâm Việt Nam)',
    scientificName: 'Panax vietnamensis Ha et Grushv.',
    family: 'Araliaceae (Họ Nhân sâm)',
    kingdom: 'Dược liệu dưới tán rừng',
    conservationGroup: 'Nhóm IIA (NĐ 84/2021/NĐ-CP)',
    redBookStatus: 'CR (Cực kỳ nguy cấp)',
    woodGroup: 'Lâm sản ngoài gỗ / Dược liệu Quốc bảo',
    habitat: 'Mọc tự nhiên và được bảo tồn, gây trồng dưới tán rừng nguyên sinh có độ tàn che > 0.7 tại khối núi Ngọc Linh (Kon Tum, Quảng Nam) ở độ cao 1.500 - 2.100m.',
    morphology: 'Cây thân thảo sống nhiều năm, cao 40 - 80cm. Thân rễ có nhiều đốt cong ngoằn ngoèo mang các vết sẹo do thân khí sinh rụng hàng năm. Lá kép chân vịt mọc vòng từ 3 - 5 lá trên đỉnh thân.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-4',
    vietnameseName: 'Sâm cau (Ngải cau / Tiên mao)',
    scientificName: 'Curculigo orchioides Gaertn.',
    family: 'Hypoxidaceae (Họ Hạ trâm)',
    kingdom: 'Dược liệu dưới tán rừng',
    conservationGroup: 'Phổ biến / Khuyến khích trồng dưới tán rừng',
    redBookStatus: 'VU (Trong tự nhiên bị khai thác mạnh)',
    woodGroup: 'Cây dược liệu lâm sinh',
    habitat: 'Mọc dưới tán rừng thưa, trảng cỏ ẩm hoặc rừng trồng ở vùng trung du và miền núi phía Bắc, Tây Nguyên.',
    morphology: 'Cây thảo sống lâu năm, cao 20 - 35cm. Lá mọc tụ họp thành túm từ thân rễ, phiến lá hình mũi mác hẹp xếp nếp tựa lá cau non. Củ (thân rễ) hình trụ dài, vỏ nâu sẫm, thịt màu vàng ngà.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-5',
    vietnameseName: 'Sao la (Kỳ lân châu Á)',
    scientificName: 'Pseudoryx nghetinhensis',
    family: 'Bovidae (Họ Trâu bò)',
    kingdom: 'Động vật rừng',
    conservationGroup: 'Nhóm IB (Nghiêm cấm săn bắt, xâm hại)',
    redBookStatus: 'CR (Cực kỳ nguy cấp - IUCN & Sách Đỏ VN)',
    woodGroup: 'Động vật đặc hữu quý hiếm bậc nhất',
    habitat: 'Rừng kín thường xanh mưa ẩm nhiệt đới nguyên sinh dọc dãy Trường Sơn (Nghệ An, Hà Tĩnh, Quảng Bình, Quảng Trị, Thừa Thiên Huế, Quảng Nam).',
    morphology: 'Cặp sừng dài từ 35 - 50cm, thon nhọn và hơi cong về phía sau ở cả con đực và con cái. Bộ lông màu nâu sẫm mượt, có các vệt trắng nổi bật trên mặt và tuyến hàm trước mắt rất lớn.',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sp-6',
    vietnameseName: 'Voọc chà vá chân nâu (Nữ hoàng linh trưởng)',
    scientificName: 'Pygathrix nemaeus (Linnaeus, 1771)',
    family: 'Cercopithecidae (Họ Khỉ)',
    kingdom: 'Động vật rừng',
    conservationGroup: 'Nhóm IB (NĐ 84/2021/NĐ-CP)',
    redBookStatus: 'CR (Cực kỳ nguy cấp)',
    woodGroup: 'Động vật rừng nguy cấp ưu tiên bảo tồn',
    habitat: 'Các khu rừng nguyên sinh và rừng thứ sinh giàu cây gỗ lớn tại miền Trung và Tây Nguyên (Sơn Trà - Đà Nẵng, Phong Nha - Kẻ Bàng, Kon Ka Kinh).',
    morphology: 'Loài linh trưởng có bộ lông 5 màu rực rỡ: khuôn mặt màu vàng cam, râu quai nón trắng dài, cẳng chân từ gối xuống mắt cá có màu đỏ nâu đặc trưng, đuôi dài màu trắng.',
    image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=800&q=80'
  }
];

const ELEARNING_COURSES = [
  {
    id: 'course-1',
    title: 'Làm chủ QGIS & WebGIS trong Quản lý, Theo dõi diễn biến rừng',
    instructor: 'Trung tâm Đào tạo Địa không gian - Elearning.gis.vn',
    level: 'Cơ bản đến Nâng cao',
    duration: '24 bài giảng (12 giờ)',
    students: '1,420 học viên',
    url: 'https://elearning.gis.vn/',
    badge: 'Khóa học trọng điểm',
    topics: ['Chuyển đổi hệ tọa độ VN-2000', 'Biên tập bản đồ Tiểu khu - Khoảnh - Lô', 'Đồng bộ dữ liệu lên GeoGIS']
  },
  {
    id: 'course-2',
    title: 'Giải đoán ảnh vệ tinh Sentinel-2 & Landsat 9 phát hiện sớm mất rừng',
    instructor: 'Chuyên gia Viễn thám & Lâm nghiệp số',
    level: 'Chuyên sâu',
    duration: '18 bài giảng (9 giờ)',
    students: '890 học viên',
    url: 'https://elearning.gis.vn/',
    badge: 'Công nghệ Viễn thám',
    topics: ['Tính toán chỉ số thực vật NDVI, NBR', 'Google Earth Engine cho Kiểm lâm', 'Xác minh điểm biến động ngoài thực địa']
  },
  {
    id: 'course-3',
    title: 'Sử dụng Thiết bị GPS, Máy tính bảng & App Bảo Vệ Rừng tuần tra hiện trường',
    instructor: 'Đội ngũ Kỹ thuật Bảo Vệ Rừng & GIS.VN',
    level: 'Thực hành hiện trường',
    duration: '15 bài giảng (7.5 giờ)',
    students: '2,150 học viên',
    url: 'https://elearning.gis.vn/',
    badge: 'Thực chiến Kiểm lâm',
    topics: ['Thiết lập bản đồ Offline MBTiles', 'Ghi nhận tuyến tuần tra (Tracklog)', 'Lập biên bản kèm tọa độ & ảnh hiện trường']
  },
  {
    id: 'course-4',
    title: 'Kỹ thuật điều tra trữ lượng rừng, lập ô tiêu chuẩn và tính toán Tín chỉ Carbon',
    instructor: 'Viện Điều tra Quy hoạch Rừng & Chuyên gia Lâm sinh',
    level: 'Chuyên ngành Lâm sinh',
    duration: '20 bài giảng (10 giờ)',
    students: '1,105 học viên',
    url: 'https://elearning.gis.vn/',
    badge: 'Chứng chỉ chuyên môn',
    topics: ['Thiết kế ô tiêu chuẩn điển hình', 'Đo đếm sinh khối cây rừng (D1.3, Hvn)', 'Áp dụng Thông tư 33 & Thông tư 24/2024']
  }
];

const FORESTRY_APPS = [
  {
    id: 'app-1',
    name: 'Hệ thống Quản lý & Bảo Vệ Rừng Toàn Diện',
    domain: 'baoverung.vercel.app',
    url: 'https://baoverung.vercel.app/',
    tag: 'Nền tảng Trung tâm',
    description: 'Ứng dụng chuyên ngành hỗ trợ lực lượng Kiểm lâm, Ban quản lý rừng và cán bộ lâm nghiệp quản lý hồ sơ tuần tra, tra cứu nhanh nghiệp vụ pháp lý và giám sát bảo vệ rừng.',
    features: [
      'Quản lý thông tin tuần tra và báo cáo hiện trường thời gian thực',
      'Tra cứu nhanh quy định xử phạt hành chính và biểu mẫu kiểm lâm',
      'Tích hợp đồng bộ dữ liệu đa thiết bị (Máy tính & Điện thoại di động)'
    ],
    color: 'from-emerald-800 to-teal-900'
  },
  {
    id: 'app-2',
    name: 'Bản đồ Địa không gian Lâm nghiệp GeoGIS',
    domain: 'baoverung.vercel.app/geogis',
    url: 'https://baoverung.vercel.app/geogis',
    tag: 'Bản đồ số WebGIS',
    description: 'Hệ thống WebGIS chuyên dụng hiển thị trực quan các lớp bản đồ ranh giới hành chính, ranh giới 3 loại rừng (Đặc dụng, Phòng hộ, Sản xuất), lớp tiểu khu, khoảnh, lô và ảnh vệ tinh.',
    features: [
      'Đo đạc diện tích lô rừng, khoảng cách và định vị tọa độ GPS/VN-2000 trực tiếp',
      'Chồng xếp nhiều lớp bản đồ chuyên đề lâm nghiệp và theo dõi biến động rừng',
      'Truy vấn thông tin thuộc tính chi tiết của từng lô rừng trên bản đồ số'
    ],
    color: 'from-green-800 to-emerald-950'
  },
  {
    id: 'app-3',
    name: 'Cổng Giải pháp Địa không gian GIS Việt Nam',
    domain: 'gis.vn',
    url: 'https://gis.vn/',
    tag: 'Hạ tầng Dữ liệu Không gian',
    description: 'Hệ sinh thái công nghệ thông tin địa lý (GIS), viễn thám, bản đồ số và giải pháp chuyển đổi số tài nguyên nông - lâm nghiệp và môi trường hàng đầu tại Việt Nam.',
    features: [
      'Cung cấp giải pháp hạ tầng dữ liệu không gian (SDI) và dịch vụ bản đồ chuẩn OGC',
      'Tư vấn xây dựng cơ sở dữ liệu ngành Nông nghiệp và Môi trường',
      'Kết nối trực tiếp với hệ thống đào tạo trực tuyến elearning.gis.vn'
    ],
    color: 'from-slate-800 to-emerald-900'
  },
  {
    id: 'app-4',
    name: 'Hệ thống Đào tạo Trực tuyến GIS & Lâm nghiệp',
    domain: 'elearning.gis.vn',
    url: 'https://elearning.gis.vn/',
    tag: 'E-Learning Chuyên ngành',
    description: 'Cổng học tập trực tuyến cung cấp đầy đủ khóa học video, bài tập thực hành dữ liệu thực tế về bản đồ lâm nghiệp, viễn thám, máy định vị GPS và quản lý tài nguyên rừng.',
    features: [
      'Học mọi lúc mọi nơi với kho dữ liệu mẫu Shapefile/GeoTIFF chuẩn Việt Nam',
      'Hướng dẫn cầm tay chỉ việc từ chuyên gia GIS và kỹ sư lâm nghiệp',
      'Cập nhật liên tục công nghệ LiDAR, Drone/UAV và AI trong kiểm kê rừng'
    ],
    color: 'from-amber-800 to-emerald-950'
  }
];

export default function App() {
  // Điều hướng các phân hệ chính
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tìm kiếm thông minh toàn cổng
  const [globalSearch, setGlobalSearch] = useState('');

  // Quản lý Tin tức & Bài báo định kỳ
  const [newsList, setNewsList] = useState(INITIAL_NEWS);
  const [selectedNewsCategory, setSelectedNewsCategory] = useState('Tất cả');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'Góc Chuyên Gia (Định kỳ)',
    author: '',
    summary: '',
    content: '',
    tags: '',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80'
  });

  // Quản lý Hệ thống Văn bản pháp luật (VBPL)
  const [legalSearch, setLegalSearch] = useState('');
  const [legalStatusFilter, setLegalStatusFilter] = useState('Tất cả');
  const [legalFieldFilter, setLegalFieldFilter] = useState('Tất cả');
  const [onlyConsolidated, setOnlyConsolidated] = useState(false);
  const [selectedLegalDoc, setSelectedLegalDoc] = useState(null);

  // Quản lý Tra cứu Động - Thực vật rừng
  const [speciesSearch, setSpeciesSearch] = useState('');
  const [speciesKingdomFilter, setSpeciesKingdomFilter] = useState('Tất cả');
  const [selectedSpecies, setSelectedSpecies] = useState(null);

  // Thông báo trạng thái
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Bộ lọc Tin tức
  const filteredNews = useMemo(() => {
    return newsList.filter((item) => {
      const matchCat = selectedNewsCategory === 'Tất cả' || item.category === selectedNewsCategory;
      const matchQuery =
        !globalSearch ||
        item.title.toLowerCase().includes(globalSearch.toLowerCase()) ||
        item.summary.toLowerCase().includes(globalSearch.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [newsList, selectedNewsCategory, globalSearch]);

  // Bộ lọc Văn bản pháp luật
  const filteredLegalDocs = useMemo(() => {
    return LEGAL_DOCUMENTS.filter((doc) => {
      const query = (legalSearch || globalSearch).toLowerCase();
      const matchQuery =
        !query ||
        doc.code.toLowerCase().includes(query) ||
        doc.title.toLowerCase().includes(query) ||
        doc.summary.toLowerCase().includes(query);
      const matchStatus = legalStatusFilter === 'Tất cả' || doc.status === legalStatusFilter;
      const matchField = legalFieldFilter === 'Tất cả' || doc.field === legalFieldFilter;
      const matchConsolidated = !onlyConsolidated || doc.isConsolidated;
      return matchQuery && matchStatus && matchField && matchConsolidated;
    });
  }, [legalSearch, globalSearch, legalStatusFilter, legalFieldFilter, onlyConsolidated]);

  // Bộ lọc Loài Động - Thực vật
  const filteredSpecies = useMemo(() => {
    return SPECIES_DATABASE.filter((sp) => {
      const query = (speciesSearch || globalSearch).toLowerCase();
      const matchQuery =
        !query ||
        sp.vietnameseName.toLowerCase().includes(query) ||
        sp.scientificName.toLowerCase().includes(query) ||
        sp.family.toLowerCase().includes(query);
      const matchKingdom = speciesKingdomFilter === 'Tất cả' || sp.kingdom === speciesKingdomFilter;
      return matchQuery && matchKingdom;
    });
  }, [speciesSearch, globalSearch, speciesKingdomFilter]);

  // Xử lý đăng bài báo định kỳ mới
  const handlePublishArticle = (e) => {
    e.preventDefault();
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const today = new Date().toLocaleDateString('vi-VN');
    const createdArticle = {
      id: `news-${Date.now()}`,
      title: newPost.title,
      category: newPost.category,
      author: newPost.author || 'Chuyên gia Lâm nghiệp - Ban Biên tập',
      date: today,
      readTime: '6 phút đọc',
      image: newPost.image,
      summary: newPost.summary || newPost.content.slice(0, 140) + '...',
      content: newPost.content,
      tags: newPost.tags
        ? newPost.tags.split(',').map((t) => t.trim())
        : ['Nghiên cứu định kỳ', 'Lâm nghiệp'],
      isFeatured: true
    };

    setNewsList([createdArticle, ...newsList]);
    setShowPublishModal(false);
    setNewPost({
      title: '',
      category: 'Góc Chuyên Gia (Định kỳ)',
      author: '',
      summary: '',
      content: '',
      tags: '',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80'
    });
    triggerToast('Đã xuất bản bài viết định kỳ mới lên hệ thống thông tin Lâm nghiệp!');
  };

  // Hiển thị Badge trạng thái hiệu lực VBPL
  const renderLegalStatusBadge = (status) => {
    if (status === 'Còn hiệu lực') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          Còn hiệu lực
        </span>
      );
    }
    if (status === 'Hết hiệu lực một phần') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          Hết hiệu lực một phần
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
        <XCircle className="w-3.5 h-3.5 text-rose-600" />
        Hết hiệu lực
      </span>
    );
  };

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Trees },
    { id: 'news', label: 'Tin tức & Chuyên đề', icon: Newspaper },
    { id: 'legal', label: 'Văn bản Pháp luật', icon: Scale },
    { id: 'species', label: 'Tra cứu Loài Rừng', icon: Leaf },
    { id: 'elearning', label: 'Đào tạo E-Learning', icon: GraduationCap },
    { id: 'apps', label: 'Ứng dụng GeoGIS', icon: Layers }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800 font-sans selection:bg-emerald-700 selection:text-white">
      {/* THANH THÔNG BÁO TRÊN CÙNG (TOP BAR) */}
      <div className="bg-[#112A20] text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              Hệ thống Thông tin Lâm nghiệp & Địa không gian Số Việt Nam
            </span>
            <span className="hidden md:inline text-emerald-300/80">|</span>
            <span className="hidden md:inline text-emerald-200/90">
              Cập nhật dữ liệu theo Cục Lâm nghiệp - Kiểm lâm & Bộ Nông nghiệp và Môi trường
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://baoverung.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition flex items-center gap-1 font-medium"
            >
              App Bảo Vệ Rừng <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-emerald-700">•</span>
            <a
              href="https://baoverung.vercel.app/geogis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition flex items-center gap-1 font-medium"
            >
              Bản đồ GeoGIS <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-emerald-700">•</span>
            <a
              href="https://elearning.gis.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition flex items-center gap-1 font-medium"
            >
              E-Learning GIS <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* THANH ĐIỀU HƯỚNG CHÍNH (STICKY NAVBAR) */}
      <header className="sticky top-0 z-40 bg-[#1B4332]/95 backdrop-blur-md text-white shadow-lg border-b border-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Tên cổng */}
            <div
              onClick={() => setActiveTab('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-inner border border-emerald-400/30 group-hover:scale-105 transition">
                <Trees className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
                    LÂM NGHIỆP & GEOGIS
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-semibold">
                    Portal 4.0
                  </span>
                </div>
                <p className="text-xs text-emerald-200/90">
                  Pháp luật Lâm nghiệp • Động thực vật • Bản đồ số & Đào tạo
                </p>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/40'
                        : 'text-emerald-100 hover:bg-emerald-800/60 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Nút mở nhanh WebGIS trên Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://baoverung.vercel.app/geogis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition"
              >
                <Compass className="w-4 h-4" />
                Mở Bản Đồ GeoGIS
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-emerald-800/80 text-white hover:bg-emerald-700"
                aria-label="Mở menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

            {/* Nút Menu trên Mobile */}
            <div className="flex sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-emerald-800/80 text-white hover:bg-emerald-700"
                aria-label="Mở menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#143326] border-t border-emerald-800 px-4 pt-3 pb-5 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'text-emerald-100 hover:bg-emerald-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href="https://baoverung.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-700 text-white text-xs font-semibold py-2.5 px-3 rounded-xl"
              >
                App Bảo Vệ Rừng <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://baoverung.vercel.app/geogis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-amber-500 text-slate-950 text-xs font-semibold py-2.5 px-3 rounded-xl"
              >
                Bản đồ GeoGIS <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* THÔNG BÁO NỔI (TOAST) */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* NỘI DUNG CHÍNH THEO TỪNG PHÂN HỆ */}
      <main className="flex-grow">
        {/* ========================================== */}
        {/* 1. PHÂN HỆ TRANG CHỦ (HOME DASHBOARD)      */}
        {/* ========================================== */}
        {activeTab === 'home' && (
          <div>
            {/* HERO BANNER */}
            <section className="relative bg-[#1B4332] text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-25 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&q=80')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F291E] via-[#1B4332]/90 to-transparent" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 bg-emerald-800/80 border border-emerald-500/40 rounded-full px-4 py-1.5 text-xs sm:text-sm text-emerald-200">
                      <Satellite className="w-4 h-4 text-amber-400" />
                      <span>Tích hợp Pháp lý Lâm nghiệp • Đa dạng sinh học • Bản đồ số GeoGIS</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                      Hệ Sinh Thái Thông Tin{' '}
                      <span className="text-amber-400">Lâm Nghiệp & Địa Không Gian</span> Việt Nam
                    </h1>

                    <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                      Cổng thông tin chuyên ngành cập nhật tin tức từ Cục Lâm nghiệp - Kiểm lâm, Bộ Nông nghiệp và Môi trường, hệ thống Văn bản pháp luật hợp nhất đối chiếu trực tiếp <code className="text-amber-300 font-semibold">vbpl.vn</code>, tra cứu loài quý hiếm và kết nối trực tiếp nền tảng <code className="text-amber-300 font-semibold">baoverung.vercel.app</code>, <code className="text-amber-300 font-semibold">gis.vn</code>.
                    </p>

                    {/* THANH TÌM KIẾM ĐA NĂNG */}
                    <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 max-w-2xl shadow-xl">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-grow">
                          <Search className="w-5 h-5 text-emerald-200 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={globalSearch}
                            onChange={(e) => setGlobalSearch(e.target.value)}
                            placeholder="Tìm Nghị định 91/2024, Luật Lâm nghiệp, Sâm cau, Lim xanh, GIS..."
                            className="w-full pl-11 pr-4 py-3 bg-white/95 text-slate-900 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                          />
                        </div>
                        <button
                          onClick={() => setActiveTab('legal')}
                          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition shrink-0 flex items-center justify-center gap-2"
                        >
                          Tra cứu ngay
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2.5 px-2 text-xs text-emerald-200">
                        <span className="font-medium text-amber-300">Từ khóa nổi bật:</span>
                        <button
                          onClick={() => {
                            setLegalSearch('91/2024/NĐ-CP');
                            setActiveTab('legal');
                          }}
                          className="hover:underline bg-emerald-900/60 px-2 py-0.5 rounded"
                        >
                          Nghị định 91/2024/NĐ-CP
                        </button>
                        <button
                          onClick={() => {
                            setLegalSearch('Luật Đất đai');
                            setActiveTab('legal');
                          }}
                          className="hover:underline bg-emerald-900/60 px-2 py-0.5 rounded"
                        >
                          Đất lâm nghiệp 2024
                        </button>
                        <button
                          onClick={() => {
                            setSpeciesSearch('Sâm');
                            setActiveTab('species');
                          }}
                          className="hover:underline bg-emerald-900/60 px-2 py-0.5 rounded"
                        >
                          Dược liệu dưới tán rừng
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* KHỐI TRUY CẬP NHANH ỨNG DỤNG TRÊN HERO */}
                  <div className="lg:col-span-5">
                    <div className="bg-emerald-950/80 backdrop-blur-md border border-emerald-700/60 rounded-3xl p-6 shadow-2xl space-y-4">
                      <div className="flex items-center justify-between border-b border-emerald-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Layers className="w-5 h-5 text-amber-400" />
                          <h2 className="font-bold text-base text-white">
                            Tổ Hợp Ứng Dụng Lâm Nghiệp Số
                          </h2>
                        </div>
                        <span className="text-xs bg-emerald-800 text-emerald-200 px-2.5 py-1 rounded-full">
                          Trực tuyến 24/7
                        </span>
                      </div>

                      <div className="space-y-3">
                        <a
                          href="https://baoverung.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/70 hover:bg-emerald-800 border border-emerald-700/60 transition group"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                              <ShieldAlert className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-sm text-white group-hover:text-amber-300 transition">
                                Ứng dụng Quản lý & Bảo Vệ Rừng
                              </div>
                              <div className="text-xs text-emerald-300">
                                https://baoverung.vercel.app/
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-emerald-300 group-hover:text-amber-300" />
                        </a>

                        <a
                          href="https://baoverung.vercel.app/geogis"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/70 hover:bg-emerald-800 border border-emerald-700/60 transition group"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shrink-0">
                              <Compass className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-sm text-white group-hover:text-amber-300 transition">
                                Bản đồ Địa không gian GeoGIS
                              </div>
                              <div className="text-xs text-emerald-300">
                                https://baoverung.vercel.app/geogis
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-emerald-300 group-hover:text-amber-300" />
                        </a>

                        <a
                          href="https://elearning.gis.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/70 hover:bg-emerald-800 border border-emerald-700/60 transition group"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shrink-0">
                              <GraduationCap className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-sm text-white group-hover:text-amber-300 transition">
                                Học tập Lâm nghiệp & GIS Trực tuyến
                              </div>
                              <div className="text-xs text-emerald-300">
                                https://elearning.gis.vn/
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-emerald-300 group-hover:text-amber-300" />
                        </a>

                        <a
                          href="https://gis.vn/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-900/70 hover:bg-emerald-800 border border-emerald-700/60 transition group"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-cyan-600 flex items-center justify-center text-white shrink-0">
                              <Globe className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="font-bold text-sm text-white group-hover:text-amber-300 transition">
                                Cổng Địa không gian GIS Việt Nam
                              </div>
                              <div className="text-xs text-emerald-300">https://gis.vn/</div>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-emerald-300 group-hover:text-amber-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* THỐNG KÊ NHANH (QUICK STATS) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-emerald-800/80">
                  <div
                    onClick={() => setActiveTab('legal')}
                    className="bg-emerald-900/50 hover:bg-emerald-900/80 cursor-pointer p-4 rounded-2xl border border-emerald-700/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Hệ thống VBPL & Hợp nhất
                      </span>
                      <Scale className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold mt-1">Đối chiếu VBPL.VN</div>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Kiểm tra hiệu lực Luật Lâm nghiệp, Đất rừng & Bộ NN&MT
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveTab('news')}
                    className="bg-emerald-900/50 hover:bg-emerald-900/80 cursor-pointer p-4 rounded-2xl border border-emerald-700/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Tin tức & Chuyên gia
                      </span>
                      <Newspaper className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold mt-1">Cập nhật định kỳ</div>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Cục Lâm nghiệp - Kiểm lâm, Bộ NN&MT & Bài nghiên cứu
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveTab('species')}
                    className="bg-emerald-900/50 hover:bg-emerald-900/80 cursor-pointer p-4 rounded-2xl border border-emerald-700/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Động - Thực vật rừng
                      </span>
                      <Sprout className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold mt-1">NĐ 84/2021 & Sách Đỏ</div>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Tra cứu Nhóm IA, IB, IIA, IIB & Cây dược liệu dưới tán rừng
                    </p>
                  </div>

                  <div
                    onClick={() => setActiveTab('elearning')}
                    className="bg-emerald-900/50 hover:bg-emerald-900/80 cursor-pointer p-4 rounded-2xl border border-emerald-700/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        Đào tạo Lâm nghiệp số
                      </span>
                      <GraduationCap className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold mt-1">Elearning.gis.vn</div>
                    <p className="text-xs text-emerald-200/80 mt-1">
                      Khóa học QGIS, Viễn thám, Điều tra rừng & Thiết bị GPS
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* TỔNG QUAN CÁC PHÂN HỆ TRÊN TRANG CHỦ */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
              {/* KHỐI 1: TIN TỨC MỚI NHẤT & BÀI BÁO ĐỊNH KỲ */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                      Thông tin Chuyên ngành
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                      Tin Tức Cục Lâm Nghiệp - Kiểm Lâm, Bộ NN&MT & Bài Báo Định Kỳ
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setActiveTab('news');
                        setShowPublishModal(true);
                      }}
                      className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition shadow-sm"
                    >
                      <PlusCircle className="w-4 h-4" />
                      Đăng bài định kỳ
                    </button>
                    <button
                      onClick={() => setActiveTab('news')}
                      className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-600 font-semibold text-sm"
                    >
                      Xem tất cả ({newsList.length}) <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {newsList.slice(0, 3).map((item) => (
                    <article
                      key={item.id}
                      className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-[#1B4332]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                              {item.date}
                            </span>
                            <span>•</span>
                            <span>{item.readTime}</span>
                          </div>
                          <h3
                            onClick={() => setSelectedArticle(item)}
                            className="font-bold text-slate-900 text-base leading-snug hover:text-emerald-700 cursor-pointer line-clamp-2"
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-600 line-clamp-3">{item.summary}</p>
                        </div>

                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500 truncate max-w-[180px]">
                            {item.author}
                          </span>
                          <button
                            onClick={() => setSelectedArticle(item)}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                          >
                            Đọc chi tiết <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* KHỐI 2: VĂN BẢN PHÁP LUẬT & HỢP NHẤT NỔI BẬT */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-200">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                      <Scale className="w-3.5 h-3.5" />
                      Kiểm tra hiệu lực & Văn bản hợp nhất
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mt-2">
                      Hệ Thống Văn Bản Pháp Luật Lâm Nghiệp & Đất Rừng Hiện Hành
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Tự động phân loại ngày ban hành, hiệu lực thi hành, các văn bản hợp nhất tại Bộ Nông nghiệp và Môi trường và liên kết đối chiếu trực tiếp tại <code className="font-semibold text-emerald-800">vbpl.vn</code>.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('legal')}
                    className="bg-[#1B4332] hover:bg-emerald-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition shrink-0 flex items-center gap-2 self-start lg:self-auto"
                  >
                    Mở Kho Pháp Luật Đầy Đủ <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="divide-y divide-stone-200 mt-4">
                  {LEGAL_DOCUMENTS.slice(0, 4).map((doc) => (
                    <div
                      key={doc.id}
                      className="py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 hover:bg-stone-50/80 px-3 rounded-xl transition"
                    >
                      <div className="space-y-1.5 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold bg-emerald-900 text-white px-2.5 py-1 rounded-md">
                            {doc.code}
                          </span>
                          {renderLegalStatusBadge(doc.status)}
                          {doc.isConsolidated && (
                            <span className="text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 px-2.5 py-0.5 rounded-full">
                              Văn bản hợp nhất Bộ NN&MT
                            </span>
                          )}
                          <span className="text-xs text-slate-500">
                            Ban hành: <strong>{doc.issueDate}</strong>
                          </span>
                        </div>
                        <h3
                          onClick={() => setSelectedLegalDoc(doc)}
                          className="font-bold text-slate-900 hover:text-emerald-700 cursor-pointer text-base"
                        >
                          {doc.title}
                        </h3>
                        <p className="text-xs text-slate-600">{doc.verificationNote}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => setSelectedLegalDoc(doc)}
                          className="px-3.5 py-2 rounded-xl border border-stone-300 hover:border-emerald-600 text-xs font-semibold text-slate-700 hover:text-emerald-800 flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" /> Xem tóm tắt
                        </button>
                        <a
                          href={doc.vbplUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5"
                        >
                          Đối chiếu vbpl.vn <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KHỐI 3: TRA CỨU LOÀI & ĐÀO TẠO E-LEARNING */}
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Cột trái: Động thực vật rừng quý hiếm */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                          Đa dạng sinh học & NĐ 84/2021/NĐ-CP
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mt-2">
                          Tra Cứu Thực Vật, Động Vật Rừng & Dược Liệu
                        </h3>
                      </div>
                      <button
                        onClick={() => setActiveTab('species')}
                        className="text-xs font-bold text-emerald-700 hover:underline shrink-0"
                      >
                        Tra cứu toàn bộ →
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-4">
                      {SPECIES_DATABASE.slice(0, 4).map((sp) => (
                        <div
                          key={sp.id}
                          onClick={() => setSelectedSpecies(sp)}
                          className="group cursor-pointer rounded-2xl border border-stone-200 overflow-hidden hover:border-emerald-500 transition flex flex-col"
                        >
                          <div className="h-32 overflow-hidden relative">
                            <img
                              src={sp.image}
                              alt={sp.vietnameseName}
                              className="w-full h-full object-cover group-hover:scale-105 transition"
                            />
                            <span className="absolute bottom-2 left-2 bg-black/70 text-amber-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                              {sp.conservationGroup}
                            </span>
                          </div>
                          <div className="p-3.5">
                            <div className="font-bold text-slate-900 text-sm group-hover:text-emerald-700">
                              {sp.vietnameseName}
                            </div>
                            <div className="text-xs italic text-slate-500">{sp.scientificName}</div>
                            <div className="text-[11px] text-emerald-700 font-medium mt-1">
                              {sp.family} • {sp.redBookStatus}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cột phải: Liên kết E-Learning GIS.VN */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#1B4332] to-[#0F291E] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                      <GraduationCap className="w-4 h-4" />
                      Học viện Lâm nghiệp Số & GIS
                    </div>
                    <h3 className="text-2xl font-bold leading-snug">
                      Các Lớp Học & Tài Liệu Học Tập Lâm Nghiệp Trực Tuyến
                    </h3>
                    <p className="text-sm text-emerald-100/90 leading-relaxed">
                      Kết nối trực tiếp với cổng đào tạo <strong className="text-amber-300">https://elearning.gis.vn/</strong> cung cấp kiến thức thực tiễn về bản đồ lâm nghiệp, giải đoán ảnh vệ tinh, điều tra rừng và sử dụng thiết bị di động tuần tra rừng.
                    </p>

                    <div className="space-y-2.5 pt-2">
                      {ELEARNING_COURSES.slice(0, 3).map((c) => (
                        <a
                          key={c.id}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-amber-300">{c.badge}</span>
                            <span className="text-[11px] text-emerald-200">{c.duration}</span>
                          </div>
                          <div className="font-bold text-sm text-white mt-1">{c.title}</div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-emerald-800 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href="https://elearning.gis.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                    >
                      Truy cập https://elearning.gis.vn/
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================== */}
        {/* 2. HỆ THỐNG THÔNG TIN & TIN TỨC ĐỊNH KỲ    */}
        {/* ========================================== */}
        {activeTab === 'news' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    <Newspaper className="w-3.5 h-3.5" />
                    Hệ thống Thông tin Lâm nghiệp Cập nhật
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Tin Tức Ngành, Cục Lâm Nghiệp - Kiểm Lâm, Bộ NN&MT & Chuyên Đề Định Kỳ
                  </h1>
                  <p className="text-sm text-slate-600 max-w-3xl">
                    Tổng hợp thông tin điều hành mới nhất từ Bộ Nông nghiệp và Môi trường, Cục Lâm nghiệp, Cục Kiểm lâm, báo chí chính thống và các bài nghiên cứu chuyên sâu do đội ngũ tác giả của trang đăng tải định kỳ.
                  </p>
                </div>

                <button
                  onClick={() => setShowPublishModal(true)}
                  className="bg-[#1B4332] hover:bg-emerald-800 text-white font-bold text-sm px-5 py-3.5 rounded-2xl shadow-md transition flex items-center gap-2 shrink-0 self-start lg:self-center"
                >
                  <PlusCircle className="w-5 h-5 text-amber-400" />
                  Đăng Bài Báo Định Kỳ Mới
                </button>
              </div>

              {/* Bộ lọc nguồn tin */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-stone-200">
                <div className="flex flex-wrap gap-2">
                  {[
                    'Tất cả',
                    'Cục Lâm nghiệp - Kiểm lâm',
                    'Bộ NN&MT',
                    'Góc Chuyên Gia (Định kỳ)',
                    'Báo chí Lâm nghiệp'
                  ].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedNewsCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                        selectedNewsCategory === cat
                          ? 'bg-[#1B4332] text-white shadow-sm'
                          : 'bg-stone-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={globalSearch}
                    onChange={(e) => setGlobalSearch(e.target.value)}
                    placeholder="Tìm bài viết, tác giả, chủ đề..."
                    className="w-full pl-9 pr-4 py-2 bg-stone-100 border border-stone-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>
            </div>

            {/* Danh sách bài báo */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1B4332]/95 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>

                      <h2
                        onClick={() => setSelectedArticle(item)}
                        className="text-lg font-bold text-slate-900 hover:text-emerald-700 cursor-pointer leading-snug"
                      >
                        {item.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {item.summary}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-stone-100">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-stone-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                          <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="truncate max-w-[170px]">{item.author}</span>
                        </span>
                        <button
                          onClick={() => setSelectedArticle(item)}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-950 flex items-center gap-1"
                        >
                          Xem toàn văn <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* 3. HỆ THỐNG VĂN BẢN PHÁP LUẬT (VBPL)       */}
        {/* ========================================== */}
        {activeTab === 'legal' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            {/* Header & Hướng dẫn đối chiếu VBPL */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    <Scale className="w-3.5 h-3.5" />
                    Cơ sở dữ liệu Pháp luật Lâm nghiệp & Đất rừng
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Hệ Thống Văn Bản Pháp Luật Hiện Hành & Văn Bản Hợp Nhất
                  </h1>
                  <p className="text-sm text-slate-600 max-w-3xl">
                    Tra cứu đầy đủ các Luật, Nghị định, Thông tư về Lâm nghiệp, Đất lâm nghiệp, Xử phạt vi phạm hành chính và Kỹ thuật lâm sinh. Từng văn bản đều được rà soát thời gian ban hành, tình trạng hiệu lực và tích hợp nút đối chiếu trực tiếp sang Cổng dữ liệu Quốc gia <code className="font-bold text-emerald-800">vbpl.vn</code> & Bộ Nông nghiệp và Môi trường.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href="https://vbpl.vn/bonongnghiep/Pages/Home.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl flex items-center gap-2 shadow-sm transition"
                  >
                    <Building2 className="w-4 h-4 text-amber-400" />
                    Cổng VBPL Bộ NN&MT
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://vbpl.vn/TW/Pages/vbpq-timkiem.aspx?dvid=13&Keyword=L%C3%A2m%20nghi%E1%BB%87p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold px-4 py-3 rounded-xl flex items-center gap-2 shadow-sm transition"
                  >
                    <Database className="w-4 h-4" />
                    Tra cứu CSDL Quốc gia (vbpl.vn)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bộ công cụ lọc VBPL chuyên sâu */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 pt-4 border-t border-stone-200">
                <div className="lg:col-span-5 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={legalSearch}
                    onChange={(e) => setLegalSearch(e.target.value)}
                    placeholder="Nhập số hiệu (VD: 91/2024/NĐ-CP, 24/2024, Đất rừng...)"
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-100 border border-stone-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div className="lg:col-span-3">
                  <select
                    value={legalStatusFilter}
                    onChange={(e) => setLegalStatusFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-100 border border-stone-200 rounded-xl text-sm font-medium text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Tất cả">Tất cả tình trạng hiệu lực</option>
                    <option value="Còn hiệu lực">Còn hiệu lực (Đang áp dụng)</option>
                    <option value="Hết hiệu lực một phần">Hết hiệu lực một phần (Đã sửa đổi)</option>
                    <option value="Hết hiệu lực">Hết hiệu lực (Để đối chiếu lịch sử)</option>
                  </select>
                </div>

                <div className="lg:col-span-2">
                  <select
                    value={legalFieldFilter}
                    onChange={(e) => setLegalFieldFilter(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-stone-100 border border-stone-200 rounded-xl text-sm font-medium text-slate-700 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Tất cả">Mọi lĩnh vực</option>
                    <option value="Quản lý chung & Đất rừng">Quản lý chung & Đất rừng</option>
                    <option value="Đất lâm nghiệp">Đất lâm nghiệp</option>
                    <option value="Quản lý bảo vệ rừng">Quản lý bảo vệ rừng</option>
                    <option value="Lâm sinh & Điều tra rừng">Lâm sinh & Điều tra rừng</option>
                    <option value="Bảo tồn đa dạng sinh học">Bảo tồn đa dạng sinh học</option>
                    <option value="Thanh tra & Xử phạt Kiểm lâm">Thanh tra & Xử phạt</option>
                  </select>
                </div>

                <div className="lg:col-span-2 flex items-center">
                  <label className="flex items-center gap-2 cursor-pointer select-none text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200 px-3.5 py-2.5 rounded-xl w-full justify-center">
                    <input
                      type="checkbox"
                      checked={onlyConsolidated}
                      onChange={(e) => setOnlyConsolidated(e.target.checked)}
                      className="rounded text-emerald-700 focus:ring-emerald-600 w-4 h-4"
                    />
                    <span>Văn bản hợp nhất</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Danh sách bảng Văn bản pháp luật */}
            <div className="space-y-4">
              {filteredLegalDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-emerald-500/80 transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="space-y-3 flex-grow">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs sm:text-sm font-bold bg-[#1B4332] text-white px-3 py-1 rounded-lg">
                          {doc.code}
                        </span>
                        {renderLegalStatusBadge(doc.status)}
                        {doc.isConsolidated && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold bg-teal-100 text-teal-900 border border-teal-300 px-3 py-1 rounded-full">
                            <FileText className="w-3.5 h-3.5" />
                            Văn bản hợp nhất Bộ NN&MT
                          </span>
                        )}
                        <span className="text-xs font-medium bg-stone-100 text-slate-700 px-2.5 py-1 rounded-md">
                          {doc.field}
                        </span>
                      </div>

                      <h2
                        onClick={() => setSelectedLegalDoc(doc)}
                        className="text-lg font-bold text-slate-900 hover:text-emerald-700 cursor-pointer"
                      >
                        {doc.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed">{doc.summary}</p>

                      {/* Khung thông tin thời gian ban hành & Kiểm chứng vbpl.vn */}
                      <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-slate-600">
                          <span>
                            Cơ quan: <strong className="text-slate-900">{doc.issuer}</strong>
                          </span>
                          <span>
                            Ngày ban hành: <strong className="text-slate-900">{doc.issueDate}</strong>
                          </span>
                          <span>
                            Ngày hiệu lực:{' '}
                            <strong className="text-emerald-800">{doc.effectiveDate}</strong>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-xs text-emerald-900 bg-emerald-50/90 border border-emerald-200 px-3.5 py-2.5 rounded-xl">
                        <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>
                          <strong>Ghi chú rà soát hiệu lực (vbpl.vn):</strong> {doc.verificationNote}
                        </span>
                      </div>
                    </div>

                    {/* Cột nút thao tác */}
                    <div className="flex sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:w-52">
                      <a
                        href={doc.vbplUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs px-4 py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition"
                      >
                        Kiểm tra trên vbpl.vn
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => setSelectedLegalDoc(doc)}
                        className="flex-1 bg-stone-100 hover:bg-stone-200 text-slate-800 font-semibold text-xs px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Xem chi tiết hồ sơ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* 4. TRA CỨU LOÀI ĐỘNG - THỰC VẬT RỪNG       */}
        {/* ========================================== */}
        {activeTab === 'species' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                    <Leaf className="w-3.5 h-3.5" />
                    Cơ sở dữ liệu Đa dạng Sinh học Lâm nghiệp
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Tra Cứu Các Loài Động Vật, Thực Vật Rừng & Cây Dược Liệu Quý Hiếm
                  </h1>
                  <p className="text-sm text-slate-600 max-w-3xl">
                    Phân loại chuẩn theo Danh mục thực vật rừng, động vật rừng nguy cấp, quý, hiếm (Nhóm IA, IB, IIA, IIB theo Nghị định 84/2021/NĐ-CP và Nghị định 06/2019/NĐ-CP), Sách Đỏ Việt Nam và danh mục cây dược liệu trồng dưới tán rừng.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  {['Tất cả', 'Thực vật rừng', 'Động vật rừng', 'Dược liệu dưới tán rừng'].map(
                    (k) => (
                      <button
                        key={k}
                        onClick={() => setSpeciesKingdomFilter(k)}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                          speciesKingdomFilter === k
                            ? 'bg-[#1B4332] text-white'
                            : 'bg-stone-100 text-slate-700 hover:bg-emerald-50'
                        }`}
                      >
                        {k}
                      </button>
                    )
                  )}
                </div>

                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={speciesSearch}
                    onChange={(e) => setSpeciesSearch(e.target.value)}
                    placeholder="Tìm tên Việt, tên Latin (VD: Lim xanh, Erythrophleum)..."
                    className="w-full pl-10 pr-4 py-2.5 bg-stone-100 border border-stone-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSpecies.map((sp) => (
                <div
                  key={sp.id}
                  onClick={() => setSelectedSpecies(sp)}
                  className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl transition overflow-hidden cursor-pointer flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={sp.image}
                      alt={sp.vietnameseName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#1B4332]/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {sp.kingdom}
                    </span>
                    <span className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                      {sp.conservationGroup}
                    </span>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700">
                        {sp.vietnameseName}
                      </h3>
                      <p className="text-xs italic font-medium text-emerald-800">
                        Tên khoa học: {sp.scientificName}
                      </p>
                      <p className="text-xs text-slate-500">
                        Họ: <strong>{sp.family}</strong> • Sách Đỏ: <strong>{sp.redBookStatus}</strong>
                      </p>
                      <p className="text-sm text-slate-600 line-clamp-3 pt-1">{sp.morphology}</p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                      <span>{sp.woodGroup}</span>
                      <span className="flex items-center gap-1">
                        Hồ sơ loài <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* 5. ĐÀO TẠO & TÀI LIỆU HỌC TẬP LÂM NGHIỆP    */}
        {/* ========================================== */}
        {activeTab === 'elearning' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            {/* Banner kết nối elearning.gis.vn */}
            <div className="bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-emerald-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-300/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  Liên kết Đào tạo Chính thức
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Trung Tâm Lớp Học & Tài Liệu Học Tập Lâm Nghiệp Số (Elearning.gis.vn)
                </h1>
                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                  Hệ thống bài giảng trực tuyến, tài liệu hướng dẫn kỹ thuật lâm sinh, điều tra kiểm kê rừng, sử dụng QGIS/ArcGIS và giải đoán ảnh viễn thám dành cho cán bộ lâm nghiệp, kiểm lâm và sinh viên ngành Lâm học - Quản lý tài nguyên rừng.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://elearning.gis.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 transition"
                  >
                    Vào Cổng Học Tập https://elearning.gis.vn/
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://gis.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-5 py-3.5 rounded-xl border border-white/20 flex items-center gap-2 transition"
                  >
                    Thư viện Giải pháp GIS.VN
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Danh sách các khóa học chuyên đề */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                Các Lớp Học Chuyên Đề Lâm Nghiệp & GIS Tiêu Biểu
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {ELEARNING_COURSES.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                          {course.badge}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {course.duration} • {course.students}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900">{course.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Đơn vị đào tạo: <strong className="text-slate-700">{course.instructor}</strong>
                      </p>

                      <div className="pt-2 space-y-1.5">
                        <div className="text-xs font-bold text-slate-700">Nội dung trọng tâm:</div>
                        {course.topics.map((tp, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{tp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-800">
                        Trình độ: {course.level}
                      </span>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1B4332] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition"
                      >
                        Tham gia lớp học <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ========================================== */}
        {/* 6. HỆ SINH THÁI ỨNG DỤNG LÂM NGHIỆP SỐ     */}
        {/* ========================================== */}
        {activeTab === 'apps' && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                <Layers className="w-3.5 h-3.5" />
                Liên kết Hệ thống Ứng dụng Chuyên ngành
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Hệ Sinh Thái Ứng Dụng Bảo Vệ Rừng & Địa Không Gian GeoGIS
              </h1>
              <p className="text-sm text-slate-600 max-w-3xl">
                Kết nối đồng bộ các nền tảng công nghệ phục vụ quản lý bảo vệ rừng, bản đồ WebGIS tiểu khu - khoảnh - lô, giải pháp hạ tầng dữ liệu không gian và đào tạo trực tuyến.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {FORESTRY_APPS.map((app) => (
                <div
                  key={app.id}
                  className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className={`bg-gradient-to-r ${app.color} p-6 text-white`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                          {app.tag}
                        </span>
                        <span className="font-mono text-xs text-amber-300">{app.domain}</span>
                      </div>
                      <h2 className="text-xl font-bold mt-3">{app.name}</h2>
                    </div>

                    <div className="p-6 space-y-4">
                      <p className="text-sm text-slate-600 leading-relaxed">{app.description}</p>
                      <div className="space-y-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Tính năng tích hợp:
                        </div>
                        {app.features.map((ft, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{ft}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#1B4332] hover:bg-emerald-800 text-white font-bold text-sm py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2 shadow transition"
                    >
                      Khởi chạy {app.url}
                      <ExternalLink className="w-4 h-4 text-amber-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* ========================================== */}
      {/* MODAL 1: XEM CHI TIẾT BÀI VIẾT / CHUYÊN ĐỀ */}
      {/* ========================================== */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-6 bg-[#1B4332] text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow">
                {selectedArticle.category}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="font-semibold text-emerald-800">{selectedArticle.author}</span>
                <span>•</span>
                <span>Ngày đăng: {selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {selectedArticle.title}
              </h2>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm font-medium text-emerald-950">
                {selectedArticle.summary}
              </div>

              <div className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line space-y-4">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedArticle.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-stone-100 text-slate-700 px-3 py-1 rounded-full font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-stone-200 hover:bg-stone-300 text-slate-800 font-bold text-xs px-5 py-2.5 rounded-xl"
                >
                  Đóng bài viết
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 2: ĐĂNG BÀI BÁO ĐỊNH KỲ MỚI          */}
      {/* ========================================== */}
      {showPublishModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2.5">
                <PlusCircle className="w-6 h-6 text-emerald-700" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Đăng Tải Bài Báo / Nghiên Cứu Định Kỳ Mới
                </h3>
              </div>
              <button
                onClick={() => setShowPublishModal(false)}
                className="p-2 rounded-full hover:bg-stone-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handlePublishArticle} className="space-y-4 mt-5">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Tiêu đề bài báo / chuyên đề *
                </label>
                <input
                  type="text"
                  required
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="VD: Ứng dụng ảnh vệ tinh Sentinel-2 giám sát rừng ngập mặn..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Chuyên mục nguồn tin
                  </label>
                  <select
                    value={newPost.category}
                    onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Góc Chuyên Gia (Định kỳ)">Góc Chuyên Gia (Định kỳ)</option>
                    <option value="Cục Lâm nghiệp - Kiểm lâm">Cục Lâm nghiệp - Kiểm lâm</option>
                    <option value="Bộ NN&MT">Bộ Nông nghiệp và Môi trường</option>
                    <option value="Báo chí Lâm nghiệp">Báo chí Lâm nghiệp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Tác giả / Nhóm chuyên gia
                  </label>
                  <input
                    type="text"
                    value={newPost.author}
                    onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                    placeholder="VD: KS. Nguyễn Văn A - Nhóm Lâm sinh"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Tóm tắt ngắn
                </label>
                <input
                  type="text"
                  value={newPost.summary}
                  onChange={(e) => setNewPost({ ...newPost, summary: e.target.value })}
                  placeholder="Tóm tắt nội dung chính trong 1-2 câu..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Nội dung chi tiết bài viết *
                </label>
                <textarea
                  rows={5}
                  required
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Nhập nội dung chuyên môn, số liệu điều tra rừng, căn cứ pháp lý..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Từ khóa (Cách nhau bằng dấu phẩy)
                </label>
                <input
                  type="text"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                  placeholder="Lâm sinh, GeoGIS, Đất rừng, Dược liệu"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowPublishModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-slate-700 text-sm font-semibold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#1B4332] hover:bg-emerald-800 text-white text-sm font-bold shadow-md"
                >
                  Đăng tải lên Hệ thống
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 3: CHI TIẾT VĂN BẢN PHÁP LUẬT        */}
      {/* ========================================== */}
      {selectedLegalDoc && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-5">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold bg-[#1B4332] text-white px-3 py-1 rounded-md">
                    {selectedLegalDoc.code}
                  </span>
                  {renderLegalStatusBadge(selectedLegalDoc.status)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {selectedLegalDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLegalDoc(null)}
                className="p-2 rounded-full hover:bg-stone-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
              <div>
                <span className="text-slate-500">Cơ quan ban hành:</span>
                <div className="font-bold text-slate-900 mt-0.5">{selectedLegalDoc.issuer}</div>
              </div>
              <div>
                <span className="text-slate-500">Phân loại văn bản:</span>
                <div className="font-bold text-slate-900 mt-0.5">{selectedLegalDoc.type}</div>
              </div>
              <div>
                <span className="text-slate-500">Ngày ban hành:</span>
                <div className="font-bold text-slate-900 mt-0.5">{selectedLegalDoc.issueDate}</div>
              </div>
              <div>
                <span className="text-slate-500">Ngày có hiệu lực:</span>
                <div className="font-bold text-emerald-800 mt-0.5">
                  {selectedLegalDoc.effectiveDate}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase text-slate-500">Nội dung trọng tâm:</div>
              <p className="text-sm text-slate-700 leading-relaxed">{selectedLegalDoc.summary}</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                <CheckCircle2 className="w-4 h-4" />
                Kết quả đối chiếu hiệu lực tại Cổng VBPL Quốc gia (vbpl.vn):
              </div>
              <p>{selectedLegalDoc.verificationNote}</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <a
                href={selectedLegalDoc.vbplUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1B4332] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl flex items-center gap-2"
              >
                Mở văn bản gốc trên vbpl.vn <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={() => setSelectedLegalDoc(null)}
                className="bg-stone-200 hover:bg-stone-300 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL 4: HỒ SƠ CHI TIẾT LOÀI ĐỘNG THỰC VẬT */}
      {/* ========================================== */}
      {selectedSpecies && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200">
            <div className="relative h-60">
              <img
                src={selectedSpecies.image}
                alt={selectedSpecies.vietnameseName}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedSpecies(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute bottom-4 left-6 bg-amber-500 text-slate-950 text-xs font-bold px-3.5 py-1.5 rounded-full shadow">
                {selectedSpecies.conservationGroup}
              </span>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase text-emerald-700">
                  {selectedSpecies.kingdom} • {selectedSpecies.family}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {selectedSpecies.vietnameseName}
                </h3>
                <p className="text-sm italic text-emerald-800 font-medium">
                  Danh pháp khoa học: {selectedSpecies.scientificName}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200 text-xs">
                <div>
                  <span className="text-slate-500">Tình trạng Sách Đỏ / IUCN:</span>
                  <div className="font-bold text-rose-700 mt-0.5">
                    {selectedSpecies.redBookStatus}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500">Phân nhóm lâm sản / Giá trị:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{selectedSpecies.woodGroup}</div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="font-bold text-slate-900">Đặc điểm nhận dạng & Sinh thái:</div>
                <p className="text-slate-700 leading-relaxed">{selectedSpecies.morphology}</p>
                <div className="font-bold text-slate-900 pt-2">Khu vực phân bố & Lập địa:</div>
                <p className="text-slate-700 leading-relaxed">{selectedSpecies.habitat}</p>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={() => setSelectedSpecies(null)}
                  className="bg-[#1B4332] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl"
                >
                  Đóng hồ sơ loài
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* CHÂN TRANG (FOOTER CHUYÊN NGÀNH)           */}
      {/* ========================================== */}
      <footer className="bg-[#0F291E] text-emerald-100/90 border-t border-emerald-900 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-emerald-800/80">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <Trees className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">
                    CỔNG THÔNG TIN LÂM NGHIỆP & GEOGIS
                  </div>
                  <div className="text-xs text-emerald-300">
                    Hệ sinh thái Pháp lý, Đa dạng sinh học & Bản đồ số Lâm nghiệp
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                Cổng thông tin tích hợp phục vụ tra cứu văn bản quy phạm pháp luật Lâm nghiệp & Đất rừng (đối chiếu hiệu lực trực tiếp với CSDL Quốc gia vbpl.vn và Văn bản hợp nhất Bộ Nông nghiệp & Môi trường), cập nhật tin tức từ Cục Lâm nghiệp - Kiểm lâm và kết nối hệ thống ứng dụng WebGIS.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Các Phân Hệ Chính
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button onClick={() => setActiveTab('news')} className="hover:text-white">
                    • Tin tức Cục Lâm nghiệp - Kiểm lâm & Bộ NN&MT
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('legal')} className="hover:text-white">
                    • Văn bản Pháp luật & Hợp nhất (vbpl.vn)
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('species')} className="hover:text-white">
                    • Tra cứu Động - Thực vật rừng (NĐ 84/2021)
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab('elearning')} className="hover:text-white">
                    • Lớp học & Tài liệu Lâm nghiệp (E-Learning)
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Liên Kết Ứng Dụng Lâm Nghiệp Số
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://baoverung.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    Ứng dụng Bảo vệ rừng: https://baoverung.vercel.app/
                  </a>
                </li>
                <li>
                  <a
                    href="https://baoverung.vercel.app/geogis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    Bản đồ Lâm nghiệp GeoGIS: https://baoverung.vercel.app/geogis
                  </a>
                </li>
                <li>
                  <a
                    href="https://elearning.gis.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    Đào tạo trực tuyến: https://elearning.gis.vn/
                  </a>
                </li>
                <li>
                  <a
                    href="https://gis.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-300 flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    Cổng Địa không gian Việt Nam: https://gis.vn/
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
            <div>
              © {new Date().getFullYear()} Cổng Thông Tin Lâm Nghiệp & Địa Không Gian Số. Phát triển kết nối hệ sinh thái GIS.VN & Bảo Vệ Rừng.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://vbpl.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                CSDL Quốc gia VBPL.VN
              </a>
              <span>•</span>
              <a
                href="https://gis.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GIS.VN
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}