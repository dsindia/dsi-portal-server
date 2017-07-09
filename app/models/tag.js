var mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('Tag', {
    name: {
        type: String
    },
    posts: [{
        type: Schema.ObjectId,
        ref: "Post"
    }]
});
