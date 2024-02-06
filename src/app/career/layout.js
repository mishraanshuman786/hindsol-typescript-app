"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFooter(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{backgroundImage:" linear-gradient(60deg, #abecd6 0%, #fbed96 100%)"}}>
      {children}
      {/* Render the footer only when showFooter is true */}
      {showFooter && <Footer />}
    </div>
  );
}
