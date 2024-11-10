import styles from "./LocationForm.module.css";
import map from "../../image/svg/map.svg";

export default function LocationForm({ value, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.formContainer}>
      <label className={styles.textLabel} htmlFor="location">
        Location
      </label>
      <div className={styles.inputWrapper}>
        <img
          src={map}
          alt="Map Icon"
          className={styles.icon}
          width="20"
          height="20"
        />
        <input
          id="location"
          className={styles.inputField}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
        />
      </div>
    </div>
  );
}
