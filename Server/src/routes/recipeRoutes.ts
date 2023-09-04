import express, {Request, Response} from 'express'
import { createRecipes, getDailyRecipe, getTrendingRecipes } from '../controllers/recipeController'
export const router = express.Router()

// Get treding recipes 
router.get("/trending", getTrendingRecipes)
router.get("/daily", getDailyRecipe)
router.post("/new", createRecipes)

