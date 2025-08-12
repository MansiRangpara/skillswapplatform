import Course from "../models/Course.js";  // use import, add .js extension

export const createCourse = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    const image = req.file ? req.file.filename : null;

    const course = new Course({ title, description, price, category, image });
    await course.save();

    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
