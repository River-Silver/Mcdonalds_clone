import "../footer/footer_module.css";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import kakao from "./images/kakao.png";
import youtube from "./images/youtube.png";
import web from "./images/web_accessibility.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="footers">
          <span style={{fontSize:"14px",fontWeight:"bold",color:"yellow"}}>개인정보 처리방침</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"white"}}>위치정보 이용약관</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"white"}}>사이트맵</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"white"}}>임차문의</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"white"}}>고객문의</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"white"}}>인재채용</span>
        </p>
        <p className="footers2">
          <span style={{fontSize:"14px",fontWeight:"bold",color:"gray"}}>한국맥도날드(유)</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"gray"}}>대표이사: 김기원</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"gray"}}>사업자등록번호: 101-81-26409</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"gray"}}>전화주문: 1600-5252</span><br></br>
          <span style={{fontSize:"14px",fontWeight:"bold",color:"gray"}}>COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</span><br></br>
        </p>
        <ul className="imgMargin">
          <a href = "https://www.facebook.com/McDonaldsKorea"><img src = {facebook} className="imgSize"></img></a>
          <a href = "https://www.instagram.com/mcdonalds_kr/"><img src = {instagram} className="imgSize"></img></a>
          <a href = "https://www.youtube.com/user/McDonaldsKor"><img src = {youtube} className="imgSize"></img></a>
          <a href = "https://story.kakao.com/ch/mcdonalds/feed"><img src = {kakao} className="imgSize"></img></a>
          <a href = "http://kwacc.or.kr/CertificationSite/WA/1664/Detail?page=1"><img src = {web} className="imgSize2"></img></a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
