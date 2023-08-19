import express, {Request, Response} from 'express'
import { getTrendingRecipes } from '../controllers/recipeController'
export const router = express.Router()

// Get treding recipes 
router.get("/trending", getTrendingRecipes)


