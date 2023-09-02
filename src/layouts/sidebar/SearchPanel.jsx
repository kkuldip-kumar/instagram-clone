import React from "react";
import SearchInput from "@/components/input/SearchInput";
import Notifications from "./Notifications";

const SearchPanel = ({ isVisible = true }) => {
  if (!isVisible) return;
  return (
    <div className="bg-white">
      <div className="border-b border-solid border-slate-400">
        <div className="p-3">
          <h4 className="text-xl font-extrabold ">Search</h4>
        </div>
        <div className="p-3">
          <SearchInput />
        </div>
      </div>
      <div className="">
        <Notifications filterBy="Earlier" />
      </div>
    </div>
  );
};

export default SearchPanel;
