const express = require("express")
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware")
const { createTask, getTasks, findTask, updateTask, deleteTask, getTasksStats } = require("../controllers/task.controller")

const { validate } = require("../middleware/requestsValidation.middleware")

const { taskValidationSchema, updateTaskValidationSchema } = require("../validations/task.validation")
const { queryValidationSchema } = require("../validations/validateQuery")
const { upload } = require("../middleware/upload.middleware")

router.post("/createTask", authMiddleware, validate(taskValidationSchema, "body"), createTask);

router.get("/allTasks", authMiddleware, validate(queryValidationSchema, "query"), getTasks);
router.get("/stats", authMiddleware, getTasksStats)

router.get("/:id", authMiddleware, findTask);
router.patch("/:id", authMiddleware, validate(updateTaskValidationSchema, "body"), updateTask)
router.delete("/:id", authMiddleware, deleteTask)

// Posting a file. 

router.post(
    "/:id/attachment",
    authMiddleware,
    upload.single("file"),
    uploadTaskAttachment
);

module.exports = router;
