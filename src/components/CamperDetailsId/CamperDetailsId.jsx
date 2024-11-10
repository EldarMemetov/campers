import styles from "./CamperDetailsId.module.css";
import { FaStar } from "react-icons/fa";
import map from "../../image/svg/map.svg";
import ModalImage from "react-modal-image";

export default function CamperDetailsId({ camper }) {
  const gallery = Array.isArray(camper.gallery) ? camper.gallery : [];

  return (
    <div>
      <h2 className={styles.name}>{camper.name}</h2>
      <div className={styles.ContainerReviewsRating}>
        <div className={styles.containerLocationReviews}>
          <FaStar className={styles.starRatingLogo} />
          <p className={styles.reviewsRating}>
            {camper.rating} (
            {Array.isArray(camper.reviews) ? camper.reviews.length : 0} Reviews)
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
        <p className={styles.price}>€{camper.price}</p>
      </div>

      <div className={styles.galleryContainer}>
        {gallery.length > 0 ? (
          gallery.map((image, index) => (
            <ModalImage
              small={image.thumb}
              large={image.original}
              alt={`Camper view ${index + 1}`}
              className={styles.img}
              key={index}
            />
          ))
        ) : (
          <p>No gallery images available.</p>
        )}
      </div>
      <p className={styles.description}>{camper.description}</p>
    </div>
  );
}
