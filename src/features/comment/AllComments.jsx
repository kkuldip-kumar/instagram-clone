import React from "react";
import UsersComment from "./UsersComment";

const AllComments = () => {
  return (
    <>
      <div className="mb-3">
        <UsersComment />
      </div>
      <div className="mb-3">
        <UsersComment />
      </div>
    </>
  );
};

export default AllComments;
