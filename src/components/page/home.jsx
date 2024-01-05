import Events from "../UI/events";
import Features from "../UI/features";
import Feedback from "../UI/feedback";
import Footer from "../UI/footer";
import Contant from "../UI/form";
import Header from "../UI/header";
import TheMain from "../UI/the-main";
import WhyIs from "../UI/why-us";
import cls from "./home.module.scss";

export default async function HomePage({ lang, data }) {
  return (
    <div>
      <div className={cls.wrapper}>
        <Header lang={lang} />
        <TheMain dataList={data} />
        <Features dataList={data} />
        <div className={cls.side}></div>
      </div>
      <div className={cls.wrapper__two}>
        <WhyIs dataList={data} />
        <Contant lang={lang} dataList={data} />
        <div className={cls.side}></div>
      </div>
      <Events dataList={data} />
      <Feedback dataList={data} />
      <Footer dataList={data} />
    </div>
  );
}
