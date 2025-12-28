import jwt from "jsonwebtoken"
export const auth = async(req,res,next)=>{
    try {
        const token=req.cookies.token
        if(!token){
            return res.status(400).json({message:"token not found"})
        }
const verifyToken = await jwt.verify(token,process.env.JWT_SECRET)
req.userId = verifyToken.userId
next()
    } catch (error) {
     console.log(error)   
    }
 }
 2:02:17