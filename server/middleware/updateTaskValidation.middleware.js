const { updateTaskValidationSchema } = require("../validations/task.validation");

const validateUpdateTask = (req, res, next) => {

    const { error, value } = updateTaskValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Invalid Task data",
            error: error.details[0].message
        })
    }

    req.body = value,
        next();
}
module.exports = { validateUpdateTask }