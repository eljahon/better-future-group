"use client"
import Slick from "./Slick";
import { SwiperSlide } from "swiper/react";

import wasteless from "../assets/slick/wasteless.png";
import growz from "../assets/slick/growz.png";
import trator from "../assets/slick/trator.png";
import coozin from "../assets/slick/coozin.png";
import Image from "next/image";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useLayoutEffect, useRef } from "react";
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

const OurProducts = ({ data, lng }) => {
    const homeRef = useRef(null)
    const contentRef = useRef(null)
    const langData = {
        uz,
        ru,
        en
    }
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {


        gsap.fromTo(".card", { x: 0, scale: 0.3 }, {
            scale: 1, duration: 1, delay: 0, x: 0, ease: "power2.out", scrollTrigger: {
                trigger: homeRef.current,
                toggleActions: "restart none none reset"
            }
        })

        gsap.fromTo('.word', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, ease: "power2.out", scrollTrigger: {
                trigger: homeRef.current,
                toggleActions: "restart none none reset",

            }
        })
    }, [])

    console.log(data)

    return (
        <div id="our-products" >
            <div ref={homeRef} >

                <div className=" w-full overflow-hidden ">
                    <h1 className="word text-2xl mb-6 md:mb-14 opacity-0 font-semibold"> {langData[lng].ourproduct}</h1>
                </div>
                <div
                    // data-aos="fade-right"
                    className="flex gap-5 overflow-x-hidden scale-0 card">
                    <Slick>
                        {data.map((el, index) => (
                            <SwiperSlide key={index}>
                                <div key={index} className="w-full"  >
                                    <Image className="w-full max-h-64" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${el?.img?.url}`} width={300} height={300} alt={"img"} />
                                    <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 w-2/5">
                                        <p className="text-white line-clamp-3 sm:line-clamp-none">
                                            {el?.[`desc_${lng}`]}
                                        </p>
                                        <button className="text-[#27AE60] text-sm px-2 sm:px-5 py-1 sm:py-3 bg-white mt-2 sm:mt-4">
                                            {langData[lng].loermMore}
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
