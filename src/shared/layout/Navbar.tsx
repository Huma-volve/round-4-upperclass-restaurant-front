import { Link } from "react-router-dom";
import { Menu, Clock, ShoppingCart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function Navbar() {
  const pages = [
    { label: "Menu", path: "/menu" },
    { label: "Restaurant", path: "/restaurant" },
    { label: "Classes", path: "/classes" },
    { label: "Contact", path: "/contact" },
    { label: "Shop", path: "/shop" },
    { label: "Blog", path: "/blog" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-1 py-3 gap-2 bg-white rounded-full z-3  max-w-3xl mx-auto mt-4 font-chillax">
      {/* Left Icons */}
      <div className="flex items-center gap-4">
        {/* ☰ Small screens: Sheet */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="w-5 h-5 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold">Pages</SheetTitle>
                <SheetDescription>Navigate through site</SheetDescription>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-2">
                {pages.map(({ label, path }) => (
                  <Link
                    key={label}
                    to={path}
                    className="flex items-center justify-between px-3 py-2 rounded-md text-zinc-800 hover:bg-zinc-100 transition"
                  >
                    <span className="font-medium">{label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
                <Link to="/booktable">
                  <Button className="rounded-4xl bg-black text-white py-4 px-6 hover:bg-zinc-900 text-sm tracking-wide flex gap-2.5 font-medium cursor-pointer">
                    BOOK A TABLE
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* ☰ Large screens: Popover on hover */}
        <div
          className="hidden md:block"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Menu className="w-5 h-5 cursor-pointer text-zinc-800" />
            </PopoverTrigger>
            <PopoverContent
              side="bottom"
              align="start"
              sideOffset={30}
              className="w-56 p-2 rounded-xl shadow-lg bg-white"
            >
              <div className="px-3 py-2 text-sm text-zinc-500 font-semibold">
                Pages
              </div>
              {pages.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="flex items-center justify-between px-3 py-2 text-sm rounded-md text-zinc-800 hover:bg-zinc-100"
                >
                  <span className="font-medium">{label}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        {/* Icons beside the menu */}
        <Clock className="w-5 h-5 cursor-pointer text-zinc-800" />
        <ShoppingCart className="w-5 h-5 cursor-pointer text-zinc-800" />
      </div>

      {/* Center Links (optional) */}
      <div className="hidden md:flex gap-6 text-[16px] font-medium text-zinc-800">
        <Link to="/menu" className="hover:text-black">
          Menu
        </Link>
        <Link to="/restaurant" className="hover:text-black">
          Restaurant
        </Link>
        <Link to="/classes" className="hover:text-black">
          Classes
        </Link>
      </div>

      {/* CTA Button */}
      <div className="">
        <Link to="/booktable">
          <Button className="rounded-4xl bg-black text-white py-4 px-6 hover:bg-zinc-900 text-sm tracking-wide flex gap-2.5 font-medium cursor-pointer">
            BOOK A TABLE
          </Button>
        </Link>
      </div>
    </nav>
  );
}
