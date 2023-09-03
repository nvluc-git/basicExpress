import express from "express";
const router = express.Router();
import * as controllers from "../controllers/user";

router.get("/", controllers.getUser);
router.get("/:id", controllers.findOne);

export default router;
