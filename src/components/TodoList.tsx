"use client";
import { FC, useEffect } from "react";
import TodoTask from "./TodoTask";

interface IProps extends ITodosState {}

const TodoList: FC<IProps> = ({ todos, setTodos }) => {
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  if (!todos || !(todos.length > 0))
    return (
      <div className="p-4 text-center font-bold text-2xl text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
        <h3>Create a new todo...</h3>
      </div>
    );

  return todos.map((todo: TodoData) => <TodoTask todo={todo} key={todo.id} />);
};

export default TodoList;
