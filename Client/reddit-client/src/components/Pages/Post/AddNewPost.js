import React, { useEffect, useState } from "react";
import ColoredLine from "../../Layouts/ColoredLine";
import Navbar from "../../Searchbar/Navbar";
import PostGuide from "./PostGuide";
import { Dropdown, ButtonGroup, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import RichtextEditor from "../../Layouts/RichTextEditor";
import UploadImage from "../../Layouts/UploadImage";
import LinkArea from "../../Layouts/LinkArea";

const AddNewPost = () => {
  const [postMode, setPostMode] = useState(1);
  // 1: post    2: image & video   3: link

  const location = useLocation();
  const { user } = location.state;

  const [communityList, setCommunityList] = useState(['1', '2']);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:3000/communities", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setCommunityList(data);
      });
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
                {" Choose Community "}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {communityList.map((community) => {
                  return <Dropdown.Item>{community}</Dropdown.Item>;
                })}
              </Dropdown.Menu>
            </Dropdown>

            <div className="bg-white rounded mt-3">
              <ButtonGroup aria-label="Basic example" className="w-100">
                <Button
                  variant="light"
                  className={
                    postMode == 1
                      ? "text-muted active-btn p-3"
                      : "text-muted p-3"
                  }
                  onClick={() => setPostMode(1)}
                >
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                  {" Post"}
                </Button>
                <Button
                  variant="light"
                  className={
                    postMode == 2
                      ? "text-muted active-btn p-1"
                      : "text-muted p-1"
                  }
                  onClick={() => setPostMode(2)}
                >
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  {" Image & Video"}
                </Button>
                <Button
                  variant="light"
                  className={
                    postMode == 3
                      ? "text-muted active-btn p-3"
                      : "text-muted p-3"
                  }
                  onClick={() => setPostMode(3)}
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
                  ></input>

                  {postMode == 1 ? (
                    <RichtextEditor />
                  ) : postMode == 2 ? (
                    <UploadImage />
                  ) : (
                    <LinkArea />
                  )}

                  <button className="btn btn-primary rounded-pill d-flex">
                    POST
                  </button>
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
