export let BASE_URL = '';

if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://dev.sweetspot.co.kr/api';
  // BASE_URL = 'http://10.3.52.65:9090/api';
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = 'https://www.sweetspot.co.kr/api';
}

export const COMMON_CODES = {
  PURPOSE: 1,
  SCALE: 7,
  AREA: 15,
  SUB_AREA_SEOUL: 16,
  SUB_AREA_GYEONGGI: 17,
  SALES_ITEMS: 58,
  INDUSTRY_GROUP: 75,
  SPACE_TYPE: 87,
  BUSINESS_MODEL: 92,
  RESERVATION_STATUS: 96,
  SPACE_TYPE_DIVISION: 114,
  USER_TYPE: 128,
};

export let _G = null;

export const ERROR_CODES = {
  SUCCESS: 0,
  FAILURE: 1,
  INTERNAL: 2,
  ALREADY: 3,
};

export const CHECK_BOXES = {
  USES: 10,
  RECOMMENDATION: 9,
  RESTRICTIONS: 4,
  GOODS: 15
}

// home ranking constant
export const RANKING = [
  {
    nm: '/assets/images/img-retail-01.jpg',
    m_nm: '/assets/images/m-img-retail-01.jpg',
    sales: '300,000,000 won',
    term: '2016-11-28 ~ 2016-11-30'
  }, {
    nm: '/assets/images/img-retail-02.jpg',
    m_nm: '/assets/images/m-img-retail-02.jpg',
    sales: '190,000,000 won',
    term: '2018-06-07 ~ 2018-06-08'
  }, {
    nm: '/assets/images/img-retail-03.jpg',
    m_nm: '/assets/images/m-img-retail-03.jpg',
    sales: '98,000,000 won',
    term: '2018-05-02 ~ 2018-05-04'
  }
];

export const REASON = [
  '다른 계정이름으로 사용하기 위해서',
  '사용빈도가 낮고 개인정보 유출이 우려돼서',
  '사이트 이용 시 장애가 많아서',
  '서비스의 질에 대한 불만이 있어서',
  '사이트 이용 시 고객응대가 나빠서'
];

export const HOME_SUMMARY = [
  '350', '500', '2,000', '40,000'
];

export const BTL_PORTFOLIO_SS = [
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW1.JPG',
    title: '똑똑한 위생팬티 팝업스토어',
    date: '2018.03~2018.05',
    working: '똑똑한 위생팬티 팝업스토어 총괄 기획, 제작, 설치'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N1.jpg',
    title: '뉴트로지나 파인 페어니스 팝업스토어',
    date: '2018.04~2018.05',
    working: '뉴트로지나 파인 페어니스 팝업스토어 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K1.JPG',
    title: '혜택이 더 업데이트 되는 공간, 코나카드 홀 프로모션',
    date: '2018.07~2018.08',
    working: '코나카드 카드 신규 발급 및 회원 모객을 위한 공간 투어 프로모션 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R1.jpg',
    title: 'IRVINS SALTED EGG 팝업스토어',
    date: '2018.10~2019.05',
    working: '싱가포르에서 상륙한 단짠단짠 마약스낵 얼빈스 솔티드 에그 팝업스토어 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D1.jpg',
    title: '2019 데이터바우처 지원사업 설명회 및 데이터 매칭 데이',
    date: ' 2019.04.05~2019.04.15',
    working: '데이터 수요 기업 및 공급 기업간의 커뮤니케이션 장 조성을 위한 컨퍼런스 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W1.jpg',
    title: '삼성웰스토리 플러스 앱 런칭 프로모션',
    date: '2019.03.29~2019.04.26',
    working: '삼성웰스토리 플러스 앱 런칭 프로모션 홍보 및 앱 가입 이벤트 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G1.jpg',
    title: '젠지 엘리트 e스포츠 아카데미 설립 발표 기자간담회',
    date: '2019.07.05',
    working: '젠지 엘리트 e스포츠 아카데미 설립 목적과 과정, 향후 지원 계획을 소개하는 기자간담회 공간 연출 및 운영'
  }
];

