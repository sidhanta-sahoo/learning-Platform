import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import { AuthProvider } from "./context/AuthContext";

// Pages
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Practice from "./pages/Practice";
import Apt from "./pages/Apt";
import Companies from "./pages/Companies";
import Resume from "./pages/Resume";
import Forgotpass from "./pages/Forgotpass";

// Admin / Instructor Pages
import Admin from "./Admin/Admin";
import Dashboard from "./Admin/Dashboard";
import ManageCourses from "./Admin/Courses";
import CreateCourse from "./Admin/CreateCourse";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="practice" element={<Practice />} />
          <Route path="apt" element={<Apt />} />
          <Route path="companies" element={<Companies />} />
          <Route path="resume" element={<Resume />} />
          <Route path="forgot-password" element={<Forgotpass />} />

          {/* Admin / Instructor Routes (now public) */}
          <Route path="admin" element={<Admin />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="courses" element={<ManageCourses />} />
            <Route path="create-course" element={<CreateCourse />} />
          </Route>

          {/* Profile is also public now */}
          <Route path="profile" element={<Profile />} />

          {/* Catch-all 404 */}
          <Route
            path="*"
            element={<p className="text-center mt-10">Page Not Found</p>}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
