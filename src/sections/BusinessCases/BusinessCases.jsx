import styles from "./BusinessCases.module.scss";
import BackDrop from "../../components/Backdrop/Backdrop";
import Lightbox from "react-spring-lightbox";
import { useState } from "react";
import { images } from "./gallery";

const BusinessCases = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gotoPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  const gotoNext = () => {
    if (currentImageIndex + 1 < images.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentImageIndex(index);
  };
  const closeLightbox = () => {
    setIsOpen(false);
  };
  return (
    <section className={styles.businessCasesSection} id='cases'>
      <div className={styles.textWrapper}>
        <p className={styles.text}>This is what we do</p>
        <h2 className={styles.heading}>Business Cases</h2>
        <p className={styles.textInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className={styles.list}>
        {images.map((image, index) => (
          <li key={index} className={styles.listItem}>
            <button className={styles.btn} onClick={() => openLightbox(index)}>
              <picture>
                <source srcSet={image.webpsrcset} type="image/webp" sizes='(max-width: 320px) 280px,
            (max-width: 768px) 223px,
            (max-width: 1360px) 421px'/>
                <source srcSet={image.srcSet} type="image/jpeg" sizes='(max-width: 320px) 280px,
            (max-width: 768px) 222px,
            (max-width: 1360px) 421px' />
                <img
                  src={image.src}
                  alt={image.alt}
                  loading='lazy'
                />
              </picture>
            </button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <>
          <BackDrop onClick={closeLightbox} />
          <Lightbox
            isOpen={isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            onClose={closeLightbox}
            images={images}
            currentIndex={currentImageIndex}
            renderPrevButton={({ canPrev }) => {
              return (
                canPrev && (
                  <button className={styles.lightboxBtn} onClick={gotoPrevious}>
                    <svg
                      className={styles.btnRL}
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="68"
                    >
                      <path d="M37.535 2.18a5 5 0 0 1 0 7.07L12.785 34l24.75 24.75a5 5 0 0 1-7.07 7.07L2.18 37.535a5 5 0 0 1 0-7.07L30.465 2.18a5 5 0 0 1 7.07 0Z" />
                    </svg>
                  </button>
                )
              );
            }}
            renderNextButton={({ canNext }) => {
              return (
                canNext && (
                  <button className={styles.lightboxBtn} onClick={gotoNext}>
                    <svg
                      className={styles.btnRL}
                      xmlns="http://www.w3.org/2000/svg"
                      width="39"
                      height="68"
                    >
                      <path d="M1.465 2.18a5 5 0 0 0 0 7.07L26.215 34 1.465 58.75a5 5 0 0 0 7.07 7.07L36.82 37.535a5 5 0 0 0 0-7.07L8.535 2.18a5 5 0 0 0-7.07 0Z" />
                    </svg>
                  </button>
                )
              );
            }}
            springConfig={{ tension: 170, friction: 26 }}
          />
        </>
      )}
    </section>
  );
};

export default BusinessCases;
