import BaseButton from "@/components/buttons/BaseButton";
import React from "react";
import { BsMessenger } from "react-icons/bs";

const EmptyChat = () => {
  return (
    <div className="grid h-[25vh] place-items-center">
      <div className="py-10 text-center">
        <div className="grid h-auto place-items-center">
          <div className="grid h-16 w-16 place-content-center place-items-center justify-center rounded-full border border-solid border-black">
            <BsMessenger size={32} />
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-base font-medium">Your Messages</h3>
        </div>
        <div className="mb-4">
          <p className="text-state-600 text-sm font-normal">
            Send private photos ans messages to your friend or group
          </p>
        </div>
        <div className="">
          <BaseButton
            title="Send Message"
            classes={`text-white bg-primary p-2 font-semiBold text-base  active:text-primaryActive`}
          />
        </div>
      </div>
    </div>
  );
};

export default EmptyChat;
