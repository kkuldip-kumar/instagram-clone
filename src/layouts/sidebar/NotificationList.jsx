import React from "react";
import Notifications from "./Notifications";

const NotificationList = ({ isVisible = true }) => {
  if (!isVisible) return;

  return (
    <div className=" ">
      <div className="p-3">
        <h4 className="text-xl font-extrabold ">Notifications</h4>
      </div>
      <div className="h-[90vh] divide-y divide-slate-400 overflow-y-auto">
        <div className="">
          <Notifications filterBy="This Week" />
        </div>
        <div className="">
          <Notifications filterBy="This Month" />
        </div>
        <div className="">
          <Notifications filterBy="Earlier" />
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
