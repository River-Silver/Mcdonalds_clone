import React from "react";
import "../footer/footer_module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li style={{fontSize:"15px",fontWeight:"bold",color:"yellow"}}>개인정보 처리방침</li>
        </ul>
        <ul>
          <li style={{fontSize:"15px",fontWeight:"bold",color:"white"}}>위치정보 이용약관</li>
        </ul>
        <ul>
          <li style={{fontSize:"15px",fontWeight:"bold",color:"white"}}>사이트맵</li>
        </ul>
        <ul>
          <li style={{fontSize:"15px",fontWeight:"bold",color:"white"}}>임차문의</li>
        </ul>
        <ul>
          <li style={{fontSize:"15px",fontWeight:"bold",color:"white"}}>고객문의</li>
        </ul>
        <ul>
          <li></li>
        </ul>
        
      </div>
    </footer>
  );
};

export default Footer;
