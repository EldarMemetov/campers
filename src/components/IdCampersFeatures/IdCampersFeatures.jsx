import styles from "./IdCampersFeatures.module.css";
import ac from "../../image/svg/ac.svg";
import bathroom from "../../image/svg/bathroom.svg";
import kitchen from "../../image/svg/kitchen.svg";
import tv from "../../image/svg/tv.svg";
import radio from "../../image/svg/radio.svg";
import refrigerator from "../../image/svg/radio.svg";
import microwave from "../../image/svg/microwave.svg";
import gas from "../../image/svg/gas.svg";
import water from "../../image/svg/water.svg";

export default function IdCampersFeatures({ camper }) {
  return (
    <div className={styles.containerDetails}>
      <ul className={styles.campersFeatures}>
        {camper.AC && (
          <li className={styles.listFeatures}>
            <img
              src={ac}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>AC</p>
          </li>
        )}
        {camper.bathroom && (
          <li className={styles.listFeatures}>
            <img
              src={bathroom}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Bathroom</p>
          </li>
        )}
        {camper.kitchen && (
          <li className={styles.listFeatures}>
            <img
              src={kitchen}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Kitchen</p>
          </li>
        )}
        {camper.TV && (
          <li className={styles.listFeatures}>
            <img
              src={tv}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>TV</p>
          </li>
        )}
        {camper.radio && (
          <li className={styles.listFeatures}>
            <img
              src={radio}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Radio</p>
          </li>
        )}
        {camper.refrigerator && (
          <li className={styles.listFeatures}>
            <img
              src={refrigerator}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Refrigerator</p>
          </li>
        )}
        {camper.microwave && (
          <li className={styles.listFeatures}>
            <img
              src={microwave}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Microwave</p>
          </li>
        )}
        {camper.gas && (
          <li className={styles.listFeatures}>
            <img
              src={gas}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Gas</p>
          </li>
        )}
        {camper.water && (
          <li className={styles.listFeatures}>
            <img
              src={water}
              alt="Air Conditioning"
              className={styles.icon}
              width="20"
              height="20"
            />
            <p className={styles.features}>Water</p>
          </li>
        )}
      </ul>
      <div className={styles.specsContainer}>
        <h2 className={styles.titleDetails}>Vehicle details</h2>
        <hr className={styles.separator} />
        <ul>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Form:</p>
            <p className={styles.detailsInfoCamper}>{camper.form}</p>
          </li>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Length:</p>
            <p className={styles.detailsInfoCamper}>{camper.length}</p>
          </li>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Width: </p>
            <p className={styles.detailsInfoCamper}>{camper.width}</p>
          </li>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Height: </p>
            <p className={styles.detailsInfoCamper}>{camper.height}</p>
          </li>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Tank Capacity:</p>
            <p className={styles.detailsInfoCamper}>{camper.tank}</p>
          </li>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Consumption:</p>
            <p className={styles.detailsInfoCamper}>{camper.consumption}</p>
          </li>
          {/* <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>
              Transmission: {camper.transmission}
            </p>
            <p className={styles.detailsInfoCamper}>{camper.transmission}</p>
          </li>
          <li className={styles.listCamperInfo}>
            <p className={styles.detailsInfoCamper}>Engine: {camper.engine}</p>
            <p className={styles.detailsInfoCamper}>{camper.engine}</p>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
