import ListItem from "@/components/list/ListItem";
import ListWrapper from "@/components/list/ListWrapper";
import React from "react";

const settingLists = [
  {
    name: "Apps and Website",
    page_link: "",
  },
  {
    name: "QR code",
    page_link: "",
  },
  {
    name: "Notifications",
    page_link: "",
  },
  {
    name: "Settings and Privacy",
    page_link: "",
  },
  {
    name: "Supervisions",
    page_link: "",
  },
  {
    name: "Log Out",
    page_link: "",
  },
  {
    name: "Cancel",
    page_link: "",
  },
];
function AccountSettingList() {
  const clickListHandler = (e) => {
    console.log("list clicked", e);
  };
  return (
    <ListWrapper
      wrapperClasses={`divide-y divide-solid divide-slate-300 text-center text-base text-stone-800`}
    >
      {settingLists?.map((item, index) => (
        <ListItem
          key={index}
          listClicked={() => clickListHandler(index)}
          title={item.name}
        />
      ))}
    </ListWrapper>
  );
}

export default AccountSettingList;
