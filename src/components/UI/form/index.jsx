"use client";
import Image from "next/image";
import cls from "./form.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { SendRequest } from "@/service/api";

export default function Contant({ dataList, lang }) {
  const { t } = useTranslation(["home"]);
  const [resion, setRegion] = useState(null);
  const [districts, setDistricts] = useState(null);
  const [colaction, setcolaction] = useState(null);
  const [loading, setLoading] = useState(false);
  const { register, setValue, handleSubmit, control, reset } = useForm();

  const SendRequestFunc = async (data) => {
    setLoading(true);
    await SendRequest(data, lang)
      .then((res) => {
        toast.success("request sended successfully");
      })
      .catch((err) => {
        toast.error("failed to send request");
      })
      .finally(() => {
        reset();
        setLoading(false);
      });
  };

  useEffect(() => {
    const fetchRigion = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/regions`);
        const result = await response.json();
        setRegion(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchDistricts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/districts`
        );
        const result = await response.json();
        setDistricts(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchcollections = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/service-collections`
        );
        const result = await response.json();
        setcolaction(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRigion();
    fetchDistricts();
    fetchcollections();
  }, []);

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
            <form
              className="notel:mt-7 mt-3"
              onSubmit={handleSubmit(SendRequestFunc)}
            >
              <div className="flex flex-wrap gap-[20px]">
                <label className={cls.form__label} htmlFor="name">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {" "}
                    {t("name")}
                  </h4>
                  <input
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    id="name"
                    type="text"
                    placeholder={t("name")}
                    {...register("name", { required: true })}
                  />
                </label>
                <label className={cls.form__label} htmlFor="surname">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {t("last_name")}
                  </h4>
                  <input
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    id="surname"
                    type="text"
                    placeholder={t("last_name")}
                    {...register("last_name", { required: true })}
                  />
                </label>
                <label className={cls.form__label} htmlFor="tel">
                  <h4 className="text-[#374151] font-medium text-xl"> phone</h4>
                  <input
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    type="text"
                    name="num"
                    id="tel"
                    {...register("phone", { required: true })}
                    placeholder="+998"
                  />
                </label>
                <label className={cls.form__label} htmlFor="direction">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {t("direction")}
                  </h4>
                  <select
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    name="direction"
                    id="direction"
                    onChange={(e) => {
                      setValue("service_collection", e.target.value);
                    }}
                  >
                    <option selected disabled value="null">
                      {t("direction")}
                    </option>
                    {colaction?.data &&
                      colaction?.data?.map((e) => (
                        <option key={e?.id} value={e?.id}>
                          {e?.name}
                        </option>
                      ))}
                  </select>
                </label>
                <label className={cls.form__label} htmlFor="city">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {" "}
                    {t("sity")}
                  </h4>
                  <select
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    name="city"
                    id="city"
                    onChange={(e) => {
                      setValue("region", e.target.value);
                    }}
                  >
                    <option selected disabled value="null">
                      {t("sity")}
                    </option>
                    {resion?.data &&
                      resion?.data?.map((e) => (
                        <option key={e?.id} value={e?.id}>
                          {e?.name}
                        </option>
                      ))}
                  </select>
                </label>
                <label className={cls.form__label} htmlFor="district">
                  <h4 className="text-[#374151] font-medium text-xl">
                    {t("region")}
                  </h4>
                  <select
                    className="w-full outline-0 mt-2 px-4 flex items-center h-[48px] bg-white rounded-lg border border-[#D1D5DB]"
                    name="district"
                    id="district"
                    onChange={(e) => {
                      setValue("district", e.target.value);
                    }}
                  >
                    <option selected disabled value="null">
                      {t("region")}
                    </option>
                    {districts?.data &&
                      districts?.data?.map((e) => (
                        <option key={e?.id} value={e?.id}>
                          {e?.name}
                        </option>
                      ))}
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

      <Toaster />
    </>
  );
}
