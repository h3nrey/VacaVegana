import {Request, Response} from 'express'
import { Category, PrismaClient, Recipe } from '@prisma/client'
const prisma = new PrismaClient({})

export const getTrendingRecipes = async(req: Request, res: Response) => {
    const tredingRecipes = await prisma.post.findMany({
        orderBy: {
            likes: "desc"
        },
    })

    res.status(200).json(tredingRecipes)
}

export const createRecipes = async(req: Request, res: Response) => {
    const {
        title, 
        desc, 
        prepTime, 
        rendimento, 
        images, 
        stats,
        ingredients,
        cookSteps
    } = req.body.recipe
    const categories = req.body.categories

    if (categories.length < 0) return

    if(!title || !desc || !prepTime || !rendimento || !images || !stats || !ingredients || !cookSteps) {
        res.status(400).json({data: [], message: "Not all required fields have been filled out"})
        throw new Error("Not all required fields have been filled out")
    }

    const createdRecipe = await prisma.post.create({
        data: {
            categories: {
                create: categories
            },
            recipe: {
                create: {
                    title,
                    desc,
                    prepTime,
                    redimento: rendimento,
                    images,
                    stats,
                    ingredients,
                    cookSteps: {
                        create: cookSteps
                    } 
                }
            }
        }
    })

    if(!createdRecipe) {
        throw new Error("Error on creating recipe")
    }

    res.status(201).json(`${title} recipe created successfully`)
}

export const getDailyRecipe = async(req: Request, res: Response) => {
    const recipes = await prisma.post.findMany()
    const randomIndex = Math.floor(Math.random() * recipes.length)
    const recipeId = recipes[randomIndex].recipeId
    const randomRecipe = await prisma.recipe.findUnique({
        where: {
            id: recipeId
        }
    })
    res.status(200).json(randomRecipe)
}