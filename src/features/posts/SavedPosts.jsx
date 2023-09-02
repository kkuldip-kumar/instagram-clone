import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import { BsPlus } from "react-icons/bs";

export default function SavedPosts() {
  return (
    <div className="">
      <div className="flex items-center justify-between py-3">
        <p className="text-sm font-normal text-stone-400 ">
          Only you can see what you've saved
        </p>
        <BaseButton>
          <BsPlus size={20} className="" />
          New Collection
        </BaseButton>
      </div>
    </div>
  );
}
