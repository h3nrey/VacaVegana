import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const prisma = new PrismaClient({})

type resType = {
    data: any,
    message: string,
    wasSuccessful: boolean,
}

export const registerUser = async(req: Request, res: Response) => {
    const {username, email, password} = req.body

    // Check if all field are filled 
    if(!username || !email || !password) {
        res.status(400).json("You must fill all required fields")
    }

    // Check if already have a user with this email
    const userExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    }) 

    if(userExists) {
        res.status(400).json("User already exists");
        throw new Error("user alrady exists")
    }

    // Hash password 
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

    if(!user) {
        res.status(400).json("User not created")
    }

    const clientRes: resType = {
        data: {
            id: user.id,
            username: user.username,
            token: generateToken(user.id)
        },
        message: "User Created successfully",
        wasSuccessful: true
    }

    res.json(clientRes)
}


export const loginUser = async(req: Request, res: Response) => {
    const {username, password} = req.body

    // Check if all fields are filled 
    if(!username || !password) {
        res.json("You must fill all fields")
    }

    // Check if the user exists 
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if(!user) {
        const clientRes: resType = {
            data: {},
            message: "Theres no user with this username",
            wasSuccessful: false
        }

        res.json(clientRes)
        return
    }
    

    // Check if passwords match 
    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch) {
        const clientRes: resType = {
            data: {},
            message: "Wrong passwords!!!",
            wasSuccessful: false
        }

        res.json(clientRes)
        return
    }
    

    const clientRes: resType = {
        data: {
            id: user.id,
            username: user.username,
            token: generateToken(user.id)
        },
        message: "User logged successfully",
        wasSuccessful: true
    }

    res.json(clientRes)
}

export const getUser = async(req: Request, res: Response) => {
    res.status(200).json(req.body.user)
}

export const updateUser = async(req: Request, res: Response) => {
    const { id }:User = req.body.user
    const { username, email, password } = req.body

    if(!username && !email && !password) {
        res.status(400)
        throw new Error("you must at least fill one field")
    }

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if(user) {
        const salt = await bcrypt.genSalt(10) // generate salt
        const hashedPassword = await bcrypt.hash(password, salt)

        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                username: username,
                email: email,
                password: hashedPassword,
            }
        })

        res.status(200).json(`${username} was updated successfully`)
    } else {
        res.status(400)
        throw new Error("user do not exists")
    }


}

export const deleteUser = async(req: Request, res: Response) => {
    const { id }: User = req.body.user

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })
    
    if(user) {
        await prisma.user.delete({
            where: {
                id: id
            }
        })

        res.status(200).json("user deleted successfully")
    } else {
        res.status(400)
        throw new Error("User not found")
    }
}
const generateToken = (id: string) => {
    const secret: string = process.env.JWT_SECRET || "secret"
    return jwt.sign({ id }, secret, {
        expiresIn: "30d",
    })
}