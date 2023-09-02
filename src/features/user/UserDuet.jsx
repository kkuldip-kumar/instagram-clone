import Avatar from "@/components/Avatar";
import React from "react";

export default function UserDuet() {
  return (
    <div className="relative h-10 w-10">
      <div className=" z-10 h-7 w-7 rounded-full hover:z-20 hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-stone-800 ">
        <Avatar size={7} />
      </div>
      <div className="absolute left-1/4 top-[16%] h-7 w-7 rounded-full shadow-2xl hover:z-20 hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-stone-800">
        <Avatar size={7} />
      </div>
    </div>
  );
}
