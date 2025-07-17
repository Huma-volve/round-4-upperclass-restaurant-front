import Navbar from "@/shared/layout/Navbar";
import { assets } from "../../shared/assets/assets";

function NotFound() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.blogHome})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center  ">
        <p className="text-[#FACE8D] font-bitter text-6xl font-semibold">Page not found</p>
        <h1 className="text-white font-chillax text-[150px] font-bold mt-4">404</h1>
      </div>

      <div className="fixed bottom-10">
        <Navbar />
      </div>
    </div>
  );
}

export default NotFound;
