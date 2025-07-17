import { assets } from "@/shared/assets/assets";
import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <div
      className="bg-custom bg-cover fixed top-0 left-0 h-[100%] w-[50%]
    max-md:relative max-md:w-[100%] max-md:h-[500px]"
    >
      <div className="flex justify-center mt-12">
        <Link to={"/"}>
          {" "}
          <img src={assets.logoFull} alt="notFound" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-[75%]">
        <p className="text-[#face8d] font-bitter text-8xl mb[-24px]">Shop</p>
        <h1 className="text-7xl text-white">Give a gift</h1>
      </div>
    </div>
  );
}

export default LeftSide;
