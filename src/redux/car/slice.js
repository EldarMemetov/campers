import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperDetails } from "./operations";

// Початковий стан для редуктора
const initialState = {
  campers: [], // Список кемперів
  selectedCamper: null, // Обраний кемпер
  loading: false, // Статус завантаження
  error: null, // Помилка при завантаженні
  filters: {
    // Фільтри для пошуку кемперів
    location: "", // Місце
    form: "", // Тип автомобіля
    equipment: {
      // Обладнання
      AC: false,
      kitchen: false,
      bathroom: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
    },
  },
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], // Улюблені кемпери
  currentPage: 1,
  totalItems: 0,
  shouldFetchNewData: false,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    // Оновлюємо фільтри
    setFilters(state, action) {
      const newFilters = action.payload;
      state.filters = {
        location: newFilters.location || "",
        form: newFilters.form || "",
        equipment: newFilters.equipment || initialState.filters.equipment,
      };
      state.shouldFetchNewData = true;
    },

    // Оновлюємо конкретний фільтр
    setFilter(state, action) {
      const { filter, value } = action.payload;
      if (filter in state.filters) {
        if (filter === "equipment") {
          state.filters.equipment = { ...state.filters.equipment, ...value };
        } else {
          state.filters[filter] = Array.isArray(value) ? value : value || "";
        }
        state.shouldFetchNewData = true;
      }
    },

    // Додаємо кемпера до улюблених
    addFavorite(state, action) {
      const camperId = action.payload;
      if (!state.favorites.includes(camperId)) {
        state.favorites.push(camperId);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    // Видаляємо кемпера з улюблених
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (camperId) => camperId !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    // Оновлюємо поточну сторінку
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      state.shouldFetchNewData = true;
    },

    resetFilters(state) {
      state.filters = initialState.filters;
      state.shouldFetchNewData = true;
    },

    resetShouldFetchNewData(state) {
      state.shouldFetchNewData = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Операція для завантаження кемперів
      .addCase(fetchAllCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload.items || [];
        state.totalItems = action.payload.total || 0;
        state.error = null;
        state.shouldFetchNewData = false;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ||
          "Failed to load camper data. Please try again later.";
        state.shouldFetchNewData = false;
      })

      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCamper = action.payload;
        state.error = null;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error while fetching data.";
      });
  },
});

export const {
  setFilters,
  setFilter,
  addFavorite,
  removeFavorite,
  setCurrentPage,
  resetFilters,
  resetShouldFetchNewData,
} = campersSlice.actions;

export default campersSlice.reducer;
