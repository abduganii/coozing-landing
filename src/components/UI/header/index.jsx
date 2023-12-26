import Image from "next/image"
import { Navbar } from "./data"
import cls from "./header.module.scss"

export default function Header() {
    return (
        <header className="py-6">
            <div className="container flex justify-between items-center	">
                <div className={cls.burger__btn}>
                    <Image
                        width={30}
                        height={30}
                        src="/assets/header/menu_btn.svg"
                        alt="menu btn" />
                </div>
                <div className={cls.logo}>
                    <Image
                        width={160}
                        height={30}
                        src="../assets/header/logo.svg"
                        alt="" />
                </div>
                <nav className={cls.navbar}>
                    <ul className="flex items-center gap-9">

                        {
                            Navbar?.map(e => (
                                <li key={e?.id}>
                                    <a className="font-medium text-base leading-4 text-[#374151]"
                                        href={e?.link}>{e?.text?.en}</a>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
                <div className="flex gap-4 items-center">
                    <div className="lang cursor-pointer relative">
                        <h4 className="text-[#1F2937] bg-[#F3F4F6] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">ru</h4>
                        <ul
                            className="absolute opacity-0 duration-700 w-28 invisible shadow-lg py-2 top-[95%] flex flex-col -right-2 z-50">
                            <li
                                className="text-[#1F2937] bg-white text-center text-base font-medium leading-6 py-[2px]">
                                ru
                            </li>
                        </ul>
                    </div>
                    <a href="#form" className="login block text-white bg-[#FF6600] text-base font-medium leading-6 py-3 px-3.5 rounded-2xl">join</a>
                </div>
            </div>
        </header >
    )
}
