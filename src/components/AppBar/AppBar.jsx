import HeaderLogo from "../HeaderLogo/HeaderLogo";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <div className={styles.centerNav}>
        <Navigation />
      </div>
    </header>
  );
};
