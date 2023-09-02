import React from "react";

const ButtonLoader = () => {
  return (
    <div className="inline-flex items-center gap-1">
      <span
        className="inline-block h-4 w-4 animate-spin rounded-full border-[3px] border-current border-t-transparent text-white"
        role="status"
        aria-label="loading"
      ></span>
      <span className="font-base  block text-white">Loading...</span>
    </div>
  );
};

export default ButtonLoader;
