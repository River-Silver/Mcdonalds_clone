import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "./header/header_module.css";
import "./Layout_module.css";
const Layout = (props) => {
  return (
    <div className="layout">
      <Header />

      <main>{props.children}</main>

      <Footer />
      dd
    </div>
  );
};

export default Layout;
