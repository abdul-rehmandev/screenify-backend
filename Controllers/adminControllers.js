import userModel from "../Models/userModel.js";
import categoryModel from "../Models/categoryModel.js"
import movieModel from "../Models/movieModel.js"
import subscriptionModel from "../Models/subscriptionModel.js"
import accountModel from "../Models/accountModel.js"

export const getUsers = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin have access" })
    try {
        const users = await userModel.find({ isAdmin: false });

        res.status(200).json({ message: "Users fetched", result: users })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getAccounts = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin have access" })
    try {
        const accounts = await accountModel.find();

        res.status(200).json({ message: "Accounts fetched", result: accounts })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getCategories = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin have access" })
    try {
        const categories = await categoryModel.find();

        res.status(200).json({ message: "Categories fetched", result: categories })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getMovies = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin have access" })
    try {
        const movies = await movieModel.find();

        res.status(200).json({ message: "movies fetched", result: movies })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getSubscriptions = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin have access" })
    try {
        const subscriptions = await subscriptionModel.find();

        res.status(200).json({ message: "subscriptions fetched", result: subscriptions })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const deleteMovie = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin have access" })
    try {
        await movieModel.findByIdAndDelete({ _id: req.body.movieId })

        const remainingMovies = await movieModel.find();

        res.status(200).json({ message: "Movie Deleted", result: remainingMovies })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}