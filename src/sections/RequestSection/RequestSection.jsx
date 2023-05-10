import { contact1x, contact2x, contactWebp1x, contactWebp2x } from './gallery';
import styles from "./RequestSection.module.scss";
import Form from "../../components/Form/Form";

const RequestSection = () => {
  return (
    <section className={styles.requestSection} id='contact'>
      <picture className={styles.img}>
        <source
          srcSet={`${contactWebp1x} 1x, ${contactWebp2x} 2x`}
          type="image/webp" sizes='(max-width: 320px) 320px,
          (max-width: 768px) 368px,
          (max-width: 1360px) 670px'
        />
        <source srcSet={`${contact1x} 1x, ${contact2x} 2x`} type="image/jpeg" sizes='(max-width: 320px) 320px,
          (max-width: 768px) 368px,
          (max-width: 1360px) 670px'/>
        <img src={contact1x} alt="Contact person" loading='lazy'/>
      </picture>
      <Form />
    </section>
  );
};

export default RequestSection;
