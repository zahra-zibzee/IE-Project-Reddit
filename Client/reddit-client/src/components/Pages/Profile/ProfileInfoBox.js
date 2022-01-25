import React, { useState } from "react";
import profilePhoto from "../../../assets/media/community.png";
import { Link } from "react-router-dom";

const ProfileInfoBox = (params) => {
  const type = params.type;
  const name = "world news";
  const about =
    "A place for major news from around the world, excluding US-internal news.";
  const memberCount = 650;
  const [followsJoined, setFollowsJoined] = useState(false);

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
          <btn
            className="btn btn-outline-primary mb-3  m-auto w-25 rounded-pill"
            onClick={() => setFollowsJoined(!followsJoined)}
          >
            {type == "community" && !followsJoined
              ? "join"
              : type == "community" && followsJoined
              ? "leave"
              : type == "user" && !followsJoined
              ? "follow"
              : "unfollow"}
          </btn>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoBox;
