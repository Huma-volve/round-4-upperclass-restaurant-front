import Footer from "@/shared/layout/Footer";
import CardItem from "./CardItem";
import { data } from "./mockData";
import { useNavigate } from "react-router-dom";

function RightSide() {
  const navigate = useNavigate();
  const onClickNew = (id: number) => {
    navigate(`/shop/${id}`);
    setTimeout(() => {
      scrollTo(0, 0);
    }, 400);
  };
  return (
    <div
      className="flex flex-col gap-12 absolute right-0 w-[47%] h-auto mt-15 mb-10
    max-md:w-[100%] max-md:relative"
    >
      {data.map((item, index) => {
        return (
          <div key={`el-${index}`} onClick={() => onClickNew(item.id)}>
            <CardItem
              brief={item.brief}
              image={item.image}
              logo={item.logo}
              oldPrice={item.oldPrice}
              price={item.price}
              title={item.title}
              details={item.details}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default RightSide;
