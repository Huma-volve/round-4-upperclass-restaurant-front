import { useEffect, useRef, useState } from "react";
import { assets } from "../../../shared/assets/assets";
import classesStyle from "../../../shared/style/classess.module.scss";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/shared/layout/Navbar";
const ClassesComp = () => {
  const navigate = useNavigate();
  const images = [
    assets.class1,
    assets.class2,
    assets.class3,
    assets.class4,
    assets.class5,
  ];

  const content = [
    {
      title: "Asian",
      description: "Delicious breackfast",
      date: "june 16 ,2023",
    },
    {
      title: "Breackfast",
      description: "Coffe Time",
      date: "june 16 ,2023",
    },
    {
      title: "Vegan",
      description: "Vegan Burger",
      date: "june 16 ,2023",
    },
    {
      title: "iTalian",
      description: "salad style",
      date: "june 16 ,2023",
    },
    {
      title: "iTalian",
      description: "Homemade Honey",
      date: "june 16 ,2023",
    },
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
    <div className={classesStyle.viewport} ref={containerRef}>
      <div
        className={classesStyle["image-track"]}
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((img, idx) => (
          <div key={idx} className={`${classesStyle.slide}`}>
            <motion.div
              className={`${classesStyle["slide-content"]} font-chillax    `}
              initial={{ opacity: 0, y: -150 }}
              animate={{ opacity: 1, y: 0 }} // ينزل لمكانه ويظهر
              transition={{ duration: 3 }} // وقت الحركة
            >
              <h3 className="font-bold text-yellow-500  font-bitter">
                {content[idx].title}
              </h3>
              <p className="font-bold text-2xl">{content[idx].description}</p>
              <span className={`${classesStyle["slide-date"]} text-yellow-500`}>
                {content[idx].date}
              </span>
            </motion.div>
            <motion.img
              src={img}
              alt={`img-${idx}`}
              className={classesStyle["track-image"]}
              initial={{ opacity: 1, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              onClick={() => {
                navigate(`/classes/${idx + 1}`);
              }}
            />
          </div>
        ))}
      </div>
      <div className="z-10 absolute bottom-7 left-1/2 -translate-x-1/2">
        <Navbar />
      </div>
    </div>
  );
};

export default ClassesComp;
