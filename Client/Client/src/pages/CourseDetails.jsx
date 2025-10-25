import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// 🧠 Updated courses data — all with valid YouTube videos
const coursesData = [
  {
    id: 1,
    title: "React for Beginners",
    thumbnail: "https://placehold.co/600x300?text=React",
    description: "Learn React from scratch and build amazing web apps!",
    price: 499,
    modules: [
      {
        title: "Introduction to React",
        videos: [
          "https://www.youtube.com/embed/dGcsHMXbSOA",
          "https://www.youtube.com/embed/Ke90Tje7VS0",
        ],
      },
      {
        title: "React Components & Props",
        videos: [
          "https://www.youtube.com/embed/MhkGQAoc7bc",
          "https://www.youtube.com/embed/4UZrsTqkcW4",
        ],
      },
      {
        title: "React State & Hooks",
        videos: [
          "https://www.youtube.com/embed/O6P86uwfdR0",
          "https://www.youtube.com/embed/f687hBjwFcM",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Advanced Node.js",
    thumbnail: "https://placehold.co/600x300?text=Node.js",
    description: "Master Node.js backend development with hands-on projects.",
    price: 699,
    modules: [
      {
        title: "Node.js Basics",
        videos: [
          "https://www.youtube.com/embed/TlB_eWDSMt4",
          "https://www.youtube.com/embed/fBNz5xF-Kx4",
        ],
      },
      {
        title: "Express.js Deep Dive",
        videos: [
          "https://www.youtube.com/embed/L72fhGm1tfE",
          "https://www.youtube.com/embed/pKd0Rpw7O48",
        ],
      },
      {
        title: "MongoDB Integration",
        videos: [
          "https://www.youtube.com/embed/oSIv-E60NiU",
          "https://www.youtube.com/embed/Of1jtVMB8uE",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Python Programming Essentials",
    thumbnail: "https://placehold.co/600x300?text=Python",
    description: "Learn Python fundamentals and coding best practices.",
    price: 599,
    modules: [
      {
        title: "Getting Started with Python",
        videos: [
          "https://www.youtube.com/embed/_uQrJ0TkZlc",
          "https://www.youtube.com/embed/kqtD5dpn9C8",
        ],
      },
      {
        title: "Data Types and Loops",
        videos: [
          "https://www.youtube.com/embed/rfscVS0vtbw",
          "https://www.youtube.com/embed/XKHEtdqhLK8",
        ],
      },
      {
        title: "Functions and OOP",
        videos: [
          "https://www.youtube.com/embed/JeznW_7DlB0",
          "https://www.youtube.com/embed/Ej_02ICOIgs",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Data Structures & Algorithms",
    thumbnail: "https://placehold.co/600x300?text=DSA",
    description: "Crack coding interviews by mastering DSA concepts.",
    price: 799,
    modules: [
      {
        title: "Arrays and Strings",
        videos: [
          "https://www.youtube.com/embed/8hly31xKli0",
          "https://www.youtube.com/embed/RBSGKlAvoiM",
        ],
      },
      {
        title: "Linked Lists and Stacks",
        videos: [
          "https://www.youtube.com/embed/Hj_rA0dhr2I",
          "https://www.youtube.com/embed/6HotZ7YS0uI",
        ],
      },
      {
        title: "Trees and Graphs",
        videos: [
          "https://www.youtube.com/embed/qH-m9XlTnhE",
          "https://www.youtube.com/embed/mQeF6bN8hMk",
        ],
      },
    ],
  },
];

function CourseDetails() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id));

  const [enrolled, setEnrolled] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [progress, setProgress] = useState({ module: 0, video: 0 });

  useEffect(() => {
    const isEnrolled = localStorage.getItem(`enrolled-${id}`) === "true";
    const savedProgress =
      JSON.parse(localStorage.getItem(`progress-${id}`)) || {
        module: 0,
        video: 0,
      };
    setEnrolled(isEnrolled);
    setProgress(savedProgress);
  }, [id]);

  const handleEnrollClick = () => setShowPaymentModal(true);

  const handlePaymentConfirm = () => {
    setShowPaymentModal(false);
    setEnrolled(true);
    localStorage.setItem(`enrolled-${id}`, "true");
    localStorage.setItem(
      `progress-${id}`,
      JSON.stringify({ module: 0, video: 0 })
    );
    alert("✅ Payment Successful! You are now enrolled.");
  };

  const handleVideoComplete = (moduleIndex, videoIndex) => {
    const totalModules = course.modules.length;
    const totalVideos = course.modules[moduleIndex].videos.length;

    let newProgress = { ...progress };

    if (videoIndex + 1 < totalVideos) {
      newProgress = { module: moduleIndex, video: videoIndex + 1 };
    } else if (moduleIndex + 1 < totalModules) {
      newProgress = { module: moduleIndex + 1, video: 0 };
    } else {
      alert("🎉 Congratulations! You completed the entire course!");
      return;
    }

    setProgress(newProgress);
    localStorage.setItem(`progress-${id}`, JSON.stringify(newProgress));

    setTimeout(() => {
      document
        .querySelector(`#video-${newProgress.module}-${newProgress.video}`)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  if (!course)
    return <p className="text-white p-8 text-center">Course not found.</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-3">{course.title}</h2>
          <p className="text-gray-300 mb-6 text-lg">{course.description}</p>

          {!enrolled ? (
            <button
              onClick={handleEnrollClick}
              className="w-full py-3 rounded-lg font-semibold text-white text-lg transition bg-blue-600 hover:bg-blue-700"
            >
              Enroll ₹{course.price}
            </button>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-4 mt-6">Course Modules</h3>

              {course.modules.map((mod, mIndex) => (
                <div
                  key={mIndex}
                  className="mb-8 bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-semibold mb-3">
                    {mod.title}{" "}
                    {mIndex > progress.module && (
                      <span className="text-yellow-400 ml-2 text-sm">
                        (Locked 🔒)
                      </span>
                    )}
                  </h4>

                  {mIndex <= progress.module &&
                    mod.videos.map((url, vIndex) => (
                      <div key={vIndex} className="mb-5">
                        <p className="text-gray-200 mb-2">
                          🎥 Topic {vIndex + 1}{" "}
                          {mIndex === progress.module &&
                            vIndex > progress.video && (
                              <span className="text-yellow-400 text-sm">
                                (Locked 🔒)
                              </span>
                            )}
                        </p>

                        {mIndex < progress.module ||
                        (mIndex === progress.module &&
                          vIndex <= progress.video) ? (
                          <div className="bg-black rounded-lg overflow-hidden mb-2">
                            <iframe
                              id={`video-${mIndex}-${vIndex}`}
                              width="100%"
                              height="250"
                              src={url}
                              title={`Module ${mIndex + 1} Video ${
                                vIndex + 1
                              }`}
                              allowFullScreen
                              className="w-full rounded-lg"
                            ></iframe>
                          </div>
                        ) : (
                          <p className="text-gray-400">
                            🔒 Locked - Complete previous video.
                          </p>
                        )}

                        {mIndex === progress.module &&
                          vIndex === progress.video && (
                            <button
                              onClick={() =>
                                handleVideoComplete(mIndex, vIndex)
                              }
                              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full font-semibold mt-2"
                            >
                              Next ▶️
                            </button>
                          )}
                      </div>
                    ))}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl w-96 shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-5 text-center">
              Payment - ₹{course.price}
            </h3>

            <div className="flex justify-between mb-5">
              {["card", "upi", "netbanking"].map((method) => (
                <button
                  key={method}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    paymentMethod === method
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setPaymentMethod(method)}
                >
                  {method.toUpperCase()}
                </button>
              ))}
            </div>

            {paymentMethod === "card" && (
              <div className="flex flex-col gap-3 mb-5">
                <input
                  className="p-3 rounded-lg text-white bg-gray-800"
                  placeholder="Card Number"
                />
                <input
                  className="p-3 rounded-lg text-white bg-gray-800"
                  placeholder="Expiry MM/YY"
                />
                <input
                  className="p-3 rounded-lg text-white bg-gray-800"
                  placeholder="CVV"
                />
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="mb-5 text-center">
                <p className="mb-2 text-gray-200">Scan QR to pay via UPI</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=test@upi"
                  alt="UPI QR"
                  className="mx-auto mb-3 rounded-lg border border-gray-700"
                />
                <input
                  className="p-3 rounded-lg text-white bg-gray-800 w-full"
                  placeholder="UPI ID (optional)"
                />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <select className="p-3 rounded-lg text-black w-full mb-5">
                <option>Choose Bank</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>Axis</option>
                <option>SBI</option>
              </select>
            )}

            <div className="flex justify-between">
              <button
                onClick={handlePaymentConfirm}
                className="w-1/2 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-white mr-2"
              >
                Pay Now
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-1/2 bg-gray-600 hover:bg-gray-700 py-3 rounded-lg font-semibold text-white ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {enrolled && (
        <button
          onClick={() => {
            localStorage.removeItem(`enrolled-${id}`);
            localStorage.removeItem(`progress-${id}`);
            setEnrolled(false);
            setProgress({ module: 0, video: 0 });
          }}
          className="mt-6 text-red-400 underline text-sm"
        >
          Reset Enrollment (for testing)
        </button>
      )}
    </div>
  );
}

export default CourseDetails;