export const BTL_PORTFOLIO_DC = [
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/1RS/RS1.png',
    title: 'Brand Sponsorship for THE KEF',
    date: '2014.06.27~2014.07.06',
    working: '로얄살루트 팝업스토어 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/2MTG/MTG1.png',
    title: 'ME & The Glenlivet In Maison Pernod Ricard',
    date: '2014.11.26~2014.11.28',
    working: 'The Glenlivet Guardian’s Chapter 런칭 기념 브랜드 라운지 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO1.jpg',
    title: 'WYBOROWA Launching Event',
    date: '2015.08.26',
    working: 'WYBOROWA 런칭 기념, 미디어 간담회, 키맨 클래스, 소비자 디너 이벤트 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL1.jpg',
    title: 'The Glenlivet Packhorse Bridge Launching Party',
    date: '2015.02.04',
    working: '전세계 대한민국 단독 출시한 The Glenlivet Packhorse Bridge 런칭 기념 파티 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/5RSBS/RSBS1.png',
    title: 'ROYAL SALUTE Brand Sponsorship of World Luxury Expo in Seoul',
    date: '2014.09.03~2014.09.05',
    working: '월드 럭셔리 엑스포에 스폰서로 참가한 브랜드 로얄 살루트와 페리에주에 전시 및 프로모션 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/6OB.png',
    title: 'Oral - B 나의 OQ 지수를 체크하세요!',
    date: '2009.06.08~2009.06.10',
    working: '치과 전문의와 함께하는 구강검진 오랄비 체험 프로모션 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C1.JPG',
    title: 'Cordina 2013 UMF Main Sponsor Promotion',
    date: '2013.06.14~2013.06.15',
    working: '2013 UMF 4대 스폰서의 하나인 Cordina의 Festival Promotion 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/8GX.png',
    title: 'GENTRA X Red Holic Concert',
    date: '2010.05.29',
    working: 'GENTRA X 출시 기념 모델 크라잉넛과 함께하는 브랜드 콘서트 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/9D.png',
    title: 'Dole 바나나는 밥이다',
    date: '2009~2014',
    working: '\'바나나는 밥이다\' 캠페인 바나나 샘플링, 쿠킹 클래스, 마트 판촉 게임 등 온,오프라인 프로모션 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/10H.png',
    title: '한국장학재단 제 2개 장학 앰배서더 하계 캠프',
    date: '2011.08.24~2011.08.26',
    working: '제 2기 장학 앰배서더로 선정된 108명의 앰배서더 대상 하계 캠프 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/11DB.png',
    title: 'Dole 유기농 블루베리 농장 탐방',
    date: '2010.07.24 / 2011.07.24',
    working: 'Dole 유기농 블루베리 출시 기념 가족이 함께하는 농장 체험 행사 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/12DWS.png',
    title: 'Dole W/S Customer Conference',
    date: '2009.03.20',
    working: 'Dole Asia Pacific CEO 외 W/S Customer를 초청 하여 진행한 컨퍼런스 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/13YO.png',
    title: '요나나스와 함께하는 달콤한 시간, 요나나스 쿠킹클래스',
    date: '2012.07.27 / 2012.08.18',
    working: '요나나스 런칭 기념 미디어 및 고객 초청 쿠킹 클래스 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/14GC.png',
    title: '고운세상코스메틱 White Aura Beauty Class',
    date: '2011.04.07',
    working: '신제품 White Aura 제품의 PR 강화 이벤트로 파워블로거 대상 뷰티 클래스 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ1.jpg',
    title: 'Perrier-Jouet 200th Anniversary Food Pairing',
    date: '2011.07.06~2011.07.08',
    working: '페리에주에 200주년 기념 서울, 부산 키맨 대상 푸드 페어링 총괄 기획 및 운영'
  },
  {
    src: 'https://repo.sweetspot.co.kr/images/BTL/DC/16HS.png',
    title: 'Head & Shoulders 대한민국 야구 대표팀 응원전',
    date: '2010.11.13',
    working: '모델 홍성흔과 함께하는 2010 광저우 아시안 게임 대한민국 야구 대표팀 응원전 기획 및 운영'
  },
]

export const BTL_BANNERS = [
  {
    original: 'https://repo.sweetspot.co.kr/images/BTL/Banner/img-btl-top-01.png'
  },
  {
    original: 'https://repo.sweetspot.co.kr/images/BTL/Banner/img-btl-top-02.png'
  },
  {
    original: 'https://repo.sweetspot.co.kr/images/BTL/Banner/img-btl-top-03.png'
  }
]

export const BTL_BANNERS_MOBILE = [
  {
    original: 'https://repo.sweetspot.co.kr/images/BTL/Banner/m-img-btl-top-01.png'
  },
  {
    original: 'https://repo.sweetspot.co.kr/images/BTL/Banner/m-img-btl-top-02.png'
  },
  {
    original: 'https://repo.sweetspot.co.kr/images/BTL/Banner/m-img-btl-top-03.png'
  }
]

export const BTL_PORTFOLIO_IMGS = [
  // ss
  [
    // ss[0]
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW1.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW2.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW3.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW4.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW5.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW6.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW7.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW8.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW9.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/1TW/TW10.JPG',
    ],
    // ss[1]
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N6.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N7.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N8.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N9.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/2M/N10.jpg',
    ],
    // ss[2]
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K1.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K2.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K3.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K4.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K5.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K6.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K7.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K8.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K9.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/SS/3K/K10.JPG'
    ],
    // ss[3]
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R6.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R7.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R8.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R9.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/4RSE/R10.jpg',
    ],
    // ss[4]
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/5D/D6.jpg',
    ],
    // ss[5]
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/6W/W6.jpg',
    ],
    [
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G6.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G7.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G8.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G9.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/SS/7G/G10.jpg'
    ]
  ],
  // dc
  [
    // dc[0]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/1RS/RS1.png',
      'https://repo.sweetspot.co.kr/images/BTL/DC/1RS/RS2.png'
    ],
    // dc[1]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/2MTG/MTG1.png',
      'https://repo.sweetspot.co.kr/images/BTL/DC/2MTG/MTG2.png'
    ],
    // dc[2]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO6.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO7.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO8.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/3W/WYBO9.jpg',
    ],
    // dc[3]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL6.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL7.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/4TGPB/TGL8.jpg'
    ],
    // dc[4]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/5RSBS/RSBS1.png',
      'https://repo.sweetspot.co.kr/images/BTL/DC/5RSBS/RSBS2.png'
    ],
    // dc[5]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/6OB.png'
    ],
    // dc[6]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C1.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C2.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C3.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C4.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C5.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C6.JPG',
      'https://repo.sweetspot.co.kr/images/BTL/DC/7C/C7.JPG'
    ],
    // dc[7]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/8GX.png'
    ],
    // dc[8]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/9D.png'
    ],
    // dc[9]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/10H.png'
    ],
    // dc[10]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/11DB.png'
    ],
    // dc[11]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/12DWS.png'
    ],
    // dc[12]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/13YO.png'
    ],
    // dc[13]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/14GC.png'
    ],
    // dc[14]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ1.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ2.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ3.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ4.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ5.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ6.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ7.jpg',
      'https://repo.sweetspot.co.kr/images/BTL/DC/15PJ/PJ8.jpg'
    ],
    // dc[15]
    [
      'https://repo.sweetspot.co.kr/images/BTL/DC/16HS.png'
    ]
  ]
]

