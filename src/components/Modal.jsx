import React from "react";
import { GrClose } from "react-icons/gr";

const Modal = ({ title, content, btnText, btnFunc, onClose }) => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 bg-white shadow-lg rounded-md p-4">
        <div className="border-b py-3 flex items-center justify-between">
          <div className="text-2xl">{title}</div>
          <button onClick={onClose}>
            <GrClose size={24} />
          </button>
        </div>
        <div className="py-4">{content}</div>
        <div className="flex justify-end">
          <button
            onClick={btnFunc}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
