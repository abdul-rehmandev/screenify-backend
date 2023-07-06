import express from "express";
import { deleteNotification, getNotifications, isReadNotifications, sendNotification } from "../Controllers/notificationsControllers.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/send", sendNotification)

router.post("/getNotifications", getNotifications)

router.post("/read", isReadNotifications)

router.post("/delete", verifyToken, deleteNotification)

export default router