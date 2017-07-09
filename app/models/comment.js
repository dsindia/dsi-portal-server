var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var commentSchema = new Schema({
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
}, {
    timestamps: true
});
module.exports = mongoose.model('Comment', commentSchema);
