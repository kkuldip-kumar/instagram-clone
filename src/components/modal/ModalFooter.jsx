import React from "react";
import { twMerge } from "tailwind-merge";

export const ModalFooter = ({ children, classes }) => {
  return (
    <div className={twMerge(`border-t border-slate-300 px-4 py-3 ${classes}`)}>
      {children}
    </div>
  );
};
