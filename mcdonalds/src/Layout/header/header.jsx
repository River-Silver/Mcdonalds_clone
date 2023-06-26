import React from "react";
import logo from "./images/logo.png";
import "../header/header_module.css";
import quest from "./images/quest.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div>
          <img src={logo} className="img"></img>
        </div>
        
        <nav>
          <ul >
            <li>
              <h4>Menu</h4>
              <div class="dropdown-content">
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>버거</a>
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>맥런치</a>
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>맥모닝</a>
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>해피 스낵</a>
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>사이드 & 디저트</a>
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>맥카페 & 음료</a>
              <a href = "#" className="dropli" style={{fontSize:"16px",color:"gray"}}>해피밀</a>
              <div class="tt">
              <a href = "/search" className="dropli2" style={{fontSize:"16px",color:"gray"}}>매장찾기</a>
              <a href = "/delivery" className="dropli2" style={{fontSize:"16px",color:"gray"}}>맥딜리버리</a>
              <a href = "/mcdrive" className="dropli2" style={{fontSize:"16px",color:"gray"}}>맥드라이브</a>
              <a href = "/rental" className="dropli2" style={{fontSize:"16px",color:"gray"}}>임차문의</a>
              </div>
              <div class = "tt2">
              <a href = "#" className = "dropli3"style={{fontSize:"16px",color:"gray"}}>프로모션</a>
              <a href = "/news" className = "dropli3"style={{fontSize:"16px",color:"gray"}}>새로운 소식</a>
              <a href = "#" className = "dropli3"style={{fontSize:"16px",color:"gray"}}>이달의 해피밀</a>
              </div>
              <div class = "tt3">
              <a href = "#" className = "dropli4"style={{fontSize:"16px",color:"gray"}}>브랜드 소개</a>
              <a href = "#" className = "dropli4"style={{fontSize:"16px",color:"gray"}}>사회적 책임과 지원</a>
              <a href = "#" className = "dropli4"style={{fontSize:"16px",color:"gray"}}>맥도날드 품질 이야기</a>
              <a href = "/brandintro" className = "dropli4"style={{fontSize:"16px",color:"gray"}}>맥도날드 사람들</a>

              </div>
               
              </div>
            </li>
            <li>
              <h4>Store</h4>
            </li>

            <li>
              <h4>What's New</h4>
            </li>

            <li>
              <h4>Story</h4>
            </li>
            
          </ul>

          <li className="li2">
            <button className="imcha">
              <a href = "/rental" style={{textDecoration:"none", color:"white"}}><h4>임차문의</h4></a>
            </button>
            <button className="rec">
              <h4>RECRUIT</h4>
            </button>
            <button className="eng">
              <h4>ENG</h4>
            </button>
            </li>
            <img src={quest} classname="img2" className="li3"></img>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
