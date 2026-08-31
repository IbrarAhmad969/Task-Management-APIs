const express = require("express")
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware")
const { createTask, getTasks, findTask, updateTask, deleteTask } = require("../controllers/task.controller")

const { validate } = require("../middleware/requestsValidation.middleware")

const { taskValidationSchema, updateTaskValidationSchema } = require("../validations/task.validation")

router.post("/createTask", authMiddleware, validate(taskValidationSchema), createTask);
router.get("/allTasks", authMiddleware, getTasks);
router.get("/:id", authMiddleware, findTask);
router.patch("/:id", authMiddleware, validate(updateTaskValidationSchema), updateTask)
router.delete("/:id", authMiddleware, deleteTask)


module.exports = router;
