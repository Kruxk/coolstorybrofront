import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homePages from "./homePages/reducer";

export default combineReducers({
  appState,
  user,
  homePages,
});
