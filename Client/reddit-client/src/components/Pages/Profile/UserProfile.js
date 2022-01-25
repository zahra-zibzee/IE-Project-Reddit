import React from "react";
import ProfileInfoBox from "./ProfileInfoBox";
import PostItem from "../Post/PostItem";
import Navbar from "../../Searchbar/Navbar";

const UserProfile = () => {
  const posts = ["", " ", "  ", "    "];
  return (
    <main className="dark page">
      <Navbar navPage="home" />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          {posts.map((post) => {
            return <PostItem />;
          })}
        </div>
        <div className="col-3">
          <ProfileInfoBox type="user" />
        </div>
        <div className="col-2"></div>
      </div>
    </main>
  );
};

export default UserProfile;
