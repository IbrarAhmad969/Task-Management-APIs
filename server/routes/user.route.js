const express = require("express");
const router = express.Router();

const { authLimiter } = require("../middleware/auth.limiter")


const { registerUser, getAllUsers, loginUser } = require("../controllers/user.controller");
const { validate } = require("../middleware/requestsValidation.middleware")

const { userValidationSchema, userLoginValidation } = require("../validations/users.validation")

router.post("/registerUser", authLimiter, validate(userValidationSchema, "body"), registerUser);
router.get("/users", getAllUsers);
router.post("/login", authLimiter, validate(userLoginValidation, "body"), loginUser);


module.exports = router;