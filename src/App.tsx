import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/" element={<Layout/>}/> */}
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
    
  );
}

export default App;
