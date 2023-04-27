import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import style from "./MainWrapper.module.scss";

const MainWrapper = () => {
  return (
    // <section className={['container',style.container].join(' ')}>
    <section className={style.container}>
      <Header />
      <Hero />
    </section>
  );
};

export default MainWrapper;
