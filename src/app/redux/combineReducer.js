import { combineReducers } from "redux";
import authSlice from "../module/Auth/core/slice";

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
