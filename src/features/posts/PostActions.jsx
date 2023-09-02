import React from "react";
import PostSave from "./PostSave";
import Comment from "../comment/Comment";
import Like from "./Like";
import Share from "./Share";
export default function PostActions({
  postData,
  userId,
  commentHidden = false,
}) {
  const { _id: postId } = postData;
  return (
    <div className="">
      <div className="flex items-center justify-between py-2">
        <div className="flex flex-wrap items-center gap-2">
          <Like postId={postId} userId={userId} likes={postData.likes} />
          {!commentHidden ? <Comment userId={userId} postId={postId} /> : null}
          <Share />
        </div>
        <PostSave postId={postId} userId={userId} savedBy={postData.savedBy} />
      </div>
      {postData.likes?.length ? (
        <h5 className="lowercase">
          <span>{postData.likes.length}</span> likes
        </h5>
      ) : null}
    </div>
  );
}
