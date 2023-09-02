import React from "react";
import { twMerge } from "tailwind-merge";
function ListItem({ children, title, listClasses, listClicked }) {
  return (
    <li
      onClick={listClicked}
      className={twMerge(
        `inline-flex cursor-pointer items-center p-2  ${
          listClasses ? listClasses : ""
        }`
      )}
    >
      {children || title}
    </li>
  );
}

export default ListItem;
