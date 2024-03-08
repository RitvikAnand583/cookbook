import { Router } from "express";
const router = Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: "Server running!!"});
});

export default router;
