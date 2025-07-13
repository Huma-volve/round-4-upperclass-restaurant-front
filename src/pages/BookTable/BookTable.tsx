import { assets } from "@/shared/assets/assets"
import Navbar from "../../shared//layout/Navbar"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from "@/shared/layout/Footer";
const BookTable = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#050505] text-white font-chillax">
        {/* Left Side */}
              <div className=" flex flex-col justify-between items-center p-10 bg-cover bg-center h-auto md:h-screen md:sticky md:top-0" style={{ backgroundImage: `url(${assets.contact})` }}>
                <div>
                  <p className="font-medium text-3xl">nique.</p>
                </div>
                <div className="text-center">
                  <p className="font-bitter text-[#FACE8D] text-3xl sm:text-4xl xl:text-5xl 2xl:text-[80px] leading-[90%]">Book a table</p>
                  <h1 className=" font-chillax text-[#fff] text-4xl sm:text-5xl xl:text-6xl 2xl:text-[80px] font-bold">Reservation</h1>
                </div>
                <div className="">
                  <Navbar />
                </div>
              </div>

              {/* Right Side */}
      <div className="h-auto overflow-y-auto flex flex-col  py-[96px] px-[80px] gap-12 font-chillax">
        <h1 className="font-medium text-[40px]">Book a table</h1>
        <p className="text-xl text-gray-300 leading-[160%]">
Our dining atmosphere is casual and comfortable. To reflect this environment, we maintain a formal dress.        </p>
        <form className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <label className="block text-[16px]">Name</label>
            <Input placeholder="Enter your name" className="bg-black border focus:outline-[#FACE8D] placeholder-white border-gray-600 h-[60px] rounded-[10px]" />
          </div>
          <div className="flex flex-col gap-4">
            <label className="block text-[16px]">Number of guests</label>
            <Input type="number" placeholder="2" className="bg-black border focus:outline-[#FACE8D] placeholder-white border-gray-600 h-[60px] rounded-[10px]" />
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 flex-1">
            <label className="block text-[16px]">Date</label>
            <Input placeholder="16.06.2022" className="bg-black border focus:outline-[#FACE8D] placeholder-white border-gray-600 h-[60px] rounded-[10px]" />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <label className="block text-[16px]">Time</label>
            <Input placeholder="6pm" className="bg-black border focus:outline-[#FACE8D] placeholder-white border-gray-600 h-[60px] rounded-[10px]" />
            </div>
          </div>
        </form>
        <Button className=" bg-[#F8D49E] text-[#081212] hover:bg-[#ffd495] h-[50px] font-medium text-[16px]  cursor-pointer rounded-full">
          BOOK A TABLE
        </Button>
        <Footer/>
      </div>
    </div>
  )
}

export default BookTable