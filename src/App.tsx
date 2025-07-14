import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Components/Blog";
import BlogItems from "./pages/Blog/BlogItems"; 
import NotFound from "./pages/NotFound/NotFound"; 

function App() {
  return (
      <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogItems />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
