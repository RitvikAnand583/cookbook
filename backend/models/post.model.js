import mongoose, {Schema} from "mongoose";

const postSchema = new Schema(
    {
        foodPicture: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, //cloudinary url
            required: true
        },
        // badMai: array at the place of string 
        ingredient: {
            type: String, 
            required: true
        },
        recipe: {
            type: String, 
            required: true
        },
        level: {
            type: String, 
            required: true
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

        // save like 

    },
    {
        timestamps: true
    }
)


export const Post = mongoose.model("Post", postSchema)