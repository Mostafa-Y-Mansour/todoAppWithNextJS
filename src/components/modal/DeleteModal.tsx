import React, { FC } from "react";
import Modal from "./Modal";
import crossImage from "@/assets/images/icon-cross.svg";
import Image from "next/image";

interface IProps extends ITodosState {
  todo: TodoData;
  showDeleteModal: boolean;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal: FC<IProps> = ({
  showDeleteModal,
  setShowDeleteModal,
  todo,
  todos,
  setTodos,
}) => {
  const handleDelete = () => {
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
    setShowDeleteModal(false);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <Modal className={`${showDeleteModal ? "flex" : "hidden"}`}>
      <div className="flex flex-col">
        <h2 className="text-xl text-center">Delete</h2>
        <p className="my-5 text-3xl">{todo.text}</p>
        <div className="flex gap-8 justify-center items-center">
          <button
            onClick={handleDelete}
            className="px-4 py-1 bg-red-600 hover:bg-red-800 focus:bg-red-950 rounded-md text-white"
          >
            Delete
          </button>
          <button
            className="hover:text-blue-500"
            onClick={() => {
              setShowDeleteModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
