import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://t4.ftcdn.net/jpg/00/35/30/85/360_F_35308534_WGRVXlymcjQqoRXzeWEfVCOfBHBq9YdW.jpg",
  "https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A=",
  "https://media.gettyimages.com/id/1286909296/photo/young-man-studying-stock-photo.jpg?s=612x612&w=gi&k=20&c=aAMkT90wAPTajMfih-xP5qcL1Inj2WdOX2f8Gb-tYqw="
];

const phrases = [
  "Master New Skills Every Day",
  "Transform Your Career",
  "Learn from Industry Experts"
];

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  // Typing animation state
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    let timer;
    if (!deleting && charIndex < phrases[phraseIndex].length) {
      timer = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (deleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else if (!deleting && charIndex === phrases[phraseIndex].length) {
      timer = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    setText(phrases[phraseIndex].slice(0, charIndex));

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  // Cycle images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => setSearchQuery(e.target.value);
  const handleSearch = () => navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
  const handleKeyDown = (e) => { if (e.key === "Enter") handleSearch(); };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-6 md:px-12 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12">
        {/* Left content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-xl">
            Learn anything, anytime, anywhere — curated by top instructors worldwide.
          </p>

          {/* Search bar */}
          <div className="mt-6 flex w-full max-w-xl gap-4">
            <div className="flex items-center w-full bg-gray-800 rounded-full px-4 py-2 shadow-md">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="bg-transparent flex-1 text-gray-200 placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="ml-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex-[1.2] flex justify-center relative">
          <img
            key={currentImage}
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full max-w-lg h-auto object-contain drop-shadow-lg transition-opacity duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
