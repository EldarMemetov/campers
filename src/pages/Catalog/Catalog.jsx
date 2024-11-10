import { useDispatch, useSelector } from "react-redux";
import CamperList from "../../components/CampersList/CamperList";
import FilterForm from "../../components/FilterForm/FilterForm";
import Loading from "../../components/Loading/Loading";
import styles from "./Catalog.module.css";
import { useEffect } from "react";
import { fetchAllCampers } from "../../redux/car/operations";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectFilters,
  selectCurrentPage,
  selectFavorites,
} from "../../redux/car/selectors";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const currentPage = useSelector(selectCurrentPage);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    const fetchCampersWithFilters = async () => {
      const currentPageValue = currentPage || 1;
      dispatch(fetchAllCampers({ filters, page: currentPageValue }));
    };

    if (filters && currentPage) {
      fetchCampersWithFilters();
    }
  }, [filters, currentPage, dispatch]);

  const sortedCampers = [...campers].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id);
    const bIsFavorite = favorites.includes(b.id);
    return bIsFavorite - aIsFavorite;
  });

  return (
    <div className={styles.infoContainer}>
      <FilterForm />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <CamperList campers={sortedCampers} />
    </div>
  );
}
