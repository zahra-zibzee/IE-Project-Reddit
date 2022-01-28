import React from "react";
import communityImage from "../../assets/media/community.png";
import { Link } from "react-router-dom";

const CommunityList = (params) => {
  const topCommunities = params.topCommunities;
  const user = params.user;

  return (
    <>
      <div className="bg-white rounded mt-4">
        <div className="bg-dark rounded-top p-3 text-white fw-bold">
          Today's Top Growing Communities
        </div>
        <ul className="list-group p-2 mb-4">
          {topCommunities.map((community) => {
            return (
              <Link
                to={{
                  pathname: "/community",
                  state: { community: community, user: user},
                }}
                className="text-decoration-node f-small fw-bold text-dark"
              >
                <li className="list-group-item">
                  <img src={communityImage} width="40" className="me-3" />
                  {community.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CommunityList;
