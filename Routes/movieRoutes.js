import express from "express"
import { createMovie, getFeaturedMovie, getSingleMovie, incrView, topTen } from "../Controllers/movieController.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/create", verifyToken, createMovie)

router.get("/featured", getFeaturedMovie)

router.get("/single/:id", getSingleMovie)

router.put("/view", incrView)

router.get("/top", topTen)

export default router;