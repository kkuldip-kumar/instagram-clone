import Avatar from "@/components/Avatar";
import BaseButton from "@/components/buttons/BaseButton";
import React from "react";

const ChatUserBriefInfo = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="mx-auto flex flex-col items-center justify-center gap-1">
        <Avatar size={14} className="pb-2" />
        <div className=" text-center ">
          <h5 className="font-bold leading-4">Kuldip_kumar_Santoshi</h5>
          <p className="me-1 inline-block text-sm leading-3 text-gray">
            kuldip kumar <span className="text-current">instagram</span>{" "}
          </p>
        </div>
      </div>
      <div className="">
        <BaseButton
          title="View Profile"
          classes="!text-black bg-[#efefef] px-4 py-2  rounded-md"
        />
      </div>
    </div>
  );
};

export default ChatUserBriefInfo;
