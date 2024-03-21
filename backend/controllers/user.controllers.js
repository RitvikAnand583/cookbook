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
   console.log(username);
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
    console.log("dhjbdh");
   // object to sending in db by create
    const userdetails = await User.create({
        fullName,
        email, 
        password,
        username: username
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

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponce(200, {}, "User logged Out"))
})

// update or change password 
const changeCurrentPassword = asyncHandler(async(req, res) => {
    // get old password
    // check old passowrd by calling fxn made in schema
    // if incorrect then return error
    // if correct change the old password

    const{oldPassword, newPassword} = req.body

    const user = await User.findById(req.user?._id)
    console.log(oldPassword, newPassword);
    const isCorrect = await user.isPasswordCorrect(oldPassword);
    console.log(isCorrect);
    if(!isCorrect) {
        throw new ApiError(400, "password is incorrect")
    }

    user.password = newPassword
    await user.save({validateBeforeSave: false})

    return res
    .status(200)
    .json(new ApiResponce(200, {}, "Password changed successfully"))

})

// update or change user Details
const updateAccountDetails = asyncHandler(async(req, res) => {
    // get detial 
    // check from db 
    // update it

    const {fullName} = req.body

    if (!fullName) {
        throw new ApiError(400, "Full Name is required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullName,
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponce(200, user, "Full Name updated successfully"))

})

const updateEmail = asyncHandler(async(req, res) => {
    // get detial 
    // check from db 
    // update it

    const {email} = req.body

    if (!email) {
        throw new ApiError(400, "Email is required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                email: email
            }
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponce(200, user, "Email updated successfully"))

})


// getting follower and following detial
const getUserChannelProfile = asyncHandler(async(req, res) => {
    const {username} = req.params

    if (!username?.trim()) {
        throw new ApiError(400, "username is missing")
    }

    const channel = await User.aggregate([
        {
            // to is user present 
            // also check outside of aggregation
            $match: {
                username: username?.toLowerCase()
            }
        },
        {
            $lookup: {
                from: "isfolloweds",
                localField: "_id",
                foreignField: "followers",
                as: "followers" // no. of followers
            }
        },
        {
            $lookup: {
                from: "isfolloweds",
                localField: "_id",
                foreignField: "following",
                as: "following" // no. of following 
            }
        },
        {
            $addFields: {
                following: {
                    $size: "$following"
                },
                followers: {
                    $size: "$followers"
                },
                
                isSubscribed: {
                    $cond: {
                        if: {$in: [req.user?._id, "$following.following"]},
                        then: true,
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                followers: 1,
                following: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1

            }
        }
    ])

    if (!channel?.length) {
        throw new ApiError(404, "channel not exists")
    }

    return res
    .status(200)
    .json(
        new ApiResponce(200, channel[0], "User channel fetched successfully")
    )
})


export {userRegister ,userLogin ,logoutUser,changeCurrentPassword, updateAccountDetails, updateEmail ,getUserChannelProfile }