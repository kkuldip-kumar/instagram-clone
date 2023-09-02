import Avatar from "@/components/Avatar";
import user from "@/assets/user.jpg";
import BaseButton from "@/components/buttons/BaseButton";
import { IoMdSettings } from "react-icons/io";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const { data: userData } = useSelector((state) => state.user);
  return (
    <div className="container mx-auto flex flex-1 justify-center md:px-20 ">
      <div className="h-28 w-28 ">
        <Avatar src={user} size={28} />
      </div>
      <div className="ms-10 block">
        <div className="mb-3 flex items-center gap-3">
          <h4>{userData.username}</h4>
          <BaseButton
            title={"Edit Profile"}
            classes="bg-stone-200 font-extraBold px-3 py-2 !text-black rounded-lg"
          />
          <BaseButton classes="bg-transparent text-black  px-3 py-2 ">
            <IoMdSettings size={24} fill="#000" stroke="#000" />
          </BaseButton>
        </div>
        <div className="mb-3 flex w-full flex-1 items-center gap-3">
          <h5 className="">
            <span className="me-1">{userData.posts.length}</span> Posts
          </h5>
          <h5 className="">
            <span className="me-1">{userData.followers.length}</span> followers
          </h5>
          <h5 className="">
            <span className="me-1">{userData.following.length}</span> following
          </h5>
        </div>
        <h5 className="">{userData.name}</h5>
      </div>
    </div>
  );
};

export default ProfileInfo;
