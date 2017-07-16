var User = require('./../models/user');
var Post = require('./../models/post');
var Tag = require('./../models/tag');
module.exports = {
    getList: function (req, res) {
        var limit = parseInt(req.items.limit);
        var offset = parseInt(req.items.offset);
        var fields = req.items.fields;
        User.find().limit(limit).skip(offset).select(fields).exec(function (err, users) {
            if (err) res.send(err);
            res.json(users);
        });
    },
    get: function (req, res) {
        var id = req.items.id;
        User.findById(id).populate('tags', 'name').exec(function (err, user) {
            if (err) res.send(err);
            res.json(user);
        });
    },
    create: function (req, res) {
        var user = new User();
        user.description = req.items.description;
        user.tags = req.items.tags;
        user.save(function (err) {
            if (err) res.send(err);
            Tag.update({
                _id: {
                    $in: req.items.tags
                }
            }, {
                $push: {
                    users: user._id
                }
            }, {
                multi: true
            }).exec(function (err) {
                if (err) res.send(err);
            })
            res.json({
                message: 'User Saved!',
                status: 1
            });
        });
    },
    update: function (req, res) {
        var id = req.items.id;
        User.findById(id).exec(function (err, user) {
            if (err) res.send(err);
            user.description = req.items.description;
            user.save(function (err) {
                if (err) res.send(err);
                res.json({
                    message: 'User updated!',
                    status: 1
                });
            });
        });
    },
    delete: function (req, res) {
        User.findOneAndRemove({
            _id: req.items.id
        }).exec(function (err,user) {
            if (err) res.send(err);
            if(user.tags){
                Tag.update({
                    _id: {
                        $in: user.tags
                    }
                }, {
                    $pull: {
                        users: req.items.id
                    }
                }, {
                    multi: true
                }).exec(function (err) {
                    if (err) res.send(err);
                })
            }
            res.json({
                message: 'User Deleted!',
                status: 1
            });
        });
    }
}
