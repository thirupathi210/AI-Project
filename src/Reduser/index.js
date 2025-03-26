import { combineReducers } from "redux";
import authReduser from "./authReduser";

const rootReducer = combineReducers({
  auth: authReduser
});

export default rootReducer; // ✅ Correct export
