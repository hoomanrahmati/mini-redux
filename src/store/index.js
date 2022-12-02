import { createStore, applyMiddleware } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reduccer from "./reducer";

const store = createStore(
  reduccer,
  // applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
