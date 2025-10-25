import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditCourse = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    level: "",
    price: "",
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleFileChange = (e) => {
    setCourse({ ...course, thumbnail: e.target.files[0] });
  };

  const handleSave = () => alert("Course saved as draft 📝");
  const handlePublish = () => {
    alert("✅ Course Published Successfully!");
    navigate("/courses");
  };
  const handleCancel = () =>
    setCourse({ title: "", subtitle: "", description: "", category: "", level: "", price: "", thumbnail: null });
  const handleRemove = () =>
    setCourse({ title: "", subtitle: "", description: "", category: "", level: "", price: "", thumbnail: null });
  const goToLectures = () => navigate("/lectures");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full p-8 bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Add Detailed Information About Your Course
          </h2>
          <button
            onClick={goToLectures}
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-md hover:from-purple-600 hover:to-indigo-600 transition"
          >
            Go to Lecture Page
          </button>
        </div>

        {/* Top Buttons */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <button
            onClick={handlePublish}
            className="px-6 py-2 bg-green-400 text-white rounded-full shadow-md hover:bg-green-500 transition"
          >
            Publish Course
          </button>
          <button
            onClick={handleRemove}
            className="px-6 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition"
          >
            Remove Course
          </button>
        </div>

        {/* Course Form */}
        <div className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={course.title}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 p-3 rounded-lg transition"
          />

          <input
            type="text"
            name="subtitle"
            placeholder="Course Subtitle"
            value={course.subtitle}
            onChange={handleChange}
            className="w-full border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 p-3 rounded-lg transition"
          />

          <textarea
            name="description"
            placeholder="Course Description"
            value={course.description}
            onChange={handleChange}
            rows="5"
            className="w-full border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 p-3 rounded-lg transition"
          ></textarea>

          <div className="flex flex-col md:flex-row gap-4">
            <select
              name="category"
              value={course.category}
              onChange={handleChange}
              className="border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 p-3 rounded-lg w-full md:w-1/3 transition"
            >
              <option value="">Select Category</option>
              <option value="Programming">Programming</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>

            <select
              name="level"
              value={course.level}
              onChange={handleChange}
              className="border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 p-3 rounded-lg w-full md:w-1/3 transition"
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <input
              type="number"
              name="price"
              placeholder="Course Price (INR)"
              value={course.price}
              onChange={handleChange}
              className="border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-300 p-3 rounded-lg w-full md:w-1/3 transition"
            />
          </div>

          {/* Thumbnail Upload + Save/Cancel Buttons */}
          <div>
            <p className="mb-2 font-medium text-gray-700">Course Thumbnail</p>
            <label className="block w-40 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition overflow-hidden">
              {course.thumbnail ? (
                <img
                  src={URL.createObjectURL(course.thumbnail)}
                  alt="Course Thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-gray-400">Upload Image</span>
              )}
              <input type="file" accept="image/*" onChange={handleFileChange} hidden />
            </label>

            <div className="flex gap-4 mt-4 flex-wrap">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-400 text-white rounded-full shadow-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
