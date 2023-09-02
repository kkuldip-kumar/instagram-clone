import BaseButton from "@/components/buttons/BaseButton";
import { useFollowUnFollowMutation } from "@/store/user/userService";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

export default function Follow({ author }) {
  const [followUnFollow] = useFollowUnFollowMutation();
  const { data } = useSelector((state) => state.user);

  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    author?.followers?.includes(data?._id)
      ? setIsFollowing(true)
      : setIsFollowing(false);
  }, []);
  const followUserHandler = async () => {
    await followUnFollow(author._id);
    setIsFollowing(true);
  };
  if (author?._id === data?._id && isFollowing) return null;
  return (
    <>
      <BaseButton
        classes="text-primary"
        clickHandler={followUserHandler}
        title="Follow"
      />
    </>
  );
}
