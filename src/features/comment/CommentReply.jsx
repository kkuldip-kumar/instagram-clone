import Avatar from "@/components/Avatar";
import React from "react";
import Like from "../posts/Like";
import TimeAgo from "../user/TimeAgo";
import BaseButton from "@/components/buttons/BaseButton";
import { UserName } from "../user/profile/UserName";
import LikeReply from "./LikeReply";

const CommentReply = ({ replies }) => {
  return (
    <>
      {replies?.map((reply, index) => (
        <div key={index} className="flex w-full items-start gap-4 space-y-1">
          <Avatar size={10} />
          <div className="inline-block">
            <div className="flex items-center gap-1">
              <UserName />
              <span className="text-sm text-black">{reply.message}</span>
            </div>
            <div className="flex items-center gap-3">
              <TimeAgo timestamp={reply?.createdAt} />
              {reply?.likes.length ? (
                <p className="inline-block text-sm font-medium lowercase text-neutral-500">
                  <span className="text-current ">{reply.likes.length}</span>{" "}
                  likes
                </p>
              ) : null}

              {/* <BaseButton
                title="Reply"
                classes=" text-stone-400 bg-transparent text-sm capitalize "
              /> */}
            </div>
            {/* <div className="flex w-full flex-1 items-start gap-4 py-2">
              <span className="top-.5 relative block leading-[0] text-stone-400">
                ______
              </span>
              <BaseButton
                title="view all replies"
                classes=" text-stone-400 bg-transparent text-xs capitalize "
              />
            </div> */}
          </div>
          <div className="!absolute !right-0">
            <LikeReply likes={reply.likes} replyId={reply._id} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentReply;
