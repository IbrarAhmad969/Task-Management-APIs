const express = require("express")
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware")
const { createTask, getTasks, findTask, updateTask, deleteTask } = require("../controllers/task.controller")


router.post("/createTask", authMiddleware, createTask);
router.get("/allTasks", authMiddleware, getTasks);
router.get("/:id", authMiddleware, findTask);
router.patch("/:id", authMiddleware, updateTask)
router.delete("/:id", authMiddleware, deleteTask)


module.exports = router;
