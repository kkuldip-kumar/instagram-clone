import BaseButton from "@/components/buttons/BaseButton";
import { useSavePostMutation } from "@/store/post/postService";
import { isEmpty } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { MdBookmark, MdOutlineBookmarkBorder } from "react-icons/md";
import { useSelector } from "react-redux";
export default function PostSave({ savedBy, userId, postId }) {
  const [saved, setSaved] = useState(false);
  const [savePost] = useSavePostMutation();
  const { data: user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!isEmpty(savedBy) && !isEmpty(user)) {
      savedBy.includes(user._id) ? setSaved(true) : setSaved(false);
    }
  }, []);

  const savePostHandler = async () => {
    await savePost(postId);
    setSaved(!saved);
  };
  return (
    <BaseButton clickHandler={savePostHandler}>
      {saved ? <MdBookmark size={24} /> : <MdOutlineBookmarkBorder size={24} />}
    </BaseButton>
  );
}
