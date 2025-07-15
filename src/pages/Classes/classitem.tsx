import { useParams } from "react-router-dom";
import { assets } from "../../../src/shared/assets/assets";
import { motion } from "motion/react";
import classesStyle from "../../../src/shared/style/classess.module.scss";
import ClassItemCom from "./components/classItemCom";

const Classitem = () => {
  const { id } = useParams();
  const content = [
    {
      id: 1,
      title: "Asian",
      description: "Delicious breackfast",
      date: "June 16, 2023 8:00 PM",
      image: assets.class1,
    },
    {
      id: 2,
      title: "Breakfast",
      description: "Coffee Time",
      date: "March 17, 2023 8:00 PM",
      image: assets.class2,
    },
    {
      id: 3,
      title: "Vegan",
      description: "Vegan Burger",
      date: "June 16, 2023 8:00 PM",
      image: assets.class3,
    },
    {
      id: 4,
      title: "Italian",
      description: "Salad Style",
      date: "June 16, 2023 8:00 PM",
      image: assets.class4,
    },
    {
      id: 5,
      title: "Italian",
      description: "Homemade Honey",
      date: "June 16, 2023 8:00 PM",
      image: assets.class5,
    },
  ];

  const item = content.find((item) => item.id === Number(id));

  if (!item) {
    return <div className="text-center text-red-500 mt-10">Item not found</div>;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <div className="w-full md:w-1/2 relative">
        <motion.img
          src={item.image}
          alt={item.title}
          className={classesStyle["track-image"]}
          
        />
        <motion.div
          className={`${classesStyle["slide-content"]} font-chillax    `}
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: -100 }} 
          transition={{ duration: 2 }} 
        >
          <h3 className="font-bold text-yellow-500  font-bitter">
            {item.title}
          </h3>
          <h1 className="font-bold text-4xl">{item.description}</h1>
        </motion.div>
      </div>
      <ClassItemCom/>
    </div>
  );
};

export default Classitem;
