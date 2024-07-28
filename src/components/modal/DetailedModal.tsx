import React, { FC } from "react";
import Modal from "./Modal";
import crossIcon from "@/assets/images/icon-cross.svg";
import Image from "next/image";

interface IProps {
  todo: TodoData;
  showDetailedModal: boolean;
  setShowDetailedModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailedModal: FC<IProps> = ({
  todo,
  showDetailedModal,
  setShowDetailedModal,
  setShowDeleteModal,
  setShowEditModal,
  setChecked,
}) => {
  const handleComplete = () => {
    setChecked((prev) => !prev);
    setShowDetailedModal(false);
  };

  const handleDeleteBtn = () => {
    setShowDetailedModal(false);
    setShowDeleteModal(true);
  };

  const handleEditBtn = () => {
    setShowDetailedModal(false);
    setShowEditModal(true);
  };

  return (
    <Modal className={`${showDetailedModal ? "flex" : "hidden"}`}>
      <div className="flex flex-col ">
        <div className="relative mb-3">
          <h2 className="text-xl w-full text-center">Details</h2>

          <Image
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2"
            src={crossIcon}
            alt="cancel"
            onClick={() => {
              setShowDetailedModal(false);
            }}
          />
        </div>

        <div className="w-full pt-[1px] bg-light-grayishBlue-Light dark:bg-dark-blue-grayishBlue-dark-XX" />

        <p dir="auto" className="mt-5 mb-5 text-3xl">
          {todo.text}
        </p>
        <p className="mb-5 text-right text-xs text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
          {todo.createdAt}
        </p>
        <div className="flex gap-2 justify-end items-center">
          <button
            className="px-4 py-1 bg-red-600 hover:bg-red-800 focus:bg-red-950 rounded-md text-white"
            onClick={handleDeleteBtn}
          >
            Delete
          </button>
          <button
            className="px-4 py-1 bg-yellow-600 hover:bg-yellow-800 focus:bg-yellow-950 rounded-md text-white"
            onClick={handleEditBtn}
          >
            Edit
          </button>
          <button
            className="px-4 py-1 bg-green-600 hover:bg-green-800 focus:bg-green-950 rounded-md text-white"
            onClick={handleComplete}
          >
            {!todo.completed ? "Completed" : "Active"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailedModal;
