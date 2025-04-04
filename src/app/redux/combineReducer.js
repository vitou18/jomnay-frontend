import { combineReducers } from "redux";
import authSlice from "../module/Auth/core/slice";
import layoutSlice from "../layout/core/slice";
import dashboardSlice from "../module/Dashboard/core/slice";

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
  dashboard: dashboardSlice,
});

export default rootReducer;
