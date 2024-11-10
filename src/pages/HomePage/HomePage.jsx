import { ButtonYourNow } from "../../components/ButtonYourNow/ButtonYourNow";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.titleContainer}>
        <h1 className={styles.campersTitle}>Campers of your dreams</h1>
        <p className={styles.catalogTitle}>
          You can find everything you want in our catalog
        </p>
        <ButtonYourNow />
      </div>
    </div>
  );
}
