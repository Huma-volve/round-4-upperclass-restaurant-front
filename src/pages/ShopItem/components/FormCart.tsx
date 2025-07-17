import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet } from "@/components/ui/sheet";
import { CartSide } from "@/shared/reuseableComponents/CartSide";
import { useAppDispatch } from "@/shared/store/store";
import type { ShopItem } from "@/shared/types/types";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { addItemToCart } from "@/shared/features/cart/cartSlice";
import { useParams } from "react-router-dom";
import { data } from "@/pages/Shop/components/mockData";

const formSchema = z.object({
  count: z.number().min(1, {
    message: "please, Type an integer",
  }),
  color: z.string().min(1, {
    message: "Color must be specified",
  }),
});

export function FormCart() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const productItem = data.filter((el) => {
    if (id && el.id === +id) {
      return el;
    }
  });
  type FormSchemaType = z.infer<typeof formSchema>;

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      count: 1,
      color: "",
    },
  });
  const dispatch = useAppDispatch();
  const funcShopCart = (item: ShopItem, quantity: number, color: string) => {
    const newItem = { ...item, quantity, color };
    dispatch(addItemToCart(newItem));
    toast.success("Product added successfully!", {
      position: "top-right",
    });
  };
  function onSubmit(values: z.infer<typeof formSchema>) {
    funcShopCart(productItem[0], values.count, values.color);
    console.log(values);
    setOpen(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="count"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#ffffffcc] font-chillax text-[18px]">
                    Quantity
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      placeholder=""
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      className="text-[18px] h-[64px] border border-[#ffffff1a] hover:border-white"
                    />
                  </FormControl>
                  <FormMessage className="!text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-2">
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#ffffffcc] font-chillax text-[18px]">
                    Color
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        style={{ height: "64px" }}
                        className="text-[#333] w-full border border-[#ffffff1a] focus:border-white"
                      >
                        <SelectValue placeholder="Select Color" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className=" relative z-40 border boder-[#ffffff1a] text-[#ffffffcc] bg-black">
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Gold">Gold</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="!text-sm" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            type="submit"
            className="mt-8 bg-[#f8d49e] hover:bg-[#face8de0] text-[#081212] h-[56px] w-full rounded-[50px] font-medium cursor-pointer text-[15px] "
          >
            ADD TO CART
          </Button>
          <CartSide />
        </Sheet>
      </form>
      <Toaster />
    </Form>
  );
}
