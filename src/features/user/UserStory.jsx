import Avatar from "@/components/Avatar";
import React from "react";

const UserStory = () => {
  return (
    <div className="rounded-full p-0.5">
      <div className="rounded-full bg-gradient-to-r from-[#feda75] via-[#fa7e1e] to-[#d62976] p-0.5">
        <div className="rounded-full bg-white p-0.5 outline outline-1 outline-stone-400">
          <Avatar size={14} />
        </div>
      </div>
    </div>
  );
};

export default UserStory;
