export interface TourPackage {
  id: string;
  titleEn: string;
  titleKr: string;
  category: 'Luxury' | 'Golf' | 'Wildlife' | 'Culture' | 'Honeymoon' | 'Family' | 'Ayurveda' | 'Beach' | 'TailorMade';
  duration: string;
  priceUSD: number;
  image: string;
  gallery: string[];
  locations: string[];
  hotels: string[];
  descriptionEn: string;
  descriptionKr: string;
  highlightsEn: string[];
  highlightsKr: string[];
  itineraryEn: { day: number; title: string; desc: string }[];
  itineraryKr: { day: number; title: string; desc: string }[];
  includedEn: string[];
  includedKr: string[];
  idealForEn?: string;
  idealForKr?: string;
}

export interface GolfCourse {
  id: string;
  nameEn: string;
  nameKr: string;
  location: string;
  holes: number;
  par: number;
  established: number;
  designer: string;
  image: string;
  hotel: string;
  duration: string;
  greenFeeUSD: number;
  difficultyEn: string;
  difficultyKr: string;
  rating: number;
  recommended?: boolean;
  overviewEn: string;
  overviewKr: string;
  featuresEn: string[];
  featuresKr: string[];
}

export interface Destination {
  id: string;
  nameEn: string;
  nameKr: string;
  subtitleEn: string;
  subtitleKr: string;
  image: string;
  gallery: string[];
  hotels: string[];
  highlightsEn: string[];
  highlightsKr: string[];
  bestTimeEn: string;
  bestTimeKr: string;
  descEn: string;
  descKr: string;
  svgPos: { x: number; y: number };
}

export interface Experience {
  id: string;
  titleEn: string;
  titleKr: string;
  category: string;
  image: string;
  descEn: string;
  descKr: string;
}

export interface BlogArticle {
  id: string;
  titleEn: string;
  titleKr: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  excerptEn: string;
  excerptKr: string;
  contentEn: string;
  contentKr: string;
}

export interface LuxuryHotel {
  id: string;
  nameEn: string;
  nameKr: string;
  category: 'Luxury Resorts' | 'Golf Resorts' | 'Beach Resorts' | 'Mountain Hotels' | 'Boutique Hotels' | 'Private Villas';
  locationEn: string;
  locationKr: string;
  rating: number;
  image: string;
  gallery: string[];
  facilitiesEn: string[];
  facilitiesKr: string[];
  pricePerNightUSD: number;
  descEn: string;
  descKr: string;
}

export interface VideoStory {
  id: string;
  titleEn: string;
  titleKr: string;
  categoryEn: string;
  categoryKr: string;
  image: string;
  videoUrl?: string;
  duration: string;
  descEn: string;
  descKr: string;
}

export interface PremiumService {
  id: string;
  titleEn: string;
  titleKr: string;
  iconName: string;
  image: string;
  descEn: string;
  descKr: string;
}

// --------------------------------------------------
// SRI LANKA UNIQUE PHOTO REPOSITORY
// --------------------------------------------------
const SRI_LANKA_IMAGES = {
  sigiriyaCitadel: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
  sigiriyaLandscape: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80",
  teaPluckers: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
  nineArchBridge: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
  highlandTeaEstate: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  yalaLeopard: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
  asianElephant: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&w=1200&q=80",
  galleDutchFort: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  bentotaBeach: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
  kandyLake: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80",
  royalGolf: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=80",
  victoriaGolf: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80",
  shangrilaGolf: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80",
  catalinaGolf: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=80",
  helicopter: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
  catamaranYacht: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
};

