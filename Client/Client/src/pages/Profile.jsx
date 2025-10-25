import React, { useState, useRef } from "react";

const Profile = () => {
  const defaultImage = "https://via.placeholder.com/150";

  const [user, setUser] = useState({
    email: "johndoe@example.com",
    role: "Student",
    bio: "I am passionate about learning MERN stack development and building cool projects!",
    image: defaultImage,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newBio, setNewBio] = useState(user.bio);

  const [showOptions, setShowOptions] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, image: imageUrl });
      setShowOptions(false); // hide options after updating
    }
  };

  const handleRemoveImage = () => {
    setUser({ ...user, image: defaultImage });
    setShowOptions(false); // hide options after removing
  };

  const handleSaveBio = () => {
    setUser({ ...user, bio: newBio });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 mt-10 ">
      {/* 🔹 Profile Header */}
      <div className="bg-white shadow-md p-6 flex flex-col md:flex-row items-center gap-6 w-full">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center relative">
          <img
            src={user.image}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          />

          {/* Show Update/Remove ONLY when image is clicked */}
          {showOptions && (
            <div className="mt-3 flex gap-4">
              <button
                onClick={() => fileInputRef.current.click()}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={handleRemoveImage}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">
            👋 Welcome, <span className="text-blue-600">{user.email}</span>
          </h2>
          <p className="text-gray-500 text-lg">Role: {user.role}</p>
        </div>
      </div>

      {/* 🔹 Other Work Section (Below Header) */}
      <div className="p-6">
        {/* Bio Section */}
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Bio</h3>

        {isEditing ? (
          <div>
            <textarea
              className="w-full border rounded-lg p-2 text-gray-700"
              rows="4"
              value={newBio}
              onChange={(e) => setNewBio(e.target.value)}
            />
            <div className="mt-3 flex gap-3">
              <button
                onClick={handleSaveBio}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-600">{user.bio}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Edit Bio
            </button>
          </div>
        )}

        {/* Example: Other dashboard/work below */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            <Courses/>
          </h3>
          <p className="text-gray-600">📘 Course list will appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
