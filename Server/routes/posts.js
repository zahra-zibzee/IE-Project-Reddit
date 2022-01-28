const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const userAuth = require("../middleware/userAuth");
const { Community } = require("../models/community");
const { Post } = require("../models/post");

//make a post
router.post("/createPost", userAuth, async (req, res) => {
  
  const user = await User.findOne({ username: req.user.username });
  const community = await Community.findOne({ name: req.body.communityName });
  //save post
  const newPost = new Post({
    post_type: req.body.post_type,
    title: req.body.title,
    text: req.body.text,
    user_name: user.username,
    community_name: community != null ? community.name : null,
    created_date: Date.now(),
  });

  newPost.save().catch((err) => {
    console.log(err);
    return res.status(500).send(err.message);
  });

  //save post in its community
  if(community != null){
    const modifiedCommunity = await Community.findOneAndUpdate({name: req.body.communityName},
      { $push: { posts: newPost._id.toString() } },
      {new: true});
  }


  //save post in user 
  const modifiedUser = await User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { posts: newPost._id.toString() } },
    { new: true }
  );
  return res.status(201).send(modifiedUser);
});

//get post by id
router.post("/getPost", userAuth, async (req, res) => {
  const post = await Post.findOne({ _id: req.body.postId });
  return res.status(200).send(post);
});

module.exports = router;
