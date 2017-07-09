var mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('Post', {
    userId: {
        type: Schema.ObjectId,
        ref: "Users"
    },
    description: {
        type: String
    },
    tags: [{
        type: Schema.ObjectId,
        ref: "Tags"
    }],
    likes: {
        count: {
            type: Number,
            default: 0
        },
        data: [{
            type: Schema.ObjectId,
            ref: "Users"
        }]
    },
    comments: {
        count: {
            type: Number,
            default: 0
        },
        data: [{
            type: Schema.ObjectId,
            ref: 'Comments'
        }]
    }
});
