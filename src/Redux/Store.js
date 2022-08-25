import { legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReucer from "./rootReducer";

const Store = legacy_createStore(rootReucer, composeWithDevTools());

export default Store;
