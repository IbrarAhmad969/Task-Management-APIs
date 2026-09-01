const express = require("express");
const router = express.Router();


const { registerUser, getAllUsers, loginUser } = require("../controllers/user.controller");
const { validate } = require("../middleware/requestsValidation.middleware")

const { userValidationSchema, userLoginValidation } = require("../validations/users.validation")

router.post("/registerUser", validate(userValidationSchema, "body"), registerUser);
router.get("/users", getAllUsers);
router.post("/login", validate(userLoginValidation, "body"), loginUser);


module.exports = router;