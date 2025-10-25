import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const [user, setUser] = useState(null); // global user state
  const isAdmin = user?.role === "admin";
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      {/* Navbar */}
      <Navbar user={user} setUser={setUser} />

      {/* Page Content */}
      <main className="flex-grow px-6 py-8 max-w-7xl mx-auto w-full pt-16">
        <Outlet context={{ user, setUser }} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800">
          {/* About */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3">About Us</h2>
            <p className="text-sm leading-relaxed">
              Learn new skills online with our LMS platform. Explore programming,
              design, data science, and more.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="block hover:text-white transition">Home</Link></li>
              <li><Link to="/courses" className="block hover:text-white transition">Courses</Link></li>

              {!user && (
                <>
                  <li><Link to="/login" className="block hover:text-white transition">Login</Link></li>
                  <li><Link to="/signup" className="block hover:text-white transition">Signup</Link></li>
                </>
              )}

              {user && !isAdmin && (
                <li><Link to="/profile" className="block hover:text-white transition">Profile</Link></li>
              )}

              {isAdmin && (
                <>
                  <li><Link to="/admin/dashboard" className="block hover:text-white transition">Dashboard</Link></li>
                  <li><Link to="/admin/courses" className="block hover:text-white transition">Manage Courses</Link></li>
                </>
              )}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p className="text-sm">📧 support@mylms.com</p>
            <p className="text-sm">📞 +91 98765 43210</p>
          </address>
        </div>

        <div className="text-center text-xs text-gray-500 border-t border-gray-800 py-4">
          © {currentYear} My LMS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;
