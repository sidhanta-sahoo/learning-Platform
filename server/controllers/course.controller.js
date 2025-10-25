import Course from "../models/course.model.js";

// ✅ Create new course
export const createCourse = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    const course = await Course.create({
      title,
      description,
      price,
      category,
      creator: req.user._id, // from isAuthenticated
    });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating course", error });
  }
};

// ✅ Get all published courses (public)
export const getPublishedCourses = async (req, res) => {
  try {
    const courses = await Course.find({ published: true });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching published courses", error });
  }
};

// ✅ Get creator’s own courses (instructor/admin only)
export const getCreatorCourses = async (req, res) => {
  try {
    const courses = await Course.find({ creator: req.user._id });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching your courses", error });
  }
};

// ✅ Get course by ID (public)
export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};

// ✅ Edit course (only creator or admin)
export const editCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // check permission
    if (
      course.creator.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized to edit this course" });
    }

    Object.assign(course, req.body);
    await course.save();

    res.status(200).json({
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ message: "Error editing course", error });
  }
};

// ✅ Delete course (only creator or admin)
export const removeCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // check permission
    if (
      course.creator.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Not authorized to delete this course" });
    }

    await course.deleteOne();
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course", error });
  }
};
