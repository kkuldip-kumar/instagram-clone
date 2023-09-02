import React from "react";
import { TfiAngleDown, TfiMenu } from "react-icons/tfi";
import ez_avatar from "../assets/ez_avatar.svg";
import DropLink from "./list/DropLink";
function Header({ toogleSideBar }) {
  return (
    <div className=" bg-blue-950">
      <nav className="container mx-auto px-3 py-3">
        <div className="flex w-full items-center">
          <div className="flex w-10/12 items-center">
            <div className="w-1/5">
              <h3 className="text-2xl font-semibold capitalize text-green-400">
                Logo
              </h3>
            </div>
            <div className=" hidden sm:block">
              <ul className=" flex  items-center gap-4 font-semibold text-white">
                <li className="group relative px-2 py-2 transition-all hover:cursor-pointer">
                  <a className="  flex items-center  no-underline group-hover:text-purple-600">
                    Home
                    <TfiAngleDown className="h-6 w-6  ps-2 text-white group-hover:text-purple-600" />
                  </a>
                  <div className="absolute top-10 hidden w-40 rounded bg-white  group-hover:block">
                    <DropLink />
                  </div>
                </li>
                <li className="group px-2 py-2 transition-all hover:cursor-pointer">
                  <a className="  flex items-center  no-underline group-hover:text-purple-600">
                    Services
                    <TfiAngleDown className="h-6 w-6 ps-2 text-white group-hover:text-purple-600" />
                  </a>
                  <div className="absolute top-10 hidden w-40 rounded bg-white  group-hover:block">
                    <DropLink />
                  </div>
                </li>
                <li className="group px-2 py-2 transition-all hover:cursor-pointer">
                  <a className="  flex items-center  no-underline group-hover:text-purple-600">
                    Products
                    <TfiAngleDown className="h-6 w-6  ps-2 text-white group-hover:text-purple-600" />
                  </a>
                  <div className="absolute top-10 hidden w-40 rounded bg-white  group-hover:block">
                    <DropLink />
                  </div>
                </li>
                <li className="group px-2 py-2 transition-all hover:cursor-pointer">
                  <a className="  flex items-center  no-underline group-hover:text-purple-600">
                    Features{" "}
                    <TfiAngleDown className="h-6 w-6  ps-2 text-white group-hover:text-purple-600" />
                  </a>
                  <div className="absolute top-10 hidden w-40 rounded bg-white  group-hover:block">
                    <DropLink />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="hidden rounded-full sm:block">
              <img src={ez_avatar} className="h-8 w-8" />
            </div>
            <div className="sm:hidden" onClick={toogleSideBar}>
              <TfiMenu className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
