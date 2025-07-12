import { Route, Routes } from "react-router-dom";
import { assets } from "./shared/assets/assets";
import Navbar from "./shared/layout/Navbar";
import Layout from "./shared/layout/Layout";

function App() {
  return (
    <>
    <div className="container mx-auto px-4 2xl:px-20 bg-amber-600 h-50 flex items-center">
    <Routes>
      <Route path="/" element={<Layout/>}/>
        
    </Routes>
    
    
      
       {/* <Navbar/> */}
    </div>
    </>
  );
}

export default App;
