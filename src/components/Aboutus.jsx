"use client"
import Image from "next/image";
import about from "../assets/images/Aboutus.png";


import { useEffect } from "react";
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
const Aboutus = ({ data, lng }) => {
  const imgRef = useRef()
  const wrappRef = useRef()
  const triggerRef = useRef(null)
  const [letterRef, setlettersRef]
    = useArrayRef()


  function useArrayRef() {
    const letterRef = useRef([]);
    letterRef.current = [];
    return [letterRef, (ref) => ref && letterRef.current.push(ref)]
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrappRef.current,
        start: 'center bottom',
        toggleActions: "restart none none reset"
      }
    })

    tl.to(".abaut__image", {
      ease: "power2",
      duration: 2,
      delay: 0.3,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    })
    // the "<" sign means that this animation of the timeline will play
    // as soon the animation get triggered
    tl.to(imgRef.current, {
      duration: 2,
      scale: 1
    }, "<")
    gsap.fromTo('.about__title', {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    }, {
      duration: 1, delay: 0.6, y: 0, opacity: 1, ease: "power2.out", scrollTrigger: {
        trigger: wrappRef.current,
        toggleActions: "restart none none reset",
        start: 'center bottom',
      }
    })

    gsap.fromTo('.about__text', {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    }, {
      duration: 1, delay: 1, y: 0, opacity: 1, ease: "power2.out", scrollTrigger: {
        trigger: wrappRef.current,
        toggleActions: "restart none none reset",
        start: 'center bottom',
      }
    })



    gsap.fromTo('.about__btn', {
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      duration: 1,

    }, {
      duration: 1, scale: 1, opacity: 1, delay: 1.6, ease: "power3.out", scrollTrigger: {
        trigger: wrappRef.current,
        toggleActions: "restart none none reset",
        start: 'center bottom',
      }
    })

  }, [])


  const langData = {
    uz,
    ru,
    en
  }
  return (
    <div id="about-us">
      <div ref={wrappRef} className="flex gap-8 py-5 md:py-16 flex-col md:flex-row">
        <div className="abaut__image w-full sm:w-3/4 md:w-1/2 mx-auto">
          <Image className="scale-1.3" ref={imgRef} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data?.img?.url}`} width={588} height={522} alt="img" />
        </div>
        <div className="my-auto w-full md:w-1/2">
          <div ref={triggerRef} className="reveal md:w-3/4 w-full text-center md:text-start">

            <h1 className="about__title  w-full text-2xl  font-semibold opacity-0">
              {langData[lng].aboutAs}
            </h1>

            <p className="about__text cale-0  font-medium mt-4 text-[#333] opacity-0">

              {
                data?.[`desc_${lng}`]
              }
            </p>
            <button className="about__btn cale-0  opacity-0 mt-4 md:mt-12 px-5 py-2.5 text-white bg-[#27AE60]">
              {langData[lng].connect}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
