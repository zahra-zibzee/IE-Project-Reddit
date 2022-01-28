import React, { useEffect, useState } from "react";
import profilePhoto from "../../../assets/media/community.png";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfileInfoBox = ({ type, user, community, getCurrentUser }) => {
  debugger
  const name = type == "user" ? user.username : community.name;
  const about = type == "user" ? user.about : community.description;
  const [memberCount, setMemberCount] = useState(
    type == "user" ? 20 : community.members.length
  );

  const [followsJoined, setFollowsJoined] = useState(false);

  const followJoin = () => {
    const body = {
      authorization: localStorage.getItem("token"),
      name: community.name,
    };

    if (type == "community" && !followsJoined) {
      axios
        .post("http://localhost:3000/users/joinCommunity", body)
        .then((res) => {
          setFollowsJoined(!followsJoined);
          setMemberCount(memberCount + 1);
          getCurrentUser(res.data);
        });
    } else if (type == "community" && !followsJoined) {
      //axios leave
    }
  };

  useEffect(() => {
    if (
      type == "community" &&
      community.members.includes(user._id.toString())
    ) {
      setFollowsJoined(true);
    }
  }, []);

  return (
    <>
      <div className="bg-white rounded mt-50">
        <div className="bg-primary rounded-top p-3 text-white fw-bold">
          About {type}
        </div>
        <div className="row p-3">
          <div className="col-3">
            <img
              className="rounded rounded-circle"
              src={profilePhoto}
              width="50"
            />
          </div>
          <div className="col mt-2">
            <Link
              className="text-decoration-none text-dark fs-5"
              to={type == "community" ? "/community" : "/user"}
            >
              {name}
            </Link>
          </div>
        </div>
        <p className="p-3 f-smaller">{about}</p>
        <div className="row p-0">
          <div className="text-center fw-bold">{memberCount}</div>
        </div>

        <div className="row p-0">
          <p className="text-center f-smaller">
            {type == "community" ? "members" : "followers"}
          </p>
        </div>

        <div className="row">
          <button
            className="btn btn-outline-primary mb-3  m-auto w-25 rounded-pill"
            onClick={() => followJoin()}
          >
            {type == "community" && !followsJoined
              ? "join"
              : type == "community" && followsJoined
              ? "leave"
              : type == "user" && !followsJoined
              ? "follow"
              : "unfollow"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoBox;
