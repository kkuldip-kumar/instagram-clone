import React from "react";
import Logo from "../sidebar/Logo";
import BaseButton from "@/components/buttons/BaseButton";
import { AiOutlineHeart } from "react-icons/ai";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import Avatar from "@/components/Avatar";
import { RiMessengerLine } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
export const MobileNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 flex items-center justify-between  bg-slate-300  p-3 drop-shadow-lg md:hidden">
      <BaseButton>
        <MdHomeFilled size={28} />
      </BaseButton>
      <BaseButton>
        <CiSearch size={28} />
      </BaseButton>
      <BaseButton>
        <BiMoviePlay size={28} />
      </BaseButton>
      <BaseButton>
        <RiMessengerLine size={28} />
      </BaseButton>
      <BaseButton>
        <Avatar size={8} />
      </BaseButton>
    </div>
  );
};
