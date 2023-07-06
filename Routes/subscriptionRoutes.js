import express from "express"
import { createSubscription, getAllSubscriptions } from "../Controllers/subscriptionControllers.js";

const router = express.Router();

router.post("/create", createSubscription);
router.get("/getAllSubscriptions", getAllSubscriptions);

export default router;