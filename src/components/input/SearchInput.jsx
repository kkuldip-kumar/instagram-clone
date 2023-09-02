import React, { useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef("null");
  useEffect(() => {}, []);

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("k", value, " before updated value: ", e.target.value);
    setValue((pre) => (pre = e.target.value));
    console.log("after updated value: " + value);
  };
  return (
    <div className="relative">
      <input
        className="group w-full rounded border border-solid border-slate-300 px-2 pe-8 ps-2 text-base  font-normal focus:border focus:border-solid focus:border-slate-400
        focus:outline-0 focus:ring-0 focus:ring-transparent"
        type="text"
        value={value}
        onChange={updateHandler}
      />
      <CiSearch
        size={24}
        className="absolute left-2 top-2 fill-stone-500 group-focus:hidden"
      />
      {/* {isFocused ? (
      ) : null} */}
      <IoMdCloseCircle
        size={24}
        className="absolute right-2  top-2 fill-stone-500"
      />
    </div>
  );
};

export default SearchInput;
