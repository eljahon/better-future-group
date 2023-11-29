import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
const SlickIItem = (props) => {

  useEffect(() => {
    AOS.init();
  }, [])

  const langData = {
    uz,
    ru,
    en
  }
  return (
    <div data-aos="fade-up-right">
      <div className="flex justify-center text-base">
        <Image className="h-[100px]" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props?.img?.url}`} width={100} height={100} alt="img" />
      </div>
      <p className="mt-4 text-center min-h-[60px] h-full ">
        {props?.[`desc_${props.lng}`]}
      </p>
      <div className="mx-auto mt-5 text-base flex items-center justify-center bg-[#27ae6026] w-3/4 py-2.5 px-5">
        <a className="text-link text-[#27AE60]" href={props?.link} target={"_blank"}>
          {langData[props.lng].site}
        </a>
      </div>
    </div>
  );
};
export default SlickIItem;
