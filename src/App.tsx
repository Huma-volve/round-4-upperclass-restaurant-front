import { Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}

export default App;
