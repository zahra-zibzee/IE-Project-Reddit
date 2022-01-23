const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt = '$2b$10$7VMG8oXa4ZOOZ2tP/Y2Ewe';
const { User } = require('./models/user');
const { Community } = require('./models/community');
const { Post } = require('./models/post');

server.use(express.json());

mongoose.connect('mongodb://localhost:27017/reddit')
    .then(()=> console.log('Connected to the Database'))
    .catch(err => console.error('Could not connect to DB', err));



// const user = new User({
//     name : "Niloufar",
//     email : "niloo.ast@gmail.com",
//     password : "1234"
// });

// user.save()



server.post('/register', async(req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password; 
    if(await User.find({username: username})){ //duplicated username
        res.status(400).send("Duplicated username");
        return;
    }        
    if(await User.find({email: email})){   //duplicated email
        res.status(400).send("Duplicated email");
        return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username: username,
        email: email,
        password: bcrypt.hashedPassword
    });
    user.save();
    res.status(201).send();
    
});

server.get('/login', async(req, res) => {
    const user = User.find(user => user.username == req.body.username);
    if(!user){
        res.status(404).send("User with this username was not found");
        return;
    }
    if(bcrypt.compare(req.body.password, user.password)){
        res.status(200).send(user);     //return user
    }
    else{
        res.status(400).send("Wrong password");      //wrong password
    }

});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));