export const JOIN_SERVICE_POLICY =
  `(주)스위트스팟 서비스 이용약관

제 1 조 (약관의 적용목적)

 

이 약관은 (주)스위트스팟(이하 “회사”라 한다)이 제공하는 인터넷 서비스(이하 “서비스”라 한다)를 이용함에 있어 “회사”와 “이용자”의 권리, 의무 및 책임 사항을 규정함을 목적으로 합니다.

 

제 2 조 (용어의 정의)

 

1. 이 약관에서 사용하는 용어의 정의는 다음과 같습니다.

① 회사가 운영하는 사이트는 아래와 같습니다.

– sweetspot.co.kr

② 사이트란 회사가 서비스를 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 공간 및 관련 콘텐츠 등을 게시 및 거래할 수 있도록 설정한 가상의 영업장을 말합니다.

③ 이용자란 사이트에 접속하여 이 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.

④ 회원이란 회사가 정한 절차를 거쳐서 회원가입을 한 자로서, 회사의 정보를 지속적으로 제공받으며 서비스를 계속적으로 이용할 수 있는 자격을 가진 자를 말합니다.

⑤ 공급자란 공간의 소유주 또는 임대인으로서, 관련 콘텐츠를 사이트에 제공 및 제안하는 회원을 말합니다.

⑥ 수요자란 공간 사용을 장기 또는 단기로 희망하는 자로서, 계약 후 공급자의 공간을 이용하는 회원을 말합니다.

⑦ 비회원이란 회원에 가입하지 않고 사이트가 제공하는 일부 콘텐츠와 서비스를 이용하는 자를 말합니다.

⑧ 저작물이란 회사와 이용자가 사이트에 게재한 모든 내용물을 의미하며, 여기에는 글, 사진을 비롯하여 회원가입내역, 개인정보 등이 포함됩니다.

2. 이 약관에서 정의되지 않는 용어는 관련 법령이 정하는 바에 따릅니다.

 

제 3 조 (약관의 명시와 설명 및 개정)

 

1. “회사”는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소 (소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 이메일주소, 사업자등록번호, 통신판매업 신고번호, 개인정보 관리책임자 등을 이용자가 쉽게 알 수 있도록 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.

2. “회사”는 전자상거래 등에서의 소비자 보호에 관한 법률, 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망 이용촉진 등에 관한 법률, 방문판매 등에 관한 법률, 소비자 기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.

3. “회사”가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 사이트의 초기 화면에 그 적용일자 15일 이전부터 적용일자 전일까지 공지합니다. 또한 그 개정약관은 그 적용일자 이후에 유불리에 관계없이 모든 사항에 동일하게 적용이 됩니다.

4. 전항에 따라 공지된 적용일자 이후에 “회원”이 “회사”의 서비스를 계속 이용하는 경우에는 개정된 약관에 동의하는 것으로 봅니다. 개정된 약관에 동의하지 아니하는 “회원”은 언제든지 자유롭게 서비스 이용 계약을 해지할 수 있습니다.

5. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및 관계 법령 또는 상 관례에 따릅니다.

 

제 4 조 (서비스의 제공 및 변경)

 

1. “회사”는 다음과 같은 업무를 수행합니다.

① “콘텐츠”와 관련된 재화 또는 용역에 대한 정보 제공 및 계약의 체결

② “공급자”가 소유한 공간 전반에 관한 정보 제공 서비스

③ 기타 “회사”가 이용자를 위하여 제공하는 서비스

2. “회사”가 제공하기로 이용자와 계약을 체결한 서비스의 내용을 기술적 사양의 변경 등의 사유로 변경할 경우에는, 그 변경이 실질적으로 이용자에게 불리한 것이 아닌 경우 그 사유를 이용자에게 통지하거나, 이용자가 알아볼 수 있도록 공지사항으로 게시합니다. 

3. “회사”는 “수요자”에게 “공간정보”를 제공하며, “회사”는 “공간정보”에 대한 저작권을 갖습니다.

4. “회사”는 공간 및 수요자와 함께 진행하는 행사 정보 제공 목적으로 “이용자”에게 이메일, 문자 메시지, 푸시 알림(App Push)을 발송할 수 있습니다.


제 5 조 (서비스의 중단)

 

1. “회사”는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 이 경우 서비스 일시 중단 사실과 그 사유를 사이트 초기화면에 통지합니다. 또한 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공을 제한하거나 일시 중단할 수 있습니다.

2. “회원”의 서비스 기간은 사이트에 “회원”으로 가입한 뒤로부터 계정을 소멸할 때까지입니다. 사업 종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에 “회사”는 제8조에 정한 방법으로 이용자에게 통지하도록 합니다. 단, “회사” 에 고의 또는 과실이 없는 경우에는 그러하지 아니합니다.

 

제 6 조 (회원가입)

 

1. 이용자는 “회사”가 정한 가입양식에 따라 회원 정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.

2. “회사”는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하는 이용신청에 대하여는 이를 승낙하지 아니하거나 사후에 이용계약을 해지할 수 있습니다.

① 타인의 명의를 도용하거나, 등록 내용에 허위, 기재누락, 오기가 있는 경우

② 이미 가입된 “회원”과 이름 및 이메일 주소가 동일한 경우

③ 기타 “회원”으로 등록하는 것이 “회사”의 기술상 현저히 지장이 있다고 판단되는 경우

3. 회원인증의 성립 시기는 “회사”의 회원등록이 “회원”에게 도달한 시점으로 합니다.

4. “회원”은 등록사항에 변경이 있는 경우, 즉시 이메일 및 기타 방법으로 “회사”에 대하여 그 변경사항을 알려야 합니다. 이를 알리지 않아 발생하는 불이익에 대한 책임은 “회원”에게 있습니다.

 

제 7 조 (회원 탈퇴 및 자격 상실 등)

 

1. “회원”은 “회사”에 언제든지 탈퇴를 요청할 수 있으며 “회사”는 즉시 회원탈퇴를 처리합니다.

2. “회원”이 다음 각 호의 사유에 해당하는 경우, “회사”는 회원자격을 제한 및 정지시킬 수 있습니다.

① 가입 신청 시에 허위 내용을 등록한 경우

② “사이트”를 이용하여 결제한 대금, 기타 “사이트” 이용에 관련하여 “회원”이 부담하는 채무를 기일에 지급하지 않는 경우

③ 다른 사람의 “사이트” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우

④ “사이트”를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우

⑤ “사이트"를 이용하여 “회원”을 타 사이트로 유도하는 경우

⑥ 기타 ”회사”의 합리적인 판단에 기하여 서비스의 제공을 거부할 필요가 있다고 객관적으로 인정되는 경우

3. “회사”가 회원 자격을 제한 정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “회사”는 회원자격을 상실시킬 수 있습니다.

4. “회사”가 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 “회원”에게 이를 통지하고, 회원등록 말소 전에 최소한 15일 이상의 기간을 정하여 소명할 기회를 부여합니다.

5. “회사”는 “회원”이 주민등록법, 저작권법 또는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 대한민국 내 제반 법령을 위반한 것으로 의심이 되는 경우 “회원”에게 통지 후 “서비스” 이용을 제한하고 수사기관을 통하여 사실관계를 규명할 수 있습니다.

6. 제 1항에 따라 해지를 한 이후에는 재가입이 불가하며, 모든 가입은 신규 가입으로 처리됩니다. 

 

제 8 조 (정보의 제공 및 광고 게재)

 

1. “회사”는 서비스 이용에 관한 다양한 정보를 사이트 내 공지사항, 서비스 화면, 이메일 또는 SMS 등의 방법으로 “회원”에게 제공할 수 있으며 “회원”은 수신을 거부할 수 있습니다. 다만 “회사”는 서비스 이용에 필수적으로 요구되는 정보에 대해서는 “회원”의 수신 거부 의사와 무관하게 이를 제공할 수 있습니다.

2. “회사”는 전항에 따른 정보의 제공 이외에도 “회원”이 “회사”가 정한 양식에 따라 회원가입, 서비스 이용 또는 공간 신청 완료 후 기입한 회원 정보에 대한 개별 서비스를 제공할 수 있습니다.

3.  “회사”는 서비스 운영과 관련하여 “회사”가 제공하는 사이트에 광고를 게재할 수 있습니다.

 

제 9 조 (회원에 대한 통지)

 

1. “회사”가 회원에 대한 통지를 하는 경우, “회원”이 “회사”와 미리 약정하여 지정한 이메일 주소로 할 수 있습니다.

2. “회사”는 불특정 다수 회원에 대한 통지의 경우, 일괄적으로 이메일 또는 SMS 등을 통해 통지를 할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.

 

제 10 조 (서비스 이용 시간)

 

“서비스”의 이용은 “회사”의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다. 다만 정기 점검 등의 필요로 “회사”가 정한 날이나 시간은 제외됩니다.

 

제 11 조 (공간 등록 신청)

 

1. “회사”는 공간을 소유 및 임대하고 있는 공급자가 필요한 정보를 입력하여 등록 신청할 수 있도록 합니다.

2. “공급자”는 등록 신청을 하여 “회사”가 이를 승낙함으로써 성립합니다. “회사”는 등록 승낙의 의사표시를 해당 서비스화면에 게시하거나 이메일 또는 기타 방법으로 통지합니다.

3. “회사”는 공간을 등록한 공급자가 제공한 정보의 정확성을 확인하기 위하여 관련 법령이 허용하는 범위 내에서 증빙자료의 제공을 요청할 수 있습니다. “공급자”가 부당하게 증빙자료를 제공하지 않는 경우 “회사”는 서비스 제한, 계약의 해지 등 조치를 취할 수 있으며, “공급자”는 이로 인하여 발생하는 손해에 대해 “회사”에게 어떠한 책임도 물을 수 없습니다.

 

제 12 조 (공간 사용 신청)

 

1. 공간 사용을 하고자 하는 자는 이 약관에 동의하고, “회사”가 정하는 신청 양식에 따라 신원 정보 등의 필요한 사항을 기입하여 신청합니다.

 

제 13 조 (게시물의 관리)

 

1. “회사”는 게시물이 다음 각 호에 해당하는 경우 사전 통보 없이 해당 게시물을 삭제하거나, 열람을 제한하는 등의 조치를 취할 수 있습니다.

① 타인의 권리나 명예, 신용 기타 정당한 이익을 침해하는 경우

② 공공질서 및 미풍양속에 위반되는 내용일 경우

③ 범죄행위와 관련된 내용을 포함하는 경우

④ “회사”의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 내용인 경우

⑤ 불법물, 음란물 또는 청소년유해매체물의 게시, 광고, 사이트를 링크하는 경우

⑥ “회사”로부터 사전 승인받지 아니한 상업광고, 판촉 내용을 게시하거나 타 사이트의 링크를 게시하는 경우

⑦ 상품과 관련 없는 내용일 경우

⑧ 허위의 사실을 마치 진실인 것처럼 기재하여 “회사”의 업무를 방해하거나 “회사”의 사실관계 확인 요청에 2회 이상 불응한 경우

⑨ “회사”가 제공하는 “서비스” 기타 영업행위의 원활한 진행을 방해하는 것으로 판단되는 경우

⑩ 기타 이 약관 또는 관련 법령에 위반된다고 판단되는 경우

2. 전 항에 해당하는 게시물로 인하여 “회사”가 제3자에 대하여 손해배상금을 지급하게 되는 경우(조정, 판결, 민사, 형사 불문) 귀책 사유 있는 “회원”은 “회사”가 제3자에게 배상금을 지급하는 즉시 동일 금액 상당을 “회사”에게 지급하여야 합니다.

 

제 14 조 (게시물의 저작권 및 배타적 이용허락)

 

1. “회원”이 작성한 “게시물”의 저작권은 이를 작성한 “회원” 본인에게 있으며, 해당 “게시물”이 타인의 저작권을 침해하는 경우 그에 대한 책임은 “회원” 본인이 부담합니다.

2. “회원”은 “회사”에게 자신이 작성한 “게시물”을 독점적으로 이용할 수 있는 권리(license)를 부여합니다. 이에 따라 “회사”는 “회원”이 작성한 “게시물”을 검색 노출, 판촉, 홍보 기타의 자료로 무상으로 이용할 수 있으며, 필요한 범위 내에서 “게시물”의 일부를 수정, 복제, 편집할 수 있습니다.

 

제 15 조 (저작권 등의 귀속 및 이용제한)


1. “회사”가 작성한 저작물에 대한 저작권, 특허권, 상표권 기타 지적 재산권은 “회사”에 귀속합니다.

2. “회원”은 “서비스”를 이용함으로써 얻은 정보를 “회사”의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등 기타 방법에 의하여 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.

 

제 16 조 (개인정보보호)

 

1. “회사”는 “회원”의 개인정보를 보호하기 위하여 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보 보호법 등 관계 법령에서 정하는 바를 준수합니다. 개인정보의 보호 및 사용에 대해서는 관련 법령 및 “회사”의 개인정보 처리방침이 적용됩니다.

2. “회사”는 “회원”의 개인정보를 보호하기 위하여 개인정보 처리방침을 제정, “서비스” 초기화면에 게시합니다. 다만, 개인정보 처리방침의 구체적 내용은 연결화면을 통하여 볼 수 있습니다.

3. “회사”는 이용계약을 위하여 “회원”이 제공한 정보를 “회사”의 “서비스” 운영을 위한 목적 이외의 용도로 사용하거나 “회원”의 동의 없이 제3자에게 제공하지 않습니다. 단, 다음 각 호의 경우에는 예외로 합니다.

① 법령에 근거하여 회원 정보의 이용과 제3자에 대한 정보제공이 허용되는 경우

② 기타 “회사”의 약관 및 정책에 따라 “회원”의 동의를 구한 경우

 

제 17 조 (회사의 의무)

 

1. “회사”는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화 용역을 제공하는 데 최선을 다하여야 합니다.

2. “회사”는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보 보호를 위한 보안 시스템을 갖추어야 합니다.

3. “회사”는 이용자가 원하지 않는 영리 목적의 광고성 이메일을 발송하지 않습니다.

 

제18조 (이용자의 의무)

 

이용자는 다음 행위를 하여서는 안 됩니다. 만약 다음 각 항과 같은 행위가 확인되면 “회사”는 추가적인 피해 발생을 막기 위하여 “이용자”에게 위반 사실과 서비스 일시 중단을 통지하고 5일 이내에 시정할 것을 요구합니다. “이용자”가 동 기간 내에 소명하지 아니하거나 정당한 사유를 제시하지 못할 경우 “회사”는 “이용자”와의 서비스 이용 계약을 해지할 수 있습니다. 

1. 신청 또는 변경 시 허위내용의 등록

2. “사이트”에 게시된 정보의 변경

3. “사이트”가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시

4. “사이트” 및 기타 제3자의 저작권 등 지적재산권에 대한 침해

5. “사이트” 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위

6. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 “사이트”에 공개 또는 게시하는 행위

7. 타인의 정보 도용

8. “회사” 서비스 운영을 고의 및 과실로 방해하는 경우

9. 기타 현행 법령 위반 등 중대한 사유로 인하여 “회사”가 서비스 제공을 지속하지 못할 객관적인 이유가 있는 경우

 

제 19 조 (회원의 아이디 및 비밀번호에 대한 의무)

 

1. “아이디”와 “비밀번호”에 관한 관리책임은 “회원”에게 있으며, 이를 소홀히 하여 발생한 모든 민사상의 책임은 “회원” 자신에게 있습니다.

2. “회원”은 자신의 “아이디” 및 “비밀번호”를 제3자가 이용하게 해서는 안 됩니다.

3. “회원”이 자신의 “아이디” 및 “비밀번호”를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 “회사”에 통보하고 “회사”의 조치가 있는 경우에는 그에 따라야 합니다.

4. “회원”이 전 항에 따른 통지를 하지 않거나 “회사”의 조치에 응하지 아니하여 발생하는 모든 불이익에 대한 책임은 “회원”에게 있습니다.

 

제 20 조 (면책 조항)

 

1. “회사”는 천재지변 또는 이에 준하는 불가항력으로 인하여 “서비스”를 제공할 수 없는 경우에는 “서비스” 제공에 관한 책임이 면제됩니다.

2. “회사”는 “회원”의 귀책 사유로 인한 “서비스” 이용의 장애에 대하여 책임을 지지 않습니다.

3. “회사”는 “회원”이 “서비스”를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 “서비스”를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.

4. “회사”는 “회원”이 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관해서는 책임을 지지 않습니다.

5. “회사”는 “회원” 간 또는 “회원”과 제3자 상호 간에 “서비스”를 매개로 하여 거래 등을 한 경우에는 책임을 지지 않습니다.

 

제 21 조 (분쟁 해결)


1. “회사”는 “회원”이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상 처리하기 위해서 피해보상처리 기구를 설치, 운영합니다.

2. “회사”는 “회원”이 제기하는 불만 사항 및 의견을 우선적으로 처리합니다. 다만 신속한 처리가 곤란한 경우에는 “회원”에게 그 사유와 처리 일정을 즉시 통보합니다.

 

제 22 조 (재판권 및 준거법)

 

1. 이 약관의 해석 및 “회사”와 “회원” 간의 분쟁에 대하여는 대한민국의 법령을 적용합니다.

2. “서비스” 이용 중 발생한 “회사”와 “회원” 간의 소송은 서울중앙지방법원에 제소합니다.

 

본 약관은 2019년 05월 01일부터 적용합니다.`

