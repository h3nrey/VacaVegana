import { getUser, loginUser, registerUser, updateUser } from "../controllers/userControllers";
import { protect } from "../Middlewares/auth";
export const router = express.Router()
import express, {NextFunction, Request, Response} from "express";


// Create user 
router.post("/signup", registerUser)

// Login User
router.post("/login", loginUser)

// Get User 
router.get("/", protect, getUser)

// Update User 
router.put("/", protect, updateUser)

