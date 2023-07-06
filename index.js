import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import subscriptionRoutes from "./Routes/subscriptionRoutes.js";
import authRoutes from "./Routes/authRoutes.js";
import accountRoutes from "./Routes/accountRoutes.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import movieRoutes from "./Routes/movieRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import notificationRoutes from "./Routes/notificationRoutes.js";

const app = express();
dotenv.config();

connectDB();

app.use(cors({
    origin: "http://127.0.0.1:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/subscription", subscriptionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/notification", notificationRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port no ${process.env.PORT}`)
})