const express = require("express")
const taskRouter = require("../server/routes/task.route");
const userRouter = require("../server/routes/user.route")
const errorHandler = require("./middleware/error.middleware");
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors())
app.use(helmet()); // security layer added for extra security protection form hackers. 
app.use(express.json());
app.use(cookieParser());
app.use("/api/task/", taskRouter);
app.use("/api/user/", userRouter);
app.use(errorHandler)


module.exports = app