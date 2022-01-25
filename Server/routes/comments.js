const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userAuth = require('../middleware/userAuth');
const { Community } = require('../models/community');
const { Comment } = require('../models/comment');
const { User } = require('../models/user');
const { Post } = require('../models/post');


//make a comment
router.post('/createPost', userAuth, async(req, res)=>{
    //client sends post id
    const user = await User.findOne({username: req.user.username})
    const post = await Post.findOne({_id: req.body.postId})
    const newComment = new Comment({
        text: req.body.text,
        user_id: user._id,
        post_id: post._id,
        created_date: Date.now()
    })

    newComment
    .save()
    .then( result => {
        console.log(result);
        return res.status(200).json({
            newComment
        })
    })
    .catch( err => {
        console.log(err);
        return res.status(500).send(err.message);
    })

    //modify post to add this comment to it
    const filter = {_id: req.body.postId};
    update = {$push: { comment_ids: {comment_id: newComment._id.toString()} } };
    const modifiedPost = await Post.findOneAndUpdate(filter, update);
    return res.status(201).send(modifiedPost);

})

module.exports = router;