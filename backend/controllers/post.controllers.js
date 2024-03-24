import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponce} from "../utils/apiResponce.js"
import  {Post} from "../models/post.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"



const userRecipe = asyncHandler(async (req, res) => {
    // get detial from user 
    // check all feild are present
    // upload img
    // save in db
    
    
    const {title , ingredient,quantity,ingredientDetial , recipe , level} = req.body;

    // validation
    if ([title,level]
        .some((field) => field?.trim() === ""))
        {
            throw new ApiError(400, "All fields are required")
        }

    if(quantity.length != ingredient.length){
        throw new ApiError(400, "Not a prpoer ingredient")
    }

    if(recipe.length == 0) {
        throw new ApiError(400, "All fields are required")
    }  
    
    for(let i = 0; i < quantity.lenght; i++){
        ingredientDetial[i] = `${ingredient[i]} - ${quantity[i]}` 
    }

    const pictureNameLocalPath = req.files?.foodPicture[0]?.path;
    
    if (!pictureNameLocalPath) {
        throw new ApiError(400, "pictureName file is required")
    }
 
    const foodPicture = await uploadOnCloudinary(pictureNameLocalPath)
    
    if (!foodPicture) {
        throw new ApiError(400, "pictureName file is required")
    }


        // console.log(ingredientDetial[0]);
    const postDetails = await Post.create({
        foodPicture: foodPicture?.url || "",
        title,
        ingredient,
        quantity,
        ingredientDetial, 
        recipe,
        level
   })

   const createdPost = await Post.findById(postDetails._id)

   console.log("Post upload successfully");
    return res.status(201).json(
        new ApiResponce(200, createdPost, "Post Successfully")
    )
})


export { userRecipe }