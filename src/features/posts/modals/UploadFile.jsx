import BaseButton from "@/components/buttons/BaseButton";
import { BaseModal } from "@/components/modal/BaseModal";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { ModalHeader } from "@/components/modal/ModalHeader";
import EmptyProfileContent from "@/features/user/EmptyProfileContent";
import React, { useEffect, useMemo, useState } from "react";
import { BsCamera } from "react-icons/bs";
import EmptyPost from "../EmptyPost";
import { MdOutlineArrowBack } from "react-icons/md";
import { CreatePost } from "./CreatePost";

export const UploadFile = ({ openModal }) => {
  const [modalState, setModalState] = useState(true);
  const [previewUrl, setPreviewUrl] = useState("");
  const [fileAvailable, setFileAvailable] = useState(null);
  const [nextPage, setNextPage] = useState(false);
  useMemo(() => {
    setModalState(openModal);
  }, [openModal]);
  const closeModal = () => {
    console.log("closeModal");
    setModalState(false);
  };
  const nextHandler = () => {
    console.log("nextHandler");
    setNextPage(true);
  };
  const filePickerHandler = (file) => {
    console.log("filePickerHandler", file);
    setFileAvailable(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  return (
    <div className="">
      {!nextPage ? (
        <BaseModal
          isModalOpen={modalState}
          closeModal={closeModal}
          classes="min-h-[calc(100%-16rem)] w-[30%]"
        >
          <ModalHeader>
            <div className="dark:border-gray-700 flex items-center justify-between border-b border-slate-300 px-4 py-3">
              {previewUrl ? (
                <BaseButton>
                  <MdOutlineArrowBack size={20} />
                </BaseButton>
              ) : null}
              <h3 className="text-gray-800 mx-auto text-center font-bold dark:text-white">
                Upload File
              </h3>
              {previewUrl ? (
                <BaseButton
                  title="Next"
                  clickHandler={nextHandler}
                  classes="text-primary"
                />
              ) : null}
            </div>
          </ModalHeader>
          <ModalBody>
            {previewUrl ? (
              <div className="">
                <img src={previewUrl} loading="lazy" />
              </div>
            ) : (
              <div className="relative grid items-center justify-center">
                <EmptyPost selectFileHandler={filePickerHandler} />
              </div>
            )}
          </ModalBody>
        </BaseModal>
      ) : (
        <CreatePost
          openModal={nextPage}
          file={previewUrl}
          postFile={fileAvailable}
        />
      )}
    </div>
  );
};
