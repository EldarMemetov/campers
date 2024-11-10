import { useState } from "react";
import styles from "./CamperDetailsId.module.css";
import { FaStar } from "react-icons/fa";
import map from "../../image/svg/map.svg";

export default function CamperDetailsId({ camper }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

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
            <img
              className={styles.img}
              src={image.thumb}
              alt={`Camper view ${index + 1}`}
              key={index}
              onClick={() => toggleModal(image.original)}
            />
          ))
        ) : (
          <p>No gallery images available.</p>
        )}
      </div>
      <p className={styles.description}>{camper.description}</p>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Selected Camper"
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}
