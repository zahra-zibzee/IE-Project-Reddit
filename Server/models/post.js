const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_type:{
        type: String,
        enum: ['post', 'image-video', 'link'],
        default: 'post'
    },
    text:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    //comment ids which replied this post
    comment_ids: [String],
    //post belongs to this user
    user_id:{
        type: String,
        required: true,
    },
    //this post was posted via this community
    community_id:{
        type: String,
        default: null
    },
    //array of likers
    likes:[String],
    //array of dislikers
    dislikes:[String],
    created_date:{
        type: Date,
        default: Date.now()
    }
});

const Post = mongoose.model('Post', postSchema);


exports.Post = Post;