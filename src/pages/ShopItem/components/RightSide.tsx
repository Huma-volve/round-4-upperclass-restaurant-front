import type { ShopItem } from "@/shared/types/types";
import { FormCart } from "./FormCart";

function RightSide({ data }: { data: ShopItem | undefined }) {
  console.log("data", data);
  return (
    <div
      className="flex flex-col gap-6 absolute right-0 w-[42%] h-auto mt-15 mb-10
  max-md:w-[100%] max-md:relative text-white mr-[40px]" 
    >
      <h1 className="text-[52px] font-chillax">{data?.title}</h1>
      <p className="text-[#ffffff99] text-[20px]">{data?.brief}</p>
     <div className="flex gap-[24px]">
     <h2 className="text-[24px]">$ {data?.price} USD</h2>
     <h2 className="text-[24px] text-[#ffffff99] line-through">$ {data?.oldPrice} USD</h2>
     </div>
      <FormCart />
      <h2 className="text-[#face8d] font-bitter text-[64px] mt-[50px]">Details</h2>
      <p className="text-[#ffffff99] mt-[-12px]">{data?.details}</p>
      <p className="text-[#ffffff99] mt-[8px]">Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eget arcu dictum varius duis at consectetur lorem. Magna eget est lorem ipsum.</p>
    </div>
  );
}

export default RightSide;
