import {Request, Response} from 'express'
import { Category, PrismaClient, Recipe } from '@prisma/client'
const prisma = new PrismaClient({})

export const getTrendingRecipes = async(req: Request, res: Response) => {
    const tredingRecipes = await prisma.post.findMany({
        orderBy: {
            likes: "desc"
        }
    })

    res.status(200).json(tredingRecipes)
}

export const createRecipes = async(req: Request, res: Response) => {
    const recipe = req.body.recipe
    const categories = req.body.categories
    const categorias: Category= {id: 1, name: "jorge"}
    console.log(categories)
    const createdRecipe = await prisma.post.create({
        data: {
            categories: [
                {
                    id: 1,
                    name: "a"}
            ],
            recipe: recipe
        },
    })

    if(!createdRecipe) {
        throw new Error("Error on creating recipe")
    }

    res.status(200).json("recipe created successfully")
}

export const getDailyRecipe = async(req: Request, res: Response) => {
    const recipes = await prisma.post.findMany()
    res.json(recipes.length)
}