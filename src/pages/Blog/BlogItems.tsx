import { useParams } from "react-router-dom";
import { blogData } from "./BlogModel";

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
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h6 className="text-white text-3xl font-bold">Nique</h6>
          <h6 className="text-[#FACE8D] text-3xl mt-2 font-semibold">Blog</h6>
          <h6 className="text-white text-3xl mt-2 font-semibold">{blog.title}</h6>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 w-full bg-black overflow-y-scroll scrollbar-hide h-auto md:h-full p-10 text-white">
        <p className="text-[#FACE8D] text-2xl font-medium">{blog.date}</p>
        <h2 className="text-3xl font-bold my-4">{blog.title}</h2>
        <p className="text-lg leading-relaxed text-[#ffffffb3]">
          {blog.description} {blog.description} {blog.description}
        </p>

        <div className="w-full mt-8">
          <img src={blog.image} className="rounded-2xl w-full" />
        </div>

        <h2 className="text-3xl font-bold my-6 text-[#FACE8D]">Extra Content</h2>
        <p className="text-lg leading-relaxed text-[#ffffffb3] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default BlogItems;
