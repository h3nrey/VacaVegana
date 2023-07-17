import { getUser, loginUser, registerUser } from "../controllers/userControllers";
import { protect } from "../Middlewares/auth";
export const router = express.Router()
import express, {NextFunction, Request, Response} from "express";


// Create new user 
router.post("/signup", registerUser)

// Login User
router.post("/login", loginUser)

router.get("/", protect, getUser)
