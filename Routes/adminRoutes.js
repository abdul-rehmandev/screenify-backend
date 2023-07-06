import express from "express"
import { verifyToken } from "../middleware/jwt.js";
import { deleteMovie, getAccounts, getCategories, getMovies, getSubscriptions, getUsers } from "../Controllers/adminControllers.js";

const router = express.Router();

router.get("/getUsers", verifyToken, getUsers)

router.get("/getCategories", verifyToken, getCategories)

router.get("/getMovies", verifyToken, getMovies)

router.get("/getSubscriptions", verifyToken, getSubscriptions)

router.get("/getAccounts", verifyToken, getAccounts)

router.post("/deleteMovie", verifyToken, deleteMovie)


export default router;