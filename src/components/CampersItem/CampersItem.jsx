import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./CampersItem.module.css";
import ac from "../../image/svg/ac.svg";
import bathroom from "../../image/svg/bathroom.svg";
import kitchen from "../../image/svg/kitchen.svg";
import tv from "../../image/svg/tv.svg";
import radio from "../../image/svg/radio.svg";
import refrigerator from "../../image/svg/radio.svg";
import microwave from "../../image/svg/microwave.svg";
import gas from "../../image/svg/gas.svg";
import water from "../../image/svg/water.svg";
import map from "../../image/svg/map.svg";
import { FaStar } from "react-icons/fa";
import Favorites from "../Favorites/Favorites";

export default function CamperItem({ camper }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.campersItemContainer}>
      <div className={styles.imageContainer}>
        {camper.gallery.length > 0 && (
          <a
            href={camper.gallery[0].original}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.nonClickableLink}
            onClick={handleLinkClick}
          >
            <img
              src={camper.gallery[0].thumb}
              alt="Camper preview"
              className={styles.camperImage}
            />
          </a>
        )}
      </div>
      <div className={styles.campersInformation}>
        <div className={styles.cashAndName}>
          <h2 className={styles.namePrice}>{camper.name}</h2>
          <div className={styles.heart}>
            <p className={styles.namePrice}>€{camper.price}</p>
            <Favorites camperId={camper.id} />
          </div>
        </div>
        <div className={styles.ContainerReviewsRating}>
          <FaStar className={styles.starRatingLogo} />
          <p className={styles.reviewsRating}>
            {camper.rating} ({camper.reviews.length} Reviews)
          </p>
          <img
            src={map}
            alt="Air Conditioning"
            className={styles.icon}
            width="16"
            height="16"
          />
          <p className={styles.location}>{camper.location}</p>
        </div>
        <p
          className={styles.description}
          onClick={handleToggleDescription}
          style={{ whiteSpace: isExpanded ? "normal" : "nowrap" }}
        >
          {isExpanded
            ? camper.description
            : `${camper.description.slice(0, 60)}...`}
        </p>

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

        <Link to={`/catalog/${camper.id}`} className={styles.buttonShowMore}>
          Show more
        </Link>
      </div>
    </div>
  );
}
