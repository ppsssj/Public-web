const cdn = "https://cdn.imweb.me/thumbnail";

export const assets = {
  ogImage: "https://cdn.imweb.me/upload/S2024121644edaa428e273/221b87165176d.png",
  heroDesktop: `${cdn}/20241220/e1b3c36a066e5.png`,
  heroMobile: `${cdn}/20241224/4fa65052dcff3.png`,
  aboutBackground: `${cdn}/20241220/1932b092f10d3.png`,
  aboutLogo: `${cdn}/20241220/64e17b12a8464.png`,
  aboutMobileMark: `${cdn}/20241224/63a9d3c5ccd8e.png`,
  hrImage: `${cdn}/20241220/c376596dec94d.png`,
  hrMobileImage: `${cdn}/20241224/8823c6e57d6cc.png`,
  mindfulnessImage: `${cdn}/20250106/f01f3c88a64e4.jpg`,
  mindfulnessMobileImage: `${cdn}/20241224/425a9540d32ae.png`,
  haruDevice: `${cdn}/20241223/fd84ee1785027.png`,
  haruLogo: `${cdn}/20241223/a2cc25a09d1e4.png`,
  haruMobileLogo: `${cdn}/20241224/a41a89eb8e310.png`,
};

const labAddress = "충남 아산시 순천향로 22-11 멀티미디어 5층 509호";
const encodedLabAddress = encodeURIComponent(labAddress);

export const labLocation = {
  title: "연구실 위치",
  address: labAddress,
  mapSrc: `https://www.google.com/maps?q=${encodedLabAddress}&output=embed`,
  mapHref: "https://www.google.com/maps/search/?api=1&query=%EC%B6%A9%EB%82%A8%20%EC%95%84%EC%82%B0%EC%8B%9C%20%EC%88%9C%EC%B2%9C%ED%96%A5%EB%A1%9C%2022-11%20%EB%A9%80%ED%8B%B0%EB%AF%B8%EB%94%94%EC%96%B4%205%EC%B8%B5%20509%ED%98%B8",
  details: [
    { label: "주소", value: labAddress },
    { label: "건물/호실", value: "멀티미디어관 5층 509호" },
    { label: "캠퍼스", value: "순천향대학교 아산캠퍼스" },
  ],
};

export const navigation = [
  { label: "HOME", href: "https://www.mujinassociates.com/home" },
  {
    label: "HR 컨설팅",
    href: "https://www.mujinassociates.com/HR-Consulting",
    children: [
      { label: "이사회 자문", href: "https://www.mujinassociates.com/Consulting01" },
      { label: "리더 육성 및 선발", href: "https://www.mujinassociates.com/Consulting02" },
      { label: "경영자 코칭", href: "https://www.mujinassociates.com/Consulting03" },
      { label: "인사조직 혁신", href: "https://www.mujinassociates.com/Consulting04" },
    ],
  },
  {
    label: "마음챙김 서비스",
    href: "https://www.mujinassociates.com/mindservice",
    children: [
      { label: "명상 컨설팅", href: "https://www.mujinassociates.com/mindservice01" },
      { label: "마음챙김 프로그램", href: "https://www.mujinassociates.com/mindservice02" },
      { label: "인증 프로그램", href: "https://www.mujinassociates.com/mindservice03" },
    ],
  },
  {
    label: "회사소개",
    href: "https://www.mujinassociates.com/about",
    children: [
      { label: "About 무진어소시에이츠", href: "https://www.mujinassociates.com/aboutmujin" },
      { label: "무진 Insight", href: "https://www.mujinassociates.com/mujininsight" },
      { label: "협업 및 프로그램 문의", href: "https://www.mujinassociates.com/contact" },
    ],
  },
];

const researchImages = {
  stock: "/Research/enhancing%20stock.jpg",
  chartExplanation: "/Research/a%20realtime.webp",
  fontRecommendation: "/Research/Implementing%20and.jpg",
  symbolNet: "/Research/symbolnet.jpg",
};

const featureHighlightImages = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
];

export const featureHighlights = [
  {
    title: "Financial Time-Series Analysis & Prediction.",
    text: "금융 시계열 데이터의 패턴을 분석하고,\n예측 모델을 통해 의사결정에 필요한 인사이트를 연구합니다.",
    href: "#",
    image: featureHighlightImages[0],
    mobileImage: featureHighlightImages[0],
    align: "right",
  },
  {
    title: "Visual Information Processing & AI Applications.",
    text: "시각 정보를 이해하고 처리하는 AI 기술을 바탕으로\n현실 문제에 적용 가능한 지능형 응용 시스템을 연구합니다.",
    href: "#",
    image: featureHighlightImages[1],
    mobileImage: featureHighlightImages[1],
    align: "left",
  },
  {
    title: "Accessibility & Explainable AI.",
    text: "모두가 접근 가능한 AI와 설명 가능한 모델을 통해\n사용자가 신뢰할 수 있는 인공지능 기술을 연구합니다.",
    href: "#",
    image: featureHighlightImages[2],
    mobileImage: featureHighlightImages[2],
    align: "right",
  },
];

