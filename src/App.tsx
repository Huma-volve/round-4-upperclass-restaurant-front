import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import Restaurant from "./pages/Restaurant/Restaurant";
import ClassesPage from "./pages/Classes/classes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
}

export default App;
