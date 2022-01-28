const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ['woman', 'man', 'non-binary', 'Prefer not to say'],
        default: 'Prefer not to say'
    },
    about:{
        type: String
    },
    posts:[String],
    saved_posts:[String],
    community_names:[String],
});

module.exports = mongoose.model('User', userSchema); 




