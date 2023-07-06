import express from "express"
import { createAccount } from "../Controllers/accountControllers.js";

const router = express.Router();

router.post("/create", createAccount)


export default router;