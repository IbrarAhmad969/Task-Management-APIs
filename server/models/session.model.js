const mongoose = require("mongoose")


const sessionSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        tokenHash: {
            type: String,
            required: true,
        },
        userAgent: {
            type: String
        },
        expireAt: {
            type: Date,
            required: true,
        },
        revokedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Session", sessionSchema)