import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import { FiInstagram } from "react-icons/fi";
import ListWrapper from "@/components/list/ListWrapper";
import ListItem from "@/components/list/ListItem";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { BsSearch, BsPlusSquare } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import Avatar from "@/components/Avatar";
import { twMerge } from "tailwind-merge";
import { CreatePost } from "@/features/posts/modals/CreatePost";
import MoreList from "./MoreList";
import SearchPanel from "./SearchPanel";
import NotificationList from "./NotificationList";
import { UploadFile } from "@/features/posts/modals/UploadFile";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar, toggleSidebar } from "@/store/commonSlice";
import { useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
const menuList = [
  {
    title: "Home",
    route_link: "/",
    icon_name: <MdHomeFilled size={28} />,
  },
  {
    title: "Search",
    route_link: null,
    icon_name: <CiSearch size={28} />,
  },
  {
    title: "Explore",
    route_link: null,
    icon_name: <MdOutlineExplore size={28} />,
  },
  {
    title: "Reels",
    route_link: "",
    icon_name: <BiMoviePlay size={28} />,
  },
  {
    title: "Messages",
    route_link: "chat",
    icon_name: <RiMessengerLine size={28} />,
  },
  {
    title: "Notifications",
    route_link: null,
    icon_name: <AiOutlineHeart size={28} />,
  },
  // {
  //   title: "Create",
  //   route_link: null,
  //   icon_name: <CiSquarePlus size={28} />,
  // },
  {
    title: "Profile",
    route_link: "profile",
    icon_name: <Avatar size={7} />,
  },
  // {
  //   title: "More",
  //   route_link: null,
  //   icon_name: <GrMenu size={28} />,
  // },
];
export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(0);
  const [sidebarModal, setSidebarModal] = useState(false);
  const [moreVisible, setMoreVisible] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [slideModal, setSlideModal] = useState(false);
  const [activePage, setActivePage] = useState("");
  const { isSidebarOpen } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const menuSelected = (index, title) => {
    setActiveMenuId(index);
    setActivePage();
    if (["Notifications", "Search"].includes(title)) {
      setActivePage(title);
      dispatch(toggleSidebar());
      setSidebarModal(isSidebarOpen);
    } else if (title === "Messages") {
      dispatch(closeSidebar());
      setSidebarModal(false);
    } else {
      setActivePage(title);
      setSidebarModal(false);
      dispatch(openSidebar());
    }
  };
  const moreListHandler = (e) => {
    console.log("moreListHandler", e.target);
  };
  const checkPageHandler = () => {
    return ["Notifications", "Search"].includes(activePage);
  };

  // ////////////////////////////////////////
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((preVal) => (preVal = !isOpen));
  };

  return (
    <div
      className={twMerge(
        `group bg-white transition-all duration-700 ease-in-out  ${
          isSidebarOpen
            ? ""
            : "mini-sidebar z-50 w-16 transition-all duration-700 ease-in-out "
        }`
      )}
    >
      <div
        className={`z-50 h-screen shrink-0 border-r border-solid border-stone-300 transition-all duration-700  ease-in-out`}
      >
        <div className="cursor-pointer px-4 py-4">
          <FiInstagram className="" size={28} />
        </div>
        <div className="px-2">
          <ListWrapper wrapperClasses={`relative space-y-1.5 `}>
            {menuList?.map((item, index) => (
              <ListItem
                key={index}
                listClicked={() => menuSelected(index, item.title)}
                listClasses={`list-item rounded-lg bg-transparent last:relative  px-2.5 py-3 last:!mt-40 hover:bg-stone-100 `}
              >
                <MenuLinks
                  {...item}
                  isActive={index === activeMenuId ? true : false}
                />
              </ListItem>
            ))}
            {/* profile nav */}
            <ListItem
              listClicked={() => setAddPost(!addPost)}
              listClasses={`list-item rounded-lg bg-transparent last:relative  px-2.5 py-3 last:!mt-40 hover:bg-stone-100 `}
            >
              <MenuLinks
                icon_name={<CiSquarePlus size={28} />}
                title="Create"
                isActive={addPost}
              />
            </ListItem>
            {/* more Links */}
            <ListItem
              listClicked={() => setMoreVisible(!moreVisible)}
              listClasses={`list-item rounded-lg bg-transparent last:relative  px-2.5 py-3 last:!mt-40 hover:bg-stone-100 `}
            >
              <MenuLinks
                icon_name={<GrMenu size={28} />}
                title="More"
                isActive={moreVisible}
              />
            </ListItem>
          </ListWrapper>
        </div>
      </div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setMoreVisible(false);
        }}
      >
        <MoreList show={moreVisible} />
      </OutsideClickHandler>

      <OutsideClickHandler
        onOutsideClick={() => {
          setAddPost(false);
        }}
      >
        <div className="absolute bottom-14 left-4 z-10 ">
          <UploadFile openModal={addPost} />
        </div>
      </OutsideClickHandler>
      <OutsideClickHandler
        onOutsideClick={() => {
          setSidebarModal(false);
        }}
      >
        <div
          className={twMerge(
            `fixed -left-[25rem] bottom-0 top-0 -z-10 ms-16 w-1/5 bg-transparent shadow-xl transition-all delay-100 duration-700 ease-in-out ${
              sidebarModal ? "left-0  bg-white " : ""
            }`
          )}
        >
          {activeMenuId === 1 ? <SearchPanel /> : null}
          {activeMenuId === 5 ? <NotificationList /> : null}
        </div>
      </OutsideClickHandler>
    </div>
  );
}
