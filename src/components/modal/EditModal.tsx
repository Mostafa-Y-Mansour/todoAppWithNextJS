"use client";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface IProps extends ITodosState {
  todo: TodoData;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: FC<IProps> = ({
  todo,
  todos,
  setTodos,
  showEditModal,
  setShowEditModal,
}) => {
  const [text, setText] = useState(todo.text);
  const textArea = useRef<HTMLTextAreaElement>(null);

  // this function automatically resize the height of the text area when we change the text in the edit window
  const autoResizeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = `auto`;
    target.style.height = `${target.scrollHeight + 5}px`;
  };

  // auto focus the text area whenever the edit window state is true
  useLayoutEffect(() => {
    if (textArea.current) {
      textArea.current.focus();
      const length = textArea.current.value.length;
      textArea.current.setSelectionRange(length, length);
    }
  }, [showEditModal]);

  // saving the edited text
  const handleEdit = () => {
    // Handle edit logic here
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    setTodos([...filteredTodos, { ...todo, text }]);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setShowEditModal(false);
  };

  // when the user cancels the editing we reset the text field to the default and close the modal
  const handleCancel = () => {
    setShowEditModal(false);
    setText(todo.text);
  };
  return (
    <Modal className={`${showEditModal ? "flex" : "hidden"}`}>
      <div className="flex flex-col">
        <h2 className="text-xl text-center mb-3">What Do you want to edit?</h2>

        <div className="w-full pt-[1px] bg-light-grayishBlue-Light dark:bg-dark-blue-grayishBlue-dark-XX" />

        <textarea
          id="edit"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onInput={autoResizeTextArea}
          onFocus={autoResizeTextArea}
          ref={textArea}
          dir="auto"
          placeholder="Edit you Todo..."
          className="my-5 w-full p-2 rounded-md bg-transparent outline-none text-xl resize-none border border-light-grayishBlue-Light dark:border-dark-blue-grayishBlue-dark-XX selection:bg-light-grayishBlue-dark"
        />

        <div className="flex gap-8 justify-end items-center">
          <button className="hover:text-blue-500" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="px-5 py-1 bg-blue-600 hover:bg-blue-800 focus:bg-blue-950 rounded-md text-white"
            onClick={handleEdit}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
