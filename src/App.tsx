import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import ShopItem from "./pages/ShopItem/ShopItem";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopItem/:id" element={<ShopItem />} />
      </Routes>
    </>
  );
}

export default App;
