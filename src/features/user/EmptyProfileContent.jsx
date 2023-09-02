import BaseLink from "@/components/links/BaseLink";
import React from "react";
import { BsCamera } from "react-icons/bs";

function EmptyProfileContent({ mainTitle, iconName, subText, linkContent }) {
  return (
    <div className="grid h-[25vh] place-items-center">
      <div className="py-10 text-center">
        {iconName ? (
          <div className="grid h-auto place-items-center">
            <div className="grid h-16 w-16 place-content-center place-items-center justify-center rounded-full border border-solid border-black">
              {iconName}
            </div>
          </div>
        ) : null}
        {mainTitle ? (
          <div className=" my-4">
            <h3 className="text-4xl font-extrabold">{mainTitle}</h3>
          </div>
        ) : null}
        {subText ? (
          <div className="mb-4">
            <p className="text-state-600 text-sm font-normal">{subText}</p>
          </div>
        ) : null}
        {linkContent ? (
          <div className="">
            <BaseLink
              pageLink="/"
              content={linkContent}
              classes={`text-primary font-semiBold text-base active:text-primaryActive`}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default EmptyProfileContent;
