import clsx from "clsx";
import styles from "./FilterOptions.module.css";
import ac from "../../image/svg/ac.svg";
import bathroom from "../../image/svg/bathroom.svg";
import kitchen from "../../image/svg/kitchen.svg";
import tv from "../../image/svg/tv.svg";
import radio from "../../image/svg/radio.svg";
import refrigerator from "../../image/svg/refrigerator.svg";
import microwave from "../../image/svg/microwave.svg";
import gas from "../../image/svg/gas.svg";
import water from "../../image/svg/water.svg";

export default function FilterOptions({ values, onChange }) {
  const toggleFilter = (filter) => {
    const newFilters = { ...values, [filter]: !values[filter] };
    onChange(newFilters);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Vehicle equipment</h2>
      <hr className={styles.divider} />
      <ul className={styles.filterList}>
        {[
          { label: "AC", icon: ac },
          { label: "kitchen", icon: kitchen },
          { label: "TV", icon: tv },
          { label: "bathroom", icon: bathroom },
          { label: "radio", icon: radio },
          { label: "refrigerator", icon: refrigerator },
          { label: "microwave", icon: microwave },
          { label: "gas", icon: gas },
          { label: "water", icon: water },
        ].map(({ label, icon }) => (
          <li className={styles.listItem} key={label}>
            <label
              className={clsx(styles.buttonFilter, {
                [styles.selected]: values[label],
              })}
            >
              <input
                type="checkbox"
                checked={values[label] || false}
                onChange={() => toggleFilter(label)}
                className={styles.hiddenCheckbox}
              />
              <img
                src={icon}
                alt={label}
                className={styles.icon}
                width="20"
                height="20"
              />
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
