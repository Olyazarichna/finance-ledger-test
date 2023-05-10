import Header from "../../sections/Header/Header";
import Hero from "../../sections/Hero/Hero";
import styles from "./MainWrapper.module.scss";

const MainWrapper = () => {
  return (
    <div className={`${"container"} ${styles.wrapper}`}>
      <Header />
      <Hero />
    </div>
  );
};

export default MainWrapper;
