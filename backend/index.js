import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config()
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
connectDB()

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})