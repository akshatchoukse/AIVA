import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
export const signUp = async(req,res)=>{
    try {
       const {name,email,password} = req.body
       const existEmail = await User.findOne({email})
       if(existEmail){
        return res.status(400).json({message:"Email already registered!"})
       }
       if(password.length<6){
        return res.status(400).json({message:"Password must be atleast more than 6 characters"})
       }
       const hashedPassword = await bcrypt.hash(password,10)
       const newUser = await User.create({
        name,email,password:hashedPassword
       })
       const token = await genToken(newUser._id)
       res.cookie('token',token,{
        httpOnly:true,
        maxAge:5*24*60*60*1000,
        sameSite:"strict",
        secure:false
       })
       return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json({message:`signup error ${error}`})
    }
}
export const login = async(req,res)=>{
    try {
       const {email,password} = req.body
       const user = await User.findOne({email})
       if(!user){
        return res.status(400).json({message:"Email Not registered!"})
       }
       const comparePass = await bcrypt.compare(password,user.password)
       if(!comparePass){
        return res.status(400).json({message:"Wrong Password!"})
       }
       const token = await genToken(user._id)
       res.cookie('token',token,{
        httpOnly:true,
        maxAge:5*24*60*60*1000,
        sameSite:"strict",
        secure:false
       })
       return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`login error ${error}`})
    }
}

export const logout = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout successfully"})
    } catch (error) {
        return res.status(500).json({message:`logout error ${error}`})
    }
}