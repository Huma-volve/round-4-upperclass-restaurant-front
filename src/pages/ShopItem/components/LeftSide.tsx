import { assets } from "@/shared/assets/assets";
import { Link } from "react-router-dom";

function LeftSide({image}:{image:string}) {
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
       <img src={image} alt="notFound" className="w-[300px]"/>
      </div>
      
    </div>
  );
}

export default LeftSide;
