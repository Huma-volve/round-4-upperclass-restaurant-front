import { Route, Routes } from "react-router-dom";
import ClassesPage from "./pages/Classes/classes";
import Restaurant from "./pages/Restaurant/Restaurant";

function App() {
  return <>
     <Routes>
      <Route path="/" element={<h1 className="font-bold bg-black text-white">ahmed gouda</h1>} />
      <Route path='/classes' element={<ClassesPage />} />
      <Route path='/restaurant' element={<Restaurant />} />
     </Routes>
  </>
}

export default App;
