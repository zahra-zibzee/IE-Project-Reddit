import React, { useEffect } from "react";
import Navbar from "../../Searchbar/Navbar";
import TextPost from "./TextPost";
import LinkPost from "./LinkPost";
import MediaPost from "./MediaPost";
import { Link, useLocation } from "react-router-dom";
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
import axios from "axios";

const Post = () => {
  const location = useLocation();
  const { user, currentPost } = location.state;

  console.log(currentPost)

  const [post, setPost] = useState(currentPost);

  document.body.style.backgroundColor = "#4B4746";
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [up_, setUp] = useState(up);
  const [down_, setDown] = useState(down);

  const [saved, setSaved] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);

  const [likeCount, setLikeCount] = useState(0);
  const [newComment, setNewComment] = useState("");

  const rules = ["first rule.", "second rule.", "forth rule.", "fifth rule."];

  const postMedia = "i don't know how to handle media yet!";

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

  const comment = () => {
    addComment();
    setShowAddComment(false);
    setNewComment("");
  };

  const getText = (nc) => setNewComment(nc);

  const addComment = () => {
    const body = {
      authorization: localStorage.getItem("token"),
      postId: post._id,
      text: newComment,
    };

    axios
      .post("http://localhost:3000/comments/createComment", body)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    setLikeCount(post.likes.length - post.dislikes.length);
  }, []);

  return (
    <>
      <Navbar navPage="home" user={user} />

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
            <Link
              className="col-2 text-white text-decoration-none"
              to={{
                pathname: "/",
                state: { user: user },
              }}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
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
                          {!!post.community_name
                            ? post.community_name
                            : "bi pedar madar"}
                        </Link>
                      </div>
                      <div className="col mt-1">
                        <p className="text-muted f-smaller">
                          Posted by{" "}
                          <Link
                            className="text-decoration-none text-dark"
                            to="/user"
                          >
                            {post.user_name}
                          </Link>
                          {
                            " " + post.created_date
                            // post.created_date.getFullYear() +
                            // "-" +
                            // (post.created_date.getMonth() + 1) +
                            // "-" +
                            // post.created_date.getDate() +
                            // " " +
                            // post.created_date.getHours() +
                            // ":" +
                            // post.created_date.getMinutes() +
                            // ":" +
                            // post.created_date.getSeconds()
                          }
                        </p>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <h4>{post.title}</h4>
                    </div>

                    {post.post_type == "post" ? (
                      <TextPost text={post.text} />
                    ) : post.post_type == "image-video" ? (
                      <MediaPost media={postMedia} />
                    ) : (
                      <LinkPost link={post.text} />
                    )}

                    <div className="row container">
                      <div className="col text-muted f-smaller fw-bold">
                        <i
                          className="far fa-comment fs-6 me-1"
                          onClick={() => setShowAddComment(true)}
                        ></i>
                        {" " + post.comment_ids.length + " "}Comments
                      </div>
                      <div
                        className="btn col text-muted f-smaller fw-bold"
                        onClick={() => setSaved(!saved)}
                      >
                        {saved ? (
                          <i className="far fa-bookmark fs-6 me-1"></i>
                        ) : (
                          <i className="fas fa-bookmark fs-6 me-1"></i>
                        )}{" "}
                        Save
                      </div>
                    </div>

                    <Modal
                      show={showAddComment}
                      onHide={() => setShowAddComment(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>comment as {user.username}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <RichtextEditor getText={getText} />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="outline-primary"
                          className="rounded-pill"
                          onClick={() => comment()}
                        >
                          comment
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                  {post.comment_ids.map((comment) => {
                    return (
                      <>
                        <div className="row">
                          <Comment commentId={comment} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-3">
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
