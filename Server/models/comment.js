const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    //user who made this comment
    user_id:{
        type: String,
        required: true,
    },
    post_id:{
        type: String,
        default: null
    },
    likes:[String],
    dislikes:[String],
    created_date:{
        type: Date,
        default: Date.now()
    }
});

const Comment = mongoose.model('Comment', commentSchema);


exports.Comment = Comment;