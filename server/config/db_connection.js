const mongoose = require("mongoose")
const {db_name} = require("../constants/db")

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`)
        console.log("MongoDB is connected ! ")

    } catch (error) {
        console.log("MongoDB is not able to be connected ! ", error);
        process.exit(-1);
    }
}
module.exports = connectDB