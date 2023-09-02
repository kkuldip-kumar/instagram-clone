import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import { FaInfo, FaVideo } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import ActiveUser from "./ActiveUser";
import MoreAboutUser from "@/features/user/MoreAboutUser";

const ChatWindowHeader = () => {
  return (
    <div className="flex w-full justify-between border-b border-slate-300  p-2.5">
      <ActiveUser />
      <div className="flex items-center gap-1">
        <MoreAboutUser />
      </div>
    </div>
  );
};

export default ChatWindowHeader;
