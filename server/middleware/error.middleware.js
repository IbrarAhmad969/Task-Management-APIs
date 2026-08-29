const errorHandler = (err, req, res, next) => {
    // console.log(err.name);

    if (err.name === "ValidationError") {
        const errors = {}
        for (const field of Object.keys(err.errors)) {
            errors[field] = err.errors[field].message;
        }
        return res.status(400).json({
            message: "Validation Failed ",
            errors
        })
    }
    if (err.name === "CastError") {
        return res.status(400).json({

            message: "Invalid data provided ",
            error: err.message
        })
    }
    return res.status(500).json({

        message: "Internal server error"
    })

}
module.exports = errorHandler;