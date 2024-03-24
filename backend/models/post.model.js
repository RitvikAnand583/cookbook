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
        ingredient: [String],
        quantity: [String],
        ingredientDetial: [String],

        recipe: [String],

        level: {
            type: String, 
            required: true
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