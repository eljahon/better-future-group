'use client'
import qrcode from "../assets/icons/qrcode.svg";
import Image from "next/image";
import ReactInputMask from 'react-input-mask'
import { useForm, Controller } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import problems from "../assets/images/problems.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import loader from "../../public//loader-white.gif";
import { useEffect, useState } from "react";
import { SendRequest } from "@/service/api";
import ru from '../app/i18n/locales/ru/translation.json'
import uz from '../app/i18n/locales/uz/translation.json'
import en from '../app/i18n/locales/en/translation.json'
const Contactus = ({ lng, data }) => {

  useEffect(() => {
    AOS.init();
  }, [])
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, control, reset } = useForm();

  const SendRequestFunc = async (data) => {

    setLoading(true)
    await SendRequest({ data: { ...data } })
      .then(res => {
        console.log(res)
        toast.success("request sended successfully")
        reset()
      })
      .catch(err => {
        console.log(err)
        toast.error("failed to send request")
      })
      .finally(() => {
        setLoading(false)

      })
  }
  const langData = {
    uz,
    ru,
    en
  }
  return (
    <div id="contact-us">
      <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="w-full p-5 md:p-10 lg:p-24 bg-[rgba(51, 51, 51, 0.02)] flex flex-col justify-center order-2 lg:order-1">
          <div>
            <h1 data-aos="fade-right" className="text-center text-2xl sm:text-4xl font-semibold">

              {langData[lng].contact}
            </h1>
            <p data-aos="fade-right" className="opacity-80 text-base sm:text-xl font-medium py-4 text-center">
              {langData[lng].contactText}

            </p>
            <form className="flex flex-col py-3 gap-4 " onSubmit={handleSubmit(SendRequestFunc)}>
              <div data-aos="fade-right" className="flex flex-col">
                <label
                  className="inline-block p-1 text-base font-medium"
                  htmlFor="name"
                >

                  {langData[lng].name}
                </label>
                <input
                  className="p-3 bg bg-[rgb(241,241,241)] outline-none"
                  id="name"
                  type="text"
                  {...register('fullname', { required: true })}
                />
              </div>
              <div data-aos="fade-right" className="flex flex-col">
                <label
                  className="inline-block p-1 text-base font-medium"
                  htmlFor="phoneNumber"
                >

                  {langData[lng].phoneNumber}
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <ReactInputMask className=" p-3 bg bg-[rgb(241,241,241)] outline-none" mask="+\9\9\8 (99) 999-99-99" {...field} maskChar={null} />
                  )}
                />
              </div>
              <button data-aos="fade-right" className="flex justify-center bg-[#2EB1FC] p-4 text-white text-sm font-medium mt-3 cursor-pointer">


                {loading ? <Image src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${data?.qr_link}`} width={256} height={256} alt={"loading"} /> : langData[lng].request}

              </button>
            </form>
          </div>
        </div>
        <div data-aos="flip-left" className="lg:w-full image order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-auto">
          <div className="relative h-full">
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center">
              <Image src={qrcode} alt="img" className="mx-auto" />
              <p className="mt-6 font-medium text-base sm:text-lg opacity-80">

                {langData[lng].requestText}
              </p>
            </div>
            <Image src={problems} alt="img" className="h-full" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default Contactus;
