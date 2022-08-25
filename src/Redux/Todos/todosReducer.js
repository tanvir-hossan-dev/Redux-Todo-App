import shortid from "shortid";
import {
  ADDED,
  TOGOLED,
  CLEARCOMPLETED,
  DELETED,
  ALLCOMPLETED,
  COLORCHENGED,
} from "./actionTypes";

const initialState = [
  {
    id: shortid.generate(),
    text: "This is redux",
    completed: true,
  },
  {
    id: shortid.generate(),
    text: "This is redux",
    completed: false,
    color: "green",
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [...state, action.payload];

    case TOGOLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORCHENGED:
      const { todoId, color } = action.payload;

      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color: color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
