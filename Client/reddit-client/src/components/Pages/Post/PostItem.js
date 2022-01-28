import React, { useEffect } from "react";
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
import axios from "axios";

const PostItem = ({ user, postId }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [post, setPost] = useState(null);

  const [up_, setUp] = useState(up);
  const [down_, setDown] = useState(down);

  const [saved, setSaved] = useState(false);

  const [likeCount, setLikeCount] = useState(0);

  //1 for text
  //2 for image/video
  //3 for link
  const postType = "post";
  const postMedia = "i don't know how to handle media yet!";

  const fetchPost = () => {
    const body = {
      authorization: localStorage.getItem("token"),
      postId: postId,
    };

    axios
      .post("http://localhost:3000/posts/getPost", body)
      .then((res) => {
        setPost(res.data);
        setLikeCount(post.likes.length - post.dislikes.length);
      })
      .catch((err) => console.log(err.response.data));
  };

  useEffect(() => {
    console.log("here");
    fetchPost();
  }, []);

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
      {!!post && (
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
                  {!!post.community_name
                    ? post.community_name
                    : "bi pedar madar"}
                </Link>
              </div>
              <div className="col mt-1">
                <p className="text-muted f-smaller">
                  Posted by{" "}
                  <Link className="text-decoration-none text-dark" to="/user">
                    {post.user_name}
                  </Link>
                  {" " + post.created_date}
                  {/* {" " +
                    post.created_date.getFullYear() +
                    "-" +
                    (post.created_date.getMonth() + 1) +
                    "-" +
                    post.created_date.getDate() +
                    " " +
                    post.created_date.getHours() +
                    ":" +
                    post.created_date.getMinutes() +
                    ":" +
                    post.created_date.getSeconds()} */}
                </p>
              </div>
            </div>

            <div className="row mt-2">
              <Link
                to={{
                  pathname: "/post",
                  state: { user: user, currentPost: post },
                }}
                className="text-decoration-none text-dark"
              >
                <h4>{post.title}</h4>
              </Link>
            </div>

            {postType == "post" ? (
              <TextPost text={post.text} />
            ) : postType == "image-video" ? (
              <MediaPost media={postMedia} />
            ) : (
              <LinkPost link={post.text} />
            )}

            <div className="row container">
              <div className="col text-muted f-smaller fw-bold">
                <i className="far fa-comment fs-6 me-1"></i>
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
          </div>
        </div>
      )}
    </>
  );
};

export default PostItem;
