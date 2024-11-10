import styles from "./CarTypeFilter.module.css";
import van from "../../image/svg/van.svg";
import integrated from "../../image/svg/integrated.svg";
import alcove from "../../image/svg/alcove.svg";

export default function CarTypeFilter({ value, onChange }) {
  const toggleCarType = (form) => {
    const newForm = value === form ? "" : form;
    onChange(newForm);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Vehicle type</h2>
      <hr className={styles.divider1} />
      <ul className={styles.filterList}>
        <li className={styles.listItem}>
          <label
            className={`${styles.buttonFilter} ${
              value === "panelTruck" ? styles.selected : ""
            }`}
            onClick={() => toggleCarType("panelTruck")}
          >
            <img
              src={van}
              alt="Van"
              className={styles.icon}
              width="20"
              height="20"
            />
            Van
          </label>
        </li>
        <li className={styles.listItem}>
          <label
            className={`${styles.buttonFilter} ${
              value === "fullyIntegrated" ? styles.selected : ""
            }`}
            onClick={() => toggleCarType("fullyIntegrated")}
          >
            <img
              src={integrated}
              alt="Fully Integrated"
              className={styles.icon}
              width="20"
              height="20"
            />
            Integrated
          </label>
        </li>
        <li className={styles.listItem}>
          <label
            className={`${styles.buttonFilter} ${
              value === "alcove" ? styles.selected : ""
            }`}
            onClick={() => toggleCarType("alcove")}
          >
            <img
              src={alcove}
              alt="Alcove"
              className={styles.icon}
              width="20"
              height="20"
            />
            Alcove
          </label>
        </li>
      </ul>
    </div>
  );
}
