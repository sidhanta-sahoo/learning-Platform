import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// ✅ Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Upload function
export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload file
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto", // auto-detect file type (image/video/pdf)
    });

    // Remove local file after upload
    fs.unlinkSync(localFilePath);

    return response; // returns full response { url, secure_url, ... }
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message);
    fs.unlinkSync(localFilePath); // remove local file even if upload fails
    return null;
  }
};
