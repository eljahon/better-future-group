import qrcode from "../assets/icons/qrcode.svg";
import Image from "next/image";
import problems from "../assets/images/problems.png";
const Contactus = () => {
  return (
    <div id="contact-us">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="p-5 md:p-10 lg:p-24 bg-[rgba(51, 51, 51, 0.02)] flex flex-col justify-center order-2 lg:order-1">
          <div>
            <h1 className="text-center text-2xl sm:text-4xl font-semibold">
              Contact us
            </h1>
            <p className="opacity-80 text-base sm:text-xl font-medium py-4 text-center">
              Request a call back and our operators will call you in 30 minutes!
            </p>
            <form className="flex flex-col py-3 gap-4">
              <div className="flex flex-col">
                <label
                  className="inline-block p-1 text-base font-medium"
                  htmlFor="name"
                >
                  Your name
                </label>
                <input
                  className="p-3 bg bg-[rgb(241,241,241)] outline-none"
                  id="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="inline-block p-1 text-base font-medium"
                  htmlFor="phoneNumber"
                >
                  Your phone number
                </label>
                <input
                  className="p-3 bg bg-[rgb(241,241,241)] outline-none"
                  id="phoneNumber"
                  type="text"
                />
              </div>
              <button className="bg-[#2EB1FC] p-4 text-white text-sm font-medium mt-3 cursor-pointer">
                Request call back
              </button>
            </form>
          </div>
        </div>
        <div className="image order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-auto">
          <div className="relative h-full">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center">
              <Image src={qrcode} alt="img" className="mx-auto" />
              <p className="mt-6 font-medium text-base sm:text-lg opacity-80">
                Scan this QR code to chat with our operator in telegram.
              </p>
            </div>
            <Image src={problems} alt="img" className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactus;
