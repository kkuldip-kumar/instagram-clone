import React from "react";
import Suggestion from "@/features/followers/Suggestion";
import Post from "@/features/posts/Post";
import PostContainer from "@/features/posts/PostContainer";
import ProfileSwitch from "@/features/user/ProfileSwitch";
import UserOnlineStatus from "@/features/user/UserOnlineStatus";
import { MobileHeader } from "./mobile/MobileHeader";
export default function FeedLayout() {
  return (
    <div className="ml-24 flex w-full">
      <div className="w-full lg:w-3/5">
        <MobileHeader />
        <UserOnlineStatus />
        <PostContainer />
      </div>
      <div className=" hidden md:w-1/4 lg:block">
        <ProfileSwitch />
        <Suggestion />
      </div>
    </div>
  );
}
