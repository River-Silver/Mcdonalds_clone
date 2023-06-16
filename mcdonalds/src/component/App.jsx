import Main from "./main";
import Delivery from "./delivery/delivery";
import Drive from "./drive/drive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/mcdrive" element={<Drive />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