export const features = [
  {
    title: "Enhancing stock market trend reversal prediction using feature-enriched neural networks.",
    text: "Feature-enriched neural networks for precise stock trend reversal prediction.",
    href: "https://www.cell.com/heliyon/fulltext/S2405-8440%2824%2900167-1",
    image: researchImages.stock,
    mobileImage: researchImages.stock,
    align: "right",
  },
  {
    title: "A Real-Time Chart Explanation System for Visually Impaired Individuals.",
    text: "A real-time chart explanation system designed for accessibility and clarity.",
    href: "https://link.springer.com/chapter/10.1007/978-3-031-62846-7_37",
    image: researchImages.chartExplanation,
    mobileImage: researchImages.chartExplanation,
    align: "left",
  },
  {
    title: "Implementing and Evaluating a Font Recommendation System Through Emotion-Based Content-Font Mapping.",
    text: "Emotion-based content-font mapping for smarter font recommendation systems.",
    href: "https://www.mdpi.com/2076-3417/14/3/1123",
    image: researchImages.fontRecommendation,
    mobileImage: researchImages.fontRecommendation,
    align: "right",
  },
  {
    title: "SymbolNet: Bridging Latent Neural Representations and Symbolic Reasoning via Intermediate Feature Interpretation.",
    text: "Bridging latent neural representations and symbolic reasoning through feature interpretation.",
    href: "https://ieeexplore.ieee.org/abstract/document/10980088",
    image: researchImages.symbolNet,
    mobileImage: researchImages.symbolNet,
    align: "left",
  },
];

export const insightPosts = [
  {
    category: "Article",
    title: "마음챙김 명상 플랫폼 ‘하루명상’, 예술 음악 명상 프로그램 선보여",
    summary: "박제경 작가 개인전에서 맞춤형 예술음악명상 세션 진행 (문화뉴스 백현우 기자) 기업·단체·학교 등을 대상으로 마음챙김 명상 교육을 제공하는 전문업체이자",
    date: "2025-11-17",
    image: `${cdn}/20251117/4a5bc322f56ae.jpeg`,
    href: "https://www.mujinassociates.com/mujininsight/?idx=168640725&bmode=view",
  },
  {
    category: "주요 활동",
    title: "조지프 헨릭 교수 KAIST 특별 초청 강연 현장 중계!",
    summary: "지난 2025년 9월 22일(월), KAIST에서 진행된 아주 특별한 행사에 참여하여 현장을 빛내고 왔습니다! 하버드대학교의 세계적인 석학이신 조지프 헨릭",
    date: "2025-09-23",
    image: `${cdn}/20251117/435176fb39070.png`,
    href: "https://www.mujinassociates.com/mujininsight/?idx=168641586&bmode=view",
  },
  {
    category: "주요 활동",
    title: "2025 국제선명상대회: 풍요롭고 행복한 삶을 위한 하트스마일명상 강연 성료",
    summary: "지난 4월 5일 (토) 2025 국제선명상대회 국제 선명상 축제의 일환으로 하루명상 대표이자 선명상위원회에서 활동하는 김병전 대표의 특별 강연이",
    date: "2025-04-07",
    image: `${cdn}/20251118/c573de4bbc47c.jpg`,
    href: "https://www.mujinassociates.com/mujininsight/?idx=168650621&bmode=view",
  },
  {
    category: "Article",
    title: "하루명상, '예술 명상 프로그램' 선보여",
    summary: "최영란 작가의 개인전과 연계한 특별 프로그램내면의 지혜 회복과 예술적 경험을 통한 마음챙김 강화 하루명상, '예술 명상 프로그램' 선보여",
    date: "2025-04-02",
    image: `${cdn}/20250402/2dcab50f8da0c.png`,
    href: "https://www.mujinassociates.com/mujininsight/?idx=160545694&bmode=view",
  },
];

export const forestInfo = [
  {
    label: "주소",
    value: "서울 종로구 율곡로6길 23, 주원빌딩 3층 (지하철 : 종로3가역,안국역)",
  },
  { label: "이용 시간", value: "9시~23시" },
  { label: "이용 목적", value: "명상, 요가, 다도, 영화/음악감상 등 다양한 프로그램 진행" },
  { label: "수용 인원", value: "약 20명 내외" },
  {
    label: "구비 시설",
    value: "제네바 3세대 스피커 구비 (블루투스, CD, 이어폰 단자로 이용가능)\n스탠드형 TV, 방석, 매트, 싱잉볼 구비",
  },
];
