const Joi = require("joi")

const queryValidationSchema = Joi.object({

    status: Joi.string().valid("pending", "completed", "in-progress"),
    priority: Joi.string().valid("high", "medium", "low"),
    search: Joi.string().trim(),
    sort: Joi.string().valid("dueDate", "-dueDate", "createdAt", "-createdAt")
}).unknown(false)
module.exports = { queryValidationSchema }