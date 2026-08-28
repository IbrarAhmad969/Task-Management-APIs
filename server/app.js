const express = require("express")
const taskRouter = require("../server/routes/task.route")

const app = express();

app.use(express.json())
app.use("/api/task/", taskRouter);


module.exports = app