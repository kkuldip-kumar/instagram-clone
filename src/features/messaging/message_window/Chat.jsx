import React from "react";
import { twMerge } from "tailwind-merge";

const Chat = ({ classes, messages }) => {
  // console.log("Child render");
  return (
    <>
      <div className={twMerge(`group my-2 grid justify-end ${classes}`)}>
        <p className="w-full rounded-xl bg-primary px-3 py-2 text-white group-[.sender]:bg-blue-950">
          {messages.content}
        </p>
        {/* <span className="text-gray-500 text-right text-xs group-[.sender]:text-left">
          seen
        </span> */}
      </div>
    </>
  );
};

export default Chat;
