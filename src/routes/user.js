import express from "express";
const router = express.Router();
import user from "../controllers/user";

router.get("/", user.getUser);
router.get("/:slug", user.userDetail);

export default router;
