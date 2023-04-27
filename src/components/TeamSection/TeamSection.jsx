import style from "./TeamSectiom.module.scss";
import person1_1x from "../../images/team/person1.jpg";
import person1_2x from "../../images/team/person1@2x.jpg";
import person1Webp1x from "../../images/team/person1.webp";
import person1Webp2x from "../../images/team/person1@2x.webp";

import person2_1x from "../../images/team/person2.jpg";
import person2_2x from "../../images/team/person2@2x.jpg";
import person2Webp1x from "../../images/team/person2.webp";
import person2Webp2x from "../../images/team/person2@2x.webp";

import person3_1x from "../../images/team/person3.jpg";
import person3_2x from "../../images/team/person3@2x.jpg";
import person3Webp1x from "../../images/team/person3.webp";
import person3Webp2x from "../../images/team/person3@2x.webp";

const TeamSection = () => {
  return (
    <section className={["container", style.teamSection].join(" ")}>
      <div className={style.textWrapper}>
        <p className={style.text}>Who we are</p>
        <h2 className={style.mainText}>Our Professional Team</h2>
        <p className={style.textInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>

      <ul>
        <li className={style.listItem}>
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
              src={person1_1x}
              alt="John Doe, president of company"
              width={280}
            />
          </picture>
          <h3 className={style.caption}>John Doe</h3>
          <p className={style.title}>President</p>
        </li>
        <li className={style.listItem}>
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
              src={person2_1x}
              alt="Jane Doe, Vice President of company"
              width={280}
            />
          </picture>
          <h3 className={style.caption}>Jane Doe</h3>
          <p className={style.title}>Vice President</p>
        </li>
        <li className={style.listItem}>
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
              src={person3_1x}
              alt="Steve Smith, Marketing Head"
              width={280}
            />
          </picture>
          <h3 className={style.caption}>Steve Smith</h3>
          <p className={style.title}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
};

export default TeamSection;
