import React from "react";
import ProfileInfo from "./ProfileInfo";

import ProfileTabContainer from "./profile/ProfileTabContainer";

function UserDetailProfile() {
  return (
    <div className="">
      <div className=" mb-10">
        <ProfileInfo />
      </div>
      <ProfileTabContainer />
    </div>
  );
}

export default UserDetailProfile;
