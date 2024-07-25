"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import crossImage from "@/assets/images/icon-cross.svg";
import editImage from "@/assets/images/icon-edit.svg";
import Check from "./Check";

interface IProps extends ITodosState {
  todo: TodoData;
}

const TodoTask: FC<IProps> = ({ todo, todos, setTodos }) => {
  const [checked, setChecked] = useState(todo.completed);

  useEffect(() => {
    const filtered = todos.filter(
      (filteredTodo) => filteredTodo.id !== todo.id
    );
    setTodos(
      [...filtered, { ...todo, completed: checked }].sort(
        (a, b) => b.createdTime - a.createdTime
      )
    );
  }, [checked]);

  // Add event handlers for edit and delete buttons here
  // Update the state of checked when the checkbox is clicked
  // Add event handlers for the edit and delete buttons to open the edit and delete modals respectively
  // Implement the functionality to save the edited task when the edit modal is closed
  // Implement the functionality to delete the task when the delete modal is closed

  return (
    <div className=" w-full mb-[1px] ">
      <div className="flex justify-between items-center *:hover:opacity-100">
        <Check checked={checked} setChecked={setChecked} />
        <p
          className={`w-10/12 text-xl ${
            checked
              ? " line-through text-light-grayishBlue-Light-XX dark:text-dark-blue-grayishBlue-dark"
              : ""
          }`}
        >
          {todo.text}
        </p>
        <div className="flex justify-between items-center gap-2 mr-4 opacity-0 hover:opacity-100 ">
          <Image
            src={editImage}
            alt="edit"
            width={20}
            className="cursor-pointer"
          />
          <Image
            src={crossImage}
            alt="delete"
            width={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-full pt-[1px] bg-light-grayishBlue-Light dark:bg-dark-blue-grayishBlue-dark-XX" />
    </div>
  );
};

export default TodoTask;
