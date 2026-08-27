require("dotenv").config();
const app = require("./server/app")
const connectDB = require("./server/config/db_connection")

const startServer = async () => {
    await connectDB()

    app.listen(process.env.PORT || 3000, (req, res) => {
        console.log("Server is listening at PORT 8000")
    })
}

startServer();