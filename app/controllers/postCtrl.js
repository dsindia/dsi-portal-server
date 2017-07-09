var Post = require('./../models/post');
var Tag = require('./../models/tag');
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
        Post.findById(id).populate('tags', 'name').exec(function (err, post) {
            if (err) res.send(err);
            res.json(post);
        });
    },
    create: function (req, res) {
        var post = new Post();
        post.description = req.items.description;
        post.tags = req.items.tags;
        post.save(function (err) {
            if (err) res.send(err);
            Tag.update({
                _id: {
                    $in: req.items.tags
                }
            }, {
                $push: {
                    posts: post._id
                }
            }, {
                multi: true
            }).exec(function (err) {
                if (err) res.send(err);
            })
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
                    message: 'Post updated!',
                    status: 1
                });
            });
        });
    },
    delete: function (req, res) {
        Post.findOneAndRemove({
            _id: req.items.id
        }).exec(function (err,post) {
            if (err) res.send(err);
            if(post.tags){
                Tag.update({
                    _id: {
                        $in: post.tags
                    }
                }, {
                    $pull: {
                        posts: req.items.id
                    }
                }, {
                    multi: true
                }).exec(function (err) {
                    if (err) res.send(err);
                })
            }
            res.json({
                message: 'Post Deleted!',
                status: 1
            });
        });
    }
}
