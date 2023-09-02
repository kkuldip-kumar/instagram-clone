import React, { useMemo } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { usePostsQuery } from "@/store/post/postService";
import { Loader } from "@/components/loaders/Loader";
import ProfileInfoCard from "../user/profile/ProfileInfoCard";

export default function PostContainer() {
  usePostsQuery();
  const { posts } = useSelector((state) => state.post);
  // const postsData = useMemo(() => posts, []);
  if (!posts?.length) return <Loader />;
  return (
    <>
      {/* <ProfileInfoCard /> */}

      <div className="w-full divide-y divide-slate-300 md:mx-auto md:w-[480px] ">
        {posts && posts?.map((post) => <Post key={post._id} postData={post} />)}
      </div>
    </>
  );
}
