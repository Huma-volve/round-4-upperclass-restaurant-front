import { Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import FrontPage from "./pages/FrontPage/FrontPage";
import Menu from "./pages/Menu/Menu";
import Restaurant from "./pages/Restaurant/Restaurant";
import ClassesPage from "./pages/Classes/classes";
import Classitem from "./pages/Classes/classitem";
import Contact from "./pages/Contact/Contact";
import BookTable from "./pages/BookTable/BookTable";
import Blog from "./pages/Blog/Components/Blog";
import BlogItems from "./pages/Blog/BlogItems";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="classes" element={<ClassesPage />} />
          <Route path="classes/:id" element={<Classitem />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="contact" element={<Contact />} />
          <Route path="booktable" element={<BookTable />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogItems />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
