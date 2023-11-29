"use client";
import Image from "next/image";
import problems from "../assets/images/problems.png";
import play from "../assets/images/play.png";
import TypeWriter from "typewriter-effect";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import gsap from 'gsap';
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'

export default function GlobalProblems({ lng, data }) {
  const langData = {
    uz,
    ru,
    en
  }
  return (
    <div className="home" id="home">
      <div className="flex gap-6 items-center min-[850px]:h-screen overflow-hidden ">
        <div
          // data-aos="fade-up-right" data-aos-easing="ease-out-cubic"
          // data-aos-duration="500"
          className="text my-auto min-[850px]:w-1/2 min-[850px]:py-0 py-10">
          <div className="overflow-hidden m-0">
            <h2 className="text-3xl  sm:text-5xl font-bold">
              {data?.[`title_${lng}`]}
            </h2>
            <span></span>
            <div className="mt-4 font-normal sm:text-lg text-base">
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
              <button className="py-2.5 px-5 bg-[#2EB1FC] text-white font-sm w-40">
                {langData[lng].loermMore}
              </button>
              <button className="flex items-center justify-center py-2.5 gap-3 px-5 bg-[#2eb1fc26] w-70">
                <Image src={play} alt="img" />
                {langData[lng].play}
              </button>
            </div>
          </div>
        </div>
        <div
          // data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
          // data-aos-duration="1000"
          className="img min-[850px]:block hidden w-1/2">
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.img?.url}`} width={100} height={100} className="w-full" alt="img" />

        </div>
      </div>
    </div>
  );
}
