"use client";
import Image from "next/image";
import problems from "../assets/images/problems.png";
import play from "../assets/images/play.png";
import TypeWriter from "typewriter-effect";

import gsap from "gsap";

import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalProblems({ lng, data }) {

  const langData = {
    uz,
    ru,
    en
  }
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".img_content", { opacity: 0, x: 200, scale: 0.3 }, {
      scale: 1, opacity: 1, duration: 1, delay: 0, x: 0, scrollTrigger: {
        trigger: '.home',
      }
    })
    gsap.fromTo('.text__content', { opacity: 0, x: -200, }, {
      opacity: 1, duration: 1, delay: 0, x: 0, scrollTrigger: {
        trigger: '.home',
      }
    })
    gsap.fromTo('.text__content2', { opacity: 0, x: 0, }, {
      opacity: 1, duration: 1, delay: 0, x: 0, scrollTrigger: {
        trigger: '.home',
      }
    })
    gsap.fromTo('.btn__content', { opacity: 0, scale: 0.3, }, {
      opacity: 1, duration: 1, scale: 1, scrollTrigger: {
        trigger: '.home',
      }
    })

  }, [])

  return (
    <div className="home" id="home">
      <div className="flex gap-6 items-center min-[850px]:h-screen ">
        <div

          className="text  my-auto min-[850px]:w-1/2 min-[850px]:py-0 py-10">
          <div className=" m-0">
            <h2 className="text__content opacity-0  text-3xl  sm:text-5xl font-bold">
              {data?.[`title_${lng}`]}
            </h2>
            <span></span>
            <div className="text__content2 opacity-0  mt-4 font-normal sm:text-lg text-base">
              <TypeWriter
                options={{
                  strings: [
                    data?.[`desc_${lng}`]
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="flex gap-4 mt-12 flex-wrap">
              <button className="btn__content opacity-0 py-2.5 px-5 bg-[#2EB1FC] text-white font-sm w-40">
                {langData[lng].loermMore}
              </button>
              <button className="btn__content opacity-0 flex items-center justify-center py-2.5 gap-3 px-5 bg-[#2eb1fc26] w-70">
                <Image src={play} alt="img" />
                {langData[lng].play}
              </button>
            </div>
          </div>
        </div>
        <div

          className="img_content opacity-0 min-[850px]:block hidden w-1/2">
          {data?.img?.url &&
              <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.img?.url}`} width={100} height={100}
                     className="w-full" alt="img"/>}

        </div>
      </div>
    </div>
  );
}
