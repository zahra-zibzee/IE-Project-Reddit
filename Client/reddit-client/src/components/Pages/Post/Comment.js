import React, {useState} from "react";
import user from "../../../assets/media/avatar.jpg";
import up from "../../../assets/media/up.png";
import down from "../../../assets/media/down.png";
import up_fill from "../../../assets/media/up-fill.png";
import down_fill from "../../../assets/media/down-fill.png";
import TextPost from "./TextPost";
import { Link } from "react-router-dom";

const Comment = () => {
  const commentAuthor = "arshia";
  const [likeCount, setLikeCount] = useState(17);
  const commentText =
    "this is a sample comment for my post so I can see if comments are working properly";
  const commentTime = "4:40 tuesday 13 march 2021";

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [up_, setUp] = useState(up);
  const [down_, setDown] = useState(down);

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
      <div className="container bg-white border mt-1 ms-2">
        <div className="row pt-2">
          <div className="col-1">
            <div className="row">
              <img height="20" src={up_} onClick={() => like()}></img>
            </div>
            <div className="row ms-05">{likeCount}</div>
            <div className="row">
              <img height="20" src={down_} onClick={() => dislike()}></img>
            </div>
          </div>
          <div className="col-1 mt-1">
            <img className="rounded rounded-circle" src={user} width="30" />
          </div>
          <div className="col-3 mt-2">
            <Link
              className="f-small fw-bold text-decoration-none text-dark"
              to="/user"
            >
              {commentAuthor}
            </Link>
          </div>
          <div className="col mt-2">
            <p className="text-muted f-smaller">{" " + commentTime}</p>
          </div>
        </div>
        <TextPost text={commentText} />
      </div>
    </>
  );
};

export default Comment;
