import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import { BsPersonFill } from "react-icons/bs";

function PostAuthIcon() {
  return (
    <div className="absolute bottom-2 left-2">
      <BaseButton classes=" !rounded-full w-8 h-8 bg-black   ">
        <BsPersonFill size={16} className="text-white" fill="#fff" />
      </BaseButton>
    </div>
  );
}

export default PostAuthIcon;
