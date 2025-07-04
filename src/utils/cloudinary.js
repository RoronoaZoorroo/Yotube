import { v2 as cloudinary } from "cloudinary";
import fs from "fs"
import path from "path";

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
);

const uploadOnCloudinary = async (localfilepath) => {
    try {
        if(!localfilepathpath) return null
        const response = await cloudinary.uploader.upload(localfilepath, {
            resource_type : "auto"
        });
        console.log("file is uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilepath);
        return null;
    }
}