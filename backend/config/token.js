import jwt from "jsonwebtoken"
const genToken = async(userId)=>{
    try {
        const token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"5d"})
    } catch (error) {
        console.log(error)
    }
}
export default genToken