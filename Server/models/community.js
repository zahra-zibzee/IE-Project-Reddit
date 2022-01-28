const mongoose = require('mongoose');



const communitySchema = new mongoose.Schema({
    // assigning one or number of users to be the admin of community
    admins:[String],
    name:{
        type: String,
        required: true,
        maxlength: 50
    },
    description:{
        type: String,
       // required: true,
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    members:[String],
    posts:[String]
});

const Community = mongoose.model('Community', communitySchema);

exports.Community = Community;