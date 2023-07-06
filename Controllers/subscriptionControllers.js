import subscriptionModel from "../Models/subscriptionModel.js";

export const createSubscription = async (req, res) => {
    try {
        const newSubscription = new subscriptionModel(req.body);

        await newSubscription.save();

        res.status(201).json({ message: "Subscription created successfully", result: newSubscription })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}

export const getAllSubscriptions = async (req, res) => {
    try {
        const getAllSubscriptions = await subscriptionModel.find();
        res.status(200).json({ message: "Subscriptions fetched successfully", result: getAllSubscriptions })
    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}