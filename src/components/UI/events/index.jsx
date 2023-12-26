"use client";
import Image from "next/image";
import cls from "./events.module.scss";
import { useTranslation } from "react-i18next";
export default function Events({ dataList }) {
  const { t } = useTranslation(["home"]);

  return (
    <section id="events" className="events py-10 mt-10">
      <div className="container">
        <h1 className="text-[#1F2937] text-center top-6 font-semibold text-4xl leading-9">
          {t("events")}
        </h1>
        <div className="myScroll flex gap-5 mt-[20px]">
          {dataList &&
            dataList?.events?.map((e, i) => (
              <Image
                className="w-full w-full"
                key={i}
                width={490}
                height={200}
                src={e}
                alt="img"
              />
            ))}
        </div>
      </div>
    </section>
  );
}
