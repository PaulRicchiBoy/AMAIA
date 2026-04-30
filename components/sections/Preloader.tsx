"use client";

import { useEffect, useState } from 'react';

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden bg-[#1A0F08]">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        src="/preloader-new-rec.mp4"
      />

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}