// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import VisitorCounter from "@/components/VisitorCounter";
import MusicToggle from "@/components/MusicToggle";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("visitorCount");
    if (count) {
      const newCount = parseInt(count) + 1;
      localStorage.setItem("visitorCount", newCount.toString());
      setVisitorCount(newCount);
    } else {
      localStorage.setItem("visitorCount", "1");
      setVisitorCount(1);
    }
  }, []);

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-orange-400 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-bounce">
            🎮 Welcome, Adventurer! 🎮
          </h1>
          <p className="text-2xl text-white mb-8 animate-fade-in">
            Want to dive into my world of code and creativity?
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setShowWelcome(false)}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 Let's Go!
            </button>
            <button
              onClick={() => window.close()}
              className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              😅 Maybe Later
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-10 animate-float">
          <span className="text-6xl">🌟</span>
        </div>
        <div className="absolute top-10 right-10 animate-float-delayed">
          <span className="text-6xl">✨</span>
        </div>
      </div>
    );
  }

  return (
    <main className="relative">
      <CustomCursor />
      <Navigation />
      <MusicToggle />
      <VisitorCounter count={visitorCount} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
