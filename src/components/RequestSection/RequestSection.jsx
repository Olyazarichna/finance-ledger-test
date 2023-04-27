import contact1x from "../../images/home/contact.jpg";
import contact2x from "../../images/home/contact@2x.jpg";
import contactWebp1x from "../../images/home/contact.webp";
import contactWebp2x from "../../images/home/contact@2x.webp";
import style from "./RequestSection.module.scss";
import Form from "../Form/Form";
const RequestSection = () => {
  return (
    <section className={style.requestSection}>
      <picture>
        <source
          srcSet={`${contactWebp1x} 1x, ${contactWebp2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${contact1x} 1x, ${contact2x} 2x`} type="image/jpeg" />
        <img src={contact1x} alt="Contact person" width={320} />
      </picture>
      <h2 className={style.heading}>Request Callback</h2>
      <Form />
    </section>
  );
};

export default RequestSection;
