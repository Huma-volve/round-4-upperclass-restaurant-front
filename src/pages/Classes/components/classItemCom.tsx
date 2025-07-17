import { motion } from "motion/react";
import { assets } from "../../../shared/assets/assets";
const ClassItemCom = () => {
  return (
    <motion.div
     
      className="w-full md:w-1/2 bg-black text-white p-8 md:p-14 flex flex-col gap-10 overflow-y-auto font-chillax"
    >
      <div className="flex flex-col gap-4">
        <p className="uppercase text-sm text-gray-400">Cooking Class</p>
        <h2 className="text-4xl font-bold">Reserve your spot</h2>
        <p className="text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          massa id neque aliquam.
        </p>
        <div
          className="flex items-center gap-5 mt-4"
        >
          <motion.button
          
            className="bg-yellow-400 hover:bg-yellow-500 transition px-6 py-3 rounded-full text-black font-semibold"
          >
            BOOK A SPOT
          </motion.button>
          <span className="text-xl font-semibold font-chillax">$99</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-yellow-400 text-2xl font-bold font-bitter">
          Details
        </h3>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-400">Date</span>
          <span>March 17, 2023 8:00 PM</span>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2 items-center">
          <span className="text-gray-400">Teacher</span>
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="teacher"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>Jakob Grønberg</span>
          </div>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-400">Language</span>
          <span>English</span>
        </div>

        <div className="flex justify-between border-b border-gray-700 py-2">
          <span className="text-gray-400">Location</span>
          <div className="text-right">
            <p>nique.</p>
            <p>Main Street 16</p>
            <p>10629 Berlin</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-400 text-2xl font-bold mb-4 font-bitter ">
          Menu
        </h3>
        <div className="flex gap-4 mb-4">
          <img
            src={assets.Noodle}
            alt="Noodle"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="font-semibold">Noodle Soup</h4>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src={assets.Seecurry}
            alt="Curry"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h4 className="font-semibold">Sea Curry</h4>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      {/* Teacher Section */}
      <div>
        <h3 className="text-yellow-400 text-2xl font-bold mb-4 font-bitter">
          Teacher
        </h3>
        <div className="flex gap-4">
          <img
            src={assets.Teacher}
            alt="Teacher"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">Jakob Grønberg</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
              massa id neque aliquam.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ClassItemCom;
