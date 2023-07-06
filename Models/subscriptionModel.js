import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    perks: {
        type: [String]
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Subscription", subscriptionSchema);