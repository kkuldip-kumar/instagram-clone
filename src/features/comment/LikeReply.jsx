import BaseButton from "@/components/buttons/BaseButton";
import { useLikeReplyMutation } from "@/store/post/postService";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { useSelector } from "react-redux";
export default function LikeReply({ likes, replyId }) {
  const [likeReply] = useLikeReplyMutation();
  const { data } = useSelector((state) => state.user);
  const [like, setLike] = useState(false);
  useEffect(() => {
    if (!isEmpty(likes) && !isEmpty(data)) {
      likes.includes(data._id) ? setLike(true) : setLike(false);
    }
  }, []);

  const postLikeHandler = async () => {
    await likeReply(replyId);
    setLike(!like);
  };
  return (
    <BaseButton clickHandler={postLikeHandler}>
      <HiOutlineHeart
        size={24}
        fill={like ? "#ea3347" : "none"}
        stroke={like ? "#ea3347" : "#000000"}
      />
    </BaseButton>
  );
}