export const JOIN_PRIVATE_POLICY =
  `1. 총칙
 

(주)스위트스팟[이하 “회사”]는 회원의 개인정보보호를 소중하게 생각하고, 회원의 개인정보를 보호하기 위하여 항상 최선을 다해 노력하고 있습니다.

가. 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한 모든 개인정보보호 관련 법률 규정을 준수하고 있으며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.

나. 회사는 「개인정보처리방침」을 제정하여 이를 준수하고 있으며, 이를 웹사이트에 공개하여 이용자가 언제나 용이하게 열람할 수 있도록 하고 있습니다.

 

2. 개인정보의 수집 방법 및 항목


회사는 회원가입, 원활한 상담, 각종 서비스의 제공 등을 위해 아래와 같은 최소한의 개인정보를 수집하고 있습니다.

가. 수집하는 개인정보의 항목

- 필수항목 : 이메일, 이름, 비밀번호, 연락처

- 선택항목 : 유형(개인/기업/단체), 기업/단체 이름, 기업/단체 규모, 산업군, 부서

※ 회사는 만 14세 미만 아동의 개인정보 보호를 위하여 만 14세 이상의 이용자에 한하여 회원가입을 허용합니다.

나. 개인정보의 수집 방법

- 웹페이지, 서면 양식, 팩스, 고객센터를 통한 전화와 온라인 상담, 이벤트 응모

- 생성정보 수집 툴을 통한 수집

다. 인터넷 서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 위치정보가 생성되어 수집될 수 있습니다. 서비스 이용 과정에서 이용자에 관한 정보를 정보통신서비스 제공자가 자동화된 방법으로 생성하여 이를 저장(수집)할 수 있습니다.

 

3. 개인정보의 수집 및 이용목적

 

가. 서비스의 원활한 제공 및 운영

나. 회원관리

회원제 서비스 이용, 개인식별, 불량회원의 부정 이용방지와 비인가 사용방지, 가입의사 확인, 가입 및 가입횟수 제한, 분쟁 조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달.

다. 마케팅 및 광고에의 활용

고객별 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 정기 간행물 발송, 서비스의 유효성 확인, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 접속빈도 파악, 회원의 서비스 이용에 대한 통계.

 

4. 개인정보 수집, 이용, 제공에 대한 동의

 

회사는 이용자가 최초 회원가입 시 또는 서비스 이용과 관련해 개인정보를 입력할 시 개인정보처리방침 및 이용약관 등의 내용에 대해 동의 여부를 체크할 수 있는 절차를 마련하여, 이를 체크하면 개인정보수집에 대해 동의한 것으로 처리합니다.

 

5. 개인정보의 목적 외 이용 및 위탁


가. 회사는 이용자의 개인정보를 “3. 개인정보의 수집 및 이용목적”에서 고지한 범위 내에서 사용하며 동 범위를 초과하여 이용하거나 원칙적으로 제3자에게 제공하지 않습니다.

나. 다만 다음의 경우에는 합당한 절차를 통한 회원의 동의를 얻어 개인정보를 제공 또는 이용할 수 있습니다.

① 제휴 관계: 보다 나은 서비스 제공을 위하여 당사는 회원의 개인정보를 제휴사에 제공할 수 있습니다. 이 경우 사전에 회원에게 제휴사, 제공되는 개인정보의 항목, 개인정보 제공 목적, 제공 기간, 개인정보보호방안 등에 대해서 개별적으로 동의를 구하는 절차를 거치게 되며, 회원의 동의가 없는 경우에는 제휴사에게 이를 제공하지 않으며, 제휴 관계의 변화 또는 종결될 경우에도 고지합니다. 또한 제휴 관계가 종결될 경우 제공된 개인정보에 대해서는 회원님의 동의가 없는 경우 지체 없이 파기하도록 조치하며 개인정보 제공에 동의하더라도 언제든지 그 동의를 철회할 수 있습니다.

② 위탁처리: 원활한 업무처리와 회원에게 보다 나은 서비스 제공을 위하여 회원의 개인정보를 위탁하여 처리할 수 있으며, 이 경우 반드시 사전에 위탁처리 업체명과 목적, 위탁처리 되는 개인정보의 범위, 위탁 기간 등에 대해 상세하게 고지합니다.

다. 다음은 예외로 합니다.

① 서비스 제공에 따른 요금 정산을 위하여 필요한 경우

② 회사가 제공하는 서비스를 통하여 거래가 성사된 경우, 거래 당사자 간의 원활한 의사소통을 위하여 관련된 정보를 필요한 범위 내에서 거래당사자에게 제공하는 경우

③ 이용자들이 사전에 동의한 경우

④ 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우

라. 수집한 개인정보의 위탁 및 국외 이전

회사는 서비스 이행을 위해 아래와 같이 개인정보 처리 업무를 외부 전문업체에 위탁하여 처리하고 있습니다. 개인정보 처리위탁은 개별 서비스 별로 그 이행을 위해 필요한 경우에 한해 각 위탁업체에 대해 이루어집니다.

개인정보의 처리를 위탁하는 경우에는 개인정보 보호의 안전을 기하기 위하여 개인정보보호 관련 지시엄수, 개인정보에 대한 비밀유지, 제3자 제공의 금지 및 사고시의 책임부담, 위탁기간, 처리 종료 후의 개인정보의 반환 또는 파기 등을 명확히 규정하고, 위탁업체가 개인정보를 안전하게 처리하도록 감독합니다. 업체, 위탁하는 업무의 내용이 변경될 경우, 웹사이트 공지사항(또는 서면·이메일·전화·SMS 등의 방법으로 개별공지)을 통하여 알려드리겠습니다. 또한 일부 개인정보의 경우 서비스 제공 목적 및 이용자 편의 증진 등을 위하여 국외 업체에 위탁, 보관하고 있습니다.

<개인정보 처리 위탁업체와 위탁업무 내용>

수탁 업체의 명칭 : AWS(Amazon Web Services)
위탁 업무내용 : 클라우드 서버 운영 및 관리 (Seoul region)

수탁 업체의 명칭: Zendesk
위탁 업무내용: 고객상담, 불만 처리 등 민원처리, 고지사항 전달, 고객지원 업무

수탁 업체의 명칭 : Mailchimp
위탁 업무내용: 이메일 전송 대행 (뉴스레터)

<국외 이전 사항>
업체명칭 : Zendesk
연락처 : support@zendesk.com
이전 되는 항목 : 서비스 이용 시 고객이 제공한 개인정보 및 상담 내용 일체
이전 국가 : 미국
이전받는 자의 이용목적 및 보유∙이용 기간 : 서비스 이용 시점에 네트워크를 통한 전송, 서비스 이용/ 회원 탈퇴 혹은 위탁 계약 종료 시까지

업체명칭 : Mailchimp
연락처 : support@mailchimp.com
이전 되는 항목 : 이메일
이전 국가 : 미국
이전받는 자의 이용목적 및 보유∙이용 기간 : 회원가입 시점에 네트워크를 통한 전송, 서비스 이용/ 회원 탈퇴 혹은 위탁 계약 종료 시까지

6. 개인정보의 보유 기간 및 파기

 

가. 회사는 회원이 회원자격을 유지하고 있는 동안 수집된 회원의 개인정보를 보유ㆍ이용할 수 있습니다.

나. 회원이 탈퇴하거나 자격을 상실할 경우, 회사는 회원의 별도 요청이 없더라도 수집된 회원 정보를 삭제 및 파기합니다. 단, 회원의 탈퇴 또는 자격상실에도 불구하고 다음의 정보는 아래의 이유로 명시 기간 동안 보존 후 삭제 및 파기됩니다.

<회사 내부 방침에 의한 정보 보유>

① 명예훼손 등 권리침해 분쟁 및 수사협조 : 1년

② 탈퇴회원의 재가입 제한을 위한 회원정보 기록: 1년

③ 이용 제한 회원 및 부정회원의 재가입 제한을 위한 회원정보 기록: 제한기간에 따라 1년 또는 영구(별도저장)

<관계법령에 의한 정보 보유>

① 계약 또는 청약 철회 등에 관한 기록: 5년

② 대금결제 및 재화 등의 공급에 관한 기록: 5년

③ 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년

④ 표시/광고에 관한 기록: 6개월

⑤ 접속에 관한 기록: 3개월

다. 회사는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 (법령 제29조, 본법 시행령 제16조)에 따라 개인정보를 보호하기 위하여 다음과 같이 장기 미이용 회원에 대하여 『개인정보 유효기간제』를 실시합니다.

① 1년간 서비스를 이용하지 않은 회원의 개인정보는 해당 기간 경과 후 별도 분리저장 처리되며, 개인정보 별도 분리저장 후 서비스는 중지됩니다.

② 서비스 미이용 기준: 공간 신청이력, 공간 등록, 공간정보 찜 또는 로그인(아이디 보유 회원에 한함) 중에서 최종 일시 기준

③ 유효기간 만료 통지: 유효기간 만료 30일 전까지 문자메시지 또는 이메일 등으로 개인정보가 별도 분리 저장되는 사실 및 유효기간 만료일, 별도 분리 저장되는 고객정보 항목을 해당 회원에게 통지합니다.

④ 유효기간 선택 고지: 1년 이외의 기간으로 유효기간을 정하고자 하는 경우, 회원가입 약관 내 ‘서비스 미이용 기간 동의’를 통해 개인정보 유효기간을 회원 본인이 선택할 수 있도록 게시 및 고지하고 있습니다.

⑤ 개인정보 재이용: 별도 분리저장 처리 이후 1년 전까지 스위트스팟 사이트에서 기존 가입 회원 인증 후 재이용이 가능합니다

⑥ 개인정보 파기: 별도 분리저장 처리 1년 후까지 재이용 인증이 없을 시, 별도 분리저장 처리된 회원의 개인정보는 파기(탈퇴)처리 됩니다.

 

7. 이용자 및 법정대리인의 권리와 그 행사방법


가 .이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 또는 대리자의 개인정보를 조회하거나 수정할 수 있으며 가입 해지(탈퇴)를 요청할 수도 있습니다.

단, 회사는 다음과 같이 조회, 수정 등의 요청을 거절할 만한 정당한 공익적 사유가 있는 경우에는 요청을 거부할 수 있으며, 거부하는 경우에는 10일 이내에 구두 또는 서면으로 거부 사유 및 불복 방법을 정보 주체에게 통지하고 있습니다.

① 법률에 따라 열람이 금지되거나 제한되는 경우

② 다른 사람의 생명, 신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우

나. 개인 회원의 정보는 웹사이트에 로그인 후 ‘계정 설정’ 메뉴를 통해 조회, 수정, 가입 해지(탈퇴)가 가능합니다.

다. 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리 결과를 제3자에게 통지합니다.

라. 회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “6. 개인정보의 보유 기간 및 파기”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

 

8. 개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항


가. 쿠키란?

- 회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 이용자의 정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.

- 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트 파일로 이용자 컴퓨터의 하드디스크에 저장됩니다. 이후 이용자가 웹사이트에 방문할 경우 웹사이트 서버는 이용자의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 맞춤화된 서비스를 제공하기 위해 이용됩니다.

- 쿠키는 개인을 식별하는 정보를 자동적/능동적으로 수집하지 않으며, 이용자는 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.

나. 회사의 쿠키 사용 목적

- 이용자들이 방문한 스위트스팟의 각 서비스의 접속여부, 문의하기 등에 사용합니다.

다. 회사의 쿠키 거부 방법

- 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다

- 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 스위트스팟 일부 서비스는 이용에 어려움이 있을 수 있습니다.

[쿠키의 설정 방법]

Internet Explorer : 도구 메뉴 선택 > 인터넷 옵션 선택 > 개인정보 탭 클릭 > 개인정보처리 수준 설정

Chrome : 설정 메뉴 선택 > 고급 설정 표시 선택 > 개인정보-콘텐츠 설정 선택 > 쿠키 수준 설정

Firefox : 옵션 메뉴 선택 > 개인정보 선택 > 방문기록-사용자 정의 설정 > 쿠키 수준 설정

Safari : 환경설정 메뉴 선택 > 개인정보 탭 선택 > 쿠키 및 웹 사이트 데이터 수준 설정

 

9. 개인정보의 기술적/관리적 보호 대책

 

회사는 이용자들의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 다음과 같은 기술적/관리적 대책을 강구하고 있습니다.

단, 이용자 본인의 부주의나 인터넷 또는 통신상의 문제로 ID, 비밀번호 등 개인정보가 유출되어 발생한 문제에 대해 회사는 일체의 책임을 지지 않습니다.

가. 비밀번호 암호화

회원 아이디(ID)의 비밀번호는 암호화되어 저장 및 관리되고 있어 본인만이 알고 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다.

나. 해킹 등에 대비한 대책

회사는 해킹이나 컴퓨터 바이러스 등에 의해 회원의 개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고 있습니다.

개인정보의 훼손에 대비해서 자료를 수시로 백업하고 있고, 최신 백신 프로그램을 이용하여 이용자들의 개인정보나 자료가 유출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.

그리고 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려 노력하고 있습니다.

다. 처리 직원의 최소화 및 교육

회사의 개인정보관련 처리 직원은 담당자에 한정시키고 있고 이를 위한 별도의 비밀번호를 부여하여 정기적으로 갱신하고 있으며, 담당자에 대한 수시 교육을 통하여 스위트스팟 개인정보처리방침의 준수를 항상 강조하고 있습니다.

 

10. 개인정보보호책임자 및 담당자

 

가. 개인정보보호책임자는 고객의 개인정보를 보호하고 유출을 방지하는 책임자로서 이용자가 안심하고 회사가 제공하는 서비스를 이용할 수 있도록 도와드리며, 개인정보를 보호하는데 있어 이용자에게 고지한 사항들에 반하여 사고가 발생할 시에는 이에 관한 책임을 집니다.

나.기술적인 보완조치를 취하였음에도 불구하고 해킹 등 기본적인 네트워크상의 위험성에 의해 발생하는 예기치 못한 사고로 인한 정보의 훼손 및 멸실, 이용자가 작성한 게시물에 의한 각종 분쟁 등에 관해서는 책임이 없습니다.

다.회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률에서 규정한 보호책임자를 다음과 같이 지정합니다.

 

[ 고객센터 ]

이메일: help@sweetspot.co.kr

전화번호: 02-553-0741

 

[ 개인정보 보호책임자 ]

이름: 김승하

소속: 경영지원팀

직위: CFO

이메일: privacy@sweetspot.co.kr

 

[ 개인정보 관리 담당부서 ]

부서명: 온라인플랫폼팀

이메일: privacy@sweetspot.co.kr

 

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.

- 개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)

- 대검찰청 사이버수사과 (www.spo.go.kr / 국번 없이 1301)

- 경찰청 사이버안전국 (www.ctrc.go.kr / 국번 없이 182)

 

11. 고지의 의무

 

현 개인정보처리방침은 2019년 04월 15일에 제정되었으며, 정부 및 회사의 정책 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 경우에는 개정 최소 7일 전부터 서비스의 ’공지사항’란을 통해 고지하며, 본 정책은 시행 일자에 시행됩니다.

가. 개인정보처리방침 버전 번호 : 2.0

나. 개인정보처리방침 변경 공고 일자 : 2019년 04월 20일

다. 변경 개인정보처리방침 시행 일자 : 2019년 05월 01일`
