import React, { useState } from "react";

const topics = {
  Aptitude: [
    { title: "Number System", desc: "Basics of numbers, divisibility, remainders.", playlistId: "PLG4bwc5fquzgmP5BLHrRDwBueer0udDjc" },
    { title: "HCF & LCM", desc: "Methods to calculate HCF and LCM with tricks.", playlistId: "PLEjEjPrXGgywurb5L1X9fN0RZPoTnqMvg" },
    { title: "Percentage", desc: "Concepts of percentages and shortcut methods.", playlistId: "PLctncmbUD-mqThISnQkZlHK3SirN8WFMm" },
    { title: "Profit and Loss", desc: "Discounts, mark price, selling price tricks.", playlistId: "PLmiVaQGch-eu_xkpyxHuoL2hj-CR-zuY_" },
    { title: "Simple & Compound Interest", desc: "Learn SI and CI with formulas and tricks.", playlistId: "PL5FO_h9pPSgZ77h-POmOzXUnsawAqabXE" },
    { title: "Ratio & Proportion", desc: "Ratios, proportions and partnership questions.", playlistId: "PLOoogDtEDyvsF0UHkJSfc5MGqCrs-28K_" },
    { title: "Average", desc: "Finding average quickly with shortcuts.", playlistId: "PLOoogDtEDyvuxpbUckKYKQhUrvvePECrY" },
    { title: "Time & Work", desc: "Workers, efficiency and shortcut tricks.", playlistId: "PLv7MHs1SUX5IEOvgPlJo9ZBUnpqz6sqwu" },
    { title: "Pipes & Cisterns", desc: "Inlets, outlets, filling & emptying tanks.", playlistId: "PL-REPLACE-PIPES" }, // Replace with actual playlist ID
    { title: "Time, Speed & Distance", desc: "Speed, distance, trains, boats & streams.", playlistId: "PL-REPLACE-TSD" }, // Replace with actual playlist ID
    { title: "Permutation & Combination", desc: "Arrangements and selection problems.", playlistId: "PL-REPLACE-PC" }, // Replace with actual playlist ID
    { title: "Probability", desc: "Basic probability concepts and tricks.", playlistId: "PL-REPLACE-PROBA" }, // Replace with actual playlist ID
    { title: "Data Interpretation", desc: "Tables, charts and caselets with speed methods.", playlistId: "PL-REPLACE-DI" }, // Replace with actual playlist ID
  ],
  Reasoning: [
    { title: "Series (Number/Alphabet)", desc: "Find missing terms and patterns in series.", playlistId: "PLnrwt2rW6yRRoWRyRtOrSz0TqF6VK8hCB" },
    { title: "Coding-Decoding", desc: "Decode letter/number patterns and logic.", playlistId: "PLFtUqzjzjXdYcZQHbp2goe_T-Zllk-iQ_" },
    { title: "Blood Relations", desc: "Family tree, relation based problems.", playlistId: "PLeDRIzxs-S940WPoow9vREut9N1bqcs04" },
    { title: "Direction Sense", desc: "Problems on distance and directions.", playlistId: "PLggZQjVsYHznA2frGkUrAPuewePjZe9U8" },
    { title: "Seating Arrangement", desc: "Linear, circular and complex seating puzzles.", playlistId: "PLY3DFj1jjj0Xz9IMeXfF2GI6CLxbL35Ix" },
    { title: "Syllogism", desc: "Logical conclusions based on statements.", playlistId: "PLrjkTql3jnm9N62vsNLvzhc_pfJtrnCWf" },
    { title: "Puzzles", desc: "Floor, scheduling, and distribution puzzles.", playlistId: "PL4t_secZTPn6N2kCb_k4rGiUAPAuMTIBT" },
    { title: "Analogy & Classification", desc: "Find odd one out or matching pairs.", playlistId: "PLVGxMrKuLy6h6Z5D8f2xOp6MNJZNspTuz" },
    { title: "Statement & Assumptions", desc: "Logical reasoning based on assumptions.", playlistId: "PLD7BOsbB6rNIx3FwiGPC94PxHNgJOQOZD" },
    { title: "Cause & Effect", desc: "Identify cause-effect relationships.", playlistId: "PLApF_J7NFBhhsGCp17nle7zfm8lLGpJKa" },
    { title: "Decision Making", desc: "Choose correct course of action.", playlistId: "PLD7BOsbB6rNLbwg_7JaryFb_E30wm-mvb" },
    { title: "Non-Verbal Reasoning", desc: "Figures, patterns, mirror & water images.", playlistId: "PLVrlLpBrUP34xJwqXPWzHejwOc3o9efPY" },
  ],
};

function AptitudeReasoningHub() {
  const [tab, setTab] = useState("Aptitude");
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gray-900 flex justify-center items-start">
      <div className="w-full max-w-7xl bg-gray-800 rounded-3xl shadow-2xl p-8">
        {/* Heading */}
        <h1 className="text-center text-4xl font-extrabold text-gray-100 mb-8">
          Aptitude & Reasoning Hub
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          {Object.keys(topics).map((cat) => (
            <button
              key={cat}
              onClick={() => { setTab(cat); setSelected(null); }}
              className={`px-6 py-2 rounded-full font-bold transition duration-300
                ${tab === cat ? "bg-gray-700 text-white shadow-lg" : "bg-gray-600 text-gray-300 hover:bg-gray-500"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Topics list */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topics[tab].map((t) => (
              <div
                key={t.title}
                onClick={() => setSelected(t)}
                className={`p-4 rounded-2xl cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl
                  ${selected?.title === t.title
                    ? "bg-gray-700 text-white shadow-2xl"
                    : "bg-gray-600 text-gray-100"
                  }`}
              >
                <h3 className="text-lg font-bold mb-1">{t.title}</h3>
                <p className="text-sm text-gray-300">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Video player */}
          <div className="flex-1 flex justify-center items-start">
            {selected ? (
              <div className="w-full rounded-2xl overflow-hidden shadow-lg border-2 border-gray-700">
                <h2 className="bg-gray-700 text-white text-xl font-bold p-4">{selected.title}</h2>
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/videoseries?list=${selected.playlistId}`}
                  title={selected.title}
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p className="text-gray-400 text-center mt-4">
                👉 Select a topic to watch its playlist
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AptitudeReasoningHub;
