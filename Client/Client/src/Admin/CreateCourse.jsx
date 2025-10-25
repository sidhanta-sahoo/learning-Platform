import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/course",
        { title, category },
        { withCredentials: true }
      );

      console.log(res.data);
      toast.success("Course Created ✅");
      navigate("/courses");
    } catch (error) {
      console.error("Axios Error:", error);
      toast.error(error.response?.data?.message || "Failed to create course ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-2 text-gray-900">
        Let’s Add <span className="text-blue-600">Courses</span>
      </h2>
      <p className="text-gray-700 mb-6">
        Fill in the details below to create a new course.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 shadow-lg rounded-lg"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800">
            Title
          </label>
          <input
            type="text"
            placeholder="Your Course Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 text-gray-900 bg-white placeholder-gray-400 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-52 border border-gray-300 text-gray-900 bg-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select a category</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Node.js">Node.js</option>
            <option value="React">React</option>
            <option value="Express">Express</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => navigate("/courses")}
            className="px-5 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
