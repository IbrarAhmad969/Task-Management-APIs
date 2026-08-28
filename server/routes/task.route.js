const express = require("express")
const router = express.Router();

const {createTask, getTasks } = require("../controllers/task.controller")


router.post("/createTask", createTask);
router.get("/allTasks", getTasks);

module.exports = router;
