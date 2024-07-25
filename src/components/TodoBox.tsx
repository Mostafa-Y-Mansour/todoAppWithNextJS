"use client";

import { FC, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import SaveTodoBtn from "./SaveTodoBtn";

interface IProps extends ITodosState {}

const TodoBox: FC<IProps> = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handleSave = () => {
    const todoData: TodoData = {
      id: uuid(),
      text: todo,
      completed: false,
      createdAt: new Date(),
      createdTime: +new Date(),
    };
    // save to local storage
    setTodos((prev) =>
      [...prev, todoData].sort((a, b) => b.createdTime - a.createdTime)
    );

    // clear input field
    setTodo("");
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

 

  return (
    <div className="bg-white dark:bg-dark-blue-veryDark-desaturated rounded flex justify-between">
      <div className="flex items-center p-4">
        <SaveTodoBtn todo={todo} onClick={handleSave} />
      </div>

      <input
        dir="auto"
        onChange={handleChange}
        onKeyDown={onEnter}
        type="text"
        name="To-Do text"
        placeholder="Create a new todo..."
        className="w-11/12 mr-3 py-5 rounded-md bg-transparent border-none outline-none text-xl"
        value={todo}
      />
    </div>
  );
};

export default TodoBox;
