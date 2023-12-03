'use client'
import Image from "next/image";
import wasteless from "../assets/icons/wasteless.svg";
import trator from "../assets/icons/trator.svg";
import coozin from "../assets/icons/coozin.svg";
import growz from "../assets/icons/growz.svg";
import SlickIItem from "./SlickIItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"

const ourList = [
  {
    icon: wasteless,
    text: "We help to ignite global change with our accelerator.",
    link: "https://wasteless.uz/#/user/login",
    btnText: "button",
  },
  {
    icon: growz,
    text: "We help to ignite global change with our accelerator.",
    link: "https://wasteless.uz/#/user/login",
    btnText: "Go to website",
  },
  {
    icon: coozin,
    text: "We help to ignite global change with our accelerator.",
    link: "https://wasteless.uz/#/user/login",
    btnText: "Go to website",
  },
  {
    icon: trator,
    text: "We help to ignite global change with our accelerator.",
    link: "https://wasteless.uz/#/user/login",
    btnText: "Go to website",
    top: true,
  },
];

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
    // When window width is >= 570px
    570: {
      slidesPerView: 2,
    },
    // When window width is >= 800px
    800: {
      slidesPerView: 3,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
  },
};


const OurProjects = ({ data, lng }) => {
  const homesRef = useRef(null)
  const langData = {
    uz,
    ru,
    en
  }
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

    gsap.fromTo('.words', {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    }, {
      duration: 1, delay: .4, y: 0, opacity: 1, ease: "power2.out", scrollTrigger: {
        trigger: homesRef.current,
        toggleActions: "restart none none reset",

      }
    })
  }, [])

  return (
    <div ref={homesRef} className="container container__wrap" id="our-projects">
      <div className="py-6 md:py-16">
        <div className="w-full overflow-hidden">
          <h1 className="words text-2xl mb-6 md:mb-14 opacity-0 font-semibold"> {langData[lng].ourproject}</h1>
        </div>
        <Swiper {...settings} modules={[Navigation, Pagination, Scrollbar, A11y]}>
          {data && data.map((el, index) => (
            <SwiperSlide key={index}>
              <SlickIItem {...el} lng={lng} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};
export default OurProjects;
