import { assets } from "../../shared/assets/assets";

function NotFound() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${assets.blogHome})` }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">nique.</h1>
        <p className="text-[#FACE8D] text-2xl font-semibold">Page not found</p>
        <h1 className="text-white text-8xl font-bold mt-4">404</h1>
      </div>
    </div>
  );
}

export default NotFound;
