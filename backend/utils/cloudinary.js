import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
    cloud_name: 'dxiai17gd', 
    api_key: '737123747846894', 
    api_secret: '7vG5x_xb3oT33X4DxyEqnuJogIQ'
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        // console.log(localFilePath);
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })

        // console.log(response);
        // console.log("after Log");
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        console.log("in catch block");
        console.error(error)
       fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}