import styles from "./BusinessCases.module.scss";
import {
  cases1x,
  cases2x,
  casesWebp1x,
  casesWebp2x,
  cases2_1x,
  cases2_2x,
  cases2Webp1x,
  cases2Webp2x,
  cases3_1x,
  cases3_2x,
  cases3Webp1x,
  cases3Webp2x,
  cases4_1x,
  cases4_2x,
  cases4Webp1x,
  cases4Webp2x,
  cases5_1x,
  cases5_2x,
  cases5Webp1x,
  cases5Webp2x,
  cases6_1x,
  cases6_2x,
  cases6Webp1x,
  cases6Webp2x,
} from "./gallery";

const BusinessCases = () => {
  return (
    <section className={styles.businessCasesSection}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>This is what we do</p>
        <h2 className={styles.heading}>Business Cases</h2>
        <p className={styles.textInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${casesWebp1x} 1x, ${casesWebp2x} 2x`}
              type="image/webp"
            />
            <source srcSet={`${cases1x} 1x, ${cases2x} 2x`} type="image/jpeg" />
            <img
              className={styles.img}
              src={cases1x}
              alt="People in our company"
              width={280}
            />
          </picture>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${cases2Webp1x} 1x, ${cases2Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases2_1x} 1x, ${cases2_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={cases2_1x}
              alt="Laptop, notebook"
              width={280}
            />
          </picture>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${cases3Webp1x} 1x, ${cases3Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases3_1x} 1x, ${cases3_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={cases3_1x}
              alt="Handshake"
              width={280}
            />
          </picture>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${cases4Webp1x} 1x, ${cases4Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases4_1x} 1x, ${cases4_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={cases4_1x}
              alt="People in our company, handshake"
              width={280}
            />
          </picture>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${cases5Webp1x} 1x, ${cases5Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases5_1x} 1x, ${cases5_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={cases5_1x}
              alt="People work"
              width={280}
            />
          </picture>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${cases6Webp1x} 1x, ${cases6Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases6_1x} 1x, ${cases6_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={cases6_1x}
              alt="Buildings"
              width={280}
            />
          </picture>
        </li>
      </ul>
    </section>
  );
};

export default BusinessCases;
