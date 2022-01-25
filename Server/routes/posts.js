const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const userAuth = require('../middleware/userAuth');
const { Community } = require('../models/community');


//make a post
router.post('/createPost', userAuth, async(req, res)=>{
    //client sends community name
    const user = await User.findOne({username: req.user.username})
    const community = await Community.findOne({name: req.body.name})
    const newPost = new Post({
        post_type: req.body.post_type,
        text: req.body.text,
        user_id: user._id,
        community_id: community != null ? community._id : null,
        created_date: Date.now()
    })

    newPost
    .save()
    .then( result => {
        console.log(result);
        return res.status(200).json({
            newPost
        })
    })
    .catch( err => {
        console.log(err);
        return res.status(500).send(err.message);
    })

    //modify post to add this comment to it
    const filter = {_id: req.user._id};
    update = {$push: { post_ids: {post_id: newPost._id.toString()} } };
    const modifiedUser = await User.findOneAndUpdate(filter, update);
    return res.status(201).send(modifiedUser);

})

module.exports = router;