const Joi = require("joi");

const userValidationSchema = Joi.object({
    username: Joi.string()
        .trim()
        .max(50)
        .required(),

    email: Joi.string()
        .email()
        .trim()
        .max(50)
        .min(5)
        .required(),

    password: Joi.string()
        .trim()
        .required()
        .min(2)
}).unknown(false);


const userLoginValidation = Joi.object({
    email: Joi.string()
        .trim()
        .email()
        .required(),

    password: Joi.string()
        .trim()
        .required()
}).unknown(false);


module.exports = {
    userValidationSchema,
    userLoginValidation
};