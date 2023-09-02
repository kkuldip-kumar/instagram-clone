import Avatar from "@/components/Avatar";
import React from "react";
import TimeAgo from "../user/TimeAgo";
import BaseButton from "@/components/buttons/BaseButton";
import CommentReply from "./CommentReply";
import LikeComment from "./LikeComment";
import { UserName } from "../user/profile/UserName";

const UsersComment = ({ comments }) => {
  const replyOnComment = () => {};
  return (
    <>
      {comments?.map((item, index) => (
        <div
          key={index}
          className="relative mb-3 flex w-full items-start gap-4"
        >
          <Avatar size={10} />
          <div className="inline-block">
            <div className="flex items-center gap-1">
              <UserName />
              <span className="text-sm text-black">{item?.message}</span>
            </div>
            <div className="flex items-center gap-3">
              <TimeAgo timestamp={item?.createdAt} />
              {item.likes.length ? (
                <p className="inline-block  text-sm font-medium lowercase text-neutral-500">
                  <span className="text-current ">{item.likes.length}</span>{" "}
                  likes
                </p>
              ) : null}

              <BaseButton
                clickHandler={replyOnComment}
                title="Reply"
                classes=" text-neutral-500 bg-transparent text-sm capitalize "
              />
            </div>
            {item.replies.length ? (
              <div className="">
                <div className="flex w-full flex-1 items-start gap-4 py-2">
                  <span className="top-.5 relative block leading-[0] text-stone-400">
                    ______
                  </span>
                  <BaseButton
                    title="view all replies"
                    classes=" text-stone-400 bg-transparent text-xs capitalize "
                  />
                </div>
                <CommentReply replies={item.replies} />
              </div>
            ) : null}
          </div>
          <div className="!absolute !right-0">
            <LikeComment likes={item.likes} commentId={item._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default UsersComment;
