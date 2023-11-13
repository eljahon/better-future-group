import Image from "next/image";
import qrcode from '../assets/icons/qrcode.svg'
import problems from "../assets/images/problems.png";
const Contactus = () => {
return <div id='contact-us mt-16'>
   <div className='flex justify-between'>
       <div className="text">
          <div>
              <h1>Contact us</h1>
              <p className='opacity-80'>Request a call back and our operators will call you in 30 minutes!</p>
              <form>
                  <div>
                      <label htmlFor="">Your name</label> <br/>
                      <input type="text"/> <br/>
                      <label htmlFor="">Your phone number</label> <br/>
                      <input type="text"/> <br/>
                      <button>Request call back</button>
                  </div>
              </form>
          </div>
       </div>
       <div className="image">
         <div className='relative'>
             <div className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>  <Image src={qrcode}/>
                 <p className='mt-6 text-center font-medium text-lg opacity-80'>
                 Scan this QR code to chat with our operator in telegram.
             </p></div>
             <Image src={problems}/>
         </div>
       </div>
   </div>
</div>
}
export  default Contactus;
