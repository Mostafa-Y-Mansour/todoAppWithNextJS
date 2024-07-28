import React, { FC } from "react";
import Modal from "./Modal";


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
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setShowDeleteModal(false);
  };

  return (
    <Modal className={`${showDeleteModal ? "flex" : "hidden"}`}>
      <div className="flex flex-col">
        <h2 className="text-xl text-center mb-3">
          Are you sure you want to delete?
        </h2>

        <div className="w-full pt-[1px] bg-light-grayishBlue-Light dark:bg-dark-blue-grayishBlue-dark-XX" />

        <p dir="auto" className="my-5 mb-10 text-3xl">
          {todo.text}
        </p>
        <div className="flex gap-8 justify-end items-center">
          <button
            className="hover:text-blue-500"
            onClick={() => {
              setShowDeleteModal(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-1 bg-red-600 hover:bg-red-800 focus:bg-red-950 rounded-md text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
