import express from "express"
import bodyParser from "body-parser"
import { router as userRouter } from "./routes/userRoutes"
const app = express()
const PORT = 5000

// Middlewares 
app.use(bodyParser.json()) // populate req.body with data
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use("/api/users", userRouter)



app.listen(PORT, () => console.log(`listening on port: ${PORT} 👍`))