import express, { Response, Request } from "express"
const app = express()
const PORT = 5000

app.get("/", (req: Request, res: Response) => {
    res.json({message: "hello world"})
})

app.listen(PORT, () => console.log(`listening on port: ${PORT} 👍`))