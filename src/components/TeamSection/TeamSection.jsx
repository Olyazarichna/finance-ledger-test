import styles from "./TeamSectiom.module.scss";
import { people } from "./gallery";
import OverlayElement from "../OverlayElement/OverlayElement";

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
        {people.map((person, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.overlay}>
              <picture>
                <source srcSet={person.webpsrcset} type="image/webp" />
                <source srcSet={person.srcSet} type="image/jpeg" />
                <img className={styles.img} src={person.src} alt={person.alt} />
              </picture>
              <div className={styles.overlayElement}>
                <OverlayElement />
              </div>
            </div>
            <h3 className={styles.caption}>{person.name}</h3>
            <p className={styles.title}>{person.position}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamSection;
