class Place {
  constructor(name, tag, rating, image, description) {
    this.name = name
    this.tag = tag
    this.rating = rating
    this.image = image
    this.description = description
  }
}

export const placeList = {
  attraction: [
    new Place('명동', '건축물', 4.5,
      'https://youimg1.tripcdn.com/target/100s1f000001gx70tD814_C_670_770.jpg_.webp',
      `연중무휴
      추천 관광시간 : 3-4시간
      주소: 서울 중구
      전화번호 +82-2-120`),
    new Place('N서울타워', '현대 건출물, 전망대', 4.5,
      'https://youimg1.tripcdn.com/target/100n0y000000m3626DC3B_C_670_770.jpg_.webp',
      `추천 관광시간 : 1시간
      주소: 서울특별시 용산구 용산2가동 남산공원길 105
      전화번호 +82-2-34559277`),
    new Place('경복궁', '궁궐, 건축물', 4.4,
      'https://youimg1.tripcdn.com/target/10081f000001gqicwC6BC_C_670_770.jpg_.webp',
      `3/1-5/31 월요일,수요일-일요일 09:00-18:00 영업
      6/1-8/31 월요일,수요일-일요일 09:00-18:30 영업
      추천 관광시간 : 2시간
      주소: 서울 종로구 사직로 161
      전화번호 +82-2-37003900`),
    new Place('코엑스 아쿠아리움', '수족관', 4.6, 
      'https://youimg1.tripcdn.com/target/100w1f000001gwbnp92AA_C_670_770.jpg_.webp',
      `10:00-20:00 영업
      추천 관광시간 : 2-3시간
      주소: 서울 강남구 봉은사로 524 코엑스몰 B1 O12 (우) 06164
      공식 사이트: http://www.coexaqua.com/
      전화번호 +82-2-7007200`,),
  ],
  park: [
    new Place('코엑스 아쿠아리움', '수족관', 4.6, 
      'https://youimg1.tripcdn.com/target/100w1f000001gwbnp92AA_C_670_770.jpg_.webp',
      `10:00-20:00 영업
      추천 관광시간 : 2-3시간
      주소: 서울 강남구 봉은사로 524 코엑스몰 B1 O12 (우) 06164
      공식 사이트: http://www.coexaqua.com/
      전화번호 +82-2-7007200`,),
    new Place('남산공원', '도심공원', 4.5,
      'https://youimg1.tripcdn.com/target/100h1f000001grvlmE33E_C_670_770.jpg_.webp',
      `연중무휴
      추천 관광시간 : 1-2시간
      주소: 서울특별시 중구 삼일대로 231
      전화번호 +82-2-37835900`),
    new Place('여의도 한강공원', '도심공원', 4.5,
      'https://youimg1.tripcdn.com/target/10050z000000nexjgB8F6_C_670_770.jpg_.webp',
      `연중무휴
      추천 관광시간 : 1-2시간
      주소: 서울 영등포구 여의공원로 68 (우) 07243
      공식 사이트: http://hangang.seoul.go.kr/archives/46758
      전화번호 +82-2-378005615`),
    new Place('낙산공원', '도심공원', 4.3,
      'https://youimg1.tripcdn.com/target/100f1f000001gqaty9B78_C_670_770.jpg_.webp',
      `연중무휴
      추천 관광시간 : 1-2시간
      주소: 서울 종로구 동숭동 산2-10
      전화번호 +82-2-74379856`),
  ],
  nature: [
    new Place('청계천', '하천', 4.4,
      'https://youimg1.tripcdn.com/target/100b1f000001gsmhe0D20_C_670_770.jpg_.webp',
      `연중무휴
      추천 관광시간 : 1-2시간
      주소: 서울특별시 종로구 창신동
      전화번호 +82-2-22907111`),
    new Place('여의도', '섬/반도', 4.4,
      'https://youimg1.tripcdn.com/target/100v1f000001h1bn2676D_C_670_770.jpg_.webp',
      `연중무휴
      추천 관광시간 : 1-2시간
      주소: 서울특별시 영등포구 여의동`),
    new Place('관악산', '산', 4.2,
      'https://youimg1.tripcdn.com/target/100j1f000001gpqyaD5B6_C_670_770.jpg_.webp',
      `연중무휴
      주소: 과천시 중앙동 관악산
      전화번호 +82-2-8796521`),
  ],
  history: [
    new Place('경복궁', '궁궐, 건축물', 4.4,
      'https://youimg1.tripcdn.com/target/10081f000001gqicwC6BC_C_670_770.jpg_.webp',
      `3/1-5/31 월요일,수요일-일요일 09:00-18:00 영업
      6/1-8/31 월요일,수요일-일요일 09:00-18:30 영업
      추천 관광시간 : 2시간
      주소: 서울 종로구 사직로 161
      전화번호 +82-2-37003900`),
    new Place('북촌 한옥마을', '역사 유적지', 4.4,
      'https://youimg1.tripcdn.com/target/100p11000000r4rhv9EF4_C_670_770.jpg_.webp',
      `월요일-토요일 10:00-17:00 영업
      추천 관광시간 : 2-3시간
      주소: 서울 종로구 계동길 37 (우) 03059
      전화번호 +82-2-21484160 02-2133-1372`),
    new Place('창덕궁', '궁궐', 4.4,
      'https://youimg1.tripcdn.com/target/100q1f000001grjxqC44C_C_670_770.jpg_.webp',
      `추천 관광시간 : 1시간
      주소: 서울 종로구 율곡로 99 (우) 03072
      전화번호 +82-2-36682300`),
    new Place('덕수궁', '궁궐', 4.3,
      'https://youimg1.tripcdn.com/target/10071f000001h70jsBA2A_C_670_770.jpg_.webp',
      `화요일-일요일 09:00-21:00 영업
      추천 관광시간 : 2시간
      주소: 서울 중구 세종대로 99 (우) 04519
      전화번호 +82-2-7719951`),
  ],
  activity: [
    new Place('석촌호수 수채화 그림 그리기', '활동', '-',
      'https://ak-d.tripcdn.com/images/0354p120008gm73m35322_C_670_770.jpg_.webp?proc=source/trip;namelogo/d_40',
      `운영시간: 오후 1시~9시(라스트오더: 오후 8시 30분)
      매주 월요일 휴무
      명정 당일 휴뮤 (추석, 설)
      주소: 서울특별시 송파구 송파동 37-6 도화서가가`),
    new Place('가평 브릿지 짚라인', '활동', '-',
      'https://ak-d.tripcdn.com/images/03532120008aqeed1CF71_C_670_770.jpg_.webp?proc=source/trip;namelogo/d_40',
      `운영시간: 동절기(9~6월) 09:00 ~ 17:00 / 하절기(7~8월) 09:00 ~ 18:00
      주소: 업체주소:경기도 가평군 가평읍 경반안로 417-11
      업체 전화: 1588-5219`),
    new Place('플라워바이네이키드', '활동', '-',
      'https://ak-d.tripcdn.com/images/0355z120008l2d1sr421B_C_670_770.jpg_.webp?proc=source/trip;namelogo/d_40',
      `운영시간 : 11:00~22:00 (연중무휴) 입장마감 : 21:00
      전시장 주소 : 서울시 마포구 양화로 188 AK& 4층
      문의: 02-323-2055
      홈페이지 : http://naturelabs.co.kr/`),
  ],
}