import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  createCourse,
  getPublishedCourses,
  getCreatorCourses,
  editCourse,
  getCourseById,
  removeCourse,
} from "../controllers/course.controller.js";
import upload from "../middleware/multer.js"; // ✅ FIXED (no curly braces)

const router = express.Router();

// Middleware for role-based authorization
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: You don't have access" });
    }
    next();
  };
};

// Create new course (private: only instructor or admin)
router.post(
  "/",
  isAuthenticated,
  authorizeRoles("instructor", "admin"),
  upload.single("thumbnail"), // ✅ works now
  createCourse
);

// Get published courses (public)
router.get("/published", getPublishedCourses);

// Get creator's own courses (private: only instructor/admin)
router.get(
  "/my-courses",
  isAuthenticated,
  authorizeRoles("instructor", "admin"),
  getCreatorCourses
);

// Get course by ID (public)
router.get("/:courseId", getCourseById);

// Edit course (private: only instructor/admin who owns it or admin)
router.put(
  "/:courseId",
  isAuthenticated,
  authorizeRoles("instructor", "admin"),
  editCourse
);

// Delete course (private: only instructor/admin who owns it or admin)
router.delete(
  "/:courseId",
  isAuthenticated,
  authorizeRoles("instructor", "admin"),
  removeCourse
);

export default router;
