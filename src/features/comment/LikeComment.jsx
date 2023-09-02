import BaseButton from "@/components/buttons/BaseButton";
import {
  useLikeCommentMutation,
  useLikePostMutation,
} from "@/store/post/postService";
import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { useSelector } from "react-redux";
export default function LikeComment({ likes, commentId }) {
  const [likeComment] = useLikeCommentMutation();
  const { data } = useSelector((state) => state.user);
  const [like, setLike] = useState(false);
  useEffect(() => {
    if (!isEmpty(likes) && !isEmpty(data)) {
      likes.includes(data._id) ? setLike(true) : setLike(false);
    }
  }, []);

  const postLikeHandler = async () => {
    await likeComment(commentId);
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
