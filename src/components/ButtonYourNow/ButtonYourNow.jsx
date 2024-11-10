import { useNavigate } from "react-router-dom";
import styles from "./ButtonYourNow.module.css";
export const ButtonYourNow = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalog");
  };

  return (
    <button className={styles.buttonCatalog} onClick={handleButtonClick}>
      View Now
    </button>
  );
};
