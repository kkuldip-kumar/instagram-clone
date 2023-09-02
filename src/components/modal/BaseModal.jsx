import React from "react";
import { ModalHeader } from "./ModalHeader";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import BaseButton from "../buttons/BaseButton";
import { IoMdClose } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { twMerge } from "tailwind-merge";

export const BaseModal = ({ children, isModalOpen, closeModal, classes }) => {
  const closeModalHandler = async (e) => {
    if (e.target.id === "dialog") closeModal();
  };
  if (!isModalOpen) return null;
  return (
    //modal-backdrop
    <div className="">
      <div
        id="dialog"
        onClick={closeModalHandler}
        className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black bg-opacity-25"
      >
        {/* <div className="fixed right-4 top-4 z-50">
          <BaseButton classes="">
            <GrClose size={24} fill="#ffffff" stroke="#ffffff" className="" />
          </BaseButton>
        </div> */}
        <div className={twMerge(`rounded-md bg-white shadow-xl ${classes}`)}>
          {children}
        </div>
      </div>
    </div>
  );
};
