// components/Navigation.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", icon: "🏠" },
  { name: "About", icon: "🌍" },
  { name: "Skills", icon: "⚔️" },
  { name: "Projects", icon: "🏆" },
  { name: "Experience", icon: "🗺️" },
  { name: "Achievements", icon: "🎖️" },
  { name: "Contact", icon: "📬" },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md shadow-lg z-40"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center gap-4 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.name)}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors whitespace-nowrap"
            >
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
