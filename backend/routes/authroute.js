import express from "express"
import { login, logout, signUp } from "../controllers/authController.js"
const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/signin",login)
authRouter.get("/logout",logout)
export default authRouter