import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import { assets } from "./shared/assets/assets";
import Layout from "./shared/layout/Layout";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
    <>
    
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/contact" element={<Contact/>}/>
        
    </Routes>
    
    
    
    </>
  );
}

export default App;
