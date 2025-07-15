import { assets } from "@/shared/assets/assets";
import { useEffect, useRef, useState } from "react";
import resurnat from "../../../shared/style/resturnat.module.scss";
import Navbar from "@/shared/layout/Navbar";

const Page = () => {
  const images = [
    assets.resturant1,
    assets.resturant2,
    assets.resturant3,
    assets.resturant4,
    assets.resturant5,
    assets.resturant6,
    assets.resturant7,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  const handleScroll = (e: WheelEvent) => {
    if (isScrolling.current) return;

    isScrolling.current = true;

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => Math.min(prev + 1, images.length - 2));
    } else {
      setCurrentIndex((prev) => Math.max(prev - 2, 0));
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;

    ref.addEventListener("wheel", handleScroll, { passive: false });

    return () => ref.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className={`${resurnat.viewport} relative`} ref={containerRef}>
      <div
        className={resurnat["image-track"]}
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, idx) => (
          <img
            src={img}
            key={idx}
            alt={`img-${idx}`}
            className={resurnat["track-image"]}
          />
        ))}
      </div>
      <div className="z-10 absolute bottom-7 left-1/2 -translate-x-1/2">
        <h1 className="-translate-y-80 font-bold  text-white text-center font-chillax text-2xl">
          nique.
        </h1>
        <div className=" absolute  w-full -translate-y-60 flex justify-center flex-col items-center gap-4">
          <h1 className="font-bitter text-yellow-400 text-6xl font-bold">Discover</h1>
          <h2 className="text-9xl text-white font-bold font-b ">nique.</h2>
        </div>
        <Navbar />
      </div>
      s
    </div>
  );
};

export default Page;
