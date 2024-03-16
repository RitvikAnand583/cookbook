import { Router } from "express";
import { userRegister,
         userLogin,
         logoutUser } from "../controllers/user.controllers.js";
import {userRecipe} from "../controllers/post.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
import {isLogin} from "../middlewares/isLogin.middleware.js"
const router = Router();


/* GET home page. */
router.post("/register", userRegister );

router.route("/login").post(userLogin);

router.route("/logout").post(verifyJWT,  logoutUser)

router.use(isLogin); 
router.route("/postRecipe").post(
    upload.fields([
        {
            name: "foodPicture",
            maxCount: 1
        }
    ]),verifyJWT,
    userRecipe);

export default router;