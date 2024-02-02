"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Pulsating from "@/components/Pulsating";

function Ideas() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Pulsating div for loading animation */}
      {loading && <Pulsating />}

      <div className={`container mx-auto ${loading ? "hidden" : ""}`}>
        Ideas
      </div>
    </div>
  );
}

export default Ideas;
