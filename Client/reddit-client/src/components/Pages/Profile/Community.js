import React, {useState} from "react";
import ProfileInfoBox from "./ProfileInfoBox";
import PostItem from "../Post/PostItem";
import Navbar from "../../Searchbar/Navbar";
import CommunityRules from "./CommunityRules";
import { Link, useLocation } from "react-router-dom";

const Community = () => {
  const location = useLocation();
  const { community, user } = location.state;

  const [currentUser, setCurrentUser] = useState(user);

  const getCurrentUser = (cu) => {
    setCurrentUser(cu);
  };

  const rules = ["first rule.", "second rule.", "forth rule.", "fifth rule."];
  return (
    <main className="dark page">
      <Navbar navPage="home" user={currentUser}/>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          {community.posts.map((postId, index) => {
            return <PostItem user={user} postId={postId} key={index} />;
          })}
        </div>
        <div className="col-3">
          <ProfileInfoBox type="community" community={community} user={user} getCurrentUser={getCurrentUser}/>
          <CommunityRules rules={rules} />
        </div>
        <div className="col-2"></div>
      </div>
    </main>
  );
};

export default Community;
