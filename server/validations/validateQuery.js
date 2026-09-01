const Joi = require("joi")

const queryValidationSchema = Joi.object({

    status: Joi.string().valid("pending", "completed", "in-progress"),
    priority: Joi.string().valid("high", "medium", "low"),
    search: Joi.string().trim()
}).unknown(false)
module.exports = { queryValidationSchema }