import React from "react";
import postImg from "@/assets/insta_pic.jpg";
import MultiImage from "./MultiImage";
import Reel from "../reels/Reel";
import PostAuthIcon from "./PostAuthIcon";
export default function PostBody({ post }) {
  return (
    <div className="md:mx-h-[600px] h-full w-full rounded md:w-[480px]">
      <div className="relative">
        <img src={post ? post : postImg} className="rounded" alt="roy" />
        <PostAuthIcon />
      </div>
      {/* <MultiImage /> */}
      {/* <Reel /> */}
    </div>
  );
}
