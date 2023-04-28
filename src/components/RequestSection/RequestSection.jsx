import { contact1x, contact2x, contactWebp1x, contactWebp2x } from './gallery';
import styles from "./RequestSection.module.scss";
import Form from "../Form/Form";

const RequestSection = () => {
  return (
    <section className={styles.requestSection}>
      <picture>
        <source
          srcSet={`${contactWebp1x} 1x, ${contactWebp2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${contact1x} 1x, ${contact2x} 2x`} type="image/jpeg" />
        <img className={styles.img} src={contact1x} alt="Contact person" />
      </picture>
      <Form />
    </section>
  );
};

export default RequestSection;
