const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            maxLength: 50,
            required: true,
        },

        email: {
            type: String,
            unique: true,
            trim: true,
            maxLength: 50,
            minLength: 5,
            required: true,
        },

        password: {
            type: String,
            trim: true,
            required: true,
            minLength: 2
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;