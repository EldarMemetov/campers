import logo from "../../image/logo/travelTrucks.png";
import style from "./HeaderLogo.module.css";
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to="/" className={style.logoLink}>
      <img
        src={logo}
        alt="logo"
        className={style.logo}
        width="136"
        height="15"
      />
    </Link>
  );
}
