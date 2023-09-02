import React from "react";

const Gallary = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="h-20 w-full bg-indigo-500 ">01</div>
      <div className="h-20 w-full bg-indigo-500 ">02</div>
      <div className="h-20 w-full bg-indigo-500 ">03</div>
      <div className="col-span-2 h-20 w-full bg-indigo-500 ">04</div>
      <div className="h-20 w-full bg-indigo-500 ">05</div>
      <div className="h-20 w-full bg-indigo-500 ">06</div>
      <div className="col-span-2 h-20 w-full bg-indigo-500 ">07</div>
    </div>
  );
};

export default Gallary;
