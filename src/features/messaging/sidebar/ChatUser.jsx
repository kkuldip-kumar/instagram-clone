import Avatar from "@/components/Avatar";
import TimeAgo from "@/features/user/TimeAgo";
import React from "react";
import { FaBell } from "react-icons/fa";
import user from "@/assets/ez_avatar.svg";

const ChatUser = ({ name, image }) => {
  return (
    <div className="group flex items-center justify-between ">
      <div className="flex w-full items-center gap-3 ">
        <div className="cursor-pointer ">
          <Avatar size={12} src={image ? image : user} alt="user" />
        </div>
        <div className="block">
          <h5>{name ? name : "Kk"}</h5>
          <div className="flex items-center gap-2 leading-3">
            <p className=" line-clamp-1 inline-block  text-sm text-stone-400 ">
              Lorem ipsum dolor Lorem
            </p>
            <span className="inline-block  ">
              <TimeAgo />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
