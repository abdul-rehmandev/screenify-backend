import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryTitle: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

export default mongoose.model("Category", categorySchema);