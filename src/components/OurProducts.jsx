"use client";
import Slick from "@/components/Slick";
import { SwiperSlide } from "swiper/react";

import wasteless from "../assets/slick/wasteless.png";
import growz from "../assets/slick/growz.png";
import trator from "../assets/slick/trator.png";
import coozin from "../assets/slick/coozin.png";
import Image from "next/image";

const list = [
  {
    id: 1,
    icon: wasteless,
    text: "Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest.",
    btnText: "Learn more",
  },
  {
    id: 2,
    icon: coozin,
    text: "Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest.",
    btnText: "Learn more",
  },
  {
    id: 3,
    icon: growz,
    text: "Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest.",
    btnText: "Learn more",
  },
  {
    id: 4,
    icon: trator,
    text: "Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest.",
    btnText: "Learn more",
  },
];

const OurProducts = () => {
  return (
    <div id="our-products">
      <div>
        <h1 className="text-2xl mb-6 md:mb-14 font-semibold">Our products</h1>

        <div className="flex gap-5 overflow-x-hidden">
          <Slick>
            {list.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="w-full relative">
                  <Image className="w-full" src={el.icon} />
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 w-2/5">
                    <p className="text-white line-clamp-3 sm:line-clamp-none">
                      {el.text}
                    </p>
                    <button className="text-[#27AE60] text-sm px-2 sm:px-5 py-1 sm:py-3 bg-white mt-2 sm:mt-4">
                      Learn More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Slick>
        </div>
      </div>
    </div>
  );
};
export default OurProducts;
