import express from "express";
const router = express.Router();
import * as controllers from "../controllers";
router.post("/", controllers.create);
router.get("/", controllers.findAll);
export default router;
