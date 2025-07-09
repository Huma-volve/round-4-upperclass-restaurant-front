import { Route, Routes } from "react-router-dom";
import ClassesPage from "./pages/Classes/classes";

function App() {
  return <>
     <Routes>
      <Route path="/" element={<h1 className="font-bold bg-black text-white">ahmed gouda</h1>} />
      <Route path='/classes' element={<ClassesPage />} />
     </Routes>
  </>
}

export default App;
