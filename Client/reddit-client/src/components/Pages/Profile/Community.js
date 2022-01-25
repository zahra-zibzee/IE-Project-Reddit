import React from "react";
import ProfileInfoBox from "./ProfileInfoBox";
import PostItem from "../Post/PostItem";
import Navbar from "../../Searchbar/Navbar";
import CommunityRules from "./CommunityRules";

const Community = () => {
    const posts = ["", " ", "  ", "    "];
    const rules = ["first rule.", "second rule.", "forth rule.", "fifth rule."];
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
            <ProfileInfoBox type="community" />
            <CommunityRules rules={rules}/>
          </div>
          <div className="col-2"></div>
        </div>
      </main>
    );
}

export default Community;