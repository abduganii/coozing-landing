import Image from "next/image";
import cls from "./main.module.scss";

export default function TheMain({ dataList }) {
  return (
    <main id="about-us" className={`${cls.main} mt-[70px] py-10`}>
      <div
        className={`${cls.container} container flex justify-between h-[600px]`}
      >
        <div className={`${cls.main__box} w-6/12 pt-20 flex flex-wrap h-full`}>
          <div className="w-full">
            <h1 className="font-semibold notel:text-[40px] notel:leading-10 text-[#1F2937] text-2xl leading-8">
              {dataList?.header_title
                ? dataList?.header_title
                : "Раскрой свой потенциал вместе с Coozin!"}
            </h1>
            <p className="font-normal text-base	leading-6 mt-2.5 tracking-tight	">
              {dataList?.header_subtitle
                ? dataList?.header_subtitle
                : "Универсальная платформа Coozin редоставляют множество возможностей для самозанятых женщин. На платформе можно продавать товары и услуги, а также учиться новым навыкам и развивать свой бизнес"}
            </p>
            <a
              href="#form"
              className="notel:inline-block block notel:mt-7 mt-5 text-center text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-10 rounded-2xl"
            >
              join
            </a>
          </div>
          <div className={`${cls.main__progress} w-full`}>
            <h3
              className={`${cls.title} text-[#374151] tracking-wide text-sm font-semibold leading-5 mb-5`}
            >
              achievements
            </h3>
            <ul className="flex w-full items-center justify-between gap-8 tt:gap-4">
              {dataList &&
                dataList?.header_content?.map((e, i) => (
                  <li key={i} className="tt:w-[160px] w-[33%]">
                    <h2 className="text-[#1F2937] font-extrabold text-4xl leading-10">
                      {e?.count}
                    </h2>
                    <h3 className="text-[#374151] text-base	leading-4 mt-4 font-medium">
                      {e?.title}
                    </h3>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className={`${cls.main__img} w-[42%] flex flex-col h-full`}>
          <div className={cls.main__item}>
            <div>
              <Image
                width={400}
                height={400}
                className="w-full h-full rounded-2xl object-cover"
                src={dataList?.header_images?.[0]}
                alt="girls"
              />
            </div>
            <div>
              <Image
                width={400}
                height={400}
                className="w-full h-full rounded-2xl object-cover"
                src={dataList?.header_images?.[1]}
                alt="laptop"
              />
            </div>
          </div>
          <div className={cls.main__item}>
            <div>
              <Image
                width={400}
                height={400}
                className="w-full h-full rounded-2xl object-cover"
                src={dataList?.header_images?.[2]}
                alt="laptop"
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                className="w-full h-full rounded-2xl object-cover"
                src={dataList?.header_images?.[3]}
                alt="girls"
              />
            </div>
          </div>
          {/* <!-- {{ dataList }} -->
                    <!-- <img :src="dataList?.header_images[1]" alt=""> --> */}
        </div>
      </div>
    </main>
  );
}
