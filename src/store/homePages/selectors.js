export const selectHomepages = (state) => {
  return state.homePages.pages;
};

export const selectHomePagesloading = (state) => {
  return state.homePages.loading;
};

export const selectSinglePage = (id) => (state) => {
  return state.homePages.pages.find((homepage) => homepage.id === parseInt(id));
};
