"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../assets/icons/logo.svg";
import SelectLanguage from "./UI/select-lanuage";

const navList = [
    { name: { ru: "Главный", en: "Home", uz: "Bosh sahifa" }, id: 1, idText: "#home" },
    { name: { ru: "Продукты", en: "Products", uz: "Mahsulotlar" }, id: 2, idText: "#our-products" },
    { name: { ru: "Проекты", en: "Projects", uz: "Loyihalar" }, id: 3, idText: "#our-projects" },
    { name: { ru: "О нас", en: "About us", uz: "Biz haqimizda" }, id: 4, idText: "#about-us" },
    { name: { ru: "Команда", en: "Team", uz: "Jamoa" }, id: 5, idText: "#our-team" },
    { name: { ru: "Связаться", en: "Contact us", uz: "Bog'lanish" }, id: 6, idText: "#contact-us" },
];

export default function Navbar({ lng }) {
    const [windowHeight, setWindowHeight] = useState(
        typeof window !== "undefined" ? window.scrollY : 0
    );


    const getWindowHeight = () => {
        setWindowHeight(typeof window !== "undefined" ? window.scrollY : 0);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", getWindowHeight);
            return () => window.removeEventListener("scroll", getWindowHeight);
        }
    }, []);

    return (
        <>
            <div
                className={`${windowHeight > 0 && "shadow-xl"
                    } fixed bg-white top-0 left-0 w-full z-50 hidden min-[950px]:block`}
            >
                <div
                    className={`${windowHeight > 0 ? "py-3" : "py-5"
                        } transition-all duration-300 flex container justify-between items-center`}
                >
                    <div>
                        <Image src={logo} alt="logo" />
                    </div>
                    <nav>
                        <ul className="flex">
                            {navList?.map((el) => (
                                <li className="ml-1 lg:ml-4 text-base font-medium" key={el.id}>
                                    <a href={el.idText}>{el.name[lng]}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <SelectLanguage lng={lng} />
                </div>
            </div>

            <div className="flex mt-3 justify-between items-center w-full bg-white -[950px]:hidden">
                <div>
                    <Image src={logo} alt="logo" />
                </div>
                <SelectLanguage lng={lng} />
            </div>
        </>
    );
}