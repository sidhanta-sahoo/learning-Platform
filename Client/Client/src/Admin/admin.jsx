import React from "react";
import { Outlet, Link } from "react-router-dom";

function Admin() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/admin/courses" className="block hover:text-gray-300">
            Manage Courses
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;
