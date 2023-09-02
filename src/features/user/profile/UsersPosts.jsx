import { Loader } from "@/components/loaders/Loader";
import { useGetAllPostsQuery } from "@/store/user/userService";
import React from "react";
import { useSelector } from "react-redux";

export const UsersPosts = () => {
  const { data: user } = useSelector((state) => state.user);
  const { data, isLoading } = useGetAllPostsQuery("64a01fde2e76b77dfd43c3a5");
  console.log("Users posts", user, data);
  //   if (isLoading) return <Loader />;
  return (
    <>
      <div className="flex w-full gap-1">
        {data?.data?.map((post) => (
          <div key={post.id} className="w-1/3 rounded">
            <img src={post.image} className="" alt="" />
          </div>
        ))}
      </div>
    </>
  );
};
