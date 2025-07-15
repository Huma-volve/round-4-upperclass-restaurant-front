import { Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import BookTable from "./pages/BookTable/BookTable";
import Blog from "./pages/Blog/Components/Blog";
import BlogItems from "./pages/Blog/BlogItems"; 
import NotFound from "./pages/NotFound/NotFound"; 


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/booktable" element={<BookTable/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogItems />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
