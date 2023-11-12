import Image from "next/image";
import problems from '../assets/images/problems.png'
import play from '../assets/images/play.png'
export  default function GlobalProblems  () {
    return <div>
       <div className='flex gap-6'>
           <div className="text my-auto w-1/2">
              <div>
                  <h2 className='lg:text-5xl font-semibold'>
                      Launching startups to <span className='text-blue'>solve</span> global <span className='text-blue'>problems</span>
                  </h2>
                  <p className='mt-4 font-normal'>We help to ignite global change with our accelerator program designed to supercharge the growth of startups.</p>
                  <div className='flex gap-4 mt-12'><button className='py-2.5 px-5 bg-blue text-white font-sm'>Learn more</button><button className='flex items-center justify-center py-2.5 px-5 bg-wblue'> <Image src={play}/>Play showreel</button></div>
              </div>
           </div>
           <div className="img w-1/2">
               <Image src={problems}/>
           </div>
       </div>
    </div>
}
