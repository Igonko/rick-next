import { combineReducers } from "redux";

import { reducer } from "../features/Home/Home.reducer";

export default combineReducers({
  characters: reducer,
});
