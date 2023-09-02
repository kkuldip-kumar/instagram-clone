import React from "react";
import { MdEdit } from "react-icons/md";
import ChatUserEdit from "./ChatUserEdit";
import AllUsers from "./AllUsers";

const ChatSidebar = () => {
  return (
    <div className="block">
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between py-2">
          <ChatUserEdit /> <MdEdit size={24} />
        </div>
        <div className="flex items-center justify-between">
          <h5 className="font-bold">Messages</h5>
          <h6>Requests</h6>
        </div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        <AllUsers />
      </div>
    </div>
  );
};

export default ChatSidebar;
