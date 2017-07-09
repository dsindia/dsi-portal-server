var Post = require('./../models/post');
module.exports = {
    getList: function (req, res) {
        var limit = req.items.limit;
        var offset = req.items.offset;
        var fields = req.items.fields;
        Post.find().limit(limit).skip(offset).select(fields).exec(function (err, posts) {
            if (err) res.send(err);
            res.json(posts);
        });
    },
    get: function (req, res) {
        var id = req.items.id;
        Post.findById(id).exec(function (err, post) {
            if (err) res.send(err);
            res.json(post);
        });
    },
    create: function (req, res) {
        var post = new Post();
        post.description = req.items.description;
        post.save(function (err) {
            if (err) res.send(err);
            res.json({
                message: 'Post Saved!',
                status: 1
            });
        });
    },
    update: function (req, res) {
        var id = req.items.id;
        Post.findById(id).exec(function (err, post) {
            if (err) res.send(err);
            post.description = req.items.description;
            post.save(function (err) {
                if (err) res.send(err);
                res.json({
                    message: 'post updated!',
                    status: 1
                });
            });
        });
    },
    delete: function (req, res) {
        Post.remove({
            _id: req.items.id
        }, function (err) {
            if (err) res.send(err);
            res.json({
                message: 'Post Deleted!',
                status: 1
            });
        });
    }
}
