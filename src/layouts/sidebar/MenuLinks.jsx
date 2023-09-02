import React, { useState } from "react";

import { Link } from "react-router-dom";
function MenuLinks({ icon_name, title, route_link, isActive }) {
  return (
    <>
      {route_link ? (
        <Link
          to={route_link}
          className="flex w-full cursor-pointer items-center"
        >
          <div className="">{icon_name}</div>
          <h5
            className={` ms-3 text-base font-medium capitalize text-stone-600 group-[.mini-sidebar]:hidden group-[.mini-sidebar]:-translate-x-16 ${
              isActive ? `!font-bold !text-black` : ""
            }`}
          >
            {title}
          </h5>
        </Link>
      ) : (
        <div className="flex w-full cursor-pointer items-center">
          <div className="">{icon_name}</div>
          <h5
            className={` ms-3 text-base font-medium capitalize text-stone-600 group-[.mini-sidebar]:hidden group-[.mini-sidebar]:-translate-x-16 ${
              isActive ? `!font-bold !text-black` : ""
            }`}
          >
            {title}
          </h5>
        </div>
      )}
    </>
  );
}

export default MenuLinks;
