import styles from "./Hero.module.scss";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <section className={styles.wrapper} id='hero'>
      <h1 className={styles.heading}>The Sky Is The Limit</h1>
      <p className={styles.text}>We provide world class financial assistance</p>
      <Button className={styles.btn}> <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="13"
          fill="#fff"
        >
          <path d="m7.886 7.098-4.782 4.78a.84.84 0 0 1-1.192 0l-.794-.794a.84.84 0 0 1 0-1.191l3.389-3.39-3.389-3.389a.84.84 0 0 1 0-1.191l.791-.802a.84.84 0 0 1 1.192 0l4.781 4.781c.334.33.334.865.004 1.196Z" />
        </svg>Read More</Button>
    </section>
  );
};

export default Hero;
