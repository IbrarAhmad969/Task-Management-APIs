const {taskValidationSchema} = require("../validations/task.validation");

const validateTask = (req, res, next) => {

    const { error, value } = taskValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Invalid task data",
            error: error.details[0].message
        })
    }
    req.body = value;
    next();
}

module.exports = validateTask;