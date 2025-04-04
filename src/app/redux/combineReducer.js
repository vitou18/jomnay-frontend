import { combineReducers } from "redux";
import authSlice from "../module/Auth/core/slice";
import layoutSlice from "../layout/core/slice";
import dashboardSlice from "../module/Dashboard/core/slice";
import incomeSlice from "../module/Income/core/slice";

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
  dashboard: dashboardSlice,
  income: incomeSlice,
});

export default rootReducer;
