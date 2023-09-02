import BaseTextArea from "@/components/input/BaseTextArea";
import React, { useRef, useState } from "react";
import Emoji from "../Emoji";
import Avatar from "@/components/Avatar";
import { useSelector } from "react-redux";

const NewPostCaption = ({ getCaptionData, caption }) => {
  const [message, setMessage] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const { data: user } = useSelector((state) => state.user);

  const textAreaRef = useRef(null);
  const messageHandler = (msg) => {
    setMessage(msg);
    const text = textAreaRef.current.value;
    setWordCount(text.split(" ").length - 1);
    getCaptionData(msg);
  };

  return (
    <div className="space-y-1">
      <div className="inline-flex items-center">
        <Avatar size={8} />
        <h4 className="ms-2 inline text-base font-medium text-black">
          {user?.name}
        </h4>
      </div>
      <div className="">
        <BaseTextArea
          ref={textAreaRef}
          text={caption}
          setText={(value) => getCaptionData(value)}
          rowCount={6}
          placeholder="Write a caption"
          classes=" focus:border-slate-500  focus:ring-transparent focus:ring-0 rounded-xl w-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <Emoji />
        <p className="text-sm text-stone-600 ">{wordCount}/200</p>
      </div>
    </div>
  );
};

export default NewPostCaption;
