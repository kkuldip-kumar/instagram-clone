import BaseButton from "@/components/buttons/BaseButton";
import { BaseModal } from "@/components/modal/BaseModal";
import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { ModalHeader } from "@/components/modal/ModalHeader";
import EmptyProfileContent from "@/features/user/EmptyProfileContent";
import React, { useState } from "react";
import { BsCamera } from "react-icons/bs";
import EmptyPost from "../EmptyPost";
import PostImage from "./PostImage";
import NewPostCaption from "./NewPostCaption";
import { MdOutlineArrowBack } from "react-icons/md";
import { useAddPostMutation } from "@/store/post/postService";

export const CreatePost = ({ openModal, file, postFile }) => {
  const [addPost] = useAddPostMutation();
  const [captionVal, setCaptionVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(openModal);
  const closeModal = () => {};
  const captionHandler = (value) => {
    setCaptionVal(value);
  };
  const sharePostHandler = async () => {
    const formData = new FormData();
    formData.append("image", postFile);
    formData.append("caption", captionVal);
    for (const value of formData.values()) {
      console.log(value);
    }
    // console.log(formData);
    await addPost(formData);
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <BaseModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        classes="min-h-[calc(100%-16rem)] w-1/2"
      >
        <ModalHeader>
          <div className="dark:border-gray-700 flex items-center justify-between border-b border-slate-300 px-4 py-3">
            <BaseButton>
              <MdOutlineArrowBack size={20} />
            </BaseButton>
            <h3 className="text-gray-800 mx-auto text-center font-bold dark:text-white">
              Create New Post
            </h3>
            <BaseButton
              clickHandler={sharePostHandler}
              title="Share"
              classes="text-primary"
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="flex w-full ">
            <div className="w-3/5">
              <img
                alt="image"
                className="md:nx-w-[480px] h-full w-full rounded-bl"
                src={file}
                loading="lazy"
              />
              {/* <PostImage /> */}
            </div>
            <div className="w-2/5 p-4">
              <NewPostCaption getCaptionData={captionHandler} />
            </div>
          </div>
        </ModalBody>
      </BaseModal>
    </div>
  );
};
