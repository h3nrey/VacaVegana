import {Request, Response} from 'express'
import { Category, PrismaClient, Recipe } from '@prisma/client'
const prisma = new PrismaClient({})

export const getTrendingRecipes = async(req: Request, res: Response) => {
    const tredingRecipes = await prisma.post.findMany({
        orderBy: {
            likes: "desc"
        },
        select: {
            id: true,
            categories: true,
            recipe: {
                select: {
                    title: true,
                    prepTime: true,
                    images: true,
                }
            }
        },
        take: 9
    })

    res.status(201).json(tredingRecipes)
}

export const createRecipes = async(req: Request, res: Response) => {
    const {
        title, 
        desc, 
        prepTime, 
        redimento, 
        images, 
        stats,
        ingredients,
        cookSteps
    } = req.body.recipe
    const categories = req.body.categories
    
    console.log("Creating recipe")
    console.log(req.body.recipe);

    if (categories.length < 0) return

    if(!title || !desc || !prepTime || !redimento || !images || !stats || !ingredients || !cookSteps) {
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
                    redimento: redimento,
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

export const updateRecipe = async(req: Request, res: Response) => {
    const {
        title, 
        desc, 
        prepTime, 
        redimento, 
        images, 
        stats,
        ingredients,
        cookSteps
    } = req.body.recipe
    const categories = req.body.categories
    const id = req.params.id

    if(!req.body.recipe) {
        res.status(400).json({data: [], message: "Not all required fields have been filled out"})
        throw new Error("Not all required fields have been filled out")
    }

    const recipeFound = await prisma.post.findUnique({
        where: {
            id: id
        }
    })

    if(!recipeFound) {
        res.status(400).json("recipe not found")
        throw new Error("recipe not found")
    }

    const updatedRecipe = await prisma.post.update({
        where: {
            id: id,
        },
        data: {
            categories: {
                deleteMany: {},
                create: categories,
            },
            recipe: {
                create: {
                    title,
                    desc,
                    prepTime,
                    redimento: redimento,
                    images,
                    stats,
                    ingredients,
                    cookSteps: {
                        create: cookSteps
                    }
                }
            },
        } 
    })

    if(!updatedRecipe) {
        throw new Error("Error on updating the recipe")
    }

    res.status(200).json("created sucessfully")
}

export const getRecipe = async(req: Request, res: Response) => {
    const id = req.params.id

    if(!id) {
        throw new Error("field required not filled")
    }
    const recipe = await prisma.post.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            likes: true,
            recipe: {
                select: {
                    title: true,
                    desc: true,
                    prepTime: true,
                    redimento: true,
                    images: true,
                    stats: true,
                    ingredients: true,
                    cookSteps: true
                }
            },
            categories: true,
        }
    })

    if(!recipe) {
        throw new Error(`Dont have a recipe with this ${id} id`)
    }

    res.status(200).json(recipe)  
}

export const getDailyRecipe = async(req: Request, res: Response) => {
    const recipes = await prisma.post.findMany()
    const randomIndex = Math.floor(Math.random() * recipes.length)
    const recipeId = recipes[randomIndex].id

    res.status(200).json(recipeId)
}