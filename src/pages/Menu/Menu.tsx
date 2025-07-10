import { assets } from "@/shared/assets/assets";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import Footer from "@/shared/layout/Footer";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  discount?: string;
  image: string;
  vegetarian?: boolean;
}

interface MenuCategory {
  name: string;
  label: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Starters",
    label: "starters",
    items: [
      {
        id: "tomato-toast",
        name: "Tomato Toast",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$29",
        image: assets.menu1,
        vegetarian: true,
      },
      {
        id: "noodle-soup",
        name: "Noodle Soup",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$8.00",
        discount: "$5.00",
        image: assets.menu2,
      },
      {
        id: "pumpkin-soup",
        name: "Pumpkin Soup",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$5.00",
        image: assets.menu3,
      },
    ],
  },
  {
    name: "Breakfast",
    label: "breakfast",
    items: [
      {
        id: "delicious-pancakes",
        name: "Delicious Pancakes",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$8.00",
        discount: "$5.00",
        image: assets.menu4,
        vegetarian: true,
      },
      {
        id: "sweet-heaven",
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$5.00",
        image: assets.menu5,
      },
      {
        id: "oatmeal-spirit",
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$5.00",
        image: assets.menu6,
        vegetarian: true,
      },
      {
        id: "avocado-smash",
        name: "Avocado Smash",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$5.00",
        image: assets.menu7,
      },
    ],
  },
  {
    name: "Lunch",
    label: "lunch",
    items: [
      {
        id: "italian-pizza",
        name: "Itailian Pizza",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$12.90",
        image: assets.menu8,
      },
      {
        id: "vegan-burger",
        name: "Vegan Burger",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$13.90",
        image: assets.menu9,
        vegetarian: true,
      },
      {
        id: "sea-curry",
        name: "Sea Curry",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$14.90",
        discount: "$9.90",
        image: assets.menu10,
      },
      {
        id: "noodle-bowl",
        name: "Noodle bowl",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$9.90",
        image: assets.menu11,
      },
    ],
  },
  {
    name: "Drinks",
    label: "drinks",
    items: [
      {
        id: "panthouse-tonic",
        name: "Panthouse Tonic",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$10.90",
        image: assets.menu12,
        vegetarian: true,
      },
      {
        id: "apple-breeze",
        name: "Apple Breeze",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$10.90",
        image: assets.menu13,
        vegetarian: true,
      },
      {
        id: "frenchman-blitz",
        name: "Frenchman Blitz",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: "$8.90",
        image: assets.menu14,
        vegetarian: true,
      },
    ],
  },
];
const Menu: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>(menuData[0].label);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (transitioning) return;

      const scrollPosition = window.scrollY + (isMobile ? 50 : 100);

      menuData.forEach((item) => {
        const section = document.getElementById(item.label);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveNav(item.label);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transitioning, isMobile]);

  const handleNavClick = (label: string) => {
    setTransitioning(true);
    let currentIndex = menuData.findIndex((item) => item.label === activeNav);
    const targetIndex = menuData.findIndex((item) => item.label === label);

    const steps = Math.abs(targetIndex - currentIndex);
    const duration = 300;
    const stepDuration = duration / steps;

    const direction = targetIndex > currentIndex ? 1 : -1;

    let step = 0;
    const animate = () => {
      if (step >= steps) {
        setActiveNav(label);
        setTransitioning(false);
        return;
      }

      currentIndex += direction;
      setActiveNav(menuData[currentIndex].label);
      step++;

      setTimeout(animate, stepDuration);
    };

    animate();

    document.getElementById(label)?.scrollIntoView({
      behavior: "smooth",
      block: isMobile ? "start" : "center",
    });
  };

  return (
    <>
      <main className="md:flex">
        {/* Left Side */}
        <div className="xl:w-[50vw] w-full h-[40vh] xl:h-screen z-10 items-center fixed xl:top-0 top-0 xl:left-0 left-0 right-0 xl:bottom-0 bottom-auto">
          <div
            style={{ backgroundImage: `url(${assets.menuPage})` }}
            className="relative w-full h-full bg-cover bg-center items-center bg-no-repeat"
          />
          <Link
            to={"/"}
            className="font-chillax z-10 text-white text-center pt-6 xl:pt-12 pb-6 xl:pb-12 absolute top-0 left-0 right-0 bottom-auto font-medium text-2xl sm:text-[32px]"
          >
            nique.
          </Link>
          <div className="z-0 opacity-[.5] bg-[#050505] absolute top-0 left-0 right-0 bottom-0" />
          <div className="absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white">
            <div className="w-full max-w-[50rem] mx-auto text-center pt-6">
              <div className="mb-4 xl:mb-8">
                <h1 className="font-bitter text-[#FACE8D] text-3xl sm:text-4xl xl:text-5xl 2xl:text-[80px] mb-1">
                  Check Out
                </h1>
                <h1 className="font-chillax text-[#fff] text-4xl sm:text-5xl xl:text-6xl 2xl:text-[80px] font-bold tracking-[-2px]">
                  Our Menu
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="xl:w-[50vw] w-full xl:relative xl:left-[50vw] bg-[#050505] overflow-y-auto xl:h-screen h-[60vh] fixed xl:top-0 top-[40vh] bottom-0">
          {/* Navigation - Keep exactly as is */}
          <div className="z-[10] text-white gap-4 xl:gap-12 bg-[#050505] justify-center items-center py-4 flex sticky top-0 left-0 right-0 overflow-x-auto xl:overflow-visible px-4 xl:px-0">
            {menuData.map((item, index) => (
              <a
                key={index}
                href={`#${item.label}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.label);
                }}
                className={`font-chillax whitespace-nowrap relative transition-colors duration-500 ease-in-out text-sm xl:text-base px-2 ${
                  activeNav === item.label
                    ? "text-[#face8d] font-medium"
                    : "text-[rgba(255,255,255,0.6)] hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Menu Sections */}
          {menuData.map((category) => (
            <section
              key={category.label}
              id={category.label}
              className="p-14 pt-20"
            >
              <h2 className="font-bitter text-3xl xl:text-[3.5rem] text-[#face8d] leading-[90%] mb-8 xl:mb-12">
                {category.name}
              </h2>
              <div className="font-chillax flex flex-col items-start gap-8 xl:gap-12 text-white">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-none items-center relative self-stretch gap-4 xl:gap-6"
                  >
                    <div className="w-20 xl:w-24 h-20 xl:h-24 rounded-lg xl:rounded-xl relative overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-stretch gap-1 xl:gap-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 xl:gap-3">
                          <h3 className="text-lg xl:text-xl font-medium">
                            {item.name}
                          </h3>
                          {item.vegetarian && (
                            <Leaf className="text-[#face8d] w-4 h-4 xl:w-5 xl:h-5" />
                          )}
                        </div>
                        <div className="flex flex-none gap-2 xl:gap-3 items-center">
                          {item.discount ? (
                            <>
                              <span className="text-base xl:text-lg line-through text-[rgba(255,255,255,0.4)]">
                                {item.price}
                              </span>
                              <span className="text-base xl:text-lg text-white font-medium">
                                {item.discount}
                              </span>
                            </>
                          ) : (
                            <span className="text-base xl:text-lg text-white font-medium">
                              {item.price}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm xl:text-base text-[rgba(255,255,255,0.6)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Menu;