export const GOLF_COURSES: GolfCourse[] = [
  {
    id: "royal-colombo",
    nameEn: "Royal Colombo Golf Club",
    nameKr: "로열 콜롬보 골프 클럽",
    location: "Colombo",
    holes: 18,
    par: 72,
    established: 1879,
    designer: "Colonial British Royal Engineers",
    image: SRI_LANKA_IMAGES.royalGolf,
    hotel: "Cinnamon Grand & Shangri-La Colombo",
    duration: "4 Days / 3 Nights",
    greenFeeUSD: 180,
    difficultyEn: "Championship / Classic",
    difficultyKr: "클래식 챔피언십",
    rating: 4.9,
    recommended: false,
    overviewEn: "Sri Lanka's oldest golf club carrying a Royal Charter from King George V. Featuring lush manicured fairways with historical railway tracks weaving through the course.",
    overviewKr: "1879년에 설립되어 조지 5세 국왕으로부터 왕실 칭호를 받은 스리랑카 최고 역사의 18홀 클래식 골프 클럽입니다.",
    featuresEn: ["Royal Charter heritage", "Private PGA pros", "Historic Colonial Clubhouse", "Helicopter pad access"],
    featuresKr: ["영국 왕실 인가 클럽", "PGA 프로 레슨", "식민지풍 고급 클럽하우스", "전용 헬기 승강장 보유"]
  },
  {
    id: "victoria-golf",
    nameEn: "Victoria Golf & Country Resort",
    nameKr: "빅토리아 골프 & 컨트리 리조트",
    location: "Kandy",
    holes: 18,
    par: 73,
    established: 1999,
    designer: "Donald Steel",
    image: SRI_LANKA_IMAGES.victoriaGolf,
    hotel: "Santani Wellness Resort & W15 Hanthana",
    duration: "5 Days / 4 Nights",
    greenFeeUSD: 220,
    difficultyEn: "Championship / Mountain Lake",
    difficultyKr: "호수 & 산악 챔피언십",
    rating: 5.0,
    recommended: true,
    overviewEn: "Ranked among the most picturesque golf courses in Asia. Nestled beside Victoria Reservoir and surrounded by the Knuckles Mountain Range.",
    overviewKr: "아시아에서 가장 아름다운 10대 골프 코스로 선정된 곳으로, 빅토리아 호수와 너클스 산맥의 환상적인 파노라마 뷰를 자랑합니다.",
    featuresEn: ["Ranked Top 10 Asia", "Donald Steel Signature", "Panoramic Reservoir views", "Luxury Villa lodging"],
    featuresKr: ["아시아 Top 10 코스 선정", "도널드 스틸 설계", "빅토리아 호수 파노라마 뷰", "럭셔리 프라이빗 빌라"]
  },
  {
    id: "nuwara-eliya-golf",
    nameEn: "Nuwara Eliya Golf Club",
    nameKr: "누와라엘리야 골프 클럽",
    location: "Nuwara Eliya (Tea Country)",
    holes: 18,
    par: 71,
    established: 1889,
    designer: "British Officers of Gordon Highlanders",
    image: SRI_LANKA_IMAGES.highlandTeaEstate,
    hotel: "Ceylon Tea Trails & Grand Hotel Nuwara Eliya",
    duration: "5 Days / 4 Nights",
    greenFeeUSD: 190,
    difficultyEn: "High Altitude / Pine Trees",
    difficultyKr: "해발 1,800m 고원 코스",
    rating: 4.8,
    recommended: false,
    overviewEn: "Set 6,000 feet above sea level amidst misty tea plantations and fir trees. A cool, crisp mountain golf experience reminiscent of the Scottish Highlands.",
    overviewKr: "해발 1,800m 고원에 위치하여 맑고 시원한 기후 속에서 스코틀랜드 하이랜드 분위기를 만끽할 수 있는 최고의 고원 골프장입니다.",
    featuresEn: ["6,000ft Altitude", "Tea Plantation backdrop", "Whisky & Cigar Lounge", "Private Caddie service"],
    featuresKr: ["해발 1,800m 고원 기후", "차밭 배경 코스", "위스키 & 시가 라운지", "1:1 전담 캐디 서비스"]
  },
  {
    id: "shangri-la-hambantota",
    nameEn: "Shangri-La Golf Resort & Country Club",
    nameKr: "샹그릴라 함반토타 골프 리조트",
    location: "Hambantota (South Coast)",
    holes: 18,
    par: 70,
    established: 2016,
    designer: "Rodney Wright",
    image: SRI_LANKA_IMAGES.shangrilaGolf,
    hotel: "Shangri-La Hambantota Golf Resort & Spa",
    duration: "6 Days / 5 Nights",
    greenFeeUSD: 240,
    difficultyEn: "Oceanfront Resort / Coastal Winds",
    difficultyKr: "오션뷰 해안 리조트",
    rating: 4.9,
    recommended: true,
    overviewEn: "Sri Lanka's premier oceanfront resort golf course, crafted across a former sapphire mining field with coconut palm groves and Indian Ocean coastal breezes.",
    overviewKr: "사파이어 광산 부지에 조성된 인도양 해안 라인의 최고급 리조트 전용 코스로, 오션뷰 홀과 야자수림이 조성되어 있습니다.",
    featuresEn: ["Indian Ocean coast", "Eco-friendly design", "Luxury Spa integration", "Sunset Ocean Holes"],
    featuresKr: ["인도양 해안 오션뷰 홀", "친환경 플래티넘 코스", "최고급 샹그릴라 스파", "석양 골프 홀 연출"]
  },
  {
    id: "eagles-catalina",
    nameEn: "Eagles' Catalina Golf Course",
    nameKr: "이글스 카탈리나 골프 코스",
    location: "Koggala / Galle",
    holes: 9,
    par: 36,
    established: 2012,
    designer: "Sri Lanka Air Force Engineers",
    image: SRI_LANKA_IMAGES.catalinaGolf,
    hotel: "Amangalla & Cape Weligama",
    duration: "4 Days / 3 Nights",
    greenFeeUSD: 140,
    difficultyEn: "Resort Coastal 9-Holes",
    difficultyKr: "해안가 9홀 럭셔리 코스",
    rating: 4.7,
    recommended: false,
    overviewEn: "Exclusive coastal course adjacent to Koggala Lake and Galle Fort, offering crisp sea breezes and helicopter arrival options.",
    overviewKr: "갈레 포트 인근 코갈라 호숫가에 위치한 전원적인 프리미엄 9홀 코스로 프라이빗 세일링과 연계된 럭셔리 라운딩이 가능합니다.",
    featuresEn: ["Coastal & Lake views", "Helicopter Transfer", "Galle Fort proximity", "Exclusive VIP Access"],
    featuresKr: ["호수 & 바다 뷰", "헬기 직항 이동 가능", "갈레 요새 인접", "VIP 전용 라운딩"]
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "luxury-highlights",
    titleEn: "Sri Lanka Luxury Highlights",
    titleKr: "스리랑카 럭셔리 하이라이트",
    category: "Luxury",
    duration: "8 Days / 7 Nights",
    priceUSD: 4500,
    idealForEn: "First-time visitors",
    idealForKr: "스리랑카 첫 방문객 및 대표 명소 탐방",
    image: SRI_LANKA_IMAGES.sigiriyaCitadel,
    gallery: [
      SRI_LANKA_IMAGES.sigiriyaCitadel,
      SRI_LANKA_IMAGES.highlandTeaEstate,
      SRI_LANKA_IMAGES.galleDutchFort
    ],
    locations: ["Colombo", "Sigiriya", "Dambulla", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle", "Bentota"],
    hotels: ["Amangalla", "Ceylon Tea Trails", "Water Garden Sigiriya", "Anantara Peace Haven"],
    descriptionEn: "Ideal for first-time visitors seeking the ultimate Sri Lankan luxury experience, combining UNESCO ancient fortresses, tea estate hills, wild safari game drives, and pristine beach luxury.",
    descriptionKr: "스리랑카를 처음 방문하는 고객님을 위한 완벽한 플래그십 코스로, 유네스코 고대 유적부터 차밭 고원, 야라 사파리, 럭셔리 비치 휴양까지 스리랑카의 정수를 경험합니다.",
    highlightsEn: [
      "Airport VIP meet & greet service",
      "Sigiriya Rock Fortress exploration",
      "Dambulla Cave Temple visit",
      "Temple of the Sacred Tooth Relic, Kandy",
      "Tea plantations in Nuwara Eliya",
      "Scenic train journey to Ella",
      "Yala National Park safari experience",
      "Galle Fort heritage tour",
      "Beach relaxation in Bentota"
    ],
    highlightsKr: [
      "공항 VIP 의전 맞이 서비스",
      "시기리야 암사원 탐험",
      "담불라 황금 동굴 사원 관람",
      "캔디 불치사(부처님 치아 사원) 방문",
      "누와라엘리야 고원 차밭 시닉 투어",
      "엘라 파노라마 스닉 열차 여정",
      "야라 국립공원 지프 사파리",
      "갈레 네덜란드 포트 헤리티지 투어",
      "벤토타 럭셔리 해변 휴양"
    ],
    itineraryEn: [
      { day: 1, title: "VIP Arrival & Colombo Transfer", desc: "Airport meet & greet service with luxury chauffeur transport to 5-star hotel." },
      { day: 2, title: "Sigiriya Citadel & Dambulla Caves", desc: "Private guided climb of Sigiriya Rock Fortress and ancient Dambulla Cave Temple." },
      { day: 3, title: "Kandy Sacred City & Temple of the Tooth", desc: "Scenic drive to Kandy, visiting the revered Temple of the Sacred Tooth Relic." },
      { day: 4, title: "Nuwara Eliya Highlands & Tea Estates", desc: "Travel to misty tea country, visiting historic tea plantations and colonial estates." },
      { day: 5, title: "Scenic Train to Ella & Nine Arch Bridge", desc: "Board the iconic highland train to Ella across green mountain valleys." },
      { day: 6, title: "Yala National Park Game Drive Safari", desc: "Drive to Yala for an afternoon private 4x4 safari tracking leopards and elephants." },
      { day: 7, title: "Galle Dutch Fort & Bentota Beach", desc: "Coastal heritage tour of UNESCO Galle Fort followed by sunset beach luxury." },
      { day: 8, title: "Bentota Relaxation & Airport Transfer", desc: "Leisure morning by the Indian Ocean before private VIP airport transfer." }
    ],
    itineraryKr: [
      { day: 1, title: "VIP 입국 & 콜롬보 의전", desc: "공항 맞이 VIP 서비스 후 최고급 전용 차량으로 호텔 이동." },
      { day: 2, title: "시기리야 바위 요새 & 담불라 동굴", desc: "시기리야 암사원 및 담불라 황금 동굴 사원 프라이빗 관람." },
      { day: 3, title: "캔디 불치사 & 문화 탐방", desc: "불교 성지 캔디로 이동하여 부처님 치아 사원 방문." },
      { day: 4, title: "누와라엘리야 차밭 고원 지대", desc: "운무 가득한 고원 차밭 방문 및 프리미엄 티 테이스팅." },
      { day: 5, title: "파노라마 열차 & 엘라 나인 아치", desc: "세계에서 가장 아름다운 고원 열차 구간 탑승." },
      { day: 6, title: "야라 국립공원 표범 사파리", desc: "야라 국립공원에서 야생 표범 및 코끼리 전용 4x4 사파리." },
      { day: 7, title: "갈레 포트 & 벤토타 해변", desc: "유네스코 갈레 성벽 도시 탐방 후 벤토타 해변 입실." },
      { day: 8, title: "해변 휴양 & VIP 출국 의전", desc: "인도양 리조트 휴식 후 공항 전용 의전 출국." }
    ],
    includedEn: [
      "Luxury 4–5 star accommodation",
      "Private luxury vehicle",
      "Professional English-speaking chauffeur guide",
      "Daily breakfast",
      "All entrance arrangements",
      "Airport transfers"
    ],
    includedKr: [
      "럭셔리 4-5성급 프리미엄 숙소",
      "전 일정 프라이빗 럭셔리 전용 차량",
      "전문 영어/한국어 콘시어지 쇼퍼 가이드",
      "전 일정 조식 제공",
      "모든 주요 유적지 및 국립공원 입장권",
      "공항 픽업 및 샌딩 전용 의전"
    ]
  },
  {
    id: "golf-escape",
    titleEn: "Sri Lanka Golf Escape",
    titleKr: "스리랑카 PGA 골프 이스케이프",
    category: "Golf",
    duration: "10 Days / 9 Nights",
    priceUSD: 5900,
    idealForEn: "Golf enthusiasts",
    idealForKr: "골프 애호가 및 아시아 명문 코스 탐방객",
    image: SRI_LANKA_IMAGES.victoriaGolf,
    gallery: [
      SRI_LANKA_IMAGES.victoriaGolf,
      SRI_LANKA_IMAGES.royalGolf,
      SRI_LANKA_IMAGES.shangrilaGolf
    ],
    locations: ["Colombo", "Kandy", "Nuwara Eliya", "Hambantota", "Galle"],
    hotels: ["Shangri-La Colombo", "Santani Wellness Resort", "Ceylon Tea Trails", "Shangri-La Hambantota"],
    descriptionEn: "Designed exclusively for golf enthusiasts, featuring 4 premier 18-hole championship courses alongside rich cultural highlights, high tea estates, and luxury beach relaxation.",
    descriptionKr: "스리랑카 4대 명문 PGA 규격 골프 코스 라운딩과 캔디 문화 탐방, 차밭 휴양, 오션뷰 럭셔리 리조트 휴양을 결합한 최고급 골프 여행입니다.",
    highlightsEn: [
      "Colombo Golf Club (Royal Heritage Course)",
      "Victoria Golf & Country Resort (Donald Steel Signature)",
      "Nuwara Eliya Golf Club (6,000ft High Altitude)",
      "Shangri-La Hambantota Golf Resort (Oceanfront Course)",
      "Kandy city tour & Temple of the Tooth",
      "Tea factory visit & high tea tasting",
      "Galle Fort UNESCO exploration",
      "Luxury beachfront resort stay"
    ],
    highlightsKr: [
      "로열 콜롬보 골프 클럽 (1879년 영국 왕실 전통 코스)",
      "빅토리아 골프 & 컨트리 리조트 (도널드 스틸 설계 아시아 Top 10)",
      "누와라엘리야 골프 클럽 (해발 1,800m 고원 코스)",
      "샹그릴라 함반토타 골프 리조트 (인도양 오션뷰 코스)",
      "캔디 시티 투어 및 불치사 방문",
      "실론 차 공장 견학 및 프라이빗 애프터눈 티",
      "유네스코 갈레 성벽 도시 탐방",
      "럭셔리 오션뷰 비치 휴양"
    ],
    itineraryEn: [
      { day: 1, title: "Arrival in Colombo & Royal Colombo Golf Round", desc: "Chauffeur pick-up, warm-up round at Royal Colombo Golf Club." },
      { day: 2, title: "Transfer to Kandy & Scenic Valley Arrival", desc: "Drive to hill capital Kandy, hotel check-in overlooking Knuckles Range." },
      { day: 3, title: "18-Hole Round at Victoria Golf & Country Resort", desc: "Championship round beside Victoria Lake reservoir." },
      { day: 4, title: "Kandy Cultural Tour & Temple of the Tooth", desc: "Morning cultural excursion, visiting Sacred Tooth Relic temple." },
      { day: 5, title: "Highland Ascent & Nuwara Eliya Golf Club", desc: "Drive to 6,000ft altitude. Afternoon golf at Nuwara Eliya Club." },
      { day: 6, title: "Ceylon Tea Estate Tour & High Tea", desc: "Guided tea picking experience, master blender tasting session." },
      { day: 7, title: "Coastal Transfer & Shangri-La Hambantota Golf", desc: "Drive to south coast. Afternoon round at Shangri-La Ocean Golf." },
      { day: 8, title: "Final Championship Golf Round & Resort Spa", desc: "Morning 18 holes followed by Shangri-La Chi Spa treatment." },
      { day: 9, title: "Galle Dutch Fort Tour & Luxury Beach Stay", desc: "Coastal heritage exploration inside Galle Fort, beach relaxation." },
      { day: 10, title: "VIP Airport Transfer & Departure", desc: "Private chauffeur transfer to Colombo BIA Airport." }
    ],
    itineraryKr: [
      { day: 1, title: "콜롬보 도착 & 로열 콜롬보 라운딩", desc: "공항 의전 후 로열 콜롬보 골프 클럽 18홀 라운딩." },
      { day: 2, title: "캔디 이동 & 산악 뷰 리조트 체크인", desc: "캔디로 이동 후 너클스 산맥 전경 리조트 입실." },
      { day: 3, title: "빅토리아 골프 리조트 18홀 챔피언십", desc: "빅토리아 호수 배경 아시아 10대 명문 코스 티샷." },
      { day: 4, title: "캔디 불치사 & 문화 탐방", desc: "캔디 문화 유적 및 부처님 치아 사원 프라이빗 관람." },
      { day: 5, title: "고원 지대 이동 & 누와라엘리야 18홀", desc: "해발 1,800m 고원 코스에서 클래식 라운딩." },
      { day: 6, title: "실론 차 공장 견학 & 프리미엄 애프터눈 티", desc: "수제 차 재배 체험 및 싱글 에스테이트 티 테이스팅." },
      { day: 7, title: "남해안 이동 & 샹그릴라 오션뷰 18홀", desc: "남해안 샹그릴라 인도양 코스 라운딩." },
      { day: 8, title: "마지막 챔피언십 라운딩 & 최고급 스파", desc: "오전 라운딩 후 샹그릴라 CHI 스파 케어." },
      { day: 9, title: "갈레 성벽 도시 탐방 & 해변 휴양", desc: "네덜란드 포트 유적지 탐방 후 럭셔리 해변 휴식." },
      { day: 10, title: "VIP 출국 의전", desc: "공항 전용 의전 차량 이동 및 출국." }
    ],
    includedEn: [
      "Premium accommodation",
      "Green fee arrangements",
      "Tee-time reservations",
      "Golf equipment transportation",
      "Private chauffeur service"
    ],
    includedKr: [
      "전 일정 프리미엄 5성급 숙소",
      "전 일정 그린피 포함",
      "프라이어리티 티타임 예약 보장",
      "골프 캐디백 전용 의전 수송",
      "전 일정 프라이빗 전용 쇼퍼 차량"
    ]
  },
  {
    id: "wildlife-adventure",
    titleEn: "Sri Lanka Wildlife Adventure",
    titleKr: "스리랑카 야생 동식물 사파리 어드벤처",
    category: "Wildlife",
    duration: "7 Days / 6 Nights",
    priceUSD: 4200,
    idealForEn: "Nature enthusiasts and wildlife photographers",
    idealForKr: "자연 애호가 및 야생 사진작가",
    image: SRI_LANKA_IMAGES.yalaLeopard,
    gallery: [
      SRI_LANKA_IMAGES.yalaLeopard,
      SRI_LANKA_IMAGES.asianElephant
    ],
    locations: ["Wilpattu", "Minneriya", "Yala", "Udawalawe"],
    hotels: ["A luxury glamping lodge", "Chena Huts by Uga Escapes", "Wild Coast Tented Lodge"],
    descriptionEn: "An immersive journey through Sri Lanka's premier national parks, tracking elusive leopards, wild elephant herds, sloth bears, and rare endemic bird species with expert naturalists.",
    descriptionKr: "스리랑카 4대 국립공원을 무대로 세계 최대 밀도의 표범, 아시아 코끼리 군집, 야생 곰, 희귀 조류를 수석 자연학자와 함께 탐험하는 사파리 패키지입니다.",
    highlightsEn: [
      "Wilpattu National Park safari (dense forest & lakes)",
      "Minneriya Elephant Gathering (seasonal spectacle)",
      "Yala National Park safari (highest leopard density)",
      "Udawalawe Elephant Transit Home visit",
      "Guided birdwatching & wildlife photography"
    ],
    highlightsKr: [
      "윌파투 국립공원 사파리 (자연 호수와 야생동물)",
      "미네리야 코끼리 대군집 관람 (계절별 장관)",
      "야라 국립공원 사파리 (세계 최대 표범 밀도)",
      "우다왈라웨 코끼리 보호 센터 방문",
      "수석 가이드 동행 조망 및 야생 사진 촬영"
    ],
    itineraryEn: [
      { day: 1, title: "Arrival & Transfer to Wilpattu National Park", desc: "Private 4x4 Land Cruiser transfer to Wilpattu wilderness lodge." },
      { day: 2, title: "Wilpattu Lakes & Leopard Safari", desc: "Morning and afternoon safari tracking sloth bears, deer, and leopards." },
      { day: 3, title: "Minneriya Elephant Gathering Safari", desc: "Drive to Minneriya to witness hundreds of wild Asian elephants." },
      { day: 4, title: "Transfer to Yala National Park", desc: "Check-in at Wild Coast Tented Lodge oceanfront cocoon suite." },
      { day: 5, title: "Full-Day Yala Game Safari", desc: "Dedicated 4x4 safari with chief wildlife naturalist guide." },
      { day: 6, title: "Udawalawe Elephant Transit Home & Birdwatching", desc: "Morning visit to elephant rehab center followed by wetland birdwatching." },
      { day: 7, title: "VIP Airport Departure", desc: "Private chauffeur transfer to Colombo BIA Airport." }
    ],
    itineraryKr: [
      { day: 1, title: "입국 & 윌파투 국립공원 이동", desc: "프라이빗 4x4 전용 차량으로 윌파투 로지 이동." },
      { day: 2, title: "윌파투 호수 & 표범 사파리", desc: "오전/오후 지프 사파리로 야생 곰, 사슴, 표범 탐험." },
      { day: 3, title: "미네리야 코끼리 대군집 사파리", desc: "수백 마리의 야생 아시아 코끼리가 집결하는 미네리야 탐험." },
      { day: 4, title: "야라 국립공원 이동 & 코쿤 텐트 체크인", desc: "야라 와일드 코스트 최고급 글램핑 입실." },
      { day: 5, title: "야라 국립공원 전일 표범 탐험", desc: "1:1 수석 자연학자 동행 표범 중심 사파리." },
      { day: 6, title: "우다왈라웨 코끼리 재활 센터 & 조류 탐사", desc: "어린 코끼리 보호소 방문 및 습지 조류 관찰." },
      { day: 7, title: "VIP 출국 의전", desc: "콜롬보 공항 전용 쇼퍼 차량 출국 이동." }
    ],
    includedEn: [
      "Luxury wilderness glamping lodge stays",
      "Private 4x4 Land Cruiser safaris",
      "Expert wildlife naturalist guides",
      "All national park permits & fees",
      "Private luxury transport"
    ],
    includedKr: [
      "최고급 럭셔리 사파리 글램핑 로지 숙박",
      "전 일정 프라이빗 4x4 랜드크루저 지프",
      "전담 수석 야생동물 자연학자 가이드",
      "모든 국립공원 입장 허가권 및 세금 포함",
      "전 일정 프라이빗 럭셔리 수송"
    ]
  },
  {
    id: "cultural-heritage",
    titleEn: "Cultural Heritage Journey",
    titleKr: "스리랑카 찬란한 문화 유산 여정",
    category: "Culture",
    duration: "7 Days / 6 Nights",
    priceUSD: 3800,
    idealForEn: "History lovers and cultural travelers",
    idealForKr: "역사, 유네스코 유적지 및 문화 탐방객",
    image: SRI_LANKA_IMAGES.sigiriyaCitadel,
    gallery: [
      SRI_LANKA_IMAGES.sigiriyaCitadel,
      SRI_LANKA_IMAGES.kandyLake
    ],
    locations: ["Anuradhapura", "Mihintale", "Sigiriya", "Polonnaruwa", "Dambulla", "Kandy"],
    hotels: ["Uga Ulagalla", "Water Garden Sigiriya", "The Kingsbury Kandy"],
    descriptionEn: "Travel back through 2,500 years of royal Sri Lankan history across ancient sacred capitals, rock fortresses, golden cave temples, and authentic village traditions.",
    descriptionKr: "2,500년 역사의 왕실 수사 고대 도시, 암사원 요새, 황금 동굴 사원, 불교 성지 캔디를 탐방하는 영감 깊은 문화 유산 여정입니다.",
    highlightsEn: [
      "Anuradhapura ancient sacred city",
      "Mihintale sacred site (cradle of Buddhism)",
      "Sigiriya Rock Fortress UNESCO climb",
      "Polonnaruwa royal ancient city ruins",
      "Dambulla Cave Temple golden caves",
      "Kandy city tour & Temple of the Tooth",
      "Traditional village tour & authentic Sri Lankan lunch",
      "Cultural dance performance & Gem museum visit"
    ],
    highlightsKr: [
      "아누라다푸라 고대 성도 유적지 탐방",
      "미힌탈레 불교 발상지 성지 방문",
      "시기리야 암사원 바위 요새 등반",
      "폴론나루와 왕실 고대 도시 유적",
      "담불라 황금 동굴 사원 관람",
      "캔디 시티 투어 및 부처님 치아 사원",
      "전통 마을 방문 및 정통 스리랑카 오가닉 런치",
      "캔디 전통 댄스 공연 & 보석 박물관 관람"
    ],
    itineraryEn: [
      { day: 1, title: "Arrival & Transfer to Anuradhapura Ancient City", desc: "Private luxury chauffeur drive to ancient royal capital Anuradhapura." },
      { day: 2, title: "Anuradhapura Sacred Stupas & Mihintale Sanctuary", desc: "Guided tour of Sri Maha Bodhi tree, Ruwanwelisaya stupa, and Mihintale." },
      { day: 3, title: "Sigiriya Rock Fortress & Village Culinary Experience", desc: "Morning climb of Lion Rock citadel, followed by authentic village lunch." },
      { day: 4, title: "Polonnaruwa Royal Ruins & Parakrama Reservoir", desc: "Explore 12th-century royal palace, Gal Vihara stone Buddhas, and ancient engineering." },
      { day: 5, title: "Dambulla Cave Temple & Transfer to Kandy", desc: "Tour UNESCO cave murals in Dambulla before driving to hill capital Kandy." },
      { day: 6, title: "Kandy Sacred Tooth Relic Temple & Cultural Show", desc: "Private docent tour of Temple of the Tooth, afternoon Kandyan cultural dance." },
      { day: 7, title: "Gem Museum Tour & VIP Airport Departure", desc: "Visit Ceylon gem heritage gallery before private chauffeur transfer to airport." }
    ],
    itineraryKr: [
      { day: 1, title: "입국 & 아누라다푸라 고대 성도 이동", desc: "콜롬보 도착 후 고대 왕도 아누라다푸라로 의전 이동." },
      { day: 2, title: "아누라다푸라 대탑 & 미힌탈레 성지", desc: "스리 마하 보디 나무 및 미힌탈레 불교 성지 관람." },
      { day: 3, title: "시기리야 바위 요새 & 전통 마을 런치", desc: "시기리야 암사원 등반 후 전통 유기농 마을 오가닉 런치." },
      { day: 4, title: "폴론나루와 고대 왕궁 유적", desc: "12세기 석굴 불상 갈 비하라 및 왕궁 유적 탐방." },
      { day: 5, title: "담불라 동굴 사원 & 캔디 이동", desc: "담불라 황금 동굴 사원 벽화 관람 후 캔디 이동." },
      { day: 6, title: "캔디 불치사 & 전통 댄스 공연", desc: "부처님 치아 사원 전용 도슨트 관람 및 캔디언 댄스 관람." },
      { day: 7, title: "보석 박물관 & VIP 출국 의전", desc: "실론 보석 박물관 관람 후 공항 샌딩." }
    ],
    includedEn: [
      "Heritage boutique hotel stays",
      "Private chauffeur-driven luxury vehicle",
      "All heritage site admission tickets",
      "Traditional village lunch experience",
      "Daily breakfast"
    ],
    includedKr: [
      "부티크 헤리티지 호텔 투숙",
      "전 일정 프라이빗 전용 럭셔리 차량",
      "모든 유네스코 유적지 및 박물관 입장권",
      "전통 마을 오가닉 런치 체험",
      "전 일정 조식 포함"
    ]
  },
  {
    id: "romantic-honeymoon",
    titleEn: "Romantic Honeymoon in Paradise",
    titleKr: "스리랑카 로맨틱 허니문 인 파라다이스",
    category: "Honeymoon",
    duration: "8 Days / 7 Nights",
    priceUSD: 4900,
    idealForEn: "Newlyweds and anniversary celebrations",
    idealForKr: "신혼부부 및 기념일 특별 여행객",
    image: SRI_LANKA_IMAGES.bentotaBeach,
    gallery: [
      SRI_LANKA_IMAGES.bentotaBeach,
      SRI_LANKA_IMAGES.nineArchBridge,
      SRI_LANKA_IMAGES.catamaranYacht
    ],
    locations: ["Colombo", "Tea Country", "Ella", "Bentota", "Mirissa"],
    hotels: ["Cape Weligama", "Ceylon Tea Trails", "Anantara Peace Haven Tangalle"],
    descriptionEn: "An enchanting tropical sanctuary crafted for couples, combining beachfront private villas, candlelit oceanfront dining, scenic train journeys, and signature couple’s Ayurveda spa treatments.",
    descriptionKr: "인도양 오션뷰 프라이빗 빌라, 해변 촛불 디너, 고원 낭만 열차 여행 및 부부 전용 아유르베다 스파가 포함된 로맨틱 허니문 패키지입니다.",
    highlightsEn: [
      "Private beachfront candlelight dining experience",
      "Luxury beachfront resort stay with private plunge pool",
      "Scenic mountain train journey in private carriage",
      "Rejuvenating couple’s Ayurveda spa treatment",
      "Private sunset ocean catamaran cruise",
      "Professional honeymoon photography session"
    ],
    highlightsKr: [
      "프라이빗 해변 촛불 로맨틱 디너 연출",
      "개인 풀빌라 럭셔리 비치 리조트 투숙",
      "고원 산악 낭만 열차 여행",
      "커플 전담 아유르베다 스파 테라피",
      "프라이빗 선셋 인도양 요트 크루즈",
      "전문 스냅 작가 허니문 포토 세션"
    ],
    itineraryEn: [
      { day: 1, title: "VIP Arrival & Luxury Suite Check-In", desc: "Champagne welcome upon arrival, luxury chauffeur transfer to romantic suite." },
      { day: 2, title: "Highland Journey to Ceylon Tea Trails", desc: "Travel to romantic tea country, private high tea overlooking misty lake." },
      { day: 3, title: "Observation Train Journey & Honeymoon Photos", desc: "Scenic mountain train trip to Ella with private photography session." },
      { day: 4, title: "Transfer to South Coast Ocean Villa", desc: "Check-in at luxury beachfront resort with private plunge pool." },
      { day: 5, title: "Rejuvenating Couple's Ayurveda Spa", desc: "Full-day couple's wellness ritual with herbal oil baths." },
      { day: 6, title: "Private Sunset Yacht Cruise & Champagne", desc: "Private catamaran charter into the Indian Ocean for sunset views." },
      { day: 7, title: "Private Candlelight Beach Dining", desc: "Tailored multi-course seafood dinner served right on the beach." },
      { day: 8, title: "VIP Departure", desc: "Leisure morning before luxury chauffeur airport transfer." }
    ],
    itineraryKr: [
      { day: 1, title: "VIP 입국 & 럭셔리 스위트 입실", desc: "공항 샴페인 맞이 의전 후 허니문 스위트룸 체크인." },
      { day: 2, title: "실론 티 트레일즈 고원 이동", desc: "낭만적인 차밭 고원으로 이동하여 에메랄드 호수 뷰 애프터눈 티." },
      { day: 3, title: "낭만 고원 열차 & 허니문 스냅 촬영", desc: "엘라 구간 프라이빗 열차 탑승 및 전문 작가 스냅 촬영." },
      { day: 4, title: "남해안 풀빌라 리조트 체크인", desc: "인도양 오션뷰 프라이빗 풀빌라 입실." },
      { day: 5, title: "커플 전용 아유르베다 스파", desc: "천연 오일 수치료 및 부부 전용 웰니스 리추얼." },
      { day: 6, title: "프라이빗 선셋 요트 크루즈", desc: "인도양 석양을 감상하는 전용 카타마란 세일링." },
      { day: 7, title: "프라이빗 캔들라이트 비치 디너", desc: "해변가에서 펼쳐지는 최고급 해산물 멀티코스 디너." },
      { day: 8, title: "VIP 의전 출국", desc: "리조트 조식 후 공항 샌딩 의전." }
    ],
    includedEn: [
      "Luxury 5-star honeymoon suites",
      "Private candlelight beach dinner",
      "Couple's spa session",
      "Private luxury transport",
      "Champagne welcome upon arrival"
    ],
    includedKr: [
      "5성급 럭셔리 허니문 풀빌라/스위트룸",
      "해변가 프라이빗 촛불 디너 포함",
      "커플 전용 아유르베다 스파 케어",
      "전 일정 프라이빗 럭셔리 전용 차량",
      "공항 입국 샴페인 웰컴 세트"
    ]
  },
  {
    id: "family-discovery",
    titleEn: "Family Discovery Tour",
    titleKr: "스리랑카 패밀리 디스커버리 투어",
    category: "Family",
    duration: "9 Days / 8 Nights",
    priceUSD: 5200,
    idealForEn: "Families with children of all age groups",
    idealForKr: "전 연령대 자녀 동반 가족 여행객",
    image: SRI_LANKA_IMAGES.asianElephant,
    gallery: [
      SRI_LANKA_IMAGES.asianElephant,
      SRI_LANKA_IMAGES.nineArchBridge,
      SRI_LANKA_IMAGES.bentotaBeach
    ],
    locations: ["Colombo", "Pinnawala", "Sigiriya", "Kandy", "Yala", "Galle", "Bentota"],
    hotels: ["Shangri-La Hambantota", "Water Garden Sigiriya", "Cinnamon Bentota Beach"],
    descriptionEn: "A fun-filled, safe, and educational family adventure connecting elephant sanctuaries, mangrove boat safaris, ancient castles, scenic trains, and water sports.",
    descriptionKr: "코끼리 고아원, 마두강 맹그로브 사파리, 시기리야 요새, 산악 열차, 해변 워터 스포츠가 결합된 전 연령대 자녀 동반 가족 맞춤 투어입니다.",
    highlightsEn: [
      "Pinnawala Elephant Orphanage experience",
      "Sea turtle hatchery sanctuary visit",
      "Madu River boat safari through mangroves",
      "Yala National Park family safari",
      "Galle Fort historic rampart walk",
      "Beach leisure activities & water sports",
      "Scenic mountain train journey"
    ],
    highlightsKr: [
      "핀나왈라 코끼리 고아원 목욕 관람",
      "바다거북 부화장 및 보호 센터 방문",
      "마두강 맹그로브 보트 사파리",
      "야라 국립공원 가족 전용 지프 사파리",
      "갈레 요새 성벽 역사 탐방",
      "해변 워터 스포츠 & 수상 액티비티",
      "파노라마 고원 산악 열차 여행"
    ],
    itineraryEn: [
      { day: 1, title: "Colombo Arrival & Spacious Van Transfer", desc: "VIP airport pick-up with spacious luxury family van." },
      { day: 2, title: "Pinnawala Elephants & Sigiriya Arrival", desc: "Watch elephants bathing in river before driving to Sigiriya." },
      { day: 3, title: "Sigiriya Citadel & Family Village Tour", desc: "Easy climb of Sigiriya Fortress and bullock cart village adventure." },
      { day: 4, title: "Kandy Cultural Center & Scenic Train Ride", desc: "Visit Kandy lake and board the mountain train to tea country." },
      { day: 5, title: "Highland Tea Country & Waterfall Walk", desc: "Family walk to St. Clair waterfalls and fresh tea tasting." },
      { day: 6, title: "Yala National Park Family Safari", desc: "Private 4x4 safari tracking elephants, leopards, and crocodiles." },
      { day: 7, title: "Turtle Sanctuary & Madu River Boat Safari", desc: "Explore mangrove islands and baby sea turtle sanctuary." },
      { day: 8, title: "Bentota Beach Water Sports & Leisure", desc: "Enjoy banana boat, jet skis, and resort beach pool relaxation." },
      { day: 9, title: "VIP Airport Transfer & Departure", desc: "Private transfer to Colombo BIA Airport." }
    ],
    itineraryKr: [
      { day: 1, title: "콜롬보 도착 & 대형 럭셔리 밴 이동", desc: "가족 전용 대형 럭셔리 밴 차량 픽업." },
      { day: 2, title: "핀나왈라 코끼리 관람 & 시기리야 이동", desc: "강가에서 강수욕하는 코끼리 관람 후 이동." },
      { day: 3, title: "시기리야 바위 요새 & 전통 마차 체험", desc: "시기리야 탐험 및 가족 우마차 마을 체험." },
      { day: 4, title: "캔디 문화 탐방 & 산악 열차 탑승", desc: "캔디 호수 관람 후 고원 산악 열차 여정." },
      { day: 5, title: "고원 차밭 & 폭포 산책", desc: "세인트 클레어 폭포 산책 및 실론 차 체험." },
      { day: 6, title: "야라 국립공원 가족 사파리", desc: "전용 지프 차량으로 코끼리, 표범, 악어 탐험." },
      { day: 7, title: "바다거북 보호소 & 마두강 보트 사파리", desc: "맹그로브 섬 보트 사파리 및 바다거북 관람." },
      { day: 8, title: "벤토타 해변 워터 스포츠 & 리조트 휴양", desc: "제트스키, 바나나보트 및 수영장 휴식." },
      { day: 9, title: "VIP 출국 의전", desc: "공항 전용 밴 차량 샌딩." }
    ],
    includedEn: [
      "Family-friendly luxury suites/villas",
      "Private spacious minivan with chauffeur",
      "Child-friendly activities & entries",
      "Daily breakfast",
      "Dedicated family concierge support"
    ],
    includedKr: [
      "가족 전용 럭셔리 커넥팅 스위트/빌라",
      "대형 프라이빗 전용 밴 및 쇼퍼 가이드",
      "어린이 맞춤 액티비티 및 입장권 포함",
      "전 일정 조식 제공",
      "24시간 가족 전담 콘시어지 지원"
    ]
  },
  {
    id: "wellness-ayurveda",
    titleEn: "Wellness & Ayurveda Retreat",
    titleKr: "로열 아유르베다 & 웰니스 리트릿",
    category: "Ayurveda",
    duration: "10 Days / 9 Nights",
    priceUSD: 5400,
    idealForEn: "Guests seeking relaxation, healing, and rejuvenation",
    idealForKr: "휴식, 심신 치유 및 리프레시를 원하는 고객",
    image: SRI_LANKA_IMAGES.highlandTeaEstate,
    gallery: [
      SRI_LANKA_IMAGES.highlandTeaEstate,
      SRI_LANKA_IMAGES.kandyLake
    ],
    locations: ["Kandy", "Nuwara Eliya", "Bentota"],
    hotels: ["Santani Wellness Resort", "Ceylon Tea Trails", "Saman Villas Bentota"],
    descriptionEn: "A transformative 10-day holistic sanctuary offering daily authentic Ayurvedic doctor treatments, organic farm-to-table dining, mountain yoga, and beachside thermal baths.",
    descriptionKr: "전담 아유르베다 전문의 체질 진단을 바탕으로 일일 천연 오일 마사지, 운무 요가, 오가닉 웰니스 식단이 제공되는 최고급 치유 리트릿입니다.",
    highlightsEn: [
      "Daily Ayurveda treatments & doctor consultations",
      "Guided sunrise yoga sessions overlooking misty mountains",
      "Guided meditation & mindfulness practices",
      "Healthy organic wellness cuisine (customized diet)",
      "Nature walks & herbal garden discovery",
      "Beachside relaxation & thermal water therapy"
    ],
    highlightsKr: [
      "전담 아유르베다 전문의 1:1 진단 및 일일 스파 케어",
      "운무 산맥 전경의 일출 정통 요가 세션",
      "명상 및 마인드풀니스 클래스",
      "맞춤형 유기농 오가닉 웰니스 파인 다이닝",
      "약초 원림 탐방 및 자연 산책",
      "해안가 온열 치료 & 프라이빗 스파"
    ],
    itineraryEn: [
      { day: 1, title: "Arrival & Transfer to Santani Wellness Resort", desc: "Private chauffeur transfer to mountain sanctuary Santani Kandy." },
      { day: 2, title: "Ayurvedic Physician Diagnosis & First Treatment", desc: "Personal consultation, dosha diagnosis, herbal oil bath therapy." },
      { day: 3, title: "Sunrise Yoga & Detoxifying Shirodhara Massage", desc: "Early morning mountain yoga session followed by warm oil Shirodhara treatment." },
      { day: 4, title: "Herbal Garden Walk & Mindfulness Meditation", desc: "Discover ancient Sri Lankan healing herbs with resident herbalist doctor." },
      { day: 5, title: "Highland Transfer to Tea Estate Sanctuary", desc: "Travel to Ceylon Tea Trails for fresh mountain air and organic dining." },
      { day: 6, title: "High Altitude Forest Bathing & Body Rituals", desc: "Gentle nature walk through tea fields followed by deep tissue herbal wrap." },
      { day: 7, title: "Coastal Transfer to Saman Villas Bentota", desc: "Drive to oceanfront luxury villa for coastal thermal therapy." },
      { day: 8, title: "Oceanfront Thermal Bath & Sound Healing", desc: "Warm seawater hydrotherapy and sunset sound bowl meditation." },
      { day: 9, title: "Final Rejuvenation Ritual & Detox Feast", desc: "Full-body abhyanga massage and celebratory organic dinner." },
      { day: 10, title: "VIP Departure", desc: "Leisure morning before private chauffeur airport transfer." }
    ],
    itineraryKr: [
      { day: 1, title: "입국 & 산타니 웰니스 리조트 이동", desc: "캔디 고원 지대 웰니스 사원 산타니로 이동." },
      { day: 2, title: "아유르베다 전문의 체질 진단 & 1차 치료", desc: "1:1 진단을 통한 도샤 체질 분류 및 천연 오일 수치료." },
      { day: 3, title: "일출 요가 & 시로다라 온열 오일 마사지", desc: "너클스 산맥 일출 요가 후 시로다라 두피 테라피." },
      { day: 4, title: "약초 원림 산책 & 마인드풀니스 명상", desc: "전문의 동행 스리랑카 전통 약초 원림 탐방." },
      { day: 5, title: "차밭 고원 지대 이동 & 오가닉 식단", desc: "실론 티 트레일즈로 이동하여 유기농 웰니스 다이닝." },
      { day: 6, title: "고원 산림욕 & 아유르베다 바디 바스", desc: "차밭 산림욕 및 허브 보디 랩 마사지." },
      { day: 7, title: "남해안 사만 빌라 이동", desc: "벤토타 해안가 럭셔리 빌라 체크인." },
      { day: 8, title: "해안 온열 테라피 & 사운드 힐링", desc: "해수 온열 수치료 및 싱잉볼 사운드 명상." },
      { day: 9, title: "마지막 리프레시 리추얼 & 데톡스 피스트", desc: "전신 아비양가 마사지 및 유기농 파인 다이닝." },
      { day: 10, title: "VIP 출국 의전", desc: "공항 전용 차량 이동 후 출국." }
    ],
    includedEn: [
      "Ayurvedic doctor consultation & customized plan",
      "Daily spa & oil therapies",
      "Full board organic wellness meals",
      "Yoga & meditation equipment",
      "Luxury wellness resort lodging"
    ],
    includedKr: [
      "아유르베다 전문의 1:1 진단 및 맞춤 케어",
      "전 일정 일일 럭셔리 스파 & 오일 마사지",
      "전 일정 맞춤형 오가닉 웰니스 풀보드 식단",
      "요가 & 명상 전용 장비 지원",
      "5성급 웰니스 리조트 전 일정 숙박"
    ]
  },
  {
    id: "luxury-beach",
    titleEn: "Luxury Beach Holiday",
    titleKr: "스리랑카 럭셔리 휴양지 비치 홀리데이",
    category: "Beach",
    duration: "7 Days / 6 Nights",
    priceUSD: 4100,
    idealForEn: "Beach lovers and tropical leisure travelers",
    idealForKr: "해변 휴양, 요트 및 워터 스포츠 선호 여행객",
    image: SRI_LANKA_IMAGES.bentotaBeach,
    gallery: [
      SRI_LANKA_IMAGES.bentotaBeach,
      SRI_LANKA_IMAGES.catamaranYacht
    ],
    locations: ["Bentota", "Mirissa", "Weligama", "Tangalle"],
    hotels: ["Cape Weligama", "Anantara Peace Haven Tangalle", "Cinnamon Bentota Beach"],
    descriptionEn: "Unwind along Sri Lanka's finest tropical coastlines featuring 5-star oceanfront resorts, blue whale watching charters, sunset seafood dining, water sports, and beach spa bliss.",
    descriptionKr: "벤토타, 미릿사, 웰리 가마, 탕갈레로 이어지는 에메랄드 인도양 해안 라인에서 대왕고래 관찰, 요트 크루즈, 시푸드 다이닝을 즐기는 휴양 패키지입니다.",
    highlightsEn: [
      "Bentota, Mirissa, Weligama & Tangalle coastlines",
      "Whale watching ocean charter (seasonal)",
      "Water sports activities (jet ski, surfing, snorkeling)",
      "Sunset ocean catamaran cruises",
      "Fine seafood oceanfront dining",
      "Spa and wellness ocean treatments"
    ],
    highlightsKr: [
      "벤토타, 미릿사, 웰리가마, 탕갈레 4대 대표 해변 탐방",
      "대왕고래 관측 카타마란 프라이빗 요트 투어",
      "제트스키, 서핑, 스노클링 등 수상 액티비티",
      "인도양 석양 세일링 요트 크루즈",
      "최고급 프라이빗 신선 해산물 파인 다이닝",
      "해안가 럭셔리 5성급 리조트 스파"
    ],
    itineraryEn: [
      { day: 1, title: "Arrival & Coastal Chauffeur Drive to Bentota", desc: "Private luxury chauffeur transfer straight to oceanfront resort." },
      { day: 2, title: "Bentota Golden Beach & Water Sports", desc: "Full day of jet skiing, windsurfing, or private beach lounge relaxation." },
      { day: 3, title: "Transfer to Cape Weligama Ocean Cliff Resort", desc: "Scenic coastal drive, check-in at cliffside infinity pool resort." },
      { day: 4, title: "Mirissa Blue Whale Watching Catamaran Cruise", desc: "Early morning private yacht charter to spot blue whales and dolphins." },
      { day: 5, title: "Weligama Surf Bay & Seafood Sunset Dining", desc: "Private surfing lesson or beach club relaxing followed by lobster dinner." },
      { day: 6, title: "Tangalle Cove Relaxation & Spa Ritual", desc: "Day at secluded Tangalle beach cove with oceanfront spa treatments." },
      { day: 7, title: "VIP Airport Departure", desc: "Leisure morning before luxury chauffeur airport transfer." }
    ],
    itineraryKr: [
      { day: 1, title: "입국 & 벤토타 해안 의전 이동", desc: "공항 도착 후 최고급 차량으로 해안가 리조트 체크인." },
      { day: 2, title: "벤토타 골든 비치 & 수상 액티비티", desc: "제트스키, 윈드서핑 또는 카바나 카바나 휴식." },
      { day: 3, title: "케이프 웰리가마 절벽 리조트 입실", desc: "인도양 절벽 전경의 인피니티 풀 리조트 입실." },
      { day: 4, title: "미릿사 대왕고래 프라이빗 요트 세일링", desc: "전용 카타마란 요트로 대왕고래 및 돌고래 관람." },
      { day: 5, title: "웰리가마 서핑 베이 & 바비큐 시푸드 디너", desc: "서핑 레슨 후 갓 잡은 랍스터 디너 뷔페." },
      { day: 6, title: "탕갈레 은밀한 코브 휴양 & 스파 케어", desc: "프라이빗 해변 코브에서 하루 종일 스파 & 휴식." },
      { day: 7, title: "VIP 의전 출국", desc: "리조트 조식 후 공항 샌딩 의전." }
    ],
    includedEn: [
      "Luxury 5-star beachfront resort stays",
      "Private luxury airport & coastal transfers",
      "Whale watching tickets",
      "Daily breakfast & seafood dinner credit",
      "Water sports access"
    ],
    includedKr: [
      "5성급 럭셔리 해안 오션뷰 리조트 투숙",
      "전 일정 프라이빗 공항/해안 이동 의전 차량",
      "대왕고래 관찰 카타마란 요트 티켓",
      "전 일정 조식 & 최고급 해산물 디너 지원",
      "수상 액티비티 이용권 포함"
    ]
  },
  {
    id: "tailor-made",
    titleEn: "Tailor-Made Sri Lanka Experience",
    titleKr: "100% 맞춤형 스리랑카 비스포크 트래블",
    category: "TailorMade",
    duration: "Flexible",
    priceUSD: 0,
    idealForEn: "Travelers seeking a fully customized bespoke journey",
    idealForKr: "나만의 100% 맞춤 일정을 원하는 고객",
    image: SRI_LANKA_IMAGES.helicopter,
    gallery: [
      SRI_LANKA_IMAGES.helicopter,
      SRI_LANKA_IMAGES.catamaranYacht
    ],
    locations: ["Custom Locations Across Sri Lanka"],
    hotels: ["Tailored 5-Star Hotels & Relais & Châteaux Properties"],
    descriptionEn: "Every traveler is unique. Our executive travel specialists design 100% customized luxury itineraries based on your exact travel dates, budget, personal interests, group size, golf, wildlife, or wellness preferences.",
    descriptionKr: "고객 단 한 분만을 위해 일자, 예산, 관심사(골프, 사파리, 웰니스, 비치), 그룹 인원, 럭셔리 등급에 맞춰 100% 프라이빗 비스포크 투어를 설계해 드립니다.",
    highlightsEn: [
      "Travel dates & duration flexibility",
      "Tailored to your exact budget & luxury preferences",
      "Customized for personal interests (golf, wildlife, culture, beach)",
      "Group or family size adaptations (VIP couples to multi-gen families)",
      "Helicopter charters, private yachts & luxury chauffeur vehicle options",
      "Personalized culinary & accommodation selections"
    ],
    highlightsKr: [
      "원하는 일정 및 여행 기간 100% 자유 지정",
      "고객 맞춤형 예산 및 럭셔리 등급 설정",
      "관심 분야(골프, 사파리, 문화 유적, 비치) 자유 조합",
      "커플, 가족, 대규모 VIP 동호회 맞춤 커스텀",
      "헬리콥터, 요트, 럭셔리 의전 차량 옵션 제공",
      "맞춤형 다이닝 및 선호 5성급 리조트 지정"
    ],
    itineraryEn: [
      { day: 1, title: "1:1 Dedicated Concierge Consultation", desc: "Speak directly with our Executive Concierge to outline your dream Sri Lanka travel style." },
      { day: 2, title: "Bespoke Itinerary & Accommodation Drafting", desc: "Receive a tailored day-by-day plan with helicopter, resort, and activity options." },
      { day: 3, title: "Unlimited Revisions & Confirmation", desc: "Fine-tune every detail until your itinerary is 100% perfect." },
      { day: 4, title: "Seamless Execution & 24/7 Guest Support", desc: "Experience Sri Lanka with white-glove VIP precision and continuous concierge care." }
    ],
    itineraryKr: [
      { day: 1, title: "1:1 전담 콘시어지 맞춤 상담", desc: "전문 트래블 스페셜리스트와 1:1 상담을 통해 원하는 여행 스타일 조율." },
      { day: 2, title: "비스포크 일정 및 숙소 1차 제안서 구성", desc: "헬리콥터, 리조트, 골프, 사파리가 포함된 맞춤형 제안서 발송." },
      { day: 3, title: "무제한 일정 수정 및 완벽 확정", desc: "고객님의 만족할 때까지 일정, 숙소, 차량 100% 피드백 반영." },
      { day: 4, title: "24시간 VIP 의전 케어 및 완벽한 여정", desc: "전 일정 100% 케어 속에서 잊지 못할 럭셔리 여행 만끽." }
    ],
    includedEn: [
      "1:1 Dedicated travel specialist consultation",
      "Unlimited itinerary revisions & adjustments",
      "Private luxury transportation",
      "24/7 Guest concierge support"
    ],
    includedKr: [
      "1:1 전담 트래블 스페셜리스트 상담",
      "무제한 일정 수정 및 디자인 반영",
      "전 일정 프라이빗 럭셔리 전용 수송",
      "24시간 VIP 전담 콘시어지 밀착 케어"
    ]
  }
];

export const LUXURY_HOTELS: LuxuryHotel[] = [
  {
    id: "ceylon-tea-trails",
    nameEn: "Ceylon Tea Trails (Relais & Châteaux)",
    nameKr: "실론 티 트레일즈 (릴레앤샤토)",
    category: "Mountain Hotels",
    locationEn: "Hatton, Tea Country",
    locationKr: "해튼, 고원 차밭 지대",
    rating: 5.0,
    pricePerNightUSD: 950,
    image: SRI_LANKA_IMAGES.highlandTeaEstate,
    gallery: [
      SRI_LANKA_IMAGES.highlandTeaEstate,
      SRI_LANKA_IMAGES.teaPluckers
    ],
    facilitiesEn: ["Private Butler", "Helipad Access", "infinity Pool over Lake", "Gourmet High Tea"],
    facilitiesKr: ["1:1 전담 버틀러", "전용 헬기 승강장", "호수 뷰 인피니티 풀", "고급 실론 애프터눈 티"],
    descEn: "5 restored colonial tea planter bungalows set around Castlereagh Lake at 4,000 feet altitude.",
    descKr: "해발 1,200m 캐슬레이 호숫가에 위치한 5개의 역사적 차 방갈로로 세계적인 릴레앤샤토 멤버입니다."
  },
  {
    id: "amangalla",
    nameEn: "Amangalla Fort Estate",
    nameKr: "아만갈라 갈레 포트 이스테이트",
    category: "Boutique Hotels",
    locationEn: "Galle Fort (UNESCO)",
    locationKr: "갈레 포트 (유네스코 성벽 도시)",
    rating: 4.9,
    pricePerNightUSD: 1200,
    image: SRI_LANKA_IMAGES.galleDutchFort,
    gallery: [SRI_LANKA_IMAGES.galleDutchFort],
    facilitiesEn: ["Aman Hydrotherapy Spa", "Colonial Verandah Dining", "Private Historic Tour", "Vintage Library"],
    facilitiesKr: ["아만 정통 수치료 스파", "식민지 베란다 파인 다이닝", "프라이빗 포트 도슨트 투어", "클래식 라이브러리"],
    descEn: "Grand 17th-century Dutch colonial sanctuary inside Galle Fort offering ultimate Aman discretion.",
    descKr: "17세기 네덜란드 식민지 양식 건축물에 들어선 아만(Aman) 최고급 사원 스타일 휴양 공간입니다."
  },
  {
    id: "wild-coast-tented-lodge",
    nameEn: "Wild Coast Tented Lodge",
    nameKr: "와일드 코스트 텐티드 로지 (야라)",
    category: "Luxury Resorts",
    locationEn: "Yala Ocean National Park",
    locationKr: "야라 국립공원 해안가",
    rating: 4.9,
    pricePerNightUSD: 1100,
    image: SRI_LANKA_IMAGES.yalaLeopard,
    gallery: [SRI_LANKA_IMAGES.yalaLeopard],
    facilitiesEn: ["Cocoon Suite Plunge Pool", "Wild Leopard Safari", "Ocean Beach Bar", "Naturalist Lounge"],
    facilitiesKr: ["코쿤 스위트 프라이빗 풀", "표범 사파리 직항 차량", "인도양 비치 바", "자연학자 독서 라운지"],
    descEn: "Luxury safari lodge where the jungle meets the Indian Ocean, featuring eco-designed cocoon suites.",
    descKr: "정글과 인도양이 만나는 야라 국립공원의 최고급 코쿤 스타일 글램핑 스위트 리조트입니다."
  },
  {
    id: "shangri-la-hambantota-hotel",
    nameEn: "Shangri-La Hambantota Golf Resort",
    nameKr: "샹그릴라 함반토타 골프 리조트 & 스파",
    category: "Golf Resorts",
    locationEn: "Hambantota South Coast",
    locationKr: "함반토타 남해안",
    rating: 4.9,
    pricePerNightUSD: 550,
    image: SRI_LANKA_IMAGES.shangrilaGolf,
    gallery: [SRI_LANKA_IMAGES.shangrilaGolf],
    facilitiesEn: ["18-Hole Ocean Golf Course", "CHI Spa Sanctuary", "3 Swimming Pools", "Private Helipad"],
    facilitiesKr: ["18홀 전용 오션 골프 코스", "CHI 스파 샌츄어리", "3개의 럭셔리 수영장", "프라이빗 헬기장"],
    descEn: "Sri Lanka's largest resort sprawling 145 acres with an integrated championship golf course and CHI Spa.",
    descKr: "145에이커 규모의 광활한 리조트로 18홀 오션뷰 골프 코스와 CHI 스파를 갖춘 명문 숙소입니다."
  },
  {
    id: "cape-weligama",
    nameEn: "Cape Weligama Resort",
    nameKr: "케이프 웰리가마 럭셔리 빌라",
    category: "Beach Resorts",
    locationEn: "Weligama Bay",
    locationKr: "웰리가마 해안 절벽",
    rating: 4.8,
    pricePerNightUSD: 850,
    image: SRI_LANKA_IMAGES.bentotaBeach,
    gallery: [SRI_LANKA_IMAGES.bentotaBeach],
    facilitiesEn: ["Moonless Cliffside Pool", "Private Butler Service", "Whale Charter Yacht", "Ocean View Dining"],
    facilitiesKr: ["절벽 뷰 반달 인피니티 풀", "1:1 프라이빗 버틀러", "대왕고래 요트 선착장", "오션 프론트 파인 다이닝"],
    descEn: "Perched 40 meters above the Indian Ocean with 60-meter crescent infinity pool and standalone villas.",
    descKr: "인도양 절벽 40m 위에 조성된 프라이빗 빌라 단지로 60m 반달 인피니티 풀이 압권입니다."
  },
  {
    id: "santani-wellness",
    nameEn: "Santani Wellness Resort & Spa",
    nameKr: "산타니 웰니스 리조트 & 스파 (캔디)",
    category: "Private Villas",
    locationEn: "Kandy Knuckles Mountains",
    locationKr: "캔디 너클스 산맥 계곡",
    rating: 5.0,
    pricePerNightUSD: 780,
    image: SRI_LANKA_IMAGES.kandyLake,
    gallery: [SRI_LANKA_IMAGES.kandyLake],
    facilitiesEn: ["Ayurvedic Doctor Care", "Thermal Hydrotherapy", "Yoga Pavilion", "Farm-to-table Dining"],
    facilitiesKr: ["아유르베다 전문의 처방", "온열 수치료 스파", "운무 요가 파빌리온", "유기농 맞춤 파인 식단"],
    descEn: "Award-winning eco-luxury wellness sanctuary nestled in the misty Knuckles mountain forests.",
    descKr: "너클스 산맥 안개 숲속에 위치한 아유르베다 & 힐링 웰니스 리조트로 아시아 최고 스파 상을 수상했습니다."
  }
];

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: "story-golf",
    titleEn: "PGA Golf Fairways of Serendib",
    titleKr: "스리랑카 PGA 명문 골프 라운딩 스토리",
    categoryEn: "Golf Experience",
    categoryKr: "골프 투어",
    image: SRI_LANKA_IMAGES.victoriaGolf,
    duration: "02:15",
    descEn: "Watch priority tee-times, private PGA caddies, and scenic aerial shots over Victoria Golf Kandy and Royal Colombo.",
    descKr: "캔디 빅토리아 호수 뷰와 로열 콜롬보의 클래식 18홀 라운딩 영상을 감상하세요."
  },
  {
    id: "story-safari",
    titleEn: "Untamed Leopards of Yala Coast",
    titleKr: "야라 인도양 해안의 야생 표범 사파리",
    categoryEn: "Safari Adventure",
    categoryKr: "사파리 어드벤처",
    image: SRI_LANKA_IMAGES.yalaLeopard,
    duration: "01:45",
    descEn: "Experience 4x4 open Land Cruiser safaris and oceanfront glamping at Wild Coast Lodge.",
    descKr: "전담 자연학자와 함께하는 4x4 사파리 및 와일드 코스트 텐트 스위트의 감동."
  },
  {
    id: "story-tea",
    titleEn: "Misty Tea Bungalows & Royal Trains",
    titleKr: "운무 차밭 방갈로 & 바이스로이 럭셔리 열차",
    categoryEn: "Tea Country",
    categoryKr: "차밭 & 럭셔리 열차",
    image: SRI_LANKA_IMAGES.nineArchBridge,
    duration: "02:05",
    descEn: "Soar in a helicopter over emerald tea hills and board private mahogany train carriages.",
    descKr: "차밭 위를 연결하는 프라이빗 헬기와 나인 아치 브릿지를 건너는 마호가니 전용 열차 여정."
  },
  {
    id: "story-yacht",
    titleEn: "Blue Whale Catamaran & Galle Sunset",
    titleKr: "대왕고래 요트 세일링 & 갈레 석양",
    categoryEn: "Luxury Escape",
    categoryKr: "해양 요트 크루즈",
    image: SRI_LANKA_IMAGES.galleDutchFort,
    duration: "01:50",
    descEn: "Private marine biologist whale tracking followed by 17th-century Dutch Fort champagne dinners.",
    descKr: "해양 생물학자 동행 카타마란 요트 크루즈와 갈레 요새 석양 파인 다이닝."
  }
];

