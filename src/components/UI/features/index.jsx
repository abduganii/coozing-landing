import Image from "next/image"
import cls from "./Features.module.scss"

export default function Features({ dataList }) {
    return (
        <section id="edu-coozin" className="tt:py-12 py-4 tt:mt-10" >
            <div className={`${cls.container} container tt:h-[800px] items-center tt:gap-6 gap-10 flex tt:flex-row flex-col justify-between`} >
                <div className={`${cls.features__img} h-full`} >
                    <Image
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl"
                        src={dataList.edu_coozin_image}
                        alt="working" />
                </div >
                <div className={`${cls.features__box} tt:py-[80px]`} >
                    <h1 className="text-[#1F2937] font-semibold	notel:text-4xl text-2xl leading-9" >
                        {
                            dataList?.edu_coozin_title ?
                                dataList.edu_coozin_title :
                                'EDU COOZIN'
                        }</h1 >
                    <h3 className="text-[#374151] font-normal text-base leading-4 notel:mt-6 mt-3" >
                        {
                            dataList.edu_coozin_subtitle ?
                                dataList.edu_coozin_subtitle :
                                'Онлайн-академия Coozin предоставляет обучение и помощь в развитии бизнеса.'
                        }
                    </h3 >
                    <ul className="notel:mt-[56px] mt-5 flex flex-col gap-[20px]" >

                        {
                            dataList?.edu_coozin_content && dataList?.edu_coozin_content?.map(e => (
                                <li key={e?.id}>
                                    <div className="flex items-center gap-2">
                                        <Image
                                            width={100}
                                            height={100}
                                            src="/assets/features/right.svg"
                                            alt="right" />
                                        <h3 className="text-[#374151] leading-5 text-xl font-semibold">{e?.title}</h3>
                                    </div >
                                    <p className="text-[#374151] mt-2 font-normal text-base" > {e?.subtitle}</p >
                                </li >
                            ))
                        }
                    </ul >
                </div >
            </div >
        </section >
    )
}
