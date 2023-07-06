import userModel from "../Models/userModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    try {

        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new userModel({ ...req.body, password: hash });

        await newUser.save();
        res.status(201).json({ message: "User created successfully", result: newUser })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const loginUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) return res.status(400).json({ message: "User not found" })

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).json({ message: "Wrong email or password" })

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);

        const { password, ...info } = user._doc;

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json({ message: "LoggedIn success", result: info })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const logoutUser = (req, res) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
    }).status(200).json({ message: "LoggedOut success" })
}