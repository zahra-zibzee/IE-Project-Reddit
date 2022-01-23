const mongoose = require('mongoose');



const communitySchema = new mongoose.Schema({
    // assigning one or number of users to be the admin of community
    admins:[
        {
            user_id: {
                type: String,
                required: true
            }
        }
    ],
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
    users:[
        {
            user_id: {
                type: String,
                required: true
            }
        }
    ],
    posts:[
        {
            post_id: {
                type: String,
                required: true
            }
        }
    ],
});

const Community = mongoose.model('Community', communitySchema);

exports.Community = Community;