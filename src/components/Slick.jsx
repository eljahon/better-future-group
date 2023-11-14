"use client";
import { Swiper, SwiperSlide } from "swiper/react";


const Slick = ({ children }) => {
  const settings = {
    pagination: {
      clickable: true,
    },
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  return (
    <Swiper {...settings}>
      <SwiperSlide>
        <div className="w-[400px] h-[400px] bg-red-500">
          <h3 className="border-1">1</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[400px] h-[400px] bg-green-500">
          <h3 className="border-1">1</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[400px] h-[400px] bg-yellow-500">
          <h3 className="border-1">1</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[400px] h-[400px] bg-pink-500">
          <h3 className="border-1">1</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[400px] h-[400px] bg-greenhttps://t.me/jurayev_diyorbek-500">
          <h3 className="border-1">1</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slick;
