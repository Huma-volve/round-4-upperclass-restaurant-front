import Navbar from "@/shared/layout/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function Shop() {
  return (
    <div className="flex bg-[#050505] min-h-screen max-md:flex-col">
      <LeftSide />
      <RightSide />
      <div className="fixed bottom-[30px] left-[50%] translate-x-[-50%]">
        <Navbar />
      </div>
    </div>
  );
}

export default Shop;
