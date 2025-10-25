import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Zap } from "lucide-react"; // ⚡ Zap icon (lighting type)
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ user, setUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showApplyMenu, setShowApplyMenu] = useState(false);

  const handleLogout = () => {
    setUser(null);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-900 z-50 w-full fixed top-0 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <GraduationCap className="text-gray-300 w-10 h-10" />
          <h1 className="text-gray-300 text-xl font-bold">Coder</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex text-gray-300">
          <ul className="flex items-center gap-6">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses">Courses</Link></li>
           <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/practice">Coding Platforms</Link></li>
            <li><Link to="/apt">Apt & Reasoning</Link></li>

            {/* ⚡ Apply Icon with dropdown */}
            <li className="relative">
              <button
                onClick={() => setShowApplyMenu(!showApplyMenu)}
                className="flex items-center gap-1 hover:text-yellow-400"
              >
                <Zap className="w-5 h-5" />
                <span>Apply</span>
              </button>

              {showApplyMenu && (
                <div className="absolute mt-2 w-40 bg-grey text-white-800 rounded-md shadow-lg p-2">
                  <Link
                    to="/resume"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setShowApplyMenu(false)}
                  >
                    📄 Resume
                  </Link>
                  <Link
                    to="/companies"
                    className="block px-4 py-2 hover:bg-gray-100 rounded"
                    onClick={() => setShowApplyMenu(false)}
                  >
                    🏢 Explore Company
                  </Link>
                </div>
              )}
            </li>

            {!user ? (
              <>
                <li>
                  <Link to="/login">
                    <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center uppercase">
                  {user.name ? user.name[0] : "U"}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-300 px-6 py-6 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link><br />
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link><br />
          {user?.role === "admin" && (
            <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link>
          )}<br />
          <Link to="/practice" onClick={() => setIsOpen(false)}>Coding Platforms</Link><br />
          <Link to="/apt" onClick={() => setIsOpen(false)}>Apt & Reasoning</Link><br />

          {/* ⚡ Apply submenu in mobile */}
          <div>
            <button
              onClick={() => setShowApplyMenu(!showApplyMenu)}
              className="flex items-center gap-2 text-yellow-400"
            >
              <Zap className="w-5 h-5" /> Apply
            </button>
            {showApplyMenu && (
              <div className="ml-6 mt-2 space-y-2">
                <Link
                  to="/resume"
                  onClick={() => { setShowApplyMenu(false); setIsOpen(false); }}
                  className="block"
                >
                  📄 Resume
                </Link>
                <Link
                  to="/companies"
                  onClick={() => { setShowApplyMenu(false); setIsOpen(false); }}
                  className="block"
                >
                  🏢 Explore Company
                </Link>
              </div>
            )}
          </div>

          {!user ? (
            <div className="space-y-2">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
                  Login
                </button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center uppercase">
                {user.name ? user.name[0] : "U"}
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
