import React from "react";
import FollowersCard from "../FollowersCard";
import LogoSearch from "../LogoSearch";
import ProfileCard from "../ProfileCard";
import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
