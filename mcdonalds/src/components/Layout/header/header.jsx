import React from "react";
import logo from "./images/logo.png";
import "../header/header_module.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div>
          <img src={logo} className="img"></img>
        </div>

        <nav>
          <ul>
            <li className="li">
              <h4>Menu</h4>
            </li>
            <li className="li">
              <h4>Store</h4>
            </li>

            <li className="li">
              <h4>What's New</h4>
            </li>

            <li className="li">
              <h4>Story</h4>
            </li>

            <li className="li">
              <button className="imcha">
                <h4>임차문의</h4>
              </button>
              <button className="rec">
                <h4>RECRUIT</h4>
              </button>
              <button className="eng">
                <h4>ENG</h4>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
