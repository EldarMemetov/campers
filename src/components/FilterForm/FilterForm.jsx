import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/car/slice";
import { fetchAllCampers } from "../../redux/car/operations";
import { useState, useEffect } from "react";
import LocationForm from "../LocationForm/LocationForm";
import FilterOptions from "../FilterOptions/FilterOptions";
import CarTypeFilter from "../CarTypeFilter/CarTypeFilter";
import styles from "./FilterForm.module.css";

export default function FilterForm() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);

  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleLocationChange = (location) => {
    setLocalFilters((prev) => ({ ...prev, location }));
  };

  const handleEquipmentChange = (equipment) => {
    setLocalFilters((prev) => ({
      ...prev,
      equipment: { ...prev.equipment, ...equipment },
    }));
  };

  const handleCarTypeChange = (form) => {
    setLocalFilters((prev) => ({ ...prev, form }));
  };

  const applyFilters = (event) => {
    event.preventDefault();
    dispatch(setFilters(localFilters));
    dispatch(fetchAllCampers({ filters: localFilters, page: 1 }));
  };

  return (
    <form onSubmit={applyFilters} className={styles.containerFilter}>
      <LocationForm
        value={localFilters.location}
        onChange={handleLocationChange}
      />
      <FilterOptions
        values={localFilters.equipment}
        onChange={handleEquipmentChange}
      />
      <CarTypeFilter value={localFilters.form} onChange={handleCarTypeChange} />
      <button type="submit" className={styles.buttonShowMore}>
        Search
      </button>
    </form>
  );
}
