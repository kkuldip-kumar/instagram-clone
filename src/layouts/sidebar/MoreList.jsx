import React, { useState } from "react";
import ListWrapper from "@/components/list/ListWrapper";
import ListItem from "@/components/list/ListItem";
import { BsSearch } from "react-icons/bs";
const ListArray = [
  {
    name: "Setting",
    page_link: "",
    icon: <BsSearch size={16} fill="#000" />,
  },
  {
    name: "Your activity",
    page_link: "",
    icon: <BsSearch size={16} fill="#000" />,
  },
  {
    name: "Saved",
    page_link: "",
    icon: <BsSearch size={16} fill="#000" />,
  },
  {
    name: "Switch Appearance",
    page_link: "",
    icon: <BsSearch size={16} fill="#000" />,
  },
  {
    name: "Report a problem",
    page_link: "",
    icon: <BsSearch size={16} fill="#000" />,
  },
  {
    name: "Switch accounts",
    page_link: "",
  },
  {
    name: "Log out",
    page_link: "",
  },
];

function MoreList({ show }) {
  if (!show) return null;

  return (
    <div className="absolute bottom-14 left-4 z-10 rounded-lg bg-white p-1 md:w-64 md:shadow-xl">
      <ListWrapper wrapperClasses={`text-stone-800`}>
        {ListArray?.map((item, index) => (
          <ListItem
            key={index}
            listClicked={() => clickListHandler(index)}
            listClasses={"p-3.5 md:hover:rounded-md hover:bg-[#efefef]"}
          >
            {item.icon ? <span className="me-4"> {item.icon} </span> : null}
            <span className="text-base "> {item.name} </span>
          </ListItem>
        ))}
      </ListWrapper>
    </div>
  );
}

export default MoreList;
