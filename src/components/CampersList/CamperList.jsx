import { useState } from "react";
import CampersItem from "../campersItem/campersItem";
import styles from "./CampersList.module.css";
import Loading from "../Loading/Loading";
import { Toaster, toast } from "react-hot-toast";

export default function CamperList({ campers, loading }) {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
    toast.success("New campers loaded!");
  };

  const showLoadMore = campers.length > visibleCount;

  return (
    <div className={styles.listContainer}>
      {loading && <Loading />}
      {campers.slice(0, visibleCount).map((camper, index) => (
        <CampersItem
          key={camper.id}
          camper={camper}
          style={{ "--index": index }}
        />
      ))}
      {showLoadMore && (
        <button onClick={loadMore} className={styles.ButtonLoad}>
          Load More
        </button>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
