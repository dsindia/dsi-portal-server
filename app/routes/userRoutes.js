var userCtrl = require('./../controllers/userCtrl');
const baseUrl = require('./../../config').baseUrl;
var expressJoi = require('express-joi');
var Joi = expressJoi.Joi;
var UsersSchema = {
    getList: {
        limit: Joi.types.Number().integer().min(1).max(25).required(),
        offset: Joi.types.Number().integer().min(0).max(25).required(),
        fields: Joi.types.String().optional()
    },
    get: {
        id: Joi.types.String().required(),
    },
    create: {
    },
    update: {
        id: Joi.types.String().required(),
    },
    delete: {
        id: Joi.types.String().required(),
    }
};
module.exports = function (app) {
    app.get(`${baseUrl}/users`, expressJoi.joiValidate(UsersSchema.getList), userCtrl.getList);
    app.get(`${baseUrl}/users/:id`, expressJoi.joiValidate(UsersSchema.get), userCtrl.get);
    app.post(`${baseUrl}/users`, expressJoi.joiValidate(UsersSchema.create), userCtrl.create);
    app.put(`${baseUrl}/users/:id`, expressJoi.joiValidate(UsersSchema.update), userCtrl.update);
    app.delete(`${baseUrl}/users/:id`, expressJoi.joiValidate(UsersSchema.delete), userCtrl.delete);
}
