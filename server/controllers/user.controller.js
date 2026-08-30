const User = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


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
                message: "Username or email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create(
            {
                username,
                email,
                password: hashedPassword,
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
const getAllUsers = async (req, res, next) => {

    try {
        const users = await User.find();
        if (users.length == 0) {
            return res.status(404).json({
                message: "No Users are found!"
            })
        }
        return res.status(200).json({
            message: "Found these Registered Users! ",
            users,
        })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {

    const { email, password } = req.body;

    try {

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const accessToken = jwt.sign(
            {
                userId: user._id,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
        )


        return res.status(200).json({
            accessToken,
            message: "User logged in successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, getAllUsers, loginUser };
