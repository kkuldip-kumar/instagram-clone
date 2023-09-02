import React from "react";

const LikesCount = ({ classes }) => {
  return (
    <>
      {/* <p className="text-base font-normal text-gray">
        Be the first to <b> like this</b>
      </p> */}
      <p className="inline-block text-sm font-semibold lowercase text-stone-400">
        <span className="text-current ">25,072</span> likes
      </p>
    </>
  );
};

export default LikesCount;
