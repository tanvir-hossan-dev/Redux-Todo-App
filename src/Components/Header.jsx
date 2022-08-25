import React, { useState } from "react";
import notes from "../assets/notes.png";
import double from "../assets/double-tick.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../Redux/Todos/actions";
import shortid from "shortid";
import plusimg from "../assets/plus.png";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added({ text, id: shortid, completed: false, color: "yellow" }));
    setText("");
  };
  const handleComplete = () => {
    dispatch(allCompleted());
  };
  const handleClear = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={notes} class="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
        >
          <img src={plusimg} alt="" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={handleComplete} className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={double} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClear}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
