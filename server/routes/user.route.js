const express = require("express");
const router = express.Router();


const { registerUser, getAllUsers, loginUser } = require("../controllers/user.controller");

router.post("/registerUser", registerUser);
router.get("/users", getAllUsers);
router.post("/login", loginUser);


module.exports = router;