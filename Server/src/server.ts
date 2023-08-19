import express from "express"
import bodyParser from "body-parser"
import { router as userRouter } from "./routes/userRoutes"
import { router as recipeRouter} from "./routes/recipeRoutes"
const app = express()
const PORT = 5000

// Middlewares 
app.use(bodyParser.json()) // populate req.body with data
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.use("/api/users", userRouter)
app.use("/api/recipes", recipeRouter)


app.listen(PORT, () => console.log(`listening on port: ${PORT} 👍`))