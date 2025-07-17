import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { CartSide } from "@/shared/reuseableComponents/CartSide";

const formSchema = z.object({
  count: z.number().min(1, {
    message: "",
  }),
  color: z.string().min(1, {
    message: "Color must be specified",
  }),
});

export function FormCart() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      count: 1,
      color: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
                      placeholder="shadcn"
                      {...field}
                      className="h-[64px] border border-[#ffffff1a] hover:border-white"
                    />
                  </FormControl>
                  <FormMessage />
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
                      <SelectTrigger className="text-[#333] w-full h-[64px] border border-[#ffffff1a] focus:border-white">
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="submit"
              className="mt-5 bg-[#f8d49e] text-[#081212] h-[56px] w-full rounded-[50px] font-medium cursor-pointer text-[15px] "
            >
              ADD TO CART
            </Button>
          </SheetTrigger>
          <CartSide />
        </Sheet>
      </form>
    </Form>
  );
}
