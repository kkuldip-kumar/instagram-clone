import React from "react";
import Logo from "../sidebar/Logo";
import BaseButton from "@/components/buttons/BaseButton";
import { AiOutlineHeart } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";

export const MobileHeader = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-white  p-3 shadow-md md:hidden">
      <Logo />
      <div className="inline-flex gap-2">
        <BaseButton>
          <AiOutlineHeart size={28} />
        </BaseButton>
        <BaseButton>
          <CiSquarePlus size={28} />
        </BaseButton>
      </div>
    </div>
  );
};
