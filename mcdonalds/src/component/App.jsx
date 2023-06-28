import Main from "./main";
import Delivery from "./delivery/delivery";
import Drive from "./drive/drive";
import Imcha from "./imcha/imcha";
import News from "./news/news";
import SearchMc from "./search/search";
import Brandintro from "./brandIntro/brandIntro";
import Work from "./brandIntro/work";
import MenuBurger from "./menu/page";
import MenuSet from "./menu/SetPage";
import Recruit from "./brandIntro/recruit";
import Brand from "./brand/brand";
import BrandHistory from "./brand/brandhistory";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/mcdrive" element={<Drive />}></Route>
        <Route path="/rental" element={<Imcha/>}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/search" element = {<SearchMc/>}></Route>
        <Route path="/brandintro" element = {<Brandintro/>}></Route>
        <Route path="/work" element = {<Work/>}></Route>
        <Route path="/menu" element={<MenuBurger />}></Route>
        <Route path="/menuset" element={<MenuSet/>}></Route>
        <Route path="/recruit" element={<Recruit/>}></Route>
        <Route path="/brand" element={<Brand/>}></Route>
        <Route path="/brandhistory" element={<BrandHistory/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
