import { Button } from "@/components/ui/button";
import {
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { removeItemFromCart } from "../features/cart/cartSlice";
import type { ShopItem } from "../types/types";
import { Toaster, toast } from "react-hot-toast";
import { useAppDispatch, type RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function CartSide() {
  const { cartItem } = useSelector((state: RootState) => state.cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    cartItem.map((el) => {
      if (el.quantity) {
        totalPrice += el.price * el.quantity;
      }
      return totalPrice;
    });
    console.log("totalPrice", totalPrice);
    setTotal(totalPrice);
  }, [cartItem]);
  const dispatch = useAppDispatch();
  const removeCart = (item: ShopItem) => {
    dispatch(removeItemFromCart(item));
    toast.success("Product removed successfully!", {
      position: "top-right",
    });
  };
  return (
    <SheetContent className="bg-black border-black border mx-[20px] text-white w-[500px] max-md:w-[100%] h-auto overflow-auto">
      <SheetHeader>
        <SheetTitle className="font-medium text-[32px] font-chillax">
          Cart
        </SheetTitle>
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4 font-medium ">
        {cartItem.map((item, index) => {
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
                    {item.quantity}
                  </p>
                </div>
                <div className="flex gap-3 mt-[-16px]">
                  <p>$ {item.price} USD</p>
                  <p className="line-through text-[#ffffff99]">
                    $ {item.oldPrice} USD
                  </p>
                </div>
                <h4>Color: Red</h4>
                <button
                  className="text-[14px] w-fit text-[#face8d] cursor-pointer"
                  onClick={() => removeCart(item)}
                >
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
          <h2>{total}$</h2>
        </div>
        <Button
          type="submit"
          className="mt-5 mb-3 bg-[#f8d49e] text-[#081212] h-[60px] w-full rounded-[50px] font-medium cursor-pointer text-[15px] "
        >
          CONTINUE TO CHECKOUT
        </Button>
      </SheetFooter>
      <Toaster />
    </SheetContent>
  );
}
