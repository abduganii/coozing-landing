'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import cls from "./Feedback.module.scss"
export default function Feedback({ dataList }) {
    const settings = {

        pagination: {
            clickable: true,
        },
        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            // When window width is >= 570px
            570: {
                slidesPerView: 2,
            },
            // When window width is >= 800px
            800: {
                slidesPerView: 3,
            },
            // When window width is >= 1024px
            1024: {
                slidesPerView: 4,
            },
        },
    };

    return (
        <section className="feedback py-10">
            <div className="container">
                <h1 className="text-center text-[#1F2937] font-semibold notel:text-4xl text-xl">
                    {
                        dataList?.satisfied_vendor ?
                            dataList?.satisfied_vendor :
                            'Наши довольные вендоры'
                    }
                </h1>
                <Swiper className="mySwiper" {...settings} modules={[Navigation, Pagination, Scrollbar, A11y]}>
                    {
                        dataList?.satisfied_vendor_content && dataList?.satisfied_vendor_content?.map(e => (
                            <SwiperSlide key={e?.key}>
                                <div className={cls.feedback__item}>
                                    <div className="py-[50px] bg-[#F3F4F6] rounded-2xl">
                                        <Image className="block m-auto"
                                            width={30}
                                            height={30}
                                            src="/assets/feedback/mark.svg"
                                            alt="mark" />
                                        <p className="mt-5 w-[80%] m-auto text-center">
                                            {e?.title}
                                        </p>
                                    </div>
                                    <div className={cls.arrow}></div>
                                    <div className="flex flex-col items-center mt-1">
                                        <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                                            <Image
                                                width={48}
                                                height={48}
                                                className="object-cover w-full h-full"
                                                src={e?.avatar}
                                                alt="person" />
                                        </div>
                                        <h3 className="mt-2 text-[#1F2937] font-semibold	text-base leading-4">{e?.vendor}</h3>
                                        <h4 className="mt-2 text-[#1F2937] font-normal text-base leading-4">{e?.specify}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    )
}
