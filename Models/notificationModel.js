import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    messages: {
        type: [{
            message: {
                type: String,
                required: true,
                default: "Welcome to screenify."
            }
        }],
        required: true
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("Notification", notificationSchema);