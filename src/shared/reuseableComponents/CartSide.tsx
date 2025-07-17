import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { data } from "@/pages/Shop/components/mockData";

export function CartSide() {
  return (
    <SheetContent className="bg-black border-black border mx-[20px] text-white w-[500px] max-md:w-[100%] h-auto overflow-auto">
      <SheetHeader>
        <SheetTitle className="font-medium text-[32px] font-chillax">
          Cart
        </SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4 font-medium ">
        {data.map((item, index) => {
          return (
            <div
              key={`el-${index}`}
              className={`flex gap-6 ${
                index >= 1 ? "border-t border-t-[#ffffff1a] pt-6" : null
              }`}
            >
              <div>
                <img src={item.image} className="w-[60px] h-[80px]" />
              </div>
              <div className="flex-1 flex flex-col gap-[2px]">
                <div className="flex justify-between">
                  <h2 className="font-chillax text-[18px]">{item.title}</h2>
                  <p className="h-[40px] w-[60px] text-lg text-[#b5b5b5] rounded-[50px] flex justify-center items-center border border-[#333]">
                    {2}
                  </p>
                </div>
                <div className="flex gap-3 mt-[-16px]">
                  <p>$ {item.price} USD</p>
                  <p className="line-through text-[#ffffff99]">
                    $ {item.oldPrice} USD
                  </p>
                </div>
                <h4>Color: Red</h4>
                <button className="text-[14px] w-fit text-[#face8d] cursor-pointer">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <SheetFooter className="pt-3 border-t border-t-[#ffffff1a]">
        <div className="flex justify-between text-white text-[24px] font-medium mb-3">
          <h2>Subtotal</h2>
          <h2>340$</h2>
        </div>
        <Button
          type="submit"
          className="mt-5 mb-3 bg-[#f8d49e] text-[#081212] h-[60px] w-full rounded-[50px] font-medium cursor-pointer text-[15px] "
        >
          CONTINUE TO CHECKOUT
        </Button>
      </SheetFooter>
    </SheetContent>
  );
}
