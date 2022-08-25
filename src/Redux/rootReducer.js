import { combineReducers } from "redux";
import filterReducer from "./Filters/filterReducer";
import todosReducer from "./Todos/todosReducer";

const rootReucer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export default rootReucer;
