import BaseButton from "@/components/buttons/BaseButton";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { twMerge } from "tailwind-merge";
export default function Emoji({ emojiSelectHandler }) {
  const [emoji, setEmoji] = useState(false);
  const emojiHandler = () => {
    setEmoji(!emoji);
  };
  // const emojiSelectHandler = (e) => {
  //   console.log(e.emoji);
  //   emojiSelector(e.emoji);
  // };
  const previewConfig = {
    showPreview: false,
  };
  return (
    <>
      <div className="">
        <BaseButton clickHandler={emojiHandler} className=" cursor-pointer">
          <BsEmojiSmile size={20} />
        </BaseButton>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setEmoji(false);
        }}
      >
        <div
          className={twMerge(
            `absolute bottom-0 right-0 z-10 hidden md:w-80 md:shadow-xl ${
              emoji ? "block" : ""
            }`
          )}
        >
          <EmojiPicker
            searchDisabled={true}
            previewConfig={previewConfig}
            height={320}
            onEmojiClick={(e) => emojiSelectHandler(e.emoji)}
          />
        </div>
      </OutsideClickHandler>
    </>
  );
}
