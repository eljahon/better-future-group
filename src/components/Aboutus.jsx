"use client"
import Image from "next/image";
import about from "../assets/images/Aboutus.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
const Aboutus = ({ data, lng }) => {
  useEffect(() => {
    AOS.init();
  }, [])
  const langData = {
    uz,
    ru,
    en
  }
  return (
    <div id="about-us">
      <div className="flex gap-8 py-5 md:py-16 flex-col md:flex-row">
        <div data-aos="fade-right" className="abaut-image w-full sm:w-3/4 md:w-1/2 mx-auto">
          <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.img?.url}`} width={588} height={522} alt="img" />
        </div>
        <div data-aos="fade-left" className="abaout-text my-auto w-full md:w-1/2">
          <div className="md:w-3/4 w-full text-center md:text-start">
            <h1 className="text-2xl font-semibold ">
              {langData[lng].aboutAs}
            </h1>
            <p className="font-medium mt-4 text-[#333] opacity-80">
              {data?.[`desc_${lng}`]}
            </p>
            <button className="mt-4 md:mt-12 px-5 py-2.5 text-white bg-[#27AE60]">
              {langData[lng].connect}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
