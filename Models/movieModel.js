import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: true
    },
    description: {
        type: String,
        requied: true
    },
    coverImage: {
        type: String,
        requied: true
    },
    sourceUrl: {
        type: String,
        requied: true
    },
    category: {
        type: String,
        requied: true
    },
    watchedTimes: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Movie", movieSchema)