const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const auth = require('../middleware/auth');


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
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    //saving user in database
    user
    .save()
    .then( result => {
        console.log(result);
        return res.status(201).send(user);
    })
    .catch( err => {
        console.log(err);
        return res.status(500).send(err.message);
    })
})

//getting username and password from user to login
router.post('/signin', async (req, res)=>{
    console.log("hi");
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
                const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
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

module.exports = router;