var tagCtrl = require('./../controllers/tagCtrl');
const baseUrl = require('./../../config').baseUrl;
var expressJoi = require('express-joi');
var Joi = expressJoi.Joi;
var TagsSchema = {
    getList: {
        limit: Joi.types.Number().integer().min(1).max(25).required(),
        offset: Joi.types.Number().integer().min(0).max(25).required(),
        fields: Joi.types.String().optional()
    },
    get: {
        id: Joi.types.String().required(),
    },
    create: {
        name: Joi.types.String().required(),
    },
    update: {
        id: Joi.types.String().required(),
        name: Joi.types.String().required(),
    },
    delete: {
        id: Joi.types.String().required(),
    }
};
module.exports = function (app) {
    app.get(`${baseUrl}/tags`, expressJoi.joiValidate(TagsSchema.getList), tagCtrl.getList);
    app.get(`${baseUrl}/tags/:id`, expressJoi.joiValidate(TagsSchema.get), tagCtrl.get);
    app.post(`${baseUrl}/tags`, expressJoi.joiValidate(TagsSchema.create), tagCtrl.create);
    app.put(`${baseUrl}/tags/:id`, expressJoi.joiValidate(TagsSchema.update), tagCtrl.update);
    app.delete(`${baseUrl}/tags/:id`, expressJoi.joiValidate(TagsSchema.delete), tagCtrl.delete);
}
