import React from "react";
import UserBriefInfo from "./UserBriefInfo";
import BaseButton from "@/components/buttons/BaseButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "@/store/user/userSlice";

export default function ProfileSwitch() {
  // const { logoutUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/login");
    console.log("User logged out");
  };
  return (
    <div className="flex items-center justify-between pb-3 last:pb-0">
      <UserBriefInfo authorInfo={data} avatar_size={14} />
      <BaseButton clickHandler={logoutHandler} title="Logout" />
    </div>
  );
}
