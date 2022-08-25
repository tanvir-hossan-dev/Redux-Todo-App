import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { colorChenged, status } from "../Redux/Filters/actions";
const numberOfTodos = (numbertodos) => {
  switch (numbertodos) {
    case 0:
      return "no task";
    case 1:
      return "1 task";
    default:
      return `${numbertodos} tasks`;
  }
};

const Footer = () => {
  const todos = useSelector((todo) => todo.todos);
  const filters = useSelector((filter) => filter.filters);
  const { status: filterStatus, colors } = filters;
  const dispatch = useDispatch();
  const todoRemaning = todos.filter((item) => !item.completed).length;
  const handleStatusChange = (statuschange) => {
    dispatch(status(statuschange));
  };
  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChenged(color, "removed"));
    } else {
      dispatch(colorChenged(color, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todoRemaning)}</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          onClick={() => handleStatusChange("All")}
          className={`cursor-pointer ${filterStatus === "All" && "font-bold"}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Incomplete")}
          className={`cursor-pointer ${
            filterStatus === "Incomplete" && "font-bold"
          }`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange("Complete")}
          className={`cursor-pointer ${
            filterStatus === "Complete" && "font-bold"
          }`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
