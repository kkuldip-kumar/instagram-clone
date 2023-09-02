import React from "react";
import BaseButton from "@/components/buttons/BaseButton";
import { MdAdd } from "react-icons/md";
import Avatar from "@/components/Avatar";

const ProfileInfoCard = () => {
  return (
    <>
      <div className=" w-96 space-y-3 rounded-lg bg-slate-50 shadow-lg">
        <div className="">
          <div className="flex items-center space-x-4 p-2">
            <Avatar size={14} alt="user" />
            <div className="">
              <h6 className="mb-0 text-base font-semibold capitalize text-black ">
                Author
              </h6>
              <p className="">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <div className="block text-center">
              <h5 className="">170</h5>
              <span className="me-1">Posts</span>
            </div>
            <div className="block text-center">
              <h5 className="">200</h5>
              <span className="me-1">Followers</span>
            </div>
            <div className="block text-center">
              <h5 className="">300</h5>
              <span className="me-1">Following</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-28 w-1/3 rounded bg-indigo-400"></div>
          <div className="h-28 w-1/3 rounded bg-indigo-400"></div>
          <div className="h-28 w-1/3 rounded bg-indigo-400"></div>
        </div>
        <div className="w-full px-2 py-2">
          <BaseButton classes="bg-primary p-2 text-white w-full">
            <MdAdd /> Follow
          </BaseButton>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoCard;
