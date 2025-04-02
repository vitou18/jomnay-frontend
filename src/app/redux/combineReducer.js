import { combineReducers } from "redux";
import authSlice from "../module/Auth/core/slice";
import layoutSlice from "../layout/core/slice";
const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
});

export default rootReducer;
