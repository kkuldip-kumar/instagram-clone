import React from "react";
import ProfileInfoCard from "./ProfileInfoCard";

export const UserName = ({ username }) => {
  return (
    <>
      <h6 className="group relative cursor-pointer text-base font-semibold capitalize text-black hover:text-red-400 ">
        {username ? username : "Author"}
      </h6>
      <div className="!group-hover:block absolute left-0 top-2 z-10 hidden">
        <ProfileInfoCard />
      </div>
    </>
  );
};
