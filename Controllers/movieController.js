import movieModel from "../Models/movieModel.js";

export const createMovie = async (req, res) => {
    if (!req.isAdmin) return res.status(400).json({ message: "Only admin can create category" })
    try {
        const newMovie = new movieModel({ ...req.body, category: req.body.category });

        await newMovie.save();

        res.status(201).json({ message: "Movie created successfully", result: newMovie })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getSingleMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await movieModel.findById(id)

        res.status(201).json({ message: "Movie found successfully", result: movie })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getFeaturedMovie = async (req, res) => {
    try {
        const featuredMovie = await movieModel.findOne({ isFeatured: true });

        res.status(201).json({ message: "Featured movie", result: featuredMovie })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const incrView = async (req, res) => {
    try {
        const incrementView = await movieModel.findByIdAndUpdate({ _id: req.body.movieId }, {
            $inc: {
                watchedTimes: +1
            },
        }, { new: true })

        res.status(200).json({ message: "1 View Added", result: incrementView })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const topTen = async (req, res) => {
    try {
        const topMovies = await movieModel.find().sort({ watchedTimes: -1 }).limit(10)

        res.status(200).json({ message: "Top movies fetched", result: topMovies })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}