import UserDetailProfile from "@/features/user/UserDetailProfile";
import React from "react";
import Footer from "./footer/Footer";

function ProfileLayout() {
  return (
    <div className="ml-24">
      <div className="container mx-auto   md:min-h-[80vh] md:px-36">
        <UserDetailProfile />
      </div>
      <Footer />
    </div>
  );
}

export default ProfileLayout;
