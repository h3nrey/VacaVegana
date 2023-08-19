import {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'
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
    const {categories, recipe} = req.body

    const createdRecipe = await prisma.post.create({
        data: {
            categories: categories,
            recipe: recipe
        },
    })

    if(!createdRecipe) {
        throw new Error("Error on creating recipe")
    }

    res.status(200).json("recipe created successfully")
}