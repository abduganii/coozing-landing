import Image from 'next/image'
import cls from './whyUs.module.scss'

export default function WhyIs({ dataList }) {

    return (

        <section id="why-coozin" className="tt:py-[100px] py-7">
            <div className="container">
                <h1 className="text-center text-[#1F2937] font-semibold	text-4xl">
                    {dataList?.what_for_coozin ?
                        dataList?.what_for_coozin :
                        'Почему Coozin?'
                    }
                </h1>
                <ul className={`${cls.whyus__box} flex mt-[50px] flex-wrap justify-around items-center`}>
                    {
                        dataList && dataList?.what_for_coozin_content?.map((e, i) => (
                            <li className={`${cls.whyus__item} px-5`}>
                                {
                                    i == 0 &&
                                    <Image
                                        width={125}
                                        height={125}
                                        className="block object-cover m-auto h-[125px]"
                                        src="/assets/whyus/1.png"
                                        alt="rocket" />
                                }
                                {
                                    i == 1 &&
                                    <Image
                                        width={125}
                                        height={125}
                                        className="block object-cover m-auto h-[125px]"
                                        src="/assets/whyus/2.png"
                                        alt="rocket" />
                                }
                                {
                                    i == 2 &&
                                    <Image
                                        width={125}
                                        height={125}
                                        className="block object-cover m-auto h-[125px]"
                                        src="/assets/whyus/3.png"
                                        alt="rocket" />
                                }
                                <h1 className="text-center mt-2 text-[#1F2937] text-lg leading-4 font-semibold">{e?.title}</h1>
                                <p className="text-center mt-3 text-[#4B5563] text-base font-normal">{e?.subtitle}</p>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>
    )
}
