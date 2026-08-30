const express = require("express")
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware")
const { createTask, getTasks, findTask, updateTask, deleteTask } = require("../controllers/task.controller")


router.post("/createTask", authMiddleware, createTask);
router.get("/allTasks", getTasks);
router.get("/:id", findTask);
router.patch("/:id", updateTask)
router.delete("/:id", deleteTask)


module.exports = router;
