"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen bg-black flex items-center justify-center overflow-hidden">

      {/* Video de fondo fullscreen */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/preloader.mp4"
      />

      {/* Overlay dorado con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-yellow-600/20 to-amber-700/30 mix-blend-overlay" />
      
      {/* Overlay adicional para dar calidez */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-amber-900/20" />

 
    </div>
  );
}