export const PREMIUM_SERVICES: PremiumService[] = [
  {
    id: "service-chauffeur",
    titleEn: "Private VIP Chauffeur",
    titleKr: "프라이빗 VIP 의전 쇼퍼",
    iconName: "Car",
    image: SRI_LANKA_IMAGES.galleDutchFort,
    descEn: "Mercedes-Benz V-Class, Land Cruisers, and English/Korean speaking professional chauffeurs.",
    descKr: "메르세데스 벤츠 V-클래스 및 랜드크루저 전용 의전 차량과 전문 쇼퍼 서비스."
  },
  {
    id: "service-[#C8A45D]-fasttrack",
    titleEn: "Airport Runway VIP Fast Track",
    titleKr: "공항 활주로 패스트트랙 입국",
    iconName: "ShieldCheck",
    image: SRI_LANKA_IMAGES.sigiriyaCitadel,
    descEn: "Private jet lounge access, fast-track passport clearance, and dedicated baggage handling.",
    descKr: "공항 VIP 전용 라운지, 세관 패스트트랙 입국 및 골프백/수화물 전담 수송."
  },
  {
    id: "service-helicopter",
    titleEn: "Airbus Private Helicopter Charter",
    titleKr: "에어버스 프라이빗 헬기 직항",
    iconName: "Plane",
    image: SRI_LANKA_IMAGES.helicopter,
    descEn: "Direct aerial transfers landing on resort pads, avoiding mountain road winding.",
    descKr: "리조트 전용 승강장 직항 이동으로 산악 도로 이동 시간을 획기적으로 단축."
  },
  {
    id: "service-yacht",
    titleEn: "Private Catamaran Yacht Charter",
    titleKr: "프라이빗 카타마란 요트 대여",
    iconName: "Anchor",
    image: SRI_LANKA_IMAGES.catamaranYacht,
    descEn: "Luxury catamaran cruise with private marine biologist for blue whale watching & champagne.",
    descKr: "대왕고래 탐사 및 샴페인 온더덱 브런치가 포함된 프라이빗 요트 세일링."
  },
  {
    id: "service-train",
    titleEn: "Viceroy Mahogany Luxury Train",
    titleKr: "바이스로이 빈티지 전용 객차",
    iconName: "Train",
    image: SRI_LANKA_IMAGES.nineArchBridge,
    descEn: "Private mahogany train carriage with observation balcony and dedicated English tea butler.",
    descKr: "나인 아치 브릿지를 통과하는 마호가니 전용 관람 객차와 전담 티 버틀러."
  },
  {
    id: "service-concierge",
    titleEn: "24/7 Korean & Global Travel Concierge",
    titleKr: "24시간 1:1 한국어 전담 콘시어지",
    iconName: "UserCheck",
    image: SRI_LANKA_IMAGES.teaPluckers,
    descEn: "Dedicated personal travel manager on WhatsApp ensuring seamless VIP coordination.",
    descKr: "여행 전 일정 동안 WhatsApp & 카카오톡으로 밀착 의전하는 1:1 전담 콘시어지."
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "colombo",
    nameEn: "Colombo",
    nameKr: "콜롬보",
    subtitleEn: "Oceanfront Cosmopolitan Hub",
    subtitleKr: "해안가에 펼쳐진 현대적 & 역사적 수도",
    image: SRI_LANKA_IMAGES.galleDutchFort,
    gallery: [SRI_LANKA_IMAGES.galleDutchFort],
    hotels: ["Shangri-La Colombo", "Galle Face Hotel", "Cinnamon Grand"],
    highlightsEn: ["Royal Colombo Golf Club", "Galle Face Green Sunset Dining", "Colonial Dutch Hospital"],
    highlightsKr: ["로열 콜롬보 골프 클럽", "갈레 페이스 석양 파인 다이닝", "식민지 네덜란드 병원 스폿"],
    bestTimeEn: "November – April",
    bestTimeKr: "11월 ~ 4월",
    descEn: "Sri Lanka's bustling capital blending high-end oceanfront luxury hotels, colonial architecture, fine dining, and elite golf.",
    descKr: "인도양 석양이 아름다운 현대적 수도로, 5성급 럭셔리 호텔과 고풍스러운 식민지 건축물이 공존하는 지역입니다.",
    svgPos: { x: 95, y: 280 }
  },
  {
    id: "sigiriya",
    nameEn: "Sigiriya",
    nameKr: "시기리야",
    subtitleEn: "Ancient Rock Fortress of Kings",
    subtitleKr: "왕들의 거대 고대 암사원 요새",
    image: SRI_LANKA_IMAGES.sigiriyaCitadel,
    gallery: [SRI_LANKA_IMAGES.sigiriyaCitadel, SRI_LANKA_IMAGES.sigiriyaLandscape],
    hotels: ["Water Garden Sigiriya", "Heritance Kandalama", "Jetwing Vil Uyana"],
    highlightsEn: ["Lion Rock Fortress", "Private sunrise access", "Pidurangala Rock view point"],
    highlightsKr: ["사자 바위 암사원 요새", "프라이빗 일출 프라이어리티 투어", "피두랑갈라 일몰 포인트"],
    bestTimeEn: "Year-Round",
    bestTimeKr: "연중 내내",
    descEn: "UNESCO World Heritage site featuring a 200-meter-high granite citadel surrounded by ancient water gardens.",
    descKr: "유네스코 세계문화유산에 등재된 200m 높이의 거대 거암 요새로 스리랑카 문화 여행의 정점입니다.",
    svgPos: { x: 200, y: 170 }
  },
  {
    id: "kandy",
    nameEn: "Kandy & Knuckles",
    nameKr: "캔디 & 너클스",
    subtitleEn: "Sacred Cultural Kingdom",
    subtitleKr: "신성한 불교 문화와 호수 도시",
    image: SRI_LANKA_IMAGES.kandyLake,
    gallery: [SRI_LANKA_IMAGES.kandyLake],
    hotels: ["W15 Hanthana Estate", "Santani Wellness Resort", "Kings Pavilion"],
    highlightsEn: ["Victoria Golf & Country Resort", "Temple of the Sacred Tooth", "Royal Botanical Gardens"],
    highlightsKr: ["빅토리아 골프 클럽", "불치사 (Temple of Tooth)", "왕립 식물원"],
    bestTimeEn: "December – April",
    bestTimeKr: "12월 ~ 4월",
    descEn: "Nestled in misty hills, Kandy is the home of Asia's finest golf course, Victoria Golf, and sacred heritage shrines.",
    descKr: "안개 둘러싸인 고원 계곡에 자리한 문화의 중심으로 아시아 최고의 빅토리아 골프 클럽이 소재하고 있습니다.",
    svgPos: { x: 190, y: 240 }
  },
  {
    id: "nuwara-eliya",
    nameEn: "Nuwara Eliya",
    nameKr: "누와라엘리야",
    subtitleEn: "Little England & Tea Country",
    subtitleKr: "리틀 잉글랜드 & 실론 티 고원",
    image: SRI_LANKA_IMAGES.highlandTeaEstate,
    gallery: [SRI_LANKA_IMAGES.highlandTeaEstate, SRI_LANKA_IMAGES.teaPluckers],
    hotels: ["Ceylon Tea Trails", "The Grand Hotel", "Heritance Tea Factory"],
    highlightsEn: ["Nuwara Eliya Golf Club", "Highland Tea Bungalows", "Gregory Lake Yacht Ride"],
    highlightsKr: ["누와라엘리야 18홀 고원 골프장", "실론 티 방갈로 투숙", "그레고리 호수 프라이빗 보팅"],
    bestTimeEn: "February – May",
    bestTimeKr: "2월 ~ 5월",
    descEn: "Known as 'Little England', famed for crisp highland weather, Victorian bungalows, and high-altitude golf.",
    descKr: "'리틀 잉글랜드'로 불리며 맑고 서늘한 고원 기후, 영국 빅토리아풍 건축 및 130년 전통 골프장이 인상적입니다.",
    svgPos: { x: 220, y: 280 }
  },
  {
    id: "ella",
    nameEn: "Ella",
    nameKr: "엘라",
    subtitleEn: "Misty Mountain Archway",
    subtitleKr: "운무 가득한 나인 아치 다리와 파노라마 뷰",
    image: SRI_LANKA_IMAGES.nineArchBridge,
    gallery: [SRI_LANKA_IMAGES.nineArchBridge],
    hotels: ["98 Acres Resort & Spa", "Resplendent Ceylon Ella", "Living Heritage Koslanda"],
    highlightsEn: ["Nine Arch Railway Bridge", "Ella Rock Private Hike", "Ravana Falls Helicopter Flyover"],
    highlightsKr: ["나인 아치 브릿지 열차 스폿", "엘라 록 프라이빗 하이킹", "라바나 폭포 헬기 조망"],
    bestTimeEn: "January – May",
    bestTimeKr: "1월 ~ 5월",
    descEn: "Dramatic mountain pass with cascading waterfalls, luxury mountain eco-resorts, and iconic train viaducts.",
    descKr: "웅장한 산악 절경과 계곡, 세기적인 나인 아치 다리가 어우러진 휴양지입니다.",
    svgPos: { x: 260, y: 300 }
  },
  {
    id: "yala",
    nameEn: "Yala National Park",
    nameKr: "야라 국립공원",
    subtitleEn: "Leopard Haven & Wilderness",
    subtitleKr: "표범과 야생 동물의 야라 국립공원",
    image: SRI_LANKA_IMAGES.yalaLeopard,
    gallery: [SRI_LANKA_IMAGES.yalaLeopard, SRI_LANKA_IMAGES.asianElephant],
    hotels: ["Wild Coast Tented Lodge", "Chena Huts by Uga", "Leopard Trails Yala"],
    highlightsEn: ["Densest Leopard Safari", "Oceanfront Tented Cocoon Suites", "Private Bush Dinners"],
    highlightsKr: ["세계 최고 밀도 표범 사파리", "해안가 코쿤 텐트 스위트", "야생 프라이빗 부시 디너"],
    bestTimeEn: "February – July",
    bestTimeKr: "2월 ~ 7월",
    descEn: "Wild coastal jungle harboring Asia's densest leopard population and wild ocean glamping lodges.",
    descKr: "아시아 최고의 표범 밀도를 자랑하는 야생 동물 보호구역으로 인도양 해안 럭셔리 글램핑이 대표적입니다.",
    svgPos: { x: 290, y: 360 }
  },
  {
    id: "galle",
    nameEn: "Galle Fort & South Coast",
    nameKr: "갈레 포트 & 남해안",
    subtitleEn: "Colonial Dutch Heritage Citadel",
    subtitleKr: "네덜란드 고풍 요새와 럭셔리 오션 빌라",
    image: SRI_LANKA_IMAGES.galleDutchFort,
    gallery: [SRI_LANKA_IMAGES.galleDutchFort],
    hotels: ["Amangalla", "Cape Weligama", "The Fortress Resort & Spa"],
    highlightsEn: ["17th Century UNESCO Dutch Fort", "Eagles' Catalina Golf", "Private Sunset Yacht"],
    highlightsKr: ["17세기 유네스코 네덜란드 요새", "이글스 카탈리나 골프장", "프라이빗 석양 요트"],
    bestTimeEn: "November – April",
    bestTimeKr: "11월 ~ 4월",
    descEn: "A fortified colonial gem featuring cobblestone streets, boutique luxury hotels, private yachting, and ocean golf.",
    descKr: "17세기 네덜란드 양식 성벽 도시로, 감성적인 부티크 호텔과 오션뷰 요트 세일링이 가능한 남해안의 보석입니다.",
    svgPos: { x: 130, y: 390 }
  },
  {
    id: "bentota",
    nameEn: "Bentota & Beruwala",
    nameKr: "벤토타 & 베루왈라",
    subtitleEn: "Ayurveda & Gold Sand Riviera",
    subtitleKr: "아유르베다 스파 & 황금 빛 해변 리비에라",
    image: SRI_LANKA_IMAGES.bentotaBeach,
    gallery: [SRI_LANKA_IMAGES.bentotaBeach],
    hotels: ["Taj Bentota Resort", "Villa Bentota by Paradise Road", "Saman Villas"],
    highlightsEn: ["Geoffrey Bawa Lunuganga Estate", "Private Water Sports Charter", "Ayurvedic VIP Spa"],
    highlightsKr: ["제프리 바와 루누강가 저택", "프라이빗 해양 수상 스포츠", "VIP 아유르베다 온열 케어"],
    bestTimeEn: "November – April",
    bestTimeKr: "11월 ~ 4월",
    descEn: "The luxury beach riviera famous for architecture titan Geoffrey Bawa's estates and serene wellness resorts.",
    descKr: "세계적인 건축가 제프리 바와(Geoffrey Bawa)의 명작 공간과 은은한 아유르베다 스파가 결합된 황금 해변입니다.",
    svgPos: { x: 110, y: 330 }
  },
  {
    id: "trincomalee",
    nameEn: "Trincomalee & Pasikuda",
    nameKr: "트린코말리 & 파시쿠다",
    subtitleEn: "East Coast Sapphire Waters",
    subtitleKr: "동해안 에메랄드빛 해변과 스노클링",
    image: SRI_LANKA_IMAGES.bentotaBeach,
    gallery: [SRI_LANKA_IMAGES.bentotaBeach],
    hotels: ["Uga Jungle Beach Trincomalee", "Sunrise Park Resort"],
    highlightsEn: ["Pigeon Island Marine Park", "Whale watching season", "Koneswaram Kovil Cliff"],
    highlightsKr: ["피전 아일랜드 스노클링", "여름 고래 관찰 시즌", "코네스워람 절벽 사원"],
    bestTimeEn: "May – October",
    bestTimeKr: "5월 ~ 10월",
    descEn: "Tranquil east coast paradise with shallow turquoise lagoons, coral reefs, and summer blue whale cruises.",
    descKr: "잔잔한 옥빛 라군과 산호초로 둘러싸인 스리랑카 동해안의 숨겨진 최고급 휴양지입니다.",
    svgPos: { x: 260, y: 120 }
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "sri-lanka-golf-guide",
    titleEn: "The Ultimate Guide to Playing Golf in Sri Lanka: Colonial Heritage to Ocean Fairways",
    titleKr: "스리랑카 명문 골프 투어 완벽 가이드: 1800년대 영국 왕실 코스부터 인도양 오션뷰까지",
    category: "Golf",
    date: "August 2026",
    author: "James Sterling (PGA Specialist)",
    image: SRI_LANKA_IMAGES.victoriaGolf,
    readTime: "6 min read",
    excerptEn: "Discover why Sri Lanka is Asia's best kept luxury golf secret, combining cooler highland air with world-class course designs.",
    excerptKr: "서늘한 고원 지대부터 아름다운 해안선까지, 골프 마니아들을 위한 스리랑카 4대 명문 코스의 차별화된 매력을 파헤칩니다.",
    contentEn: "Sri Lanka holds one of the richest golf legacies in Asia. Royal Colombo Golf Club received its Royal Charter in 1879, followed by the misty mountain fairways of Nuwara Eliya and the award-winning Donald Steel designed Victoria Golf & Country Resort in Kandy. Playing in Sri Lanka pairs pristine tee-times with private caddies, clubhouse dining, and helicopter direct transfers.",
    contentKr: "스리랑카는 1879년 조지 5세 국왕의 영국 왕실 칭호를 받은 로열 콜롬보부터 해발 1,800m 누와라엘리야, 그리고 아시아 Top 10에 빛나는 캔디 빅토리아 골프 리조트까지 세계적인 코스를 보유하고 있습니다."
  },
  {
    id: "luxury-aviation-tea-estates",
    titleEn: "Private Aviation & High-Altitude Living: The Relais & Châteaux Tea Trail Experience",
    titleKr: "프라이빗 헬기 직항과 고원 차밭 방갈로: 실론 티 트레일즈 완벽 가이드",
    category: "Luxury Travel",
    date: "August 2026",
    author: "Alistair Ratnayake (CEO)",
    image: SRI_LANKA_IMAGES.highlandTeaEstate,
    readTime: "5 min read",
    excerptEn: "How private helicopter charters transform travel between Colombo, misty tea planter bungalows, and private ocean villas.",
    excerptKr: "콜롬보에서 해발 1,200m 차밭 방갈로까지 30분 만에 이동하는 프라이빗 헬기 직항 투어와 마스터 블렌더 티 클래스.",
    contentEn: "Traversing Sri Lanka's emerald central highlands by road is scenic, but private helicopter aviation elevates the experience entirely. Landing directly on tea bungalow helipads grants instant access to 5-star Relais & Châteaux hospitality, private butler dinners, and infinity pool mountain views without hours of mountain winding roads.",
    contentKr: "스리랑카 고원 지대를 가장 품격 있게 즐기는 방법은 전용 에어버스 헬리콥터 직항입니다. 리조트 전용 승강장에 착륙하여 1:1 전담 버틀러와 함께하는 프라이빗 하이티를 만끽하세요."
  },
  {
    id: "sri-lankan-cultural-odyssey",
    titleEn: "2,500 Years of Splendor: Exploring Sigiriya, Dambulla & Kandy in Ultimate Comfort",
    titleKr: "2,500년의 찬란한 유산: 시기리야 사자 바위부터 캔디 불치사까지의 프라이빗 문화 탐방",
    category: "Culture",
    date: "July 2026",
    author: "Dr. Chaminda Jayawardena",
    image: SRI_LANKA_IMAGES.sigiriyaCitadel,
    readTime: "7 min read",
    excerptEn: "A docent-guided journey through UNESCO ancient rock citadels, sacred tooth relic shrines, and colonial Dutch forts.",
    excerptKr: "유네스코 세계유산 시기리야 고대 요새와 캔디 불치사를 수석 역사학자 도슨트의 1:1 해설과 함께 VIP 전용으로 관람하세요.",
    contentEn: "Sri Lanka's Cultural Triangle represents one of the ancient world's most astonishing architectural achievements. From the sky-high fortress of Sigiriya to the cave frescoes of Dambulla and the sacred Temple of the Tooth in Kandy, our guests enjoy early sunrise priority access avoiding all crowds.",
    contentKr: "고대 왕국의 영광이 살아 숨 쉬는 시기리야 거암 요새와 캔디 불치사를 일반 관람객이 없는 이른 아침 프라이빗 시간대에 여유롭게 관람할 수 있는 팁을 소개합니다."
  },
  {
    id: "wildlife-safari-leopard-yala",
    titleEn: "Tracking Leopards and Blue Whales: Sri Lanka’s Wild Coast & Marine Sanctuaries",
    titleKr: "세계 최고 밀도의 야생 표범과 대왕고래: 야라 사파리 & 인도양 요트 가이드",
    category: "Wildlife",
    date: "July 2026",
    author: "Dr. Chaminda Jayawardena",
    image: SRI_LANKA_IMAGES.yalaLeopard,
    readTime: "6 min read",
    excerptEn: "Encounter the apex predators of Yala National Park and sail private catamarans alongside oceanic blue whales.",
    excerptKr: "야라 국립공원의 전용 4x4 지프 사파리와 인도양 전용 요트에서 만나는 지구상 최대 동물 대왕고래 탐사.",
    contentEn: "Sri Lanka is one of the few places on Earth where you can observe wild leopards in dense coastal jungles in the morning and cruise with 100-foot Blue Whales on a private catamaran in the afternoon.",
    contentKr: "아침에는 야라 정글에서 야생 표범과 아시아 코끼리를 마주하고, 오후에는 프라이빗 요트에서 대왕고래를 관찰하는 스리랑카만의 특별한 야생 경험을 안내합니다."
  },
  {
    id: "luxury-travel-tips-sri-lanka",
    titleEn: "Essential Travel Tips for Luxury Travelers: Monsoons, Dress Codes & VIP Logistics",
    titleKr: "스리랑카 럭셔리 여행 필수 팁: 계절별 날씨, 드레스코드 & 의전 이동 노하우",
    category: "Travel Tips",
    date: "June 2026",
    author: "Alistair Ratnayake",
    image: SRI_LANKA_IMAGES.bentotaBeach,
    readTime: "4 min read",
    excerptEn: "Key advice on regional micro-climates, temple attire etiquette, fast-track visas, and helicopter routing.",
    excerptKr: "동해안과 남해안의 이중 계절풍 기후 정보, 사원 방문 복장 예절, 그리고 골프백 수송과 패스트트랙 입국 팁.",
    contentEn: "Because Sri Lanka experiences two localized monsoon cycles, pristine sunshine is always guaranteed on one side of the island. Our bespoke travel concierges map your itinerary precisely to ensure idyllic weather.",
    contentKr: "스리랑카는 계절별로 쾌청한 지역이 달라집니다. 남서부 시즌(11월~4월)과 동북부 시즌(5월~10월)의 날씨 특성과 럭셔리 이동 노하우를 정리해 드립니다."
  },
  {
    id: "korean-traveler-concierge-tips",
    titleEn: "VIP Services & Customized Concierge for Korean Luxury Travelers",
    titleKr: "한국인 VIP 여행객을 위한 1:1 전담 의전 콘시어지 서비스 안내",
    category: "Korean Guide",
    date: "June 2026",
    author: "Min-Jun Park (Director of Korean Concierge)",
    image: SRI_LANKA_IMAGES.galleDutchFort,
    readTime: "5 min read",
    excerptEn: "How Lanka Luxe Journeys delivers dedicated fluent Korean coordinators, tailored culinary preferences, and seamless fast-track airport services.",
    excerptKr: "공항 패스트트랙 입국부터 전문 한국어 가이드, 엄선된 식사 맞춤 서비스까지 한국 고객만을 위한 차별화된 라운딩 & 휴양 케어.",
    contentEn: "For Korean business leaders and golf travel groups, time and precision are paramount. Lanka Luxe Journeys assigns dedicated Korean-speaking concierges, provides Korean cuisine dining options, and coordinates all golf logistics.",
    contentKr: "한국의 VIP 고객분들께 시간과 정확성, 프라이버시는 무엇보다 중요합니다. Lanka Luxe Journeys는 전담 한국인 매니저와 카카오톡 24시간 실시간 지원을 제공합니다."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Alexander von Bernstorff",
    role: "Private Investor, Zurich",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    commentEn: "Lanka Luxe Journeys elevated our Sri Lanka holiday to royal standards. The helicopter landings directly at Ceylon Tea Trails and Wild Coast were smooth beyond expectations.",
    commentKr: "Lanka Luxe Journeys 덕분에 스리랑카 여행이 마치 왕실의 여정처럼 완벽했습니다. 차밭 방갈로와 야라 리조트로의 직항 헬기 이동은 비할 데 없이 편안했습니다.",
    rating: 5,
    package: "Grand Ceylon Royal Tour",
    verified: true
  },
  {
    name: "김민수 대표 (Minsu Kim)",
    role: "CEO, Seoul",
    flag: "🇰🇷",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    commentEn: "As a avid golfer, playing Victoria Kandy and Shangri-La Hambantota with zero waiting time and private PGA caddies was world class. The Korean travel coordinator handled everything flawlessly.",
    commentKr: "빅토리아 캔디와 샹그릴라 함반토타에서의 대기 시간 없는 라운딩과 1:1 캐디 서비스는 최고였습니다. 한국어 콘시어지팀의 세심한 캐디백 의전과 케어에 깊이 감사드립니다.",
    rating: 5,
    package: "Sri Lanka PGA Royal Golf Odyssey",
    verified: true
  },
  {
    name: "Lady Eleanor Vance",
    role: "Philanthropist, London",
    flag: "🇬🇧",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    commentEn: "The level of detail in our customized trip was unmatched. Private tea masterclass, private whale watching yacht, and exquisite cuisine throughout.",
    commentKr: "세심한 일정 설계가 대단했습니다. 전용 티 마스터클래스와 프라이빗 대왕고래 요트, 최고의 파인 다이닝까지 잊을 수 없는 경험이었습니다.",
    rating: 5,
    package: "Bespoke Cultural Escapes",
    verified: true
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Alistair Ratnayake",
    roleEn: "Founder & Chief Executive Concierge",
    roleKr: "설립자 & 대표 럭셔리 콘시어지",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    bioEn: "Over 18 years arranging private aviation, luxury hospitality, and royal visits across South Asia.",
    bioKr: "남아시아 왕실 의전 및 프라이빗 항공, 럭셔리 호스피탈리티 분야 18년 경력의 대표 전문가."
  },
  {
    name: "Min-Jun Park (박민준)",
    roleEn: "Head of Korean VIP & Golf Operations",
    roleKr: "한국 VIP & 골프 투어 총괄 이사",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    bioEn: "Specializes in tailored golf tours, high-end business delegations, and fluent Korean coordination.",
    bioKr: "한국 기업인 및 VIP 골퍼들을 위한 1:1 전담 의전, 맞춤형 럭셔리 커스텀 케어 전담."
  },
  {
    name: "Dr. Chaminda Jayawardena",
    roleEn: "Chief Naturalist & Wildlife Director",
    roleKr: "수석 자연학자 & 야생 동물 총괄",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    bioEn: "Leading Sri Lankan leopard and marine biologist with 15 years tracking experience in Yala & Mirissa.",
    bioKr: "야라 표범 연구 및 해양 생물학 권위자로 15년간 사파리 및 대왕고래 트래킹 지휘."
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "private-helicopter",
    titleEn: "Private Helicopter Aerial Transfers",
    titleKr: "프라이빗 헬리콥터 시닉 차터",
    category: "Aviation",
    image: SRI_LANKA_IMAGES.helicopter,
    descEn: "Bypass road mountain winds and soar over emerald green tea hills, coastal waterfalls, and ancient fortresses.",
    descKr: "산악 도로를 지나지 않고 푸른 차밭과 시기리야 고대 암사원을 하늘 위에서 감상하며 리조트로 직접 착륙합니다."
  },
  {
    id: "whale-watching-yacht",
    titleEn: "Luxury Catamaran Whale Cruise",
    titleKr: "프라이빗 대왕고래 요트 크루즈",
    category: "Ocean",
    image: SRI_LANKA_IMAGES.catamaranYacht,
    descEn: "Sail on a private luxury catamaran with gourmet champagne breakfast and private marine biologist to spot Blue Whales.",
    descKr: "해양 생물학자와 함께 고급 럭셔리 요트를 타며 대왕고래와 돌고래를 바로 눈앞에서 관찰하고 샴페인 브런치를 즐기세요."
  },
  {
    id: "ceylon-tea-masterclass",
    titleEn: "Royal Tea Estate Heritage Masterclass",
    titleKr: "왕실 실론 티 에스테이트 마스터클래스",
    category: "Heritage",
    image: SRI_LANKA_IMAGES.teaPluckers,
    descEn: "Pick golden tea leaves with traditional harvesters and blend your custom reserve tea with master blenders.",
    descKr: "100년 역사의 유풍 차밭에서 마스터 블렌더와 함께 나만의 전용 프라이빗 실론 티 블렌드를 제작하세요."
  },
  {
    id: "viceroy-luxury-train",
    titleEn: "Viceroy Vintage Luxury Train Voyage",
    titleKr: "바이스로이 럭셔리 빈티지 열차 여행",
    category: "Railway",
    image: SRI_LANKA_IMAGES.nineArchBridge,
    descEn: "Travel in a private 19th-century mahogany train carriage across the Nine Arch Bridge with private butler service.",
    descKr: "나인 아치 브릿지를 건너는 19세기 영국 스타일 마호가니 열차의 프라이빗 전용 객차에서 전담 버틀러 서비스를 누리세요."
  }
];
