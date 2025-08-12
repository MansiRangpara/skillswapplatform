import express from "express";
import { createCourse, getCourses } from "../controllers/courseController.js";

import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/create", upload.single("image"), createCourse);
router.get("/", getCourses);
// courseRoutes.js
router.post("/create", upload.single("image"), createCourse);

export default router;
