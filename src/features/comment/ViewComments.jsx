import React from "react";

export default function ViewComments({ comments }) {
  return (
    <a className="cursor-pointer text-sm text-stone-400 ">
      View all {comments.length} comments
    </a>
  );
}
