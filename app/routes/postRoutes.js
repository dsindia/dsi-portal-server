var postCtrl = require('./../controllers/postCtrl');
const baseUrl = require('./../../config').baseUrl;
var expressJoi = require('express-joi');
var Joi = expressJoi.Joi;
var PostsSchema = {
    getList: {
        limit: Joi.types.Number().integer().min(1).max(25).required(),
        offset: Joi.types.Number().integer().min(0).max(25).required(),
        fields: Joi.types.String().optional()
    },
    get: {
        id: Joi.types.String().required(),
    },
    create: {
        description: Joi.types.String().required(),
        tags: Joi.types.Array().required()
    },
    update: {
        id: Joi.types.String().required(),
        description: Joi.types.String().required(),
    },
    delete: {
        id: Joi.types.String().required(),
    }
};
module.exports = function (app) {
    app.get(`${baseUrl}/posts`, expressJoi.joiValidate(PostsSchema.getList), postCtrl.getList);
    app.get(`${baseUrl}/posts/:id`, expressJoi.joiValidate(PostsSchema.get), postCtrl.get);
    app.post(`${baseUrl}/posts`, expressJoi.joiValidate(PostsSchema.create), postCtrl.create);
    app.put(`${baseUrl}/posts/:id`, expressJoi.joiValidate(PostsSchema.update), postCtrl.update);
    app.delete(`${baseUrl}/posts/:id`, expressJoi.joiValidate(PostsSchema.delete), postCtrl.delete);
}
