import Image from "next/image";
import wasteless from '../assets/icons/wasteless.svg'
import trator from '../assets/icons/trator.svg'
import coozin from '../assets/icons/coozin.svg'
import growz from '../assets/icons/growz.svg'
// import Slick from "@/components/Slick";
import SlickIItem from "@/components/SlickIItem";
const ourList = [
    {
        icon: wasteless,
        text: 'We help to ignite global change with our accelerator.',
        link: 'https://wasteless.uz/#/user/login',
        btnText: 'button'
    },  {
        icon: growz,
        text: 'We help to ignite global change with our accelerator.',
        link: 'https://wasteless.uz/#/user/login',
        btnText: 'Go to website'
    },  {
        icon: coozin,
        text: 'We help to ignite global change with our accelerator.',
        link: 'https://wasteless.uz/#/user/login',
        btnText: 'Go to website'
    },  {
        icon: trator,
        text: 'We help to ignite global change with our accelerator.',
        link: 'https://wasteless.uz/#/user/login',
        btnText: 'Go to website',
        top: true
    }
]
const  OurProjects =  () =>  (
     <div className='container' id='our-projects'>
        <div className='py-16'>
            <h1 className='text-2xl mb-14 font-semibold'>Our projects</h1>
            <div className='flex'>{
                ourList.map((el, index) => (
                    <SlickIItem key={index} {...el}/>
                ))
            }</div>
        </div>
     </div>
 )
export  default OurProjects;
