'use client'
import Slick from "@/components/Slick";
import wasteless from '../assets/slick/wasteless.png'
import growz from '../assets/slick/growz.png'
import trator from '../assets/slick/trator.png'
import coozin from '../assets/slick/coozin.png'
import Image from "next/image";
const list =[
    {
        id: 1,
        icon: wasteless,
        text: 'Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest. Anomalies focus picture let long got.',
        btnText: 'Learn more'
    },   {
        id: 2,
        icon: coozin,
        text: 'Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest. Anomalies focus picture let long got.',
        btnText: 'Learn more'
    },   {
        id: 3,
        icon: growz,
        text: 'Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest. Anomalies focus picture let long got.',
        btnText: 'Learn more'
    },   {
        id: 4,
        icon: trator,
        text: 'Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest. Anomalies focus picture let long got.',
        btnText: 'Learn more'
    },
]
const OurProducts = () => {
    return <div id='our-products'>
    <div>
        <h1 className='text-2xl mb-14 font-semibold'>Our products</h1>

        <div className='flex gap-5 overflow-x-hidden'>
            {list.map(el => (<Image width={400} height={400} src={el.icon}/>))}
        </div>
    </div>
    </div>
}
export default OurProducts
