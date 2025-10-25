import React from "react";
import { ExternalLink } from "lucide-react";

const platforms = [
  {
    id: 1,
    name: "LeetCode",
    description: "Practice coding problems, contests, and prepare for interviews.",
    logo: "https://leetcode.com/static/images/LeetCode_logo.png",
    link: "https://leetcode.com/",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 2,
    name: "GeeksforGeeks",
    description: "Learn algorithms, data structures, and solve practice questions.",
    logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    link: "https://www.geeksforgeeks.org/",
    color: "from-green-400 to-green-600",
  },
  {
    id: 3,
    name: "HackerRank",
    description: "Solve challenges, compete in contests, and build coding skills.",
    logo: "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg",
    link: "https://www.hackerrank.com/",
    color: "from-emerald-400 to-teal-600",
  },
  {
    id: 4,
    name: "CodeChef",
    description: "Competitive programming contests and practice problems.",
    logo: "https://cdn.codechef.com/sites/default/files/codechef_logo.png",
    link: "https://www.codechef.com/",
    color: "from-purple-500 to-indigo-600",
  },
];

const CodingPlatforms = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')", // you can replace this link
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
          Explore <span className="text-blue-400">Coding Platforms</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className={`bg-gradient-to-r ${platform.color} text-white p-6 rounded-2xl shadow-xl hover:scale-105 transform transition duration-300`}
            >
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-16 w-16 object-contain rounded-full bg-white p-2"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center mb-2">
                {platform.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-center mb-4">{platform.description}</p>

              {/* Button */}
              <div className="flex justify-center">
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
                >
                  Visit <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingPlatforms;
