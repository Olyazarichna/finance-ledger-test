import styles from "./TeamSectiom.module.scss";
import {
  person1_1x,
  person1_2x,
  person1Webp1x,
  person1Webp2x,
  person2_1x,
  person2_2x,
  person2Webp1x,
  person2Webp2x,
  person3_1x,
  person3_2x,
  person3Webp1x,
  person3Webp2x,
} from "./gallery";

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.textWrapper}>
        <p className={styles.text}>Who we are</p>
        <h2 className={styles.heading}>Our Professional Team</h2>
        <p className={styles.textInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${person1Webp1x} 1x, ${person1Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${person1_1x} 1x, ${person1_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={person1_1x}
              alt="John Doe, president of company"
            />
          </picture>
          <h3 className={styles.caption}>John Doe</h3>
          <p className={styles.title}>President</p>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${person2Webp1x} 1x, ${person2Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${person2_1x} 1x, ${person2_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={person2_1x}
              alt="Jane Doe, Vice President of company"
            />
          </picture>
          <h3 className={styles.caption}>Jane Doe</h3>
          <p className={styles.title}>Vice President</p>
        </li>
        <li className={styles.listItem}>
          <picture>
            <source
              srcSet={`${person3Webp1x} 1x, ${person3Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${person3_1x} 1x, ${person3_2x} 2x`}
              type="image/jpeg"
            />
            <img
              className={styles.img}
              src={person3_1x}
              alt="Steve Smith, Marketing Head"
            />
          </picture>
          <h3 className={styles.caption}>Steve Smith</h3>
          <p className={styles.title}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
};

export default TeamSection;
