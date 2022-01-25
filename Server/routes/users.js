const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const userAuth = require('../middleware/userAuth');
const { Community } = require('../models/community');


//in sign up we don't make any access tokens, just in sign in we do.
router.post('/signup', async(req, res)=>{
    if(await User.findOne({username: req.body.username})){ //duplicated username
        return res.status(400).send("Duplicated username");
    }        
    if(await User.findOne({email: req.body.email})){   //duplicated email
        res.status(400).send("Duplicated email");
        return;
    }
    console.log(req.body.password);
    hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        gender: req.body.gender,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    //saving user in database
    const token = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
    user
    .save()
    .then( result => {
        console.log(result);
        return res.status(200).json({
            user,
            token: token
        })
    })
    .catch( err => {
        console.log(err);
        return res.status(500).send(err.message);
    })
})

//getting username and password from user to login
router.post('/signin', async (req, res)=>{
    await User.findOne({ username: req.body.username})       //findOne also returns null
    .exec()
    .then(user =>{
        if(!user){
            return res.status(401).send("User with this username was not found");
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(!result){
                return res.status(401).send("Incorrect password");
            }else{
                const token = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
                return res.status(200).json({
                    user,
                    token: token
                })
            }

        })
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    })
})

//return recent posts of communities which user followed them
router.get('/recentPosts', userAuth, async(req, res) => {
    let recentPosts = [];
    let communityIDs = req.user.community_ids;
    for (const i in communityIDs){
        let community = await Community.findOne({_id: communityIDs[i]});
        let communityPosts = community.posts.slice(community.posts.length - 10, community.posts.length);
        if(!communityPosts)
            recentPosts.push(...communityPosts);
    }
    return res.status(200).json({
        recentPosts
    })
})

//join a community
router.put('/joinCommunity', userAuth, async (req, res) => {
    //getting name of that community from client
    const community = await Community.findOne({name: req.body.name})
    await User.findOneAndUpdate({username: req.user.username}, {$push: { community_ids: community._id.toString() }})

    //update community followers
    await Community.findOneAndUpdate({name: req.body.name}, {$push: { members: req.user._id.toString() }} )
    return res.status(200).send();
})

//return all posts of the user
router.get('/allPosts', userAuth, async(req, res) => {
    res.status(200).json(req.user);       
})

//return saved posts of the user
router.get('/savedPosts', userAuth, async(req, res) => {
    res.status(200).json(req.user.saved_posts);
})

//Account
router.get('/account', userAuth, (req, res) => {
    res.status(200).json({
        email: req.user.email,
        gender: req.user.gender
    })
})

//change password
router.put('/changePass', userAuth, async(req, res) => {
    await bcrypt.compare(req.body.oldPassword, user.password, (err, result) => {
        if(!result){
            return res.status(401).send("Incorrect password");
        }
    })
    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
    await User.findOneAndUpdate({username: req.user.username}, {password: hashedPassword});
    res.sendStatus(201);
})

//change email
router.put('/changeEmail', userAuth, async(req, res) => {
    if(await User.findOne({email: req.body.email})){   //duplicated email
        res.status(400).send("Duplicated email");
        return;
    }
    await User.findOneAndUpdate({username: req.user.username}, {email: req.body.email});
    res.sendStatus(201);
})

//change gender
router.put('/changeGender', userAuth, async(req, res) => {
    await User.findOneAndUpdate({username: req.user.username}, {gender: req.body.gender});
    res.sendStatus(201);
})

//profile
router.get('/profile', userAuth, async(req, res) => {
    res.status(200).json({
        username: req.user.username,        //can't change username
        about: req.user.about
    })
})

//change about
router.put('/changeAbout', userAuth, async(req, res) => {
    await User.findOneAndUpdate({username: req.user.username}, {about: req.body.about});
    res.sendStatus(201);
})


module.exports = router;