"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCards, EffectCube } from 'swiper/modules';
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

  return <Swiper modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]} {...settings}>{children}</Swiper>;
  // return <div></div>
};

export default Slick;
