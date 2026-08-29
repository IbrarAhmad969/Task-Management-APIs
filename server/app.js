const express = require("express")
const taskRouter = require("../server/routes/task.route");
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json())
app.use("/api/task/", taskRouter);
app.use(errorHandler)


module.exports = app