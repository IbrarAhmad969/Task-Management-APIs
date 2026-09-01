const validate = (schema, property) => (req, res, next) => { // pass property to validate either req.body or req.query.. we pass, "body" , "query"


    const { error, value } = schema.validate(req[property]);

    if (error) {
        return res.status(400).json({
            message: "Validation failed",
            error: error.details[0].message
        });
    }

    req[property] = value;

    next();
};

module.exports = { validate };