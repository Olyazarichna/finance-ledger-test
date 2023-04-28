import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav>
        <ul className={styles.navigationList}>
          <li className={styles.listItem}>
            <a className={styles.navigationLink} href="/">
              Home
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navigationLink} href="/">
              About
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navigationLink} href="/">
              Cases
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navigationLink} href="/">
              Blog
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.navigationLink} href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
