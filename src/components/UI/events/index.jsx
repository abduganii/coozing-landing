"use client"
import Image from 'next/image'
import cls from './events.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
export default function Events({ dataList }) {

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
        <section id="events" class="events py-10 mt-10">
            <div class="container">
                <h1 class="text-[#1F2937] text-center relative top-6 font-semibold text-4xl leading-9">events</h1>
                <Swiper {...settings} modules={[Navigation, Pagination, Scrollbar, A11y]}>
                    {
                        dataList && dataList?.events?.map((e, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    width={640}
                                    height={420}
                                    src={e}
                                    alt="img"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}
