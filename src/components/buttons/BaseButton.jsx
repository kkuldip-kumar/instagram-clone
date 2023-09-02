import React from "react";
import { twMerge } from "tailwind-merge";

export default function BaseButton({
  children,
  type = "button",
  clickHandler,
  title = "",
  isDisabled = false,
  classes = "",
}) {
  const styles = twMerge(
    ` gap-1 inline-flex select-none items-center justify-center  rounded-md border border-transparent text-base font-semibold  transition-all focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 active:ring-0 enabled:active:border-0 enabled:active:outline-none ${
      isDisabled ? "opacity-60" : null
    } ${classes ? classes : null}`
  );
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={styles}
      disabled={isDisabled}
    >
      {children || title}
    </button>
  );
}
