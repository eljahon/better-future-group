import Image from "next/image";

import logo from "@/assets/icons/logo.svg";
import home from "@/assets/icons/home-icon.svg";
import contactUs from "@/assets/icons/contact-us.png";
import aboutUs from "@/assets/icons/about.svg";
import ourTeam from "@/assets/icons/our-team.png";
import ourProjects from "@/assets/icons/ourproject.png";
import OurProducts from "@/assets/icons/products.png";

const navList = [
  { name: "Home", id: 1, idText: "#home", icon: home },
  { name: "Our products", id: 2, idText: "#our-products", icon: OurProducts },
  { name: "Our projects", id: 3, idText: "#our-projects", icon: ourProjects },
  { name: "About us", id: 4, idText: "#about-us", icon: aboutUs },
  { name: "Our team", id: 5, idText: "#our-team", icon: ourTeam },
  { name: "Contact us", id: 6, idText: "#contact-us", icon: contactUs },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="h-full justify-between gap-4 py-6 mt-8 md:mt-16 container hidden min-[850px]:flex">
        <div className="flex flex-col justify-between h-[300px] w-[250px]">
          <div>
            <Image src={logo} alt="img" />
            <p className="py-3">
              Build nor highlights indicators way feltworks.
            </p>
          </div>
          <div>© BetterFutureGroup 2023</div>
        </div>
        <ul className="flex flex-col gap-5">
          {navList?.map((el) => (
            <li className="text-base font-medium" key={el.id}>
              <a href={el.idText}>{el.name}</a>
            </li>
          ))}
        </ul>
        <div className="h-[300px] w-[40%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83986977686!2d69.11455270729545!3d41.28273794683044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1699902950849!5m2!1sen!2s"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            className="h-full w-full"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ul
        style={{
          boxShadow:
            "0 -20px 25px -5px rgb(0 0 0 / 0.1), 0 -8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
        className="fixed shadow-xl bottom-0 left-0 w-full z-50 py-4 bg-white block min-[850px]:hidden"
      >
        <div className="container flex justify-between items-center">
          {navList.map((el) => (
            <li className="w-7 sm:w-10">
              <a href={el.idText} className="w-full">
                <Image className="w-full" src={el.icon} alt={el.name} />
              </a>
            </li>
          ))}
        </div>
      </ul>
    </footer>
  );
};
export default Footer;
