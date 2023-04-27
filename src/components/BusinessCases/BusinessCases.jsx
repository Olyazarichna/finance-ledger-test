import style from "./BusinessCases.module.scss";
import cases1x from "../../images/cases/cases1.jpg";
import cases2x from "../../images/cases/cases1@2x.jpg";
import casesWebp1x from "../../images/cases/cases1.webp";
import casesWebp2x from "../../images/cases/cases1@2x.webp";

import cases2_1x from "../../images/cases/cases3.jpg";
import cases2_2x from "../../images/cases/cases5@2x.jpg";
import cases2Webp1x from "../../images/cases/cases3.webp";
import cases2Webp2x from "../../images/cases/cases3@2x.webp";

import cases3_1x from "../../images/cases/cases5.jpg";
import cases3_2x from "../../images/cases/cases5@2x.jpg";
import cases3Webp1x from "../../images/cases/cases5.webp";
import cases3Webp2x from "../../images/cases/cases5@2x.webp";

import cases4_1x from "../../images/cases/cases7.jpg";
import cases4_2x from "../../images/cases/cases7@2x.jpg";
import cases4Webp1x from "../../images/cases/cases7.webp";
import cases4Webp2x from "../../images/cases/cases7@2x.webp";

import cases5_1x from "../../images/cases/cases2.jpg";
import cases5_2x from "../../images/cases/cases2@2x.jpg";
import cases5Webp1x from "../../images/cases/cases2.webp";
import cases5Webp2x from "../../images/cases/cases2@2x.webp";

import cases6_1x from "../../images/cases/cases4.jpg";
import cases6_2x from "../../images/cases/cases4@2x.jpg";
import cases6Webp1x from "../../images/cases/cases4.webp";
import cases6Webp2x from "../../images/cases/cases4@2x.webp";
const BusinessCases = () => {
  return (
    <section className={['container',style.businessCasesSection].join(' ')}>
        <div className={style.textWrapper}>
           <p className={style.text}>This is what we do</p>
      <h2 className={style.mainText}>Business Cases</h2>
      <p className={style.textInfo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>   
        </div>
    
      <ul className={style.list}>
        <li className={style.listItem}>
          <picture>
            <source
              srcSet={`${casesWebp1x} 1x, ${casesWebp2x} 2x`}
              type="image/webp"
            />
            <source srcSet={`${cases1x} 1x, ${cases2x} 2x`} type="image/jpeg" />
            <img src={cases1x} alt="People in our company" width={280} />
          </picture>
        </li>
        <li className={style.listItem}>
          <picture>
            <source
              srcSet={`${cases2Webp1x} 1x, ${cases2Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases2_1x} 1x, ${cases2_2x} 2x`}
              type="image/jpeg"
            />
            <img src={cases2_1x} alt="Laptop, notebook" width={280} />
          </picture>
        </li>
        <li className={style.listItem}>
          <picture>
            <source
              srcSet={`${cases3Webp1x} 1x, ${cases3Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases3_1x} 1x, ${cases3_2x} 2x`}
              type="image/jpeg"
            />
            <img src={cases3_1x} alt="Handshake" width={280} />
          </picture>
        </li>
        <li className={style.listItem}>
          <picture>
            <source
              srcSet={`${cases4Webp1x} 1x, ${cases4Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases4_1x} 1x, ${cases4_2x} 2x`}
              type="image/jpeg"
            />
            <img src={cases4_1x} alt="People in our company, handshake" width={280} />
          </picture>
        </li>
        <li className={style.listItem}>
          <picture>
            <source
              srcSet={`${cases5Webp1x} 1x, ${cases5Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases5_1x} 1x, ${cases5_2x} 2x`}
              type="image/jpeg"
            />
            <img src={cases5_1x} alt="People work" width={280} />
          </picture>
        </li>
        <li className={style.listItem}>
          <picture>
            <source
              srcSet={`${cases6Webp1x} 1x, ${cases6Webp2x} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${cases6_1x} 1x, ${cases6_2x} 2x`}
              type="image/jpeg"
            />
            <img src={cases6_1x} alt="Buildings" width={280} />
          </picture>
        </li>
      </ul>
    </section>
  );
};

export default BusinessCases;
