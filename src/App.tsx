import { Route, Routes } from "react-router-dom";
import { assets } from "./shared/assets/assets";
import Navbar from "./shared/layout/Navbar";
import Layout from "./shared/layout/Layout";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/contact" element={<Contact/>}/>
        
    </Routes>
    
    
    
    </>
  );
}

export default App;
