import { combineReducers } from "redux";
import CountReducer from "@/app/store/HabitsAddModal/reducer";

export const reducer = combineReducers({
  HabitsAddModal: CountReducer,
});
