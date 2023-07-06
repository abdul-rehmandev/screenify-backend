import notificationModel from "../Models/notificationModel.js";

export const sendNotification = async (req, res) => {
    try {
        const user = await notificationModel.findOne({ userId: req.body.userId });

        if (user) {
            await notificationModel.findOneAndUpdate({ _id: user._id }, {
                $addToSet: {
                    messages: [{
                        message: req.body.message
                    }]
                }
            }, { upsert: true, new: true })

            const addedNotification = await notificationModel.findByIdAndUpdate({ _id: user._id }, {
                $set: {
                    isRead: false
                }
            }, { new: true })

            res.status(200).json({ message: "Notification added", result: addedNotification })
        }
        else {
            const newNotification = new notificationModel({
                userId: req.body.userId, messages: [{
                    message: req.body.message
                }]
            });

            await newNotification.save();

            res.status(200).json({ message: "Notification send", result: newNotification });
        }
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getNotifications = async (req, res) => {
    try {
        const notifications = await notificationModel.findOne({ userId: req.body.userId }).sort({ createdAt: -1 })

        res.status(200).json({ message: "Notification fetched", result: notifications })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const isReadNotifications = async (req, res) => {
    try {
        const readNotifications = await notificationModel.findByIdAndUpdate({ _id: req.body.notificationId }, {
            $set: { isRead: true }
        }, { new: true })

        res.status(200).json({ messages: "All notifications read", result: readNotifications })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const deleteNotification = async (req, res) => {
    try {

        const user = await notificationModel.findById({ _id: req.body.notificationId });
        if (req.userId !== user.userId) return res.status(400).json({ message: "You can only delete your notifications" })

        const remainNotifications = await notificationModel.findOneAndUpdate({ _id: req.body.notificationId }, {
            $pull: { messages: { _id: req.body.deleteNotificationId } }
        }, { new: true })

        res.status(200).json({ message: "Notification deleted", result: remainNotifications })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}