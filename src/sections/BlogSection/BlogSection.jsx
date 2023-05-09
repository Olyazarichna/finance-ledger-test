import styles from "./BlogSection.module.scss";
import { blog1x, blog2x, blogWebp1x, blogWebp2x } from "./gallery";
import Button from "../../components/Button/Button";

const BlogSection = () => {
  return (
    <section className={styles.blogSection} id='blog'>
      <picture className={styles.img}>
        <source
          srcSet={`${blogWebp1x} 1x, ${blogWebp2x} 2x`}
          type="image/webp" sizes='(max-width: 320px) 320px,
          (max-width: 768px) 368px,
          (max-width: 1360px) 670px' 
        />
        <source srcSet={`${blog1x} 1x, ${blog2x} 2x`} type="image/jpeg" sizes='(max-width: 320px) 320px,
          (max-width: 768px) 368px,
          (max-width: 1360px) 670px' />
        <img src={blog1x} alt="Tablet, book, cup" loading="lazy"/>
      </picture>

      <div className={styles.textWrapper}>
        <p className={styles.text}>April 16 2020</p>
        <h2 className={styles.heading}>Blog Post One</h2>
        <p className={styles.info}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <Button className={styles.btn}>Read Our Blog</Button>
      </div>
    </section>
  );
};

export default BlogSection;
