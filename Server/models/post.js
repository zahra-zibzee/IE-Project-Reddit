const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    type:{
        type: String,
        enum: ['post', 'comment'],
        default: 'comment'
    },
    text:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    //comment ids which replied this post or comment
    comment_ids: [
        {
            comment_id: {
                type: String,
                required: true
            }
        }
    ],
    user_id:{
        type: String,
        required: true,
    },
    community_id:{
        type: String,
        default: null
    },
    likes:[
        {
            liker_id: {
                type: String,
                required: true
            }
        }
    ],
    created_date:{
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model('Post', postSchema);


exports.Post = Post;