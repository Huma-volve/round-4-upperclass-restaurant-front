import { Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import BookTable from "./pages/BookTable/BookTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/booktable" element={<BookTable/>}/>
      </Routes>
    </>
    
  );
}

export default App;
