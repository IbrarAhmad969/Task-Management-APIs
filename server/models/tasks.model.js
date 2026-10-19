const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: true,
            trim: true,
        }, 
        description: {
            type: String, 
            required: true, 
            trim: true,
        }, 
        status: {
            type: String, 
            enum: ["pending", "completed", "in-progress"], 
            default: "pending"
        }, 
        priority: {
            type: String, 
            enum: ["high", "medium", "low"], 
            default: "medium"
        }, 
        dueDate: {
            type: Date
        }, 
        // the multer file 
        attachment: {
            originalName: {
                type: String
            }, 
            fileName: {
                type: String
            }, 
            path: {
                type: String
            }, 
            mimetype: {
                type: String
            }, 
            size: {
                type: Number
            }
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        }

    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Task", taskSchema)