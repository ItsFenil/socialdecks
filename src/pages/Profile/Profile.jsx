import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="Profile">
      <div className="ProfileLeft">
      <ProfileLeft />
      </div>
      <div className="Profile-center">
        <ProfileCard location = 'profilePage'/>
      <PostSide/>
      </div>
      <div className="ProfileRight">
      <RightSide/></div>
    </div>
  );
};

export default Profile;
