import { ModalBody } from "@/components/modal/ModalBody";
import { ModalFooter } from "@/components/modal/ModalFooter";
import { ModalHeader } from "@/components/modal/ModalHeader";
import React, { useState } from "react";
import Emoji from "../posts/Emoji";
import CommentInput from "./CommentInput";
import PostBody from "../posts/PostBody";
import PostActions from "../posts/PostActions";
import UsersComment from "./UsersComment";
import TimeAgo from "../user/TimeAgo";
import { usePostQuery } from "@/store/post/postService";
import UserBriefInfo from "../user/UserBriefInfo";
import MoreAboutUser from "../user/MoreAboutUser";
import _, { isEmpty } from "lodash";
import { Loader } from "@/components/loaders/Loader";
const PostInfo = ({ postId, userId }) => {
  const { data, isLoading } = usePostQuery(postId);
  if (isEmpty(data)) return <Loader />;
  const { data: post } = data;
  return (
    <div className="flex w-full">
      <div className="w-5/12 items-stretch">
        <PostBody post={post?.image} />
      </div>
      <div className="w-7/12 flex-col">
        <ModalHeader>
          <div className="border-b border-slate-300 px-3 py-2">
            <div className="flex w-full items-center justify-between px-2 py-2 md:px-1 md:py-2">
              <UserBriefInfo
                createdAt={post.createdAt}
                authorInfo={post.postedBy}
              />
              <MoreAboutUser />
            </div>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="block min-h-fit px-4 py-2">
            <div className="h-[22.5rem] overflow-y-auto">
              <UsersComment postId={postId} comments={post?.comments} />
            </div>
            <div className="py-2">
              <PostActions
                userId={userId}
                commentHidden={true}
                postData={post}
              />
            </div>
            <TimeAgo timestamp={post?.createdAt} />
          </div>
        </ModalBody>
        <ModalFooter classes={"py-1"}>
          <CommentInput postId={postId} emojiRight={true} />
        </ModalFooter>
      </div>
    </div>
  );
};

export default PostInfo;
