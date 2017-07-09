var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var tagSchema = new Schema({
    name: {
        type: String
    },
    posts: [{
        type: Schema.ObjectId,
        ref: "Post"
    }]
});
module.exports = mongoose.model('Tag', tagSchema);
