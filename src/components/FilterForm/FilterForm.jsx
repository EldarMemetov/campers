import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/car/slice";
import { fetchAllCampers } from "../../redux/car/operations";
import { useState, useEffect } from "react";
import LocationForm from "../LocationForm/LocationForm";
import FilterOptions from "../FilterOptions/FilterOptions";
import CarTypeFilter from "../CarTypeFilter/CarTypeFilter";
import { Toaster, toast } from "react-hot-toast";
import styles from "./FilterForm.module.css";

export default function FilterForm() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.campers.filters);

  const [localFilters, setLocalFilters] = useState(filters);
  const [loading, setLoading] = useState(false);
  const [hasFetchedData, setHasFetchedData] = useState(false);

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

  const applyFilters = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      dispatch(setFilters(localFilters));

      const campers = await dispatch(
        fetchAllCampers({ filters: localFilters, page: 1 })
      );

      if (campers.length === 0) {
        if (!hasFetchedData) {
          toast.error("No campers found for your search.");
          setHasFetchedData(true);
        }
      } else {
        if (!hasFetchedData) {
          toast.success("Filters applied successfully!");
          setHasFetchedData(true);
        }
      }
    } catch (error) {
      console.log("Error details:", error);
      toast.error("Error applying filters. Please try again.");
    } finally {
      setLoading(false);
    }
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
      <button
        type="submit"
        className={styles.buttonShowMore}
        disabled={loading}
      >
        {loading ? "Loading..." : "Search"}{" "}
      </button>

      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
}
