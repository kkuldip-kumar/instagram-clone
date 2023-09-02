import React from "react";
import BaseButton from "../buttons/BaseButton";
import { IoMdClose } from "react-icons/io";

export const ModalHeader = ({ children, title }) => {
  return (
    <>
      {title ? (
        <div className="dark:border-gray-700 flex items-center justify-between border-b border-slate-300 px-4 py-3">
          <h3 className="text-gray-800 mx-auto text-center font-semibold dark:text-white">
            {title}
          </h3>
          <BaseButton
            type="button"
            classes="text-gray-500 hover:text-gray-400  flex-shrink-0  transition-all focus:outline-none"
          >
            <IoMdClose size={32} className="fill-black" />
          </BaseButton>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};
