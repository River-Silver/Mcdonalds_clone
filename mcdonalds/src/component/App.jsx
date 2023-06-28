import Main from "./main";
import MenuBurger from "./menu/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/menu" element={<MenuBurger />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
