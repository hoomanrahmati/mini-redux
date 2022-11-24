import { createStore } from "redux";
import reduccer from "./reducer";

const store = createStore(reduccer);
export default store;
