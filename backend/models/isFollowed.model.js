import mongoose, {Schema} from "mongoose"

const isFollowedSchema = new Schema({
    following: {
        type: Schema.Types.ObjectId, // one who is following
        ref: "User"
    },
    followers: {
        type: Schema.Types.ObjectId, // one to whom 'following' is follow
        ref: "User"
    }
}, {timestamps: true})



export const isFollowed = mongoose.model("isfollowed", isFollowedSchema)