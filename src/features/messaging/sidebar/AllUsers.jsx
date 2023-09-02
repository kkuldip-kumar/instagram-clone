import React, { useEffect, useState } from "react";
import ChatUser from "./ChatUser";
import ListWrapper from "@/components/list/ListWrapper";
import ListItem from "@/components/list/ListItem";
import { FaBell } from "react-icons/fa";
import { useGetAllUsersQuery } from "@/store/user/userService";
import { useSelector } from "react-redux";
import { useAccessChatMutation } from "@/store/chat/chatService";

const AllUsers = () => {
  const [accessChat] = useAccessChatMutation();
  const [allUsers, setAllUsers] = useState([]);
  const { data } = useSelector((state) => state.user);
  const { followers, following, _id: userId, ...rest } = data;
  useEffect(() => {
    // console.log("users", data?.followers, data?.following);
    const mergedUsers = [...new Set([...data.followers, ...data?.following])];
    const listUsers = mergedUsers.filter(
      (element) => element._id !== data?._id && element._id === element._id
    );
    setAllUsers([...listUsers]);
    console.log("mergedUsers", listUsers);
  }, []);

  const clickListHandler = async (e) => {
    console.log("list item clicked", e);
    await accessChat(data._id);
  };
  return (
    // block space-y-3
    <div className=" ">
      <ListWrapper>
        {allUsers?.map((user, index) => (
          <ListItem
            key={index}
            listClicked={() => clickListHandler(user._id)}
            listClasses={
              " flex justify-between md:hover:rounded-md hover:bg-[#efefef]"
            }
          >
            <ChatUser {...user} />
            <div className="">
              <FaBell size={16} />
            </div>
          </ListItem>
        ))}
      </ListWrapper>
    </div>
  );
};

export default AllUsers;
