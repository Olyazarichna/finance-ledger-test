import styles from "./Logo.module.scss";
import logo from "../../images/gallery/logo.png";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={logo} alt="Company logo" width={39} height={35} />
      <p className={styles.logoText}>
        <span className={styles.logoSpan}>Finance</span>Ledger
      </p>
    </div>
  );
};
export default Logo;
