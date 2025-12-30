import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRouter from "./routes/authroute.js"
import userRouter from "./routes/userroute.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()
const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
connectDB()
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

app.listen(PORT,()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})