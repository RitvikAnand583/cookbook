import { Router } from "express";
import {userRecipe} from "../controllers/post.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"

const router = Router();

// router.use(verifyJWT)
// router.use(verifyJWT); 
router.route("/postRecipe")
    .post(
        // upload.fields([
        //     {
        //         name: "foodPicture",
        //         maxCount: 1
        //     }
        // ]),
        userRecipe);

export default router;