import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const initialHeight = window.innerWidth >= 768 ? 70 : 120;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= initialHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialHeight]);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleSetInactive = () => {
    setActiveSection(null);
  };

  return (
    <header
      className={`${styles.headerContainer} ${
        isScrolled && styles.headerScrolled
      }`}
    >
      <Logo />
      <nav>
        <ul className={styles.navigationList}>
          <li
            className={`${styles.listItem} ${
              activeSection === "hero" && styles.active
            }`}
          >
            <Link
              className={styles.navigationLink}
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onSetActive={() => handleSetActive("hero")}
              onSetInactive={handleSetInactive}
            >
              Home
            </Link>
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === "about" && styles.active
            }`}
          >
            <Link
              className={styles.navigationLink}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              onSetActive={() => handleSetActive("about")}
              onSetInactive={handleSetInactive}
            >
              About
            </Link>
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === "cases" && styles.active
            }`}
          >
            <Link
              className={styles.navigationLink}
              activeClass="active"
              to="cases"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              onSetActive={() => handleSetActive("cases")}
              onSetInactive={handleSetInactive}
            >
              Cases
            </Link>
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === "blog" && styles.active
            }`}
          >
            <Link
              className={styles.navigationLink}
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              onSetActive={() => handleSetActive("blog")}
              onSetInactive={handleSetInactive}
            >
              Blog
            </Link>
          </li>
          <li
            className={`${styles.listItem} ${
              activeSection === "contact" && styles.active
            }`}
          >
            <Link
              className={styles.navigationLink}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-73}
              duration={500}
              onSetActive={() => handleSetActive("contact")}
              onSetInactive={handleSetInactive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
