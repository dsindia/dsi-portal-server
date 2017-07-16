var sessionCtrl = require('./../controllers/sessionCtrl');
const baseUrl = require('./../../config').baseUrl;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}
module.exports = function (app, passport) {
    app.get(`${baseUrl}/profile`, isLoggedIn, sessionCtrl.profile);
    app.get(`${baseUrl}/logout`, sessionCtrl.logout);
    app.post(`${baseUrl}/login`, passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: `${baseUrl}/x`
    }));
    app.post(`${baseUrl}/signup`, passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: `${baseUrl}/x`
    }));
}
