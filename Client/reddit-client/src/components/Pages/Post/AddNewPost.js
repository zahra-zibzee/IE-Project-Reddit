import React, { useEffect, useState } from "react";
import ColoredLine from "../../Layouts/ColoredLine";
import Navbar from "../../Searchbar/Navbar";
import PostGuide from "./PostGuide";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import RichtextEditor from "../../Layouts/RichTextEditor";
import UploadImage from "../../Layouts/UploadImage";
import LinkArea from "../../Layouts/LinkArea";
import axios from "axios";

const AddNewPost = ({ history }) => {
  const [postMode, setPostMode] = useState("post");
  // "post": post    "image-video": image & video   "link": link

  const location = useLocation();
  const { user } = location.state;

  const [communityList, setCommunityList] = useState([]);
  const [community, setCommunity] = useState("choose community");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const getLink = (l) => setLink(l);
  const getText = (t) => setText(t);

  const post = (event) => {
    if (title == "") {
      setError("title cannot be empty!");
      event.preventDefault();
      return;
    } else setError("");

    if (postMode == "post" && text == "") {
      setError("post body cannot be empty!");
      event.preventDefault();
      return;
    } else setError("");

    if (postMode == "link" && link == "") {
      setError("post url cannot be empty!");
      event.preventDefault();
      return;
    } else setError("");

    event.preventDefault();

    if (community == "choose community")
      setCommunity(null);

    const p = {
      authorization: localStorage.getItem("token"),
      communityName: community,
      post_type: postMode,
      title: title,
      text: postMode == "post" ? text : link,
      user_id: user._id,
    };

    axios
      .post("http://localhost:3000/posts/createPost", p)
      .then((res) => {
        history.push({
          pathname: "/",
          state: { user: res.data },
        });
      })
      .catch((err) => setError(err.response.data));
  };

  useEffect(() => {
    setCommunityList(user.community_names);
  }, []);

  return (
    <>
      <main className="dark">
        <Navbar navPage="addPost" user={user} />
        <div className="row mt-5">
          <div className="col-2"></div>
          <div className="col-5">
            <h5> Create Post </h5>
            <ColoredLine color={"white"} />

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {community}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {!!communityList &&
                  communityList.map((community) => {
                    return (
                      <Dropdown.Item onClick={() => setCommunity(community)}>
                        {community}
                      </Dropdown.Item>
                    );
                  })}
              </Dropdown.Menu>
            </Dropdown>

            <div className="bg-white rounded mt-3">
              <ButtonGroup aria-label="Basic example" className="w-100">
                <Button
                  variant="light"
                  className={
                    postMode == "post"
                      ? "text-muted active-btn p-3"
                      : "text-muted p-3"
                  }
                  onClick={() => setPostMode("post")}
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                  {" Post"}
                </Button>
                <Button
                  variant="light"
                  className={
                    postMode == "image-video"
                      ? "text-muted active-btn p-1"
                      : "text-muted p-1"
                  }
                  onClick={() => setPostMode("image-video")}
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  {" Image & Video"}
                </Button>
                <Button
                  variant="light"
                  className={
                    postMode == "link"
                      ? "text-muted active-btn p-3"
                      : "text-muted p-3"
                  }
                  onClick={() => setPostMode("link")}
                >
                  <i className="fa fa-link" aria-hidden="true"></i>
                  {" Link"}
                </Button>
              </ButtonGroup>

              <div className="p-4">
                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  ></input>

                  {postMode == "post" ? (
                    <RichtextEditor getText={getText} />
                  ) : postMode == "image-video" ? (
                    <UploadImage />
                  ) : (
                    <LinkArea getLink={getLink} />
                  )}

                  <button
                    className="btn btn-primary rounded-pill d-flex"
                    onClick={(e) => post(e)}
                  >
                    POST
                  </button>
                  {error && <p className="error">{error}</p>}
                </form>
              </div>
            </div>
          </div>
          <div className="col-3">
            <PostGuide />
          </div>
          <div className="col-2"></div>
        </div>
      </main>
    </>
  );
};

export default AddNewPost;
