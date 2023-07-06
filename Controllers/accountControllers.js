import accountModel from "../Models/accountModel.js";

export const createAccount = async (req, res) => {
    try {
        const { userId, subscriptionPlanId, subscriptionPlanPrice } = req.body

        const newAccount = new accountModel({
            userId: userId,
            subscriptionId: subscriptionPlanId,
            payment_intent: subscriptionPlanPrice
        })

        await newAccount.save();

        res.status(201).json({ message: "Account created successfully", result: newAccount })

    } catch (error) {
        res.status(400).json({ message: "Something went wrong", Err: error })
    }
}