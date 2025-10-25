import React from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "MongoDB for Experts",
    price: 399,
    status: "Published",
    image: "/images/mongodb.png",
  },
  {
    id: 2,
    title: "Error Debugging Fixed",
    price: 399,
    status: "Published",
    image: "/images/debugging.png",
  },
  {
    id: 3,
    title: "HTML Full Course for Beginners",
    price: 199,
    status: "Draft",
    image: "/images/html.png",
  },
  {
    id: 4,
    title: "Node Js Tutorial",
    price: 299,
    status: "Published",
    image: "/images/node.png",
  },
  {
    id: 5,
    title: "Express Js Tutorial",
    price: 199,
    status: "Published",
    image: "/images/express.png",
  },
];

const CourseList = () => {
  const navigate = useNavigate();

  // ✅ Correct navigation (matches App.jsx route)
  const handleCreateCourse = () => {
    navigate("/admin/create-course");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
          My Courses
        </h1>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={handleCreateCourse}
        >
          + Create Course
        </button>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
              <th className="px-6 py-3 text-left">Course</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr
                key={course.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="flex items-center px-6 py-4 space-x-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-14 h-14 object-cover rounded-lg shadow-sm"
                  />
                  <span className="font-medium text-gray-800">
                    {course.title}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">
                  ₹
                  {course.price.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                  })}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.status === "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {course.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
                    title="Edit Course"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards (Mobile) */}
      <div className="grid gap-4 md:hidden">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow p-4 flex items-center space-x-4"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-16 h-16 object-cover rounded-lg shadow-sm"
            />
            <div className="flex-1">
              <h2 className="font-medium text-gray-800">{course.title}</h2>
              <p className="text-gray-600 text-sm">
                ₹
                {course.price.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <span
                className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                  course.status === "Published"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {course.status}
              </span>
            </div>
            <button
              className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition"
              title="Edit Course"
            >
              <FaEdit />
            </button>
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-500 text-sm text-center">
        A list of your recent courses.
      </p>
    </div>
  );
};

export default CourseList;
