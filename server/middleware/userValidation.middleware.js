const {
    userLoginValidation,
    userValidationSchema
} = require("../validations/users.validation");


const validateRegister = (req, res, next) => {

    const { error, value } = userValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Invalid user data",
            error: error.details[0].message
        });
    }

    req.body = value;

    next();
};

const validateLogin = (req, res, next) => {

    const { error, value } = userLoginValidation.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: "Invalid login data",
            error: error.details[0].message
        });
    }

    req.body = value;

    next();
};


module.exports = {
    validateRegister,
    validateLogin
};