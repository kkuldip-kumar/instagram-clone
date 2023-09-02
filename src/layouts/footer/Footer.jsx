import React from "react";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <>
      <div className="block">
        <FooterLinks />
        <p className="py-4 text-center text-xs text-gray">
          © 2023 Instagram from Meta
        </p>
      </div>
    </>
  );
}

export default Footer;
