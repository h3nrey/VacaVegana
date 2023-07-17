import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient({})

export const registerUser = async(req: Request, res: Response) => {
    const {username, email, password} = req.body

    // Check if all field are filled 
    if(!username || !email || !password) {
        res.status(400).json("You must fill all required fields")
    }

    // // Check if already have a user with this email
    const userExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    }) 

    if(userExists) {
        res.status(400).json("User already exists");
        throw new Error("user alrady exists")
    }

    // // Hash password 
    const salt = await bcrypt.genSalt(10) // generate salt
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await prisma.user.create({
        data: {
            username: username,
            email: email,
            password: hashedPassword,
        }
    })  

    if(user){
        res.status(201).json({
            id: user.id,
            username: user.username,
            token: generateToken(user.id)
        })
    } else {
        res.status(400).json("User not created")
    }
}


export const loginUser = async(req: Request, res: Response) => {
    const {username, password} = req.body

    // Check if all fields are filled 
    if(!username || !password) {
        res.status(400).json("You must fill all fields")
    }

    // Check if the user exists 
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if(user) {
        const passwordMatch = await bcrypt.compare(password, user.password)

        if(passwordMatch) {
            res.json({
                id: user.id,
                username: user.username,
                token: generateToken(user.id)
            })
        } else {
            res.status(400).json("wrong passwords")
        }
    } else{
        res.status(400).json("user not exists")
    }


}

export const getUser = async(req: Request, res: Response) => {
    res.status(200).json(req.body.user)
}

const generateToken = (id: string) => {
    const secret: string = process.env.JWT_SECRET || "secret"
    return jwt.sign({ id }, secret, {
        expiresIn: "30d",
    })
}