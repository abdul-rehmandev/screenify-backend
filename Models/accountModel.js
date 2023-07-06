import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    subscriptionId: {
        type: String,
        required: true
    },
    payment_intent: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Account", accountSchema);