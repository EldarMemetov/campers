import styles from "./IdReviewsCampers.module.css";
import { FaStar } from "react-icons/fa";

export default function IdReviewsCampers({ camper }) {
  return (
    <div className={styles.reviewsContainer}>
      {camper.reviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <div className={styles.reviewerInfo}>
            <div className={styles.initialCircle}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <p className={styles.name}>{review.reviewer_name}</p>
          </div>
          <div className={styles.starRating}>
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < review.reviewer_rating
                    ? styles.starFilled
                    : styles.starEmpty
                }
              />
            ))}
          </div>

          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
