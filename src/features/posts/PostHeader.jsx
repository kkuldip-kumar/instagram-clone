import React from "react";
import MoreAboutUser from "../user/MoreAboutUser";
import UserBriefInfo from "../user/UserBriefInfo";

function PostHeader() {
  return (
    <div className="flex w-full items-center justify-between px-2 py-2 md:px-1 md:py-2">
      <UserBriefInfo />
      <MoreAboutUser />
    </div>
  );
}

export default PostHeader;
