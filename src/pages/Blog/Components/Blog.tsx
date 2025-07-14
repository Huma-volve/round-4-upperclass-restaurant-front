import { useNavigate } from "react-router-dom";
import { assets } from "../../../shared/assets/assets";
import { blogData } from "../BlogModel";

function Blog() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen w-full">
      {/* Left section */}
      <div className="relative md:w-1/2 w-full h-[60vh] md:h-full">
        <img
          src={assets.blogHome}
          alt="Blog Background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h6 className="text-white text-3xl font-bold">Nique</h6>
          <h6 className="text-[#FACE8D] text-3xl mt-2 font-semibold">Blog</h6>
          <h6 className="text-white text-3xl mt-2 font-semibold">Latest News</h6>
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 w-full bg-black md:overflow-y-scroll scrollbar-hide h-auto md:h-full">
        {blogData.map((item) => (
          <div key={item.id} className="flex gap-4 p-6 sm:p-4">
            <div className="w-[200px] h-[200px] flex-shrink-0">
              <img
                src={item.image}
                alt={`Blog ${item.id}`}
                onClick={() => navigate(`/blog/${item.id}`)}
                className="rounded-2xl w-full h-full object-cover cursor-pointer"
              />
            </div>
            <div className="flex flex-col justify-start max-w-xs">
              <p className="text-[#FACE8D] text-2xl font-medium">{item.date}</p>
              <h3 className="text-white text-2xl font-semibold mt-1">{item.title}</h3>
              <p className="text-[#ffffff67] text-xl mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
