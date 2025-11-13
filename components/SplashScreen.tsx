'use client'
import React, { useState, useEffect } from "react";
import Home from "@/app/hero/page";

{/* Page that shows ShowSplash Logo, then automatically redirects to hero page.tsx */}

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 2 sekunde
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="w-screen h-screen flex items-center justify-center bg-white">
          <img src="/SonoCodeIT-logo.png" alt="Sonocode IT Logo" className="w-48 h-auto animate-fadeIn" />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}
