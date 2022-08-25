import React from "react";
import { useSelector } from "react-redux";
import Todoitem from "./Todoitem";

const Todos = () => {
  const todos = useSelector((item) => item.todos);
  const filters = useSelector((item) => item.filters);

  const filterBystatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Incomplete":
        return !todo.completed;
      case "Complete":
        return todo.completed;
      default:
        return true;
    }
  };
  const filterBycolors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterBystatus)
        .filter(filterBycolors)
        .map((todo) => (
          <Todoitem todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default Todos;
