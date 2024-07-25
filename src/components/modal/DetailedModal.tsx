import React, { FC } from "react";
import Modal from "./Modal";

interface IProps {
  todo: TodoData;
  showDetailedModal: boolean;
  setShowDetailedModal: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailedModal: FC<IProps> = ({
  todo,
  showDetailedModal,
  setShowDetailedModal,
  setChecked,
}) => {
  const handleComplete = () => {
    setChecked((prev) => !prev);
    setShowDetailedModal(false);
  };

  return (
    <Modal className={`${showDetailedModal ? "flex" : "hidden"}`}>
      <div className="flex flex-col">
        <h2 className="text-xl text-center">Details</h2>
        <p className="mt-5 mb-3 text-3xl">{todo.text}</p>
        <p className="mb-2 text-right text-xs text-light-grayishBlue-Light-XX dark:text-light-grayishBlue-dark-XX">
          {todo.createdAt}
        </p>
        <div className="flex gap-8 justify-center items-center">
          <button
            className="px-4 py-1 bg-green-600 hover:bg-green-800 focus:bg-green-950 rounded-md text-white"
            onClick={handleComplete}
          >
            {!todo.completed ? "Complete" : "Don't Complete"}
          </button>
          <button
            className="hover:text-blue-500"
            onClick={() => {
              setShowDetailedModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailedModal;
