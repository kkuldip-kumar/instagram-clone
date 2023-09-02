import React, { useEffect, useMemo, useRef, useState } from "react";
// import EmptyChat from "./EmptyChat";
import ChatUserBriefInfo from "./ChatUserBriefInfo";
import Chat from "./Chat";
// import Time from "./Time";
import { useSelector } from "react-redux";
// import { twMerge } from "tailwind-merge";
// import { addMessages } from "@/store/chat/chatSlice";
import { useGetMessagesQuery } from "@/store/chat/chatService";
const ChatMemo = React.memo(Chat);
const ChatWindowBody = ({ chatId }) => {
  const { data: chats } = useGetMessagesQuery(chatId);
  console.log(chats, "kk");
  const { messages } = useSelector((state) => state.chat);
  const { data } = useSelector((state) => state.user);
  const allMessages = useMemo(() => messages, [chats]);

  console.log("parent render");
  return (
    <div className="scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex h-[80vh] flex-col overflow-y-auto p-2.5">
      <div className="">
        <ChatUserBriefInfo />
      </div>
      <div className="pace-y-1 pt-2 ">
        {allMessages?.map((message, index) => (
          <ChatMemo
            key={index}
            classes={`${
              message.sender !== data?._id ? "justify-start sender" : ""
            }`}
            messages={message}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatWindowBody;
