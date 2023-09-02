import React, { useEffect, useState } from "react";
import Avatar from "@/components/Avatar";
import user from "@/assets/user_pic.jpg";
import TimeAgo from "./TimeAgo";
import BaseButton from "@/components/buttons/BaseButton";
import { useFollowUnFollowMutation } from "@/store/user/userService";
import { useSelector } from "react-redux";
import { UserName } from "./profile/UserName";
export default function UserBriefInfo(props) {
  const [followUnFollow] = useFollowUnFollowMutation();
  const { data } = useSelector((state) => state.user);

  const [isFollowing, setIsFollowing] = useState(false);
  const {
    sub_title = "Original",
    follower = true,
    authorInfo,
    createdAt,
  } = props;
  useEffect(() => {
    authorInfo?.followers?.includes(data?._id)
      ? setIsFollowing(true)
      : setIsFollowing(false);
  }, []);
  const followUserHandler = async () => {
    await followUnFollow(authorInfo._id);
    setIsFollowing(true);
  };
  return (
    <div className="block">
      <div className="flex items-center">
        <div className="group relative me-4 cursor-pointer">
          <Avatar />
          {/* <UserDuet /> */}
        </div>
        <div className="block">
          <div className="flex cursor-pointer items-center ">
            <UserName username={authorInfo?.name} />

            {/* <TimeAgo timestamp={createdAt} />
            {follower && authorInfo?._id !== data?._id && !isFollowing ? (
              <div className="ms-2">
                <BaseButton
                  classes="text-primary"
                  clickHandler={followUserHandler}
                  title="Follow"
                />
              </div>
            ) : null} */}
          </div>
          {sub_title ? <h6 className="text-sm">{sub_title}</h6> : null}
        </div>
      </div>
    </div>
  );
}
