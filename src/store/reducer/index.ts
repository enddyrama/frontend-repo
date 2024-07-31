// store/rootReducer.ts
import { combineReducers } from "redux";
import AuthReducer from "./auth/AuthReducer";
import DataReducer from "./data/DataReducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  data: DataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
