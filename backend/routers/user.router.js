import { Router } from "express";
import { userRegister,
         userLogin,
         logoutUser,
         changeCurrentPassword,
         updateAccountDetails,
         updateEmail,
         getUserChannelProfile } from "../controllers/user.controllers.js"; 
import { toggleFollowed } from "../controllers/isFollowing.controllers.js" 
import {userRecipe} from "../controllers/post.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import {verifyJWT} from "../middlewares/auth.middleware.js"
// import { UploadStream } from "cloudinary";
const router = Router();


/* GET home page. */
router.post("/register", userRegister );

router.route("/login").post(userLogin);

router.route("/logout").post(verifyJWT,  logoutUser)
router.route("/change-password").post(verifyJWT,  changeCurrentPassword)
router.route("/change-details").post(verifyJWT,  updateAccountDetails)
router.route("/change-email").post(verifyJWT,  updateEmail)

router.route("/c/:username").get(verifyJWT,  getUserChannelProfile)
router.route("/id/:channelId").get(verifyJWT,  toggleFollowed)


router.route("/postRecipe").post(
    upload.fields([
        {
            name: "foodPicture",
            maxCount: 1
        }
    ]),verifyJWT,
    userRecipe);


export default router;