const express = require("express")
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware")
const { createTask, getTasks, findTask, updateTask, deleteTask } = require("../controllers/task.controller")
const validateTask = require("../middleware/taskValidation.middleware")
const {validateUpdateTask} = require("../middleware/updateTaskValidation.middleware")

router.post("/createTask", authMiddleware, validateTask, createTask);
router.get("/allTasks", authMiddleware, getTasks);
router.get("/:id", authMiddleware, findTask);
router.patch("/:id", authMiddleware, validateUpdateTask, updateTask)
router.delete("/:id", authMiddleware, deleteTask)


module.exports = router;
