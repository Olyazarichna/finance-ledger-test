import style from "./BlogSection.module.scss";
import blog1x from "../../images/home/blog.jpg";
import blog2x from "../../images/home/blog@2x.jpg";
import blogWebp1x from "../../images/home/blog.webp";
import blogWebp2x from "../../images/home/blog@2x.webp";

const BlogSection = () => {
  return (
    <section className={style.blogSection}>
      <picture>
        <source
          srcSet={`${blogWebp1x} 1x, ${blogWebp2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${blog1x} 1x, ${blog2x} 2x`} type="image/jpeg" />
        <img src={blog1x} alt="Tablet, book, cup" width={320} />
      </picture>
      <div className={["container", style.textWrapper].join(" ")}>
        <p className={style.text}>April 16 2020</p>
        <h2 className={style.heading}>Blog Post One</h2>
        <p className={style.info}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button className={style.btn} type="button">
          Read Our Blog
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
