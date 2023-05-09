import styles from "./BespokeSolutions.module.scss";
import Button from "../../components/Button/Button";
import {
  people1x,
  people2x,
  peopleWebp1x,
  peolpeWebp2x,
} from './gallery';

const BespokeSolutions = () => {
  return (
    <section className={styles.bespokeSolutions} id='about'>
        <picture className={styles.img}>
          <source
            srcSet={`${peopleWebp1x} 1x, ${peolpeWebp2x} 2x`}
            type="image/webp" sizes='(max-width: 320px) 320px,
            (max-width: 768px) 368px,
            (max-width: 1360px) 670px'
          />
          <source srcSet={`${people1x} 1x, ${people2x} 2x`} type="image/jpeg"  sizes='(max-width: 320px) 320px,
            (max-width: 768px) 368px,
            (max-width: 1360px) 670px' />
          <img 
            src={people1x}
            alt="People in our company"
            loading="lazy"
          />
        </picture>
      <div className={styles.textWrapper}>
        <p className={styles.text}>What you are looking for</p>
        <h2 className={styles.heading}>We provide bespoke solutions</h2>
        <p className={styles.info}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <Button className={styles.btn}>Read More</Button>
      </div>
    </section>
  );
};
export default BespokeSolutions;
