"use client";
import Image from "next/image";
import { Navbar } from "../header/data";
import cls from "./footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = ({ dataList }) => {
  const { t } = useTranslation(["home"]);
  return (
    <footer className="notel:py-[80px] py-4">
      <div className="container">
        <div className="logo ml:block hidden">
          <Image
            width={89}
            height={97}
            className="block m-auto"
            src="/assets/footer/logo.png"
            alt="logo"
          />
        </div>
        <nav className={`${cls.footer__nav} flex justify-center mt-[40px]`}>
          <ul className="flex items-center gap-8">
            {Navbar &&
              Navbar?.map((e) => (
                <li key={e?.id}>
                  <a
                    className="font-normal text-base leading-4 text-[#1F2937]"
                    href={e?.link}
                  >
                    {e?.text?.en}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div
          className={`${cls.footer__support} mt-[40px] flex justify-center items-center gap-5`}
        >
          <h3 className="text-[#374151] font-normal text-sm">
            {t("by-the-support-of")}
          </h3>
          <div className="flex gap-5 items-center">
            <Image
              width={89}
              height={30}
              src="/assets/footer/cola.png"
              alt="cola"
            />
            <Image
              width={89}
              height={30}
              src="/assets/footer/osce.png"
              alt="osce"
            />
          </div>
        </div>

        <div className="flex w-full mt-[60px] ml:justify-center justify-between ml:items-center items-end gap-4">
          <h3 className="hidden ml:inline-block"> {t("follow-us")}</h3>
          <div className="w-[64px] ml:block hidden h-[1px] bg-[#1F2937]"></div>
          <ul className="flex items-center gap-6">
            {dataList?.messengers?.map((e, i) => {
              if (e?.messanger == "Telegram") {
                return (
                  <li key={i}>
                    <a
                      className="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                      href={e.link}
                      target="_blank"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/footer/telegram.svg"
                        alt=""
                      />
                    </a>
                  </li>
                );
              }
              if (e?.messanger == "Instagram") {
                return (
                  <li key={i}>
                    <a
                      className="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                      href={e.link}
                      target="_blank"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/footer/insta.svg"
                        alt=""
                      />
                    </a>
                  </li>
                );
              }
              if (e?.messanger == "Facebook") {
                return (
                  <li key={i}>
                    <a
                      className="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                      href={e.link}
                      target="_blank"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/footer/facebook.svg"
                        alt=""
                      />
                    </a>
                  </li>
                );
              }
              if (e?.messanger == "You Tube") {
                return (
                  <li key={i}>
                    <a
                      className="flex items-center justify-center border border-[#1F2937] w-[40px] h-[40px] rounded-full"
                      href={e.link}
                      target="_blank"
                    >
                      <Image
                        width={20}
                        height={20}
                        src="/assets/footer/yt.svg"
                        alt=""
                      />
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <h3 className="mt-10 text-center text-[#1F2937] font-normal	ml:text-sm text-xs">
          {t("rights-reserved")}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
