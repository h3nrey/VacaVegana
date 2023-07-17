import { Post, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient({})

interface JwtPayload {
    id: string
}

export const protect = async(req: Request, res: Response, next: NextFunction) => {
    const jwtSecret: string = process.env.JWT_SECRET || "secret"
    let token 

    const authCode = req.headers.authorization

    if(authCode && authCode.startsWith("Bearer")) {
        try {
            // Get token from headers 
            token = authCode.split(" ")[1]

            // Verify Token 
            const decoded = jwt.verify(token, jwtSecret) as JwtPayload

            // Retrieve user from token
            const user = await prisma.user.findUnique({
                where: {
                    id: decoded.id
                },
                select: {
                    id: true,
                    username: true,
                    email: true,
                    savedRecipes: true,
                }
            })

            if(user) {
                req.body.user = user

                next()
            } else {
                res.status(401).json("Not Authorized!")
            }

        } catch (error) {
            res.status(401).json("Not Authorized!")
        }
    }

    if(!token) {
        res.status(401).json("Not authorized, no token")
    }
}