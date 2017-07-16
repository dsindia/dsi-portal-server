var User = require('./../models/user');
module.exports = {
    profile: function (req, res) {
        res.send("profile");
    },
    logout: function (req, res) {
        req.logout();
        res.send("logout");
    }
}
