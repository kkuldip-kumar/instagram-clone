import React from "react";
import { twMerge } from "tailwind-merge";

function ListWrapper({ children, wrapperClasses }) {
  return (
    <ul
      className={twMerge(
        `group flex flex-col  py-1  ${wrapperClasses ? wrapperClasses : ""} `
      )}
    >
      {children}
    </ul>
  );
}

export default ListWrapper;
