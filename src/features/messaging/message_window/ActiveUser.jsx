import Avatar from "@/components/Avatar";
import React from "react";

const ActiveUser = () => {
  return (
    <div className="flex items-start gap-4 ">
      <div className="after:content-[' '] after:outline-3  relative after:absolute after:right-0 after:top-2/3 after:block after:h-2.5 after:w-2.5 after:rounded-full after:bg-green-400  after:outline after:outline-white">
        <Avatar size={12} />
      </div>
      <div className="block">
        <h5>Ajay Kumar</h5>
        <p className="text-sm text-stone-400 ">Active</p>
      </div>
    </div>
  );
};

export default ActiveUser;
