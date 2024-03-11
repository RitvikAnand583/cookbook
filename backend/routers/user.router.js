import { Router } from "express";
import { userRegister,
         userLogin, } from "../controllers/user.controllers.js";
import {userRecipe} from "../controllers/post.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();


/* GET home page. */
router.post("/register", userRegister );

router.route("/login").post(userLogin);

router.route("/postRecipe").post(
    upload.fields([
        {
            name: "foodPicture",
            maxCount: 1
        }
    ]),
    userRecipe);

export default router;