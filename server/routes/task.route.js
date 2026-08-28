const express = require("express")
const router = express.Router();

const { createTask, getTasks, findTask, updateTask } = require("../controllers/task.controller")


router.post("/createTask", createTask);
router.get("/allTasks", getTasks);
router.get("/:id", findTask);
router.patch("/:id", updateTask)


module.exports = router;
