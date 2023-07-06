import categoryModel from "../Models/categoryModel.js";
import movieModel from "../Models/movieModel.js";

export const createCategory = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin can create category" })
    try {
        const newCategory = new categoryModel(req.body);

        await newCategory.save();

        res.status(200).json({ message: "Category created successfully", result: newCategory })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const getAll = await categoryModel.find();
        res.status(200).json({ message: "Categories fetched", result: getAll })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getMoviesAgainstSingleCategory = async (req, res) => {
    try {
        const Movies = await movieModel.find({ category: req.body.category });
        res.status(200).json({ message: "Movies fetched", result: Movies })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}