var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var postSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: "User"
    },
    description: {
        type: String
    },
    tags: [{
        type: Schema.ObjectId,
        ref: "Tag"
    }],
    likes: {
        count: {
            type: Number,
            default: 0
        },
        data: [{
            type: Schema.ObjectId,
            ref: "User"
        }]
    },
    comments: {
        count: {
            type: Number,
            default: 0
        },
        data: [{
            type: Schema.ObjectId,
            ref: 'Comment'
        }]
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Post', postSchema);
