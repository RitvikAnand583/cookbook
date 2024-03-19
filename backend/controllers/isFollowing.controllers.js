import { isFollowed } from "../models/isFollowed.model.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {ApiResponce} from "../utils/apiResponce.js"


const toggleFollowed = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    
    if(!channelId){
        throw new ApiError(400,"channelId is Requitred!!")
    }
    // const user = await User.findById(userId)
    const userId = req.user?._id;
    
    if(channelId == userId){
        throw new ApiError(402,"You can't follow your self")
    }

    const credential = {following:userId,followers:channelId};

   try {
     const subscribed = await isFollowed.findOne(credential);
     
     if(!subscribed){

         const newisFollowed = await isFollowed.create({
            following: userId,
            followers: channelId
        });

         if(!newisFollowed){
             throw new ApiError(500,"Unable to Subscribe channel")
         }
         return res
         .status(200)
         .json(new ApiResponce(200,newisFollowed,"Channel Subscribed Successfully!!"))
     }
     else{
         
         const deletedisFollowed = await isFollowed.deleteOne(credential);

         if(!deletedisFollowed){
             throw new ApiError(500,"Unable to Unsubscribe channel")
         }

         return res
         .status(200)
         .json(new ApiResponce(200,deletedisFollowed,"Channel Unsubscribed Successfully!!"))
     }
   } catch (error) {
     throw new ApiError(500,error?.message || "Unable to toggle isFollowed")
   }

})


export {
    toggleFollowed,
}