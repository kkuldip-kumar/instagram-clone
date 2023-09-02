import React, { useMemo } from "react";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import UserBriefInfo from "../user/UserBriefInfo";
import MoreAboutUser from "../user/MoreAboutUser";
import { useSelector } from "react-redux";
import PostActions from "./PostActions";
import CommentInput from "../comment/CommentInput";
// import UserBriefInfo from "./UserBriefInfo";

export default function Post({ postData }) {
  const {
    image,
    createdAt,
    likes,
    savedBy,
    postedBy,
    comments,
    caption,
    _id: postId,
  } = postData;
  const { data } = useSelector((state) => state.user);
  const user = useMemo(() => data, [data]);

  return (
    <div className="py-3">
      <div className="flex w-full items-center justify-between px-2 py-2 md:px-1 md:py-2">
        <UserBriefInfo createdAt={createdAt} authorInfo={postedBy} />
        <MoreAboutUser />
      </div>
      <PostBody post={image} />
      <div className="px-2">
        <PostActions userId={user._id} postId={postId} postData={postData} />

        <div className="">
          {caption ? (
            <p className="line-clamp-1 text-sm text-stone-400">
              <span className="me-1 text-base font-semibold text-black">
                {postedBy?.name}
              </span>
              {caption}
            </p>
          ) : null}
        </div>
        {comments?.length ? (
          <div className="py-1">
            <a className="cursor-pointer text-sm text-stone-400 ">
              View all {comments?.length} comments
            </a>
          </div>
        ) : null}
        <CommentInput postId={postId} />
      </div>
    </div>
  );
}
