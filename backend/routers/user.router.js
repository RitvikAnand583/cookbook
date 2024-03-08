import { Router } from "express";
import { userRegister } from "../controllers/user.controllers.js";

const router = Router();


/* GET home page. */
router.post('/register', userRegister );

export default router;