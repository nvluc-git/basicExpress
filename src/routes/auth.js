import * as controllers from "../controllers";
import express from "express";
const router = express.Router();

router.post("/register", controllers.Register);
router.post("/login", controllers.Login);

export default router;
