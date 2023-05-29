import Header from "./header/header";
import Footer from "./footer/footer";
import "./Layout_module.css";
const Layout = (props) => {
  return (
    <div className="layout">
      <Header />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
