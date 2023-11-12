"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../assets/icons/logo.svg";

export default function Navbar() {
  const [windowHeight, setWindowHeight] = useState(0);

  const list = [
    { name: "Home", id: 1 },
    { name: "Our products", id: 2 },
    { name: "Our projects", id: 3 },
    { name: "About us", id: 4 },
    { name: "Our team", id: 5 },
    { name: "Contact us", id: 6 },
  ];

  const getWindowHeight = () => {
    setWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", getWindowHeight);
    return () => window.removeEventListener("scroll", getWindowHeight);
  }, [window.scrollY]);

  return (
    <div
      className={`${
        windowHeight > 0 && " shadow-xl"
      } fixed bg-white top-0 left-0 w-full`}
    >
      <div
        className={`${
          windowHeight > 0 ? "py-3" : "py-5"
        } transition-all duration-300 flex container justify-between items-center`}
      >
        <div>
          <Image src={logo} />
        </div>
        <nav>
          <ul className="flex">
            {list.map((el) => (
              <li
                className="ml-8 lg:text-base md:text-sm font-medium"
                key={el.id}
              >
                <a href="#">{el.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
