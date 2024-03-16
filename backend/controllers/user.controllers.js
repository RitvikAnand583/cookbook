import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponce} from "../utils/apiResponce.js"
import  User from "../models/user.model.js"

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const userRegister = asyncHandler(async (req,res) =>{
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res



    // get details from frontend in req.body
   const {username , email , fullName , password} = req.body;
   
   // validation
   if ([username,email,fullName,password]
      .some((field) => field?.trim() === ""))
   {
    throw new ApiError(400, "All fields are required")
   }

   // is user existed or not
   const isExisted = await User.findOne({username})

   if (isExisted) {
    throw new ApiError(404, "User already exists!") // user exist
}

   // object to sending in db by create
    const userdetails = await User.create({
        fullName,
        email, 
        password,
        username: username.toLowerCase()
   })

   // checking user created or not
    const createdUser = await User.findById(userdetails._id).select(
    "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponce(200, createdUser, "User registered Successfully")
    )
})

const userLogin = asyncHandler(async (req , res) => {
    // get user detial from req.body
    // validate does user exist 
    // check passowrd
    // give refreces and acesstoken 
    // give cookies


    const {email , password} = req.body;

    if(!email){
        throw new ApiError(400, "Enter email")
    }

    const isUser = await User.findOne({email})

    if (!isUser) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await isUser.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(isUser._id)

    const loggedInUser = await User.findById(isUser._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponce(
            200, 
            "User logged In Successfully",
            {
                user: loggedInUser, accessToken, refreshToken
            },
        )
    )
})



export {userRegister , userLogin }