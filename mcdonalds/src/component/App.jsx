import Main from "./main";
import Delivery from "./delivery/delivery";
import Drive from "./drive/drive";
import Imcha from "./imcha/imcha";
import News from "./news/news";
import SearchMc from "./search/search";
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
      </Routes>
    </BrowserRouter>
  );
}
export default App;
