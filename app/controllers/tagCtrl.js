var Post = require('./../models/post');
var Tag = require('./../models/tag');
module.exports = {
    getList: function (req, res) {
        var limit = req.items.limit;
        var offset = req.items.offset;
        var fields = req.items.fields;
        Tag.find().limit(limit).skip(offset).select(fields).exec(function (err, tags) {
            if (err) res.send(err);
            res.json(tags);
        });
    },
    get: function (req, res) {
        var id = req.items.id;
        Tag.findById(id).populate('posts', 'description').exec(function (err, tag) {
            if (err) res.send(err);
            res.json(tag);
        });
    },
    create: function (req, res) {
        var tag = new Tag();
        tag.name = req.items.name;
        tag.save(function (err) {
            if (err) res.send(err);
            res.json({
                message: 'Tag Saved!',
                status: 1
            });
        });
    },
    update: function (req, res) {
        var id = req.items.id;
        Tag.findById(id).exec(function (err, tag) {
            if (err) res.send(err);
            tag.name = req.items.name;
            tag.save(function (err) {
                if (err) res.send(err);
                res.json({
                    message: 'Tag updated!',
                    status: 1
                });
            });
        });
    },
    delete: function (req, res) {
        Tag.remove({
            _id: req.items.id
        }, function (err) {
            if (err) res.send(err);
            res.json({
                message: 'Tag Deleted!',
                status: 1
            });
        });
    }
}
