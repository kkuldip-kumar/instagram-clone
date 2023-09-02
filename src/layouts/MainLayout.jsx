import Sidebar from "./sidebar/Sidebar";

import React, { useState } from "react";
import ProfileLayout from "./ProfileLayout";
import TimelineLayout from "./TimelineLayout";
import ChatsLayout from "./ChatsLayout";
import Notifications from "./sidebar/Notifications";
import NotificationList from "./sidebar/NotificationList";
import SearchPanel from "./sidebar/SearchPanel";
import { Outlet } from "react-router-dom";
import { MobileNavbar } from "./mobile/MobileNavbar";
import { MobileHeader } from "./mobile/MobileHeader";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "@/store/commonSlice";

export default function MainLayout() {
  return (
    <div className="flex w-full flex-wrap">
      <div className={`fixed z-20 hidden md:block md:w-56`}>
        <Sidebar />
      </div>
      {/* main content  start*/}
      <div className="flex-1">
        <Outlet />
      </div>
      <MobileNavbar />
    </div>
  );
}
