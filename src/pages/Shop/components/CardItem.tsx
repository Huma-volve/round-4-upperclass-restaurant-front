import type { ShopItem } from "@/shared/types/types";
import { Link } from "react-router-dom";

function CardItem({
  title,
  brief,
  price,
  oldPrice,
  image,
  logo,
  id,
}: ShopItem) {
  return (
    <div className="flex gap-5 px-3">
      <Link to={`/shopItem/${id}`} className="relative w-[220px] ">
        <img
          src={image}
          alt="notFound"
          className="w-full h-[150px] rounded-xl"
        />
        <img
          src={logo}
          alt="notFound"
          className="absolute w-[120px] h-[64px] left-[32px] top-[45px]"
        />
      </Link>
      <div>
        <div className="flex gap-3 text-[15px] font-medium mb-1">
          <p className="text-[#face8d]">$ {price} USD</p>
          <p className="text-[#ffffff99] line-through">$ {oldPrice} USD</p>
        </div>
        <h2 className="text-white text-2xl mb-1">{title}</h2>
        <p className="text-[#ffffff99] text-[15px] max-w-[280px]">{brief}</p>
      </div>
    </div>
  );
}

export default CardItem;
