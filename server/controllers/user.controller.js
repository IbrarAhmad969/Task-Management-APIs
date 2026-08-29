const User = require("../models/user.model")

const registerUser = async (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body

    try {
        if (!username || !email || !password) { // if not found! 
            return res.status(400).json({
                message: "Please Enter all fields "
            })
        }

        const existedUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existedUser) {
            return res.status(409).json({
                message: "User with this username already exists"
            })
        }

        const newUser = await User.create(
            {
                username,
                email,
                password,
            }
        )

        const userResponse = {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        }

        return res.status(201).json({
            message: "User Created Successfully! ",
            userResponse
        })


    } catch (error) {
        console.log(error.message);
        next(error)
    }

}

module.exports = { registerUser };
