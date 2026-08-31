const express = require("express");
const router = express.Router();


const {
    registerUser,
    getAllUsers,
    loginUser
} = require("../controllers/user.controller");
const {
    validateRegister,
    validateLogin
} = require("../middleware/userValidation.middleware")

router.post("/registerUser", validateRegister, registerUser);
router.get("/users", getAllUsers);
router.post("/login", validateLogin, loginUser);


module.exports = router;