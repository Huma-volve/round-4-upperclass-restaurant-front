import { useParams } from "react-router-dom";
import { blogData } from "./BlogModel";
import Navbar from "@/shared/layout/Navbar";

import { assets } from "../../shared/assets/assets";
import Footer from "@/shared/layout/Footer";
function BlogItems() {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === Number(id));

  if (!blog) return <div className="text-center text-white p-10">Not Found</div>;

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">
      {/* Left Image */}
      <div className="relative md:w-1/2 w-full h-[60vh] md:h-full">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover brightness-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          {/* <h6 className="text-white text-3xl font-bold">Nique</h6> */}
          <h6 className="font-bitter text-[#FACE8D] text-7xl mt-2 ">Blog</h6>
          <h6 className="font-chillax text-white text-7xl mt-2 font-bold">{blog.title}</h6>
        <div className="fixed bottom-10  mx-auto">
                <Navbar/>
              </div>
        </div>
      </div>

       {/* Content */}
      <div className="md:w-1/2 w-full bg-black overflow-y-scroll scrollbar-hide h-auto md:h-full p-10 text-white">
        <p className="font-chillax text-lg leading-relaxed text-[#ffffffb3]"> Lorem ipsum dolor voluptates? Esse maxime ipsam ut. Voluptatem eligendi quia provident magnam. Asperiores fugit itaque sunt voluptatibus ut aspernatur. ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptates voluptatem adipisci incidunt alias? Esse maxime ipsam ut. Voluptatem eligendi quia provident magnam. Asperiores fugit itaque sunt voluptatibus ut aspernatur.
        </p>
        <div className="w-full mt-8">
            <img src={assets.blogHomeCard1} className="rounded-2xl  w-full" />
        </div>
        <h2 className="text-3xl font-bold my-6 font-chillax text-[#ffffff]">Lorem ipsum dolor</h2>
        <p className="font-chillax text-lg leading-relaxed text-[#ffffffb3] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptates voluptatem adipisci incidunt alias? Esse maxime ipsam ut. Voluptatem eligendi quia provident magnam. Asperiores fugit itaque sunt voluptatibus ut aspernatur.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptates voluptatem adipisci incidunt alias? Esse maxime ipsam ut. Voluptatem eligendi quia provident magnam. Asperiores fugit itaque sunt voluptatibus ut aspernatur.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptates voluptatem adipisci incidunt alias? Esse maxime ipsam ut. Voluptatem eligendi quia provident magnam. Asperiores fugit itaque sunt voluptatibus ut aspernatur.
        </p>
      <Footer/>
      </div>
    </div>
  );
}

export default BlogItems;
