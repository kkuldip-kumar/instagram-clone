import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import UserBriefInfo from "./UserBriefInfo";
import { useGetAllUsersQuery } from "@/store/user/userService";
import { useSelector } from "react-redux";
import Follow from "../followers/Follow";

export default function UserSuggestion() {
  useGetAllUsersQuery();
  const { allUsers } = useSelector((state) => state.user);
  return (
    <>
      {allUsers.map((user) => (
        <div
          key={user._id}
          className="flex items-center justify-between pb-3 last:pb-0"
        >
          <UserBriefInfo authorInfo={user} follower={false} />
          {/* <BaseButton classes="text-primary" title="Follow" /> */}
          <Follow />
        </div>
      ))}
    </>
  );
}
