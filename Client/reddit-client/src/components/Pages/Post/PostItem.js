import React from "react";
import Navbar from "../../Searchbar/Navbar";
import TextPost from "./TextPost";
import LinkPost from "./LinkPost";
import MediaPost from "./MediaPost";
import { Link } from "react-router-dom";
import up from "../../../assets/media/up.png";
import down from "../../../assets/media/down.png";
import up_fill from "../../../assets/media/up-fill.png";
import down_fill from "../../../assets/media/down-fill.png";
import community from "../../../assets/media/community.png";
import { useState } from "react/cjs/react.development";

const PostItem = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [up_, setUp] = useState(up);
  const [down_, setDown] = useState(down);

  const [saved, setSaved] = useState(false);

  const [likeCount, setLikeCount] = useState(234);
  const communityName = "world news";
  const username = "nanami";
  const currentUser = "nili";
  const title =
    "this is a test title which will be filled with real title later :D";
  const commentCount = 73;

  //1 for text
  //2 for image/video
  //3 for link
  const postType = 1;
  const postText =
    "this is a test text for my test post ^___^ blah blah meow meow blah blah meow meow blah blah meow meow blah blah meow meow blah blah";
  const postMedia = "i don't know how to handle media yet!";
  const postLink = "https://google.com";
  const postTime = "4:40 tuesday 13 march 2021";

  const like = () => {
    if (liked) {
      setLiked(false);
      setUp(up);
      setLikeCount((lc) => lc - 1);
    } else {
      if (disliked) setLikeCount((lc) => lc + 1);
      setLikeCount((lc) => lc + 1);
      setDisliked(false);
      setDown(down);
      setLiked(true);
      setUp(up_fill);
    }
  };

  const dislike = () => {
    if (disliked) {
      setLikeCount((lc) => lc + 1);
      setDisliked(false);
      setDown(down);
    } else {
      if (liked) setLikeCount((lc) => lc - 1);
      setLikeCount((lc) => lc - 1);
      setLiked(false);
      setUp(up);
      setDisliked(true);
      setDown(down_fill);
    }
  };

  return (
    <>
      <div className="container bg-white border border-secondary rounded row pt-4">
        <div className="col-1 pt-4">
          <div className="row">
            <img height="20" src={up_} onClick={() => like()}></img>
          </div>
          <div className="row ms-05">{likeCount}</div>
          <div className="row">
            <img height="20" src={down_} onClick={() => dislike()}></img>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-1">
              <img
                className="rounded rounded-circle"
                src={community}
                width="30"
              />
            </div>
            <div className="col-3">
              <Link
                className="f-small fw-bold text-decoration-none text-dark"
                to="/community"
              >
                {communityName}
              </Link>
            </div>
            <div className="col mt-1">
              <p className="text-muted f-smaller">
                Posted by{" "}
                <Link className="text-decoration-none text-dark" to="/user">
                  {username}
                </Link>
                {" " + postTime}
              </p>
            </div>
          </div>

          <div className="row mt-2">
            <Link to="/post" className="text-decoration-none text-dark"><h4>{title}</h4></Link>
          </div>

          {postType == 1 ? (
            <TextPost text={postText} />
          ) : postType == 2 ? (
            <MediaPost media={postMedia} />
          ) : (
            <LinkPost link={postLink} />
          )}

          <div className="row container">
            <div className="col text-muted f-smaller fw-bold">
              <i className="far fa-comment fs-6 me-1"></i>
              {" " + commentCount + " "}Comments
            </div>
            <div className="btn col text-muted f-smaller fw-bold" onClick={() => setSaved(!saved)}>
              {saved ? (
                <i className="far fa-bookmark fs-6 me-1"></i>
              ) : (
                <i class="fas fa-bookmark fs-6 me-1"></i>
              )}{" "}
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostItem;
