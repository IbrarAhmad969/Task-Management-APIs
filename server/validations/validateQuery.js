const Joi = require("joi")

const queryValidationSchema = Joi.object({

    status: Joi.string().valid("pending", "completed", "in-progress"),
    priority: Joi.string().valid("high", "medium", "low"),
    search: Joi.string().trim(),
    sort: Joi.string().valid("dueDate", "-dueDate", "createdAt", "-createdAt"),
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).default(10)

}).unknown(false)
module.exports = { queryValidationSchema }