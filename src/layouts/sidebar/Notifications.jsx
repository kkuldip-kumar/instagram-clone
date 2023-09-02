import React from "react";
import ListWrapper from "@/components/list/ListWrapper";
import ListItem from "@/components/list/ListItem";
import Avatar from "@/components/Avatar";
import TimeAgo from "@/features/user/TimeAgo";
import BaseButton from "@/components/buttons/BaseButton";

const Notifications = ({ filterBy }) => {
  return (
    <div className="p-3">
      <h5 className="text-base font-extrabold text-black">{filterBy}</h5>
      <ListWrapper wrapperClasses="">
        <ListItem listClasses="flex justify-between ">
          <div className=" inline-flex items-center gap-2">
            <div className="">
              <Avatar size={12} />
            </div>
            <div className="inline-flex flex-wrap items-center ">
              <h5 className="me-1 inline text-sm font-bold leading-3 text-black">
                Kuldip_Kumar
              </h5>
              <p className="text-sx inline text-stone-500">
                Started following you .
              </p>
              <TimeAgo />
            </div>
          </div>
          <BaseButton
            classes="bg-primary text-white text-sm p-1 "
            title="Follow"
          />
        </ListItem>
        <ListItem listClasses="flex justify-between ">
          <div className=" inline-flex items-center gap-2">
            <div className="">
              <Avatar size={12} />
            </div>
            <div className="inline-flex flex-wrap items-center ">
              <h5 className="me-1 inline text-sm font-bold leading-3 text-black">
                Kuldip_Kumar
              </h5>
              <p className="text-sx inline text-stone-500">
                Started following you .
              </p>
              <TimeAgo />
            </div>
          </div>
          <BaseButton
            classes="bg-primary text-white text-sm p-1 "
            title="Follow"
          />
        </ListItem>
        <ListItem listClasses="flex justify-between ">
          <div className=" inline-flex items-center gap-2">
            <div className="">
              <Avatar size={12} />
            </div>
            <div className="inline-flex flex-wrap items-center ">
              <h5 className="me-1 inline text-sm font-bold leading-3 text-black">
                Kuldip_Kumar
              </h5>
              <p className="text-sx inline text-stone-500">
                Started following you .
              </p>
              <TimeAgo />
            </div>
          </div>
          <BaseButton
            classes="bg-primary text-white text-sm p-1.5 "
            title="Follow"
          />
        </ListItem>
      </ListWrapper>
    </div>
  );
};

export default Notifications;
