const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

server.use(express.json());

// server.use(bodyparser.urlencoded({extended:false}))
// server.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/reddit')
    .then(()=> console.log('Connected to the Database'))
    .catch(err => console.error('Could not connect to DB', err));



const usersRoutes = require("./routes/users");
const communitiesRoutes = require("./routes/communities");
const postsRoutes = require("./routes/posts");


server.use('/users', usersRoutes);
server.use('/communities', communitiesRoutes);
server.use('/posts', postsRoutes);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));


