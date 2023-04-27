import style from "./Logo.module.scss";
import logo from "../../images/gallery/logo.png";

const Logo = () => {
  return (
    <div className={style.logoWrapper}>
      <img className={style.logo} src={logo} alt="Company logo" />
      <p className={style.logoText}>
        <span className={style.logoSpan}>Finance</span>Ledger
      </p>
    </div>
  );
};
export default Logo;
