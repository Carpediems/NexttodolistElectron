import { legacy_createStore as createStore } from "redux";
import { reducer } from "@/app/store/reducer";

export const store = createStore(reducer);
