import { useParams } from "react-router-dom";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useEffect, useState } from "react";
import { data } from "../Shop/components/mockData";
import type { ShopItem } from "@/shared/types/types";
import { assets } from "@/shared/assets/assets";

function ShopItemPage() {
  let { id } = useParams();
  let [dataItem, setDataItem] = useState<ShopItem>();
  useEffect(() => {
    let item = data.filter((el) => {
      if (id && el.id === +id) {
        return el;
      }
    });
    setDataItem(item[0]);
  }, [id]);

  return (
    <div className="flex bg-[#050505] min-h-screen max-md:flex-col">
      <LeftSide image={dataItem?.logo || assets.card1} />
      <RightSide data={dataItem} />
    </div>
  );
}

export default ShopItemPage;
