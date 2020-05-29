const initialState = {
  loading: true,
  pages: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "START_LOADING":
      return { ...state, loading: payload };
    case "HOMEPAGES_FETCHED":
      return { pages: payload, loading: false };
    default:
      return state;
  }
};
