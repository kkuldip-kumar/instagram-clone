import BaseTab from "@/components/BaseTab";
import SavedPosts from "@/features/posts/SavedPosts";
import React from "react";
import { BiUserPin } from "react-icons/bi";
import { MdOutlineBookmarkBorder, MdOutlineGridOn } from "react-icons/md";
import EmptyProfileContent from "../EmptyProfileContent";
import { BsCamera } from "react-icons/bs";
import { UsersPosts } from "./UsersPosts";

{
  /* <EmptyProfileContent
  iconName={<BsCamera size={30} />}
  mainTitle={"Share Photos "}
  subText={" When you in upload photos, they'll appear here."}
  linkContent={"Share your first photo"}
/> */
}
const tabs = [
  {
    title: "posts",
    content: <UsersPosts />,
    icon: <MdOutlineGridOn size={16} className="text-stone-800" />,
  },
  {
    title: "Reels",
    icon: <MdOutlineBookmarkBorder size={16} className="text-stone-800" />,
    content: (
      <EmptyProfileContent
        iconName={<MdOutlineBookmarkBorder size={30} />}
        mainTitle={"No post  saved "}
        subText={" When you save, they'll appear here."}
        linkContent={"Save your first post"}
      />
    ),
  },
  {
    title: "saved",
    icon: <MdOutlineBookmarkBorder size={16} className="text-stone-800" />,
    content: (
      <EmptyProfileContent
        iconName={<MdOutlineBookmarkBorder size={30} />}
        mainTitle={"No post  saved "}
        subText={" When you save, they'll appear here."}
        linkContent={"Save your first post"}
      />
    ),
  },
  {
    title: "tagged",
    icon: <BiUserPin size={16} className="text-stone-800" />,
    content: (
      <EmptyProfileContent
        iconName={<BiUserPin size={30} />}
        mainTitle={"Photos of you"}
        subText={" When people tag you in photos, they'll appear here."}
        linkContent={"Share your first photo"}
      />
    ),
  },
  // Add more tabs as needed
];
function ProfileTabContainer() {
  return (
    <div>
      <BaseTab tabs={tabs} listClasses={` `} />
    </div>
  );
}

export default ProfileTabContainer;
