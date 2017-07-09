var mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('Comment', {
    userId: {
        type: Schema.ObjectId,
        ref: "User"
    },
    postId: {
        type: Schema.ObjectId,
        ref: "Post"
    },
    content: {
        type: String
    }
});
