const express = require("express");
const router = express.Router();


const {registerUser} = require("../controllers/user.controller");

router.post("/registerUser", registerUser);

module.exports = router;