import style from "./BespokeSolutions.module.scss";
import people1x from "../../images/home/people.jpg";
import people2x from "../../images/home/people@2x.jpg";
import peopleWebp1x from "../../images/home/people.webp";
import peolpeWebp2x from "../../images/home/people@2x.webp";

const BespokeSolutions = () => {
  return (
    <section className={style.bespokeSolutions}>
      <picture>
        <source
          srcSet={`${peopleWebp1x} 1x, ${peolpeWebp2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${people1x} 1x, ${people2x} 2x`} type="image/jpeg" />
        <img src={people1x} alt="People in our company" width={320} />
      </picture>
      <div className={["container", style.textWrapper].join(" ")}>
        <p className={style.text}>What you are looking for</p>
        <h2 className={style.heading}>We provide bespoke solutions</h2>
        <p className={style.info}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={style.btn} type="button">
          Read More
        </button>
      </div>
    </section>
  );
};
export default BespokeSolutions;
