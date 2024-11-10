import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { selectFavorites } from "../../redux/car/selectors";
import { addFavorite, removeFavorite } from "../../redux/car/slice";
import { toast } from "react-hot-toast";

export default function Favorites({ camperId }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camperId);

  const toggleFavorite = () => {
    try {
      if (isFavorite) {
        dispatch(removeFavorite(camperId));
        toast.success("Removed from favorites!");
      } else {
        dispatch(addFavorite(camperId));
        toast.success("Added to favorites!");
      }
    } catch (error) {
      toast.error("An error occurred while updating favorites!");
      console.error(error);
    }
  };

  return (
    <div>
      <FaHeart
        onClick={toggleFavorite}
        style={{ color: isFavorite ? "red" : "grey", cursor: "pointer" }}
        size={24}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      />
    </div>
  );
}
