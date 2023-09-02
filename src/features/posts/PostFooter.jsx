// import React, { useState } from "react";
// import ViewComments from "../comment/ViewComments";
// import CommentInput from "../comment/CommentInput";
// import PostActions from "./PostActions";
// import { useSelector } from "react-redux";

// function PostFooter({
//   likes,
//   savedBy,
//   postedBy,
//   comments,
//   caption,
//   _id: postId,
// }) {
//   const { data } = useSelector((state) => state.user);
//   // console.log("saved post", data);
//   // console.log(postId);
//   // we need to fix re-render issue
//   return (
//     <div className="px-2">
//       <PostActions
//         likes={likes}
//         postId={postId}
//         savedBy={savedBy}
//         userId={data.userId}
//         comments={comments}
//       />

//       <div className="">
//         {caption ? (
//           <p className="line-clamp-1 text-sm text-stone-400">
//             <span className="me-1 text-base font-semibold text-black">
//               {postedBy.name}
//             </span>
//             {caption}
//           </p>
//         ) : null}
//       </div>
//       {comments.length ? (
//         <div className="py-1">
//           <ViewComments comments={comments} />
//         </div>
//       ) : null}
//       <CommentInput postId={postId} />
//     </div>
//   );
// }

// export default PostFooter;
