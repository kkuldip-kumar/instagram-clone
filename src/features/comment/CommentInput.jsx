import React, { useState } from "react";
import Emoji from "../posts/Emoji";
import BaseButton from "@/components/buttons/BaseButton";
import { useCommentOnPostMutation } from "@/store/post/postService";
import BaseTextArea from "@/components/input/BaseTextArea";

export default function CommentInput({
  emojiRight = false,
  postId,
  reply = false,
}) {
  const [commentOnPost, { isSuccess }] = useCommentOnPostMutation();
  const [comment, setComment] = useState("");
  const [emoji, setEmoji] = useState("");
  const [message, setMessage] = useState("");
  const saveCommentHandler = async () => {
    const commentData = {
      message: comment,
      id: postId,
    };
    await commentOnPost(commentData);
    setComment("");
  };
  const commentHandler = (comment) => {
    setComment((prev) => (prev = comment));
  };
  const emojiSelectHandler = (emoji) => {
    setComment(emoji + comment);
    setEmoji((prev) => (prev = emoji));
    console.log("emogi", emoji);
  };
  return (
    <div className="relative flex w-full items-center gap-2">
      {emojiRight ? <Emoji emojiSelectHandler={emojiSelectHandler} /> : null}
      <BaseTextArea
        setText={commentHandler}
        text={comment}
        classes="focus:border-0 focus:border-transparent focus:ring-0 focus:ring-transparent"
      />
      <div className="inline-flex items-center gap-2">
        <BaseButton
          classes="text-primary"
          clickHandler={saveCommentHandler}
          title=""
        >
          {comment ? "Post" : null}
        </BaseButton>
        {emojiRight ? null : <Emoji emojiSelectHandler={emojiSelectHandler} />}
      </div>
    </div>
  );
}
