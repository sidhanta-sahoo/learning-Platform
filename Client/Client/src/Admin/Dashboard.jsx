import React, { useState, useEffect } from "react";
import { FaUsers, FaBook, FaDollarSign, FaGraduationCap } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // ✅ Live Stats (auto-updating)
  const [stats, setStats] = useState([
    { title: "Total Students", value: 1245, icon: <FaUsers className="text-4xl mx-auto text-blue-500" />, color: "blue" },
    { title: "Total Courses", value: 58, icon: <FaBook className="text-4xl mx-auto text-green-500" />, color: "green" },
    { title: "Revenue", value: 12300, icon: <FaDollarSign className="text-4xl mx-auto text-purple-500" />, color: "purple" },
    { title: "Graduated Students", value: 320, icon: <FaGraduationCap className="text-4xl mx-auto text-yellow-500" />, color: "yellow" },
  ]);

  // ✅ Realtime Course Progress Data
  const [courses, setCourses] = useState([
    { name: "React Basics", progress: 75 },
    { name: "JavaScript Advanced", progress: 40 },
    { name: "HTML & CSS", progress: 90 },
    { name: "Node.js Fundamentals", progress: 60 },
  ]);

  const topStudents = [
    { name: "John Doe", progress: 95 },
    { name: "Alice Smith", progress: 90 },
    { name: "Mark Wilson", progress: 85 },
  ];

  // ✅ Update stats & courses every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly increase/decrease stats
      setStats((prev) =>
        prev.map((stat) => {
          let change = Math.floor(Math.random() * 20 - 10); // -10 to +10
          let newValue = stat.value + change;
          if (newValue < 0) newValue = 0; // prevent negative
          return { ...stat, value: newValue };
        })
      );

      // Randomly change course progress
      setCourses((prev) =>
        prev.map((course) => {
          let change = Math.floor(Math.random() * 10 - 5); // -5 to +5
          let newProgress = Math.max(0, Math.min(100, course.progress + change));
          return { ...course, progress: newProgress };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🎓 Educational Dashboard
      </h2>

      {/* Stats Section (Live Updating) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            {stat.icon}
            <h3 className="mt-4 text-gray-500">{stat.title}</h3>
            <p className={`mt-2 text-3xl font-bold text-${stat.color}-500`}>
              {/* Format Revenue with $ */}
              {stat.title === "Revenue" ? `$${stat.value}` : stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Courses Progress + Top Students */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Courses Progress (Realtime Bar Graph) */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            📊 Courses Progress (Realtime)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={courses}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="progress" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Students */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            🏆 Top Students
          </h3>
          <ul className="space-y-4">
            {topStudents.map((student, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex justify-between text-gray-600 mb-1">
                  {student.name} <span>{student.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${student.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
