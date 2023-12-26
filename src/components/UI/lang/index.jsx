"use client";
import cls from "./lang.module.scss";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import { ChangeEvent, useState } from "react";
import i18nConfig from "../../../../i18nConfig";

const Lang = () => {
  const { i18n } = useTranslation();

  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.getAttribute("value");

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale == i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  return (
    <div className="flex gap-4 items-center">
      <div className={`${cls.lang} cursor-pointer relative  `}>
        <h4 className="text-[#1F2937] bg-[#F3F4F6] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">
          {i18n?.language}
        </h4>
        <ul
          onClick={handleChange}
          className="absolute text-black duration-700 w-28  shadow-lg py-2 top-[95%]  flex-col -right-5 z-50 "
        >
          <li
            className="text-black bg-white text-center text-base font-medium leading-6 py-[2px]"
            value={"ru"}
          >
            ru
          </li>
          <li
            className="text-black bg-white text-center text-base font-medium leading-6 py-[2px]"
            value={"uz"}
          >
            uz
          </li>
          <li
            className="text-black bg-white text-center text-base font-medium leading-6 py-[2px]"
            value={"en"}
          >
            en
          </li>
        </ul>
      </div>
      <a
        href="#form"
        className="login block text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl"
      >
        join
      </a>
    </div>
  );
};

export default Lang;
