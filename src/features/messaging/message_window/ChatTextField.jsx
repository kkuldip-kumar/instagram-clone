import BaseButton from "@/components/buttons/BaseButton";
import BaseTextArea from "@/components/input/BaseTextArea";
import Emoji from "@/features/posts/Emoji";
import React, { memo, useState } from "react";
import { socket } from "@/socket";

const ChatTextField = ({ handleSubmit }) => {
  const [message, setMessage] = useState("");

  const messageHandler = (msg) => {
    setMessage(msg);
  };
  const sendMessageHandler = (e) => {
    e.preventDefault();
    // console.log("new message after", socket, socket.id);
    if (message.trim()) {
      handleSubmit(message);
    }
    setMessage((preVal) => (preVal = ""));
  };

  return (
    <div className="flex w-full items-center gap-3 border-slate-300  p-2.5">
      <div className="relative flex w-full items-center py-1">
        <BaseTextArea
          text={message}
          setText={messageHandler}
          classes="border border-slate-400 border-solid focus:border-slate-500 focus:ring-transparent focus:ring-0 rounded-xl w-full ps-10 py-2.5 pe-20"
        />
        <div className="absolute left-3 top-4 z-50">
          <Emoji />
        </div>
        <div className="absolute right-3 top-4 z-50">
          <BaseButton
            clickHandler={sendMessageHandler}
            title="Send"
            classes="text-primary font-600"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ChatTextField);
