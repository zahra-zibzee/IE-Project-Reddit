const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userAuth = require("../middleware/userAuth");
const { Community } = require("../models/community");
const { Comment } = require("../models/comment");
const User = require("../models/user");
const { Post } = require("../models/post");

//make a comment
router.post("/createComment", userAuth, async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  const post = await Post.findOne({ _id: req.body.postId });
  const newComment = new Comment({
    text: req.body.text,
    user_name: user.username,
    post_id: post._id,
    created_date: Date.now(),
  });

  newComment.save().catch((err) => {
    console.log(err);
    return res.status(500).send(err.message);
  });

  //modify post to add this comment to it
  const modifiedPost = await Post.findOneAndUpdate(
    { _id: req.body.postId },
    { $push: { comment_ids: newComment._id.toString() } },
    { new: true }
  );
  return res.status(201).send(modifiedPost);
});

//get comment by id
router.post("/getComment", userAuth, async (req, res) => {
  console.log(req.body.commentId);
  const comment = await Comment.findOne({ _id: req.body.commentId });
  console.log(comment);
  return res.status(200).send(comment);
});

module.exports = router;
