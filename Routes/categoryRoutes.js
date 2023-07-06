import express from "express"
import { createCategory, getAllCategories, getMoviesAgainstSingleCategory } from "../Controllers/categoryController.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/create", verifyToken, createCategory)

router.get("/getAllCategories", getAllCategories)

router.post("/getMoviesAgainstSingleCategory", getMoviesAgainstSingleCategory)

export default router;