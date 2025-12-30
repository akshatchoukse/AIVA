import fs from "fs"
import { v2 as cloudinary } from 'cloudinary';
const uploadCloudinary=async(filePath)=>{
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API, 
        api_secret: process.env.CLOUD_SECRET // Click 'View API Keys' above to copy your API secret
    });

    try {
        const uploadResult = await cloudinary.uploader
       .upload(filePath)
       fs.unlinkSync(filePath) //delete the image
       return uploadResult.secure_url
    } catch (error) {
        fs.unlinkSync(filePath)
        return resizeBy.status(500).json({message:"Cloudinary error"})
    }
}

export default uploadCloudinary