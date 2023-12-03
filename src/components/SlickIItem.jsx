import Image from "next/image";

import { useEffect } from "react";
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const SlickIItem = (props) => {

  const langData = {
    uz,
    ru,
    en
  }
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {

    gsap.fromTo('.product', {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    }, {
      duration: 1, delay: 0.2, y: 0, opacity: 1, ease: "power2.out", scrollTrigger: {
        trigger: '.product',
        toggleActions: "restart none none reset",

      }
    })

    gsap.fromTo('.product__img', {
      opacity: 0,
      y: -100,
      // rotation: 180,
      stagger: 0.2,
      duration: 1,

    }, {
      duration: 1, delay: .7, y: 0, rotation: 0, opacity: 1, ease: "power2.out", scrollTrigger: {
        trigger: '.product',
        toggleActions: "restart none none reset",

      }
    })
    gsap.fromTo('.product__btn', {
      scale: 0,
      stagger: 0.2,
      duration: 1,

    }, {
      duration: 1, scale: 1, delay: 1.4, ease: "power3.out", scrollTrigger: {
        trigger: '.product',
        toggleActions: "restart none none reset",

      }
    })
  }, [])
  return (
    <div className='product'>
      <div className="flex product__img justify-center opacity-0 text-base">
        <Image className="h-[100px]" src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${props?.img?.url}`} width={100} height={100} alt="img" />
      </div>
      <p className="mt-4 text-center min-h-[60px] h-full ">
        {props?.[`desc_${props.lng}`]}
      </p>
      <div className="product__btn mx-auto mt-5 text-base flex items-center justify-center bg-[#27ae6026] w-3/4 py-2.5 px-5">
        <a className="text-link text-[#27AE60]" href={props?.link} target={"_blank"}>
          {langData[props.lng].site}
        </a>
      </div>
    </div>
  );
};
export default SlickIItem;
