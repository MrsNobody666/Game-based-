// components/MusicToggle.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // You can add actual audio here
    if (isPlaying) {
      console.log("🎵 Playing ambient music...");
    } else {
      console.log("🔇 Music stopped");
    }
  }, [isPlaying]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed top-4 right-4 bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
    >
      <span className="text-2xl">{isPlaying ? "🎵" : "🔇"}</span>
    </motion.button>
  );
}
