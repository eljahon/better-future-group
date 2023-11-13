import Image from "next/image";
import about from '../assets/images/Aboutus.png'
const Aboutus = () => {
return <div id='about-us'>
    <div className='flex gap-8 py-16'>
        <div className="abaut-image w-1/2">
            <Image src={about}/>
        </div>
        <div className="abaout-text my-auto w-1/2">
            <div className='w-3/4'>
                <h1 className='text-2xl font-semibold'>About us</h1>
                <p className='font-medium mt-4 text-[#333] opacity-80'>Build nor highlights indicators way feltworks. Sorry back harvest reinvent illustration. Hiring diligence shift low view decisions race impact latest. Anomalies focus picture let long got.</p>
                <button className='mt-12 px-5 py-2.5 text-white bg-[#27AE60]'>Let’s connect</button>
            </div>
        </div>
    </div>
</div>
}
export default Aboutus;
