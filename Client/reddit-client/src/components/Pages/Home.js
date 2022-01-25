import React from "react";
import Navbar from "../Searchbar/Navbar";
import { Link } from "react-router-dom";
import avatar from "../../assets/media/avatar.jpg";
import PostItem from "./Post/PostItem";

const Home = () => {
  document.body.style.backgroundColor = "rgba(172, 183, 185, 0.568)";
  const posts = ["", " ", "  ", "   "];
  return (
    <main className="dark page">
      <Navbar navPage="home" />
      <div className="row">
        <div className="col-2"></div>
        <div className="col-5">
          <div className="container bg-white rounded border border-light p-4 mb-4 mt-3">
            <Link to="/addPost" className="text-decoration-none row">
              <img
                src={avatar}
                width="50"
                className="rounded rounded-circle col-1"
              />
              <input
                type="text"
                className="form-control col bg-light"
                placeHolder="Create New Post"
              />
            </Link>
          </div>

          <div className="container bg-white border border-light rounded mt-0 mb-4">
            filter posts
          </div>

          {
            posts.map(post => {
              return <PostItem />
            })
          }
        </div>
        <div className="col-3"></div>
        <div className="col-2"></div>
      </div>
    </main>
  );
};

export default Home;
