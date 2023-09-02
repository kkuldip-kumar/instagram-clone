import ChatsContainer from "@/features/messaging/message_window/ChatsContainer";
import ChatSidebar from "@/features/messaging/sidebar/ChatSidebar";
import React from "react";

const ChatsLayout = () => {
  return (
    <div className="ml-16 flex h-screen w-full bg-white ">
      {/* md:w-1/4 */}
      <div className=" md:w-1/5 md:border-r md:border-slate-300">
        <ChatSidebar />
      </div>
      <div className=" md:block md:w-3/4">
        <ChatsContainer />
      </div>
    </div>
  );
};

export default ChatsLayout;
