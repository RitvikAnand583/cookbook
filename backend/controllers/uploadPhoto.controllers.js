import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponce} from "../utils/apiResponce.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import{ Photo} from "../models/uploadPhoto.model.js"


const uploadPhoto = asyncHandler(async (req,res) =>{

    const {title} = req.body;

    const pictureNameLocalPath = req.files?.pictureName[0]?.path;
    console.log(pictureNameLocalPath);
    if (!pictureNameLocalPath) {
        throw new ApiError(400, "pictureName file is required")
    }
 
    const pictureName = await uploadOnCloudinary(pictureNameLocalPath)
    console.log(pictureName);
    if (!pictureName) {
        throw new ApiError(400, "pictureName file is required")
    }
 
     const photo = await Photo.create({
        pictureName: pictureName?.url || "",
        Title: title || ""

    })

    if (!photo) {
        throw new ApiError(500, "Something went wrong while Photo uploading")
    }

    return res.status(201).json(
        new ApiResponce(200, photo, "Photo upload Successfully")
    )

})

export {uploadPhoto}
