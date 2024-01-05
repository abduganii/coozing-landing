"use client";
import Image from "next/image";
import { Navbar } from "./data";
import cls from "./header.module.scss";
import Lang from "../lang";
import { useEffect, useState } from "react";

export default function Header({ lang }) {
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
    <header
      className={`${
        windowHeight > 0 && "shadow-xl"
      } fixed py-4 z-10  w-full bg-white top-0 left-0 w-full `}
    >
      <div className="container flex  justify-between items-center	">
        <div className={cls.burger__btn}>
          <Image
            width={30}
            height={30}
            src="/assets/header/menu_btn.svg"
            alt="menu btn"
          />
        </div>
        <div className={cls.logo}>
          <Image
            width={160}
            height={30}
            src="../assets/header/logo.svg"
            alt=""
          />
        </div>
        <nav className={cls.navbar}>
          <ul className="flex items-center gap-9">
            {Navbar?.map((e) => (
              <li key={e?.id}>
                <a
                  className="font-medium text-base leading-4 text-[#374151]"
                  href={e?.link}
                >
                  {e?.text?.[lang]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Lang />
      </div>
    </header>
  );
}
