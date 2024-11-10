export const selectCampers = (state) => state.campers.campers;

export const selectSelectedCamper = (state) => state.campers.selectedCamper;

export const selectError = (state) => state.campers.error;

export const selectLoading = (state) => state.campers.loading;

export const selectCurrentPage = (state) => state.campers.currentPage;

export const selectFilters = (state) => state.campers.filters;

export const selectCampersState = (state) => state.campers;

export const selectFilterValues = (state) => state.campers.filters;

export const selectFilter = (filterName) => (state) =>
  state.campers.filters[filterName];

export const selectPagination = (state) => ({
  currentPage: state.campers.currentPage,
  shouldFetchNewData: state.campers.shouldFetchNewData,
});

export const selectFavorites = (state) => state.campers.favorites;
