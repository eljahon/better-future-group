"use client"
import Image from "next/image";
import team1 from "../assets/team/team1.png";
import team2 from "../assets/team/team2.png";
import team3 from "../assets/team/team3.png";
import team4 from "../assets/team/team4.png";
import team5 from "../assets/team/team5.png";
import team6 from "../assets/team/taem_6.png";
import team7 from "../assets/team/taem_7.png";
import team8 from "../assets/team/team8.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
const UserItem = (props) => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="text-center" data-aos="fade-up-right">
      <Image className="mx-auto rounded-full w-[100px] h-[100px] object-cover" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props?.img?.url}`} width={100} height={100} alt="img" />
      <p className="mt-3 text-lg">{props?.[`name_${props.lng}`]}</p>
      <a href="#" className="text-[#2EB1FC] text-base">
        {props?.[`specialization_${props.lng}`]}
      </a>
    </div>
  );
};
const MeetOurTeam = ({ data, lng }) => {
  const list = [
    {
      icon: team1,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team2,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team3,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team4,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team5,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team6,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team7,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
    {
      icon: team8,
      name: "Amélie Laurent",
      link: "",
      linkText: "Founder & CEO",
    },
  ];
  const langData = {
    uz,
    ru,
    en
  }
  return (
    <div id="our-team">
      <div className="py-5 sm:py-16">
        <div data-aos="zoom-in" className="title w-full sm:w-1/2 mx-auto">
          <h1 className="text-center font-semibold text-2xl">

            {langData[lng].team}
          </h1>
          <p className="text-center opacity-80 mt-4">

            {langData[lng].teamText}
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 md:mt-16 flex">
          {data && data.map((el, index) => (
            <UserItem key={index} {...el} lng={lng} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MeetOurTeam;
