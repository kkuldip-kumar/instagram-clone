import React, { useEffect, useState } from "react";
import { RiChat3Line } from "react-icons/ri";
import BaseButton from "@/components/buttons/BaseButton";
import { BaseModal } from "@/components/modal/BaseModal";
import PostInfo from "./PostInfo";
export default function Comment({ userId, postId, postData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openCommentModal = async () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };
  return (
    <>
      <BaseButton className="cursor-pointer" clickHandler={openCommentModal}>
        <RiChat3Line size={20} />
      </BaseButton>
      {isModalOpen ? (
        <BaseModal
          isModalOpen={isModalOpen}
          classes="min-h-100% w-4/5"
          closeModal={openCommentModal}
        >
          <PostInfo userId={userId} postId={postId} {...postData} />
        </BaseModal>
      ) : null}
    </>
  );
}
