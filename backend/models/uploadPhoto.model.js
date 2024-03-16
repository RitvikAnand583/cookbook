import mongoose, {Schema} from "mongoose";

const photoSchema = new Schema(
    {
        pictureName: {
            type: String, //cloudinary url
            required: true
        },
        Title: {
            type: String, //cloudinary url
        },
    },
    {
        timestamps: true
    }
)


export const Photo = mongoose.model("photo", photoSchema)