import React, { forwardRef, memo, useEffect, useState } from "react";
import BaseButton from "@/components/buttons/BaseButton";
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

const BaseTextArea = (
  {
    text,
    setText,
    typeHandler,
    message,
    classes,
    placeholder = "Add a comment",
    rowCount = "1",
  },
  textAreaRef
) => {
  return (
    <textarea
      ref={textAreaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      rows={rowCount}
      type="text"
      className={twMerge(`block w-full resize-none overflow-hidden
        border-0 bg-transparent px-0 py-2 text-base placeholder:text-stone-400
         ${classes}`)}
      placeholder={placeholder}
    ></textarea>
  );
};

export default forwardRef(BaseTextArea);
