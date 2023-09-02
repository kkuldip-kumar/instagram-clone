import React from "react";
import postImg from "@/assets/insta_pic.jpg";

const PostImage = () => {
  return (
    <img
      alt="image"
      className="md:nx-w-[480px] h-full w-full rounded-bl"
      src={postImg}
      loading="lazy"
    />
  );
};

export default PostImage;
