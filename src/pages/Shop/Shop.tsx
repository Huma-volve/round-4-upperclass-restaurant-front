import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function Shop() {
  return (
    <div className="flex bg-[#050505] min-h-screen max-md:flex-col">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default Shop;
