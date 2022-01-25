const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { Community } = require('../models/community');
const userAuth = require('../middleware/userAuth');

//a user(Admin) wants to make a community
router.post('/createCommunity', userAuth, async(req, res) => {
    const newCommunity = new Community({
        name: req.body.name,
        created_date: Date.now(),
        rules: req.body.rules,
        description: req.body.description,
        admins: [req.user._id]
    })
    newCommunity
    .save()
    .then( result => {
        console.log(result);
        return res.status(200).json({
            newCommunity
        })
    })
    .catch( err => {
        console.log(err);
        return res.status(500).send(err.message);
    })
})

//make someone an admin
router.put('/makeAdmin', userAuth, async(req, res) => {
    //this user has to be authorized if he is admin or not
    let community = await Community.findOne({name: req.body.name});
    if(! community.admins.includes(req.user._id))
        return res.status(401).send("you are not admin");
    const userWantsToBeAdmin = User.findOne({username: req.body.username})
    community = await Community.findOneAndUpdate({name: req.body.name}, {$push: { admins: userWantsToBeAdmin._id.toString() }} )
    return res.status(201).json({
        community
    })
})


//about community
router.get('/aboutCommunity',userAuth, async (req, res) => {
    await Community.findOne({ name: req.data.name})       //findOne also returns null
    .exec()
    .then(community =>{
        if(!community){
            return res.status(401).send("Community not found");
        }     
        return res.status(200).send();
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    })
})

//hottest communities
router.get('/hottestCommunities', async(req, res) => {
    res.status(200).send(Community.find({}));
})


module.exports = router;