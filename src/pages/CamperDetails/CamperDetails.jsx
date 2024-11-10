import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../redux/car/operations";
import {
  selectSelectedCamper,
  selectLoading,
  selectError,
} from "../../redux/car/selectors";

import styles from "./CamperDetails.module.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import CamperDetailsId from "../../components/CamperDetailsId/CamperDetailsId";
import IdCampersFeatures from "../../components/IdCampersFeatures/IdCampersFeatures";
import IdReviewsCampers from "../../components/IdReviewsCampers/IdReviewsCampers";
import CommentForm from "../../components/CommentForm/CommentForm";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function CamperDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectSelectedCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperDetails({ id }));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !camper) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.camperDetailsContainer}>
      <CamperDetailsId camper={camper} />
      <div className={styles.containerInfo}>
        <div className={styles.featuresReviews}>
          <h2
            className={activeTab === "features" ? styles.active : ""}
            onClick={() => setActiveTab("features")}
          >
            Features
          </h2>
          <h2
            className={activeTab === "reviews" ? styles.active : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </h2>
          <div
            className={styles.activeTabIndicator}
            style={{
              transform:
                activeTab === "features"
                  ? "translateX(0)"
                  : "translateX(120px)",
            }}
          />
        </div>

        <div className={styles.tabContent}>
          {activeTab === "features" && <IdCampersFeatures camper={camper} />}
          {activeTab === "reviews" && <IdReviewsCampers camper={camper} />}
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
