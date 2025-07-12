import React from "react";
import { Link } from "react-router-dom";
import { assets } from "@/shared/assets/assets";

const FrontPage: React.FC = () => {
  return (
    <section
      className="relative h-[100vh] bg-cover bg-center items-center bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.frontPage})`,
        height: "100vh",
      }}
    >
      <Link
        to={"/"}
        className="font-chillax z-10 text-white text-center pt-12 pb-12 fixed top-0 left-0 right-0 bottom-auto font-medium text-2xl sm:text-[32px]"
      >
        nique.
      </Link>
      <div className="z-0 opacity-[.3] bg-[#050505] absolute top-0 left-0 right-0 bottom-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
        <div className="w-full max-w-[50rem] mx-auto text-center pt-6">
          <div className="mb-8">
            <h1 className="font-bitter text-[#FACE8D] text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-medium mb-1">
              The pure taste of
            </h1>
            <h1 className="font-chillax text-[#fff] text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold">
              Thailand
            </h1>
          </div>
          <div className="font-chillax text-[#fff] opacity-[1] text-center text-lg md:text-2xl leading-[160%] mt-3 mb-6 sm:mb-8 mx-auto max-w-[20rem] sm:max-w-[30rem] md:max-w-[37.5rem]">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
