import * as S from "./style.js";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import kakao from "./images/kakao.png";
import youtube from "./images/youtube.png";
import web from "./images/web_accessibility.png"
const Footer = () => {
  return (
    <S.Footer>
      <S.FootArea>
      <S.Ulist>
      <S.Ftext style={{color:"#ffff00"}}>개인정보 처리방침</S.Ftext>
      <S.Ftext style={{color:"white"}}>위치정보 이용약관</S.Ftext>
      <S.Ftext style={{color:"white"}}>사이트맵</S.Ftext>
      <S.Ftext style={{color:"white"}}>임차문의</S.Ftext>
      <S.Ftext style={{color:"white"}}>고객문의</S.Ftext>
      <S.Ftext style={{color:"white"}}>인재채용</S.Ftext>
        
        </S.Ulist>
        <S.UInfo>
        <S.InfoText>한국맥도날드(유)</S.InfoText>
        <S.InfoText>대표이사: 김기원</S.InfoText>
        <S.InfoText>사업자등록번호: 101-81-26409</S.InfoText>
        <S.InfoText>전화주문: 1600-5252</S.InfoText>
        <S.InfoText>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</S.InfoText>
        </S.UInfo>
        <S.Ulist></S.Ulist>
        <S.UInfoFlex>
          <a href = "https://www.facebook.com/McDonaldsKorea"><S.Imgs src = {facebook} ></S.Imgs></a>
          <a href = "https://www.facebook.com/McDonaldsKorea"><S.Imgs src = {instagram} style={{backgroundColor:"white",borderRadius:10}}></S.Imgs></a>
          <a href = "https://www.facebook.com/McDonaldsKorea"><S.Imgs src = {youtube} style={{borderRadius: 30}}></S.Imgs></a>
          <a href = "https://www.facebook.com/McDonaldsKorea"><S.Imgs src = {kakao} style={{backgroundColor:"white",borderRadius:30}}></S.Imgs></a>
          <a href = "http://kwacc.or.kr/CertificationSite/WA/1664/Detail?page=1"><img src = {web} style={{width:108}}></img></a>
        </S.UInfoFlex>
      </S.FootArea>
    </S.Footer>
  );
};

export default Footer;
