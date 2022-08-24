import React from "react";
import Todoitem from "./Todoitem";

const Todos = () => {
  return (
    <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <Todoitem />
    </div>
  );
};

export default Todos;
