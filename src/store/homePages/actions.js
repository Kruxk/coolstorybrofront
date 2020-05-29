import axios from "axios";
import { API_URL } from "../../config/resources";

export const loadHomepages = {
  type: "START_LOADING",
  payload: true,
};

export const homePagesFetched = (homePages) => {
  return {
    type: "HOMEPAGES_FETCHED",
    payload: homePages,
  };
};

export const fetchHomepages = async (dispatch, getState) => {
  try {
    dispatch(loadHomepages);
    const res = await axios.get(`${API_URL}/homepages`);

    dispatch(homePagesFetched(res.data));
  } catch (e) {
    console.log(e);
  }
};
