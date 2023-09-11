import express, {Request, Response} from 'express'
import { createRecipes, getDailyRecipe, getRecipe, getTrendingRecipes, updateRecipe } from '../controllers/recipeController'
export const router = express.Router()

// Get treding recipes 
router.get("/recipe/:id", getRecipe)
router.put("/recipe/:id", updateRecipe)
router.get("/trending", getTrendingRecipes)
router.get("/daily", getDailyRecipe)
router.post("/new", createRecipes)

