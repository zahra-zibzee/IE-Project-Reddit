import React, { useEffect, useState } from "react";
import Navbar from "../Searchbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/media/avatar.jpg";
import newIcon from "../../assets/media/new.png";
import upVote from "../../assets/media/up-vote.png";
import commentIcon from "../../assets/media/comment.png";

import PostItem from "./Post/PostItem";
import CommunityList from "../Layouts/CommunityList";
import { Modal, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  document.body.style.backgroundColor = "rgba(172, 183, 185, 0.568)";
  const [posts, setPosts] = useState([]);
  const [topCommunities, setTopCommunities] = useState([]);

  //1 for newest
  //2 for most commented
  //3 for most liked
  const [listMode, setListMode] = useState(1);
  const [user, setUser] = useState(null);
  const [showAddCommunity, setShowAddCommunity] = useState(false);
  const [newCommunityName, setNewCommunityName] = useState("");
  const [newCommunityDescription, setNewCommunityDescription] = useState("");

  const location = useLocation();

  const fetchRecentPosts = () => {
    const body = {
      authorization: localStorage.getItem("token"),
    };
    axios.post("http://localhost:3000/users/recentPosts", body).then((res) => {
      setPosts(res.data.recentPosts);
    });
  };

  const fetchTopCommunities = () => {
    axios
      .post("http://localhost:3000/communities/hottestCommunities")
      .then((res) => {
        let communities = res.data;
        communities = communities
          .sort((a, b) => b.members.length - a.members.length)
          .filter((a, index) => index < 5);

        setTopCommunities(communities);
      });
  };

  const addCommunity = () => {
    const body = {
      authorization: localStorage.getItem("token"),
      name: newCommunityName,
      description: newCommunityDescription
    };

    axios
      .post("http://localhost:3000/communities/createCommunity", body)
      .then((res) => {
        alert("community created successfully");
      })
      .catch((err) => console.log(err.response.data));

    setShowAddCommunity(false);
    setNewCommunityDescription("");
    setNewCommunityName("");
    
    fetchTopCommunities();
  }

  useEffect(() => {
    setUser(location.state.user);
    fetchRecentPosts();
    fetchTopCommunities();
  }, [location]);

  return (
    <main className="dark page">
      <Navbar navPage="home" user={user} />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          <div className="container bg-white rounded border border-light p-4 mb-4 mt-3">
            <Link
              to="/addPost"
              className="text-decoration-none row"
              to={{
                pathname: "/addPost",
                state: { user: user },
              }}
            >
              <img
                src={avatar}
                width="50"
                className="rounded rounded-circle col-1"
              />
              <input
                type="text"
                className="form-control col bg-light"
                placeholder="Create New Post"
              />
            </Link>
          </div>

          <div className="container bg-white border border-light rounded mt-0 mb-4">
            <ButtonGroup aria-label="Basic example" className="w-100">
              <Button
                variant="light"
                className={
                  listMode == 1 ? "text-muted active-btn p-3" : "text-muted p-3"
                }
                onClick={() => setListMode(1)}
              >
                <img src={newIcon} width="30" />
                {" Newest"}
              </Button>
              <Button
                variant="light"
                className={
                  listMode == 2 ? "text-muted active-btn p-1" : "text-muted p-1"
                }
                onClick={() => setListMode(2)}
              >
                <img src={commentIcon} width="30" />
                {" Most Commented"}
              </Button>
              <Button
                variant="light"
                className={
                  listMode == 3 ? "text-muted active-btn p-3" : "text-muted p-3"
                }
                onClick={() => setListMode(3)}
              >
                <img src={upVote} width="50" />
                {" Most Liked"}
              </Button>
            </ButtonGroup>
          </div>

          {posts.map((post, index) => {
            return <PostItem key={index} postId={post} />;
          })}

          <Modal show={showAddCommunity} onHide={() => setShowAddCommunity(false)}>
            <Modal.Header closeButton>
              <Modal.Title>add new community</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input className="form-control mb-3" placeholder="community name" value={newCommunityName} onChange={(e) => setNewCommunityName(e.target.value)} />
              <textarea className="form-control" placeholder="description" value={newCommunityDescription} onChange={(e) => setNewCommunityDescription(e.target.value)} />
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-primary"
                className="rounded-pill"
                onClick={() => addCommunity()}
              >
                add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="col-3">
          {!!topCommunities && (
            <CommunityList topCommunities={topCommunities} user={user} />
          )}

          <Button
            variant="outline-primary"
            className="rounded-pill"
            onClick={() => setShowAddCommunity(true)}
          >
            add community
          </Button>
        </div>
        <div className="col-2"></div>
      </div>
    </main>
  );
};

export default Home;
