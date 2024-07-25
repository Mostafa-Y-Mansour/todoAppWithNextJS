"use client";
import { FC, useState } from "react";
import TodoTask from "./TodoTask";

interface IProps extends ITodosState {}

const TodoList: FC<IProps> = ({ todos, setTodos }) => {
  const [action, setAction] = useState<Action>("all");

  function renderList() {
    if (!todos || !(todos.length > 0))
      return (
        <div className="p-4 text-center font-bold text-2xl text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
          <h3>No Todos are available yet...</h3>
        </div>
      );

    if (action === "completed") {
      const filtered = todos.filter((todo) => todo.completed);

      if (filtered.length === 0)
        return (
          <div className="p-4 text-center font-bold text-2xl text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
            <h3>there are no Completed Todo yet.</h3>
          </div>
        );

      return filtered.map((todo) => (
        <TodoTask todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ));
    }
    if (action === "active") {
      const filtered = todos.filter((todo) => !todo.completed);

      if (filtered.length === 0)
        return (
          <div className="p-4 text-center font-bold text-2xl text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
            <h3>No Todos are active yet. Create new one 😊🫰</h3>
          </div>
        );

      return filtered.map((todo) => {
        return (
          <TodoTask
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        );
      });
    }

    if (action === "all")
      return todos.map((todo: TodoData) => (
        <TodoTask todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ));
  }

  function ClearCompleted() {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <>
      <div className="m-auto w-full rounded-md bg-white dark:bg-dark-blue-veryDark-desaturated">
        {renderList()}
        {/* todo list count and actions */}
        {/* desktop action style */}
        <div className="mb-24 flex justify-between items-center p-4  max-[520px]:hidden mx-2 text-xs text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
          <span className="text-xs">
            {todos.length === 1 ? "1 item" : todos.length + " items"} left
          </span>
          <span className="flex gap-4 font-bold ml-10">
            <button
              className={`${
                action === "all" && "text-primary-brightBlue"
              } hover:text-dark-blue-veryDark hover:dark:text-white`}
              onClick={() => setAction("all")}
            >
              All
            </button>
            <button
              className={`${
                action === "active" && "text-primary-brightBlue"
              } hover:text-dark-blue-veryDark hover:dark:text-white`}
              onClick={() => setAction("active")}
            >
              Active
            </button>
            <button
              className={`${
                action === "completed" && "text-primary-brightBlue"
              } hover:text-dark-blue-veryDark hover:dark:text-white`}
              onClick={() => setAction("completed")}
            >
              Completed
            </button>
          </span>
          <span
            className="text-xs hover:text-dark-blue-veryDark hover:dark:text-white cursor-pointer"
            onClick={ClearCompleted}
          >
            Clear Completed
          </span>
        </div>
        {/* mobile action style */}
        <div className=" w-full p-4 hidden max-[520px]:block  text-xs text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
          <div className="flex justify-between w-full items-center">
            <span className="text-xs">
              {todos.length === 1 ? "1 item" : todos.length + " items"} left
            </span>
            <span
              className="text-xs hover:text-dark-blue-veryDark hover:dark:text-white cursor-pointer"
              onClick={ClearCompleted}
            >
              Clear Completed
            </span>
          </div>
        </div>
      </div>

      <div className="m-auto mt-5 w-full hidden max-[520px]:block rounded-md bg-white dark:bg-dark-blue-veryDark-desaturated">
        <div className="mb-24  w-full p-4  text-xs text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
          <span className="flex justify-center gap-4 font-bold ">
            <button
              className={`${
                action === "all" && "text-primary-brightBlue"
              } hover:text-dark-blue-veryDark hover:dark:text-white`}
              onClick={() => setAction("all")}
            >
              All
            </button>
            <button
              className={`${
                action === "active" && "text-primary-brightBlue"
              } hover:text-dark-blue-veryDark hover:dark:text-white`}
              onClick={() => setAction("active")}
            >
              Active
            </button>
            <button
              className={`${
                action === "completed" && "text-primary-brightBlue"
              } hover:text-dark-blue-veryDark hover:dark:text-white`}
              onClick={() => setAction("completed")}
            >
              Completed
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoList;
