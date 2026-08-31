const Joi = require("joi");

const taskValidationSchema = Joi.object({
    title: Joi.string().trim().required().max(100),
    description: Joi.string().trim().required(),
    status: Joi.string().valid("pending", "completed", "in-progress").default("in-progress"),
    priority: Joi.string().valid("high", "medium", "low").default("medium"),
    dueDate: Joi.date().optional()
}).unknown(false);

const updateTaskValidationSchema = Joi.object({
    title: Joi.string().trim().max(100),
    description: Joi.string().trim(),
     status: Joi.string().valid("pending", "completed", "in-progress"),
     priority: Joi.string().valid("high", "medium", "low"),
     dueDate: Joi.date().optional()
}).unknown(false).min(1);

module.exports ={ taskValidationSchema, updateTaskValidationSchema};