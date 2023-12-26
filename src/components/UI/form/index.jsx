"use client";
import Image from "next/image";
import cls from "./form.module.scss";
import { useTranslation } from "react-i18next";

export default function Contant({ dataList }) {
  const { t } = useTranslation(["home"]);

  return (
    <>
      <section id="form" className="py-8">
        <div className="container flex gap-[40px] items-center justify-between">
          <div className={cls.form__box}>
            <h1 className="text-[#1F2937] font-semibold notel:text-[36px] text-xl notel:leading-[56px] leading-8">
              {dataList?.form_title
                ? dataList?.form_title
                : "Готовы присоединиться и развиваться вместе с нами?"}
            </h1>
            <h3 className="notel:mt-7 mt-2 text-[#374151] notel:text-xl text-base leading-8">
              {dataList?.form_subtitle
                ? dataList?.form_subtitle
                : "Заполните форму, и мы свяжемся с вами!"}
            </h3>
            <form className="notel:mt-7 mt-3">
              <div className="flex flex-wrap gap-[20px]">
                <label className={cls.form__label} for="name">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {" "}
                    {t("name")}
                  </h4>
                  <input
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    id="name"
                    type="text"
                  />
                </label>
                <label className={cls.form__label} for="surname">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {t("last_name")}
                  </h4>
                  <input
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    id="surname"
                    type="text"
                  />
                </label>
                <label className={cls.form__label} for="tel">
                  <h4 className="text-[#374151] font-medium text-xl"> phone</h4>
                  <input
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    type="text"
                    name="num"
                    id="tel"
                    pattern="^[+][9][9][8]\d{9}$"
                    placeholder="+998"
                  />
                </label>
                <label className={cls.form__label} for="direction">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {t("direction")}
                  </h4>
                  <select
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    name="direction"
                    id="direction"
                  >
                    <option key="item.id" value="item.id">
                      name
                    </option>
                  </select>
                </label>
                <label className={cls.form__label} for="city">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {" "}
                    {t("sity")}
                  </h4>
                  <select
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    name="city"
                    id="city"
                  >
                    <option
                      v-for="item in regions"
                      key="item.id"
                      value="item.id"
                    >
                      name
                    </option>
                  </select>
                </label>
                <label className={cls.form__label} for="district">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {t("region")}
                  </h4>
                  <select
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    name="district"
                    id="district"
                  >
                    <option key="item.id" value="item.id">
                      name
                    </option>
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="block notel:max-w-[345px] max-w-[100%] m-auto mt-[48px] w-full text-center text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl"
              >
                {t("btn")}
              </button>
            </form>
          </div>
          <div className={cls.form__img}>
            <Image
              width={427}
              height={709}
              className="w-full h-full object-cover"
              src={dataList?.form_woman_image}
              alt="girl"
            />
          </div>
        </div>
      </section>
    </>
  );
}
