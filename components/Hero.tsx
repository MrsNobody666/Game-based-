// components/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-orange-400 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-300 bg-opacity-20 rounded-full blur-2xl animate-pulse-delayed" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          👋 Hey, I'm Your Name!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl text-white mb-8"
        >
          🎯 Game Developer | 🎨 Creative Coder | 🚀 Tech Explorer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:scale-110 transition-transform">
            🎮 Start Journey
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition-all">
            📖 My Story
          </button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-4xl">⬇️</span>
      </div>
    </section>
  );
}
