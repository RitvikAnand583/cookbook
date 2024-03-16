import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {uploadPhoto} from "../controllers/uploadPhoto.controllers.js"

const router = Router()

// console.log("photo uploader")
router.route("/Picture").post(
    upload.fields([
        {
            name: "pictureName",
            maxCount: 1
        }
    ]),
    uploadPhoto
    )

    export default router