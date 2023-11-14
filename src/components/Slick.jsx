"use client";
import { Swiper, SwiperSlide } from "swiper/react";

const Slick = ({ children }) => {
  const settings = {
    pagination: {
      clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // When window width is >= 1250px
      1250: {
        slidesPerView: 2,
      },
    },
  };

  return <Swiper {...settings}>{children}</Swiper>;
};

export default Slick;
