import React, { useEffect, useState } from "react";

import ChatWindowBody from "./ChatWindowBody";
import ChatWindowHeader from "./ChatWindowHeader";
import { socket } from "@/socket";
import { useDispatch, useSelector } from "react-redux";
import { useSendMessageMutation } from "@/store/chat/chatService";
import ChatTextField from "./ChatTextField";
import { addMessages } from "@/store/chat/chatSlice";
// Custom hook for socket connection logic
function useSocketConnection(data) {
  const [sendMessage, { data: messageData }] = useSendMessageMutation();
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    if (data?.id) {
      socket.emit("setup", data);
    }
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [data]);

  useEffect(() => {
    if (messageData) {
      dispatch(addMessages(messageData.data));
      socket.emit("new_message", messageData.data);
    }
  }, [messageData, dispatch]);

  const messageSendHandler = async (message) => {
    const messageData = {
      message: message,
      senderId: data?._id,
      users: data?.followers,
    };
    const newMessage = {
      content: message,
      chatId: data?._id,
    };
    await sendMessage(newMessage);
  };

  return { isConnected, messageSendHandler };
}
const ChatsContainer = () => {
  const [sendMessage, { data: messageData, isSuccess }] =
    useSendMessageMutation();
  const { currentChatUser } = useSelector((state) => state.chat);
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [socketConnected, setSocketConnected] = useState(false);
  // const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const { isConnected, messageSendHandler } = useSocketConnection(data);
  console.log("grand parent");
  // useEffect(() => {
  //   if (data?.id) {
  //     socket?.emit("setup", data);
  //   }
  //   socket.on("connection", () => setSocketConnected(true));
  //   return () => {
  //     socket.off("connection", () => {});
  //   };
  // }, [data, socket]);

  // useEffect(() => {
  //   if (messageData) {
  //     dispatch(addMessages(messageData.data));
  //     socket.emit("new_message", messageData.data);
  //   }
  // }, []);

  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //     console.log("onConnect");
  //   }
  //   function onDisconnect() {
  //     console.log("on disconnect");
  //     setIsConnected(false);
  //   }
  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, []);
  // const messageSendHandler = async (message) => {
  //   const messageData = {
  //     message: message,
  //     senderId: data?._id,
  //     users: data?.followers,
  //   };
  //   const newMessage = {
  //     content: message,
  //     chatId: "64a0f5feb307b8b475de76dd",
  //   };
  //   await sendMessage(newMessage);
  // };
  return (
    <div className="relative">
      <div className="">
        <ChatWindowHeader />
      </div>
      <ChatWindowBody socket={socket} chatId={"64a0f5feb307b8b475de76dd"} />
      <div className=" bottom-0 left-0 right-0 ">
        <ChatTextField handleSubmit={messageSendHandler} />
      </div>
    </div>
  );
};

export default ChatsContainer;
