var Test = require('./../models/test');
var testCtrl = require('./../controllers/testCtrl');
module.exports = function (app) {
    app.get('/api/test', testCtrl.get);
}
