export interface FestivalType {
 ADDR1 : string,
  // ADDR2 : string,
  CNTCT_TEL :  string ,
  GUGUN_NM : string,
  HOMEPAGE_URL :  string,
  ITEMCNTNTS : string,
  LAT : number,
  LNG :  number,
  MAIN_IMG_NORMAL: string,
  MAIN_IMG_THUMB : string,
  MAIN_PLACE :  string,
  MAIN_TITLE :  string,
  MIDDLE_SIZE_RM1 : string,
  PLACE : string,
  SUBTITLE :string,
  TITLE : string,
  TRFC_INFO :  string,
  UC_SEQ: number,
}

// key가 string / 값이 string or number 둘 다 들어올 수 있음.

// export interface FestivalType {
//   GUGUN_NM : string,
//   UC_SEQ : string,
//   MAIN_IMG_THUMB : string ,
//   MAIN_TITLE  : string,
//   TRFC_INFO : string,
//   ADDR1 : string,
// }

// 공통으로 사용하는 type은 별도의 파일 생성하여
// export, import 해서 사용하는게 용이

// export default
// export         문법숙지 