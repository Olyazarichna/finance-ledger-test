import style from "./Header.module.scss";
import Logo from "../Logo/Logo";
const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul className={style.navigationList}>
          <li className={style.listItem}>
            <a className={style.navigationListItem} href="/">
              Home
            </a>
          </li>
          <li className={style.listItem}>
            <a className={style.navigationListItem} href="/">
              About
            </a>
          </li>
          <li className={style.listItem}>
            <a className={style.navigationListItem} href="/">
              Cases
            </a>
          </li>
          <li className={style.listItem}>
            <a className={style.navigationListItem} href="/">
              Blog
            </a>
          </li>
          <li className={style.listItem}>
            <a className={style.navigationListItem} href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
