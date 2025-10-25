import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Courses() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("search") || "";

  const allCourses = [
    {
      id: 1,
      title: "React for Beginners (CodeWithHarry)",
      type: "video",
      thumbnail: "https://www.youtube.com/embed/RGKi6LSPDLU",
      enrolled: false,
    },
    {
      id: 2,
      title: "Advanced Node.js (Hitesh Choudhary)",
      type: "video",
      thumbnail: "https://www.youtube.com/embed/RLp7IPd5kF0",
      enrolled: true,
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      type: "image",
      thumbnail: "https://placehold.co/300x200?text=UI/UX",
      enrolled: false,
    },
    {
      id: 4,
      title: "Python Programming Essentials",
      type: "video",
      thumbnail: "https://www.youtube.com/embed/kqtD5dpn9C8",
      enrolled: true,
    },
    {
      id: 5,
      title: "Digital Marketing Masterclass",
      type: "image",
      thumbnail: "https://placehold.co/300x200?text=Marketing",
      enrolled: false,
    },
    {
      id: 6,
      title: "Data Structures & Algorithms",
      type: "video",
      thumbnail: "https://www.youtube.com/embed/8hly31xKli0",
      enrolled: true,
    },
    {
      id: 7,
      title: "JavaScript Essentials",
      type: "video",
      thumbnail: "https://www.youtube.com/embed/hdI2bqOjy3c",
      enrolled: false,
    },
    {
      id: 8,
      title: "Machine Learning Basics",
      type: "image",
      thumbnail: "https://placehold.co/300x200?text=ML",
      enrolled: false,
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const results = allCourses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCourses(results);
  }, [query]);

  // ✅ 1. Function to check if user already enrolled (from localStorage)
  const isEnrolled = (courseId) => {
    return localStorage.getItem(`enrolled-${courseId}`) === "true";
  };

  // ✅ 2. Function for button click — go to details page
  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6">
        {query ? `Search Results for "${query}"` : "All Courses"}
      </h2>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Video or image */}
              {course.type === "video" ? (
                <iframe
                  width="100%"
                  height="180"
                  src={course.thumbnail}
                  title={course.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              ) : (
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
              )}

              <div className="p-4 flex flex-col justify-between h-32">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>

                {/* ✅ 3. Dynamic Enroll / Continue button */}
                <button
                  className="px-4 py-2 rounded-full font-semibold transition bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {isEnrolled(course.id) || course.enrolled
                    ? "Continue"
                    : "Enroll"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400 mt-4">No courses found.</p>
      )}
    </div>
  );
}

export default Courses;
