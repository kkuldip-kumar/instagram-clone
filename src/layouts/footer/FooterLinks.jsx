import BaseLink from "@/components/links/BaseLink";
import React from "react";

const footerLinks = [
  { title: "Meta", url: "" },
  { title: "about", url: "" },
  { title: "blog", url: "" },
  { title: "job", url: "" },
  { title: "help", url: "" },
  { title: "API", url: "" },
  { title: "terms", url: "" },
  { title: "top Accounts", url: "" },
  { title: "locations", url: "" },
  { title: "instagram lite", url: "" },
  { title: "contact uploading & non user", url: "" },
  { title: "meta verified", url: "" },
];
function FooterLinks() {
  return (
    <div className="flex w-full flex-1 flex-wrap items-center justify-center gap-3">
      {footerLinks?.map((item, index) => (
        <BaseLink
          key={index}
          classes={`text-gray text-xs capitalize hover:underline `}
          content={item.title}
        />
      ))}
    </div>
  );
}

export default FooterLinks;
