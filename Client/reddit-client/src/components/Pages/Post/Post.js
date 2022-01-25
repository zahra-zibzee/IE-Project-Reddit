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
import ProfileInfoBox from "../Profile/ProfileInfoBox";
import CommunityRules from "../Profile/CommunityRules";
import { Modal, Button } from "react-bootstrap";
import RichtextEditor from "../../Layouts/RichTextEditor";
import Comment from "./Comment";

const Post = () => {
  document.body.style.backgroundColor = "#4B4746";
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [up_, setUp] = useState(up);
  const [down_, setDown] = useState(down);

  const [saved, setSaved] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);

  const [likeCount, setLikeCount] = useState(234);
  const communityName = "world news";
  const username = "nanami";
  const currentUser = "nili";
  const title =
    "this is a test title which will be filled with real title later :D";
  const commentCount = 73;
  const rules = ["first rule.", "second rule.", "forth rule.", "fifth rule."];
  const comments = ["", " ", "  ", "    "];

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
      <Navbar navPage="home" />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row bg-black p-3">
            <div className="col-1"></div>
            <div className="col-1 text-white">
              <div className="row">
                <div className="col-3">
                  <img width="20" src={down_} onClick={() => dislike()}></img>
                </div>
                <div className="col-4">{likeCount}</div>
                <div className="col-3">
                  <img width="20" src={up_} onClick={() => like()}></img>
                </div>
              </div>
            </div>
            <div className="col-8"></div>
            <Link className="col-2 text-white text-decoration-none" to="/">
              <i class="fa fa-times" aria-hidden="true"></i>
              {" close "}
            </Link>
          </div>
        </div>
        <div className="col-2"></div>
      </div>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 bg-light-gray">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-7 ">
              <div className="container bg-white rounded pt-2">
                <div className="row">
                  <div className="col-1 pt-4">
                    <div className="row">
                      <img height="20" src={up_} onClick={() => like()}></img>
                    </div>
                    <div className="row ms-05">{likeCount}</div>
                    <div className="row">
                      <img
                        height="20"
                        src={down_}
                        onClick={() => dislike()}
                      ></img>
                    </div>
                  </div>
                  <div className="col-11">
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
                          <Link
                            className="text-decoration-none text-dark"
                            to="/profile"
                          >
                            {username}
                          </Link>
                          {" " + postTime}
                        </p>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <h4>{title}</h4>
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
                        <i
                          className="far fa-comment fs-6 me-1"
                          onClick={() => setShowAddComment(true)}
                        ></i>
                        {" " + commentCount + " "}Comments
                      </div>
                      <div
                        className="btn col text-muted f-smaller fw-bold"
                        onClick={() => setSaved(!saved)}
                      >
                        {saved ? (
                          <i className="far fa-bookmark fs-6 me-1"></i>
                        ) : (
                          <i class="fas fa-bookmark fs-6 me-1"></i>
                        )}{" "}
                        Save
                      </div>
                    </div>

                    <Modal
                      show={showAddComment}
                      onHide={() => setShowAddComment(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>comment as {currentUser}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <RichtextEditor />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="outline-primary"
                          className="rounded-pill"
                          onClick={() => setShowAddComment(false)}
                        >
                          comment
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    
                  </div>{comments.map((comment) => {
                      return (
                        <>
                          <div className="row">
                            <Comment />
                          </div>
                        </>
                      );
                    })}

                </div>
              </div>
            </div>
            <div className="col-3">
              <ProfileInfoBox type="community" />
              <CommunityRules rules={rules} />
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="col-2"></div>
      </div>
    </>
  );
};

export default Post;
