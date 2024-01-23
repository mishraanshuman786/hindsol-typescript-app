import React from "react";

function Pulsating() {
  return (
    // Pulsating div
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="animate-pulse relative">
        <div className="rounded-full h-20 w-20 bg-blue-500 opacity-75 flex items-center justify-center">
          <p className="text-white font-extrabold">Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default Pulsating;
