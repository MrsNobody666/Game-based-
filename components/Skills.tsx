// components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "React", level: 85, icon: "⚛️" },
  { name: "TypeScript", level: 80, icon: "🔷" },
  { name: "Node.js", level: 75, icon: "🟢" },
  { name: "Python", level: 70, icon: "🐍" },
  { name: "Unity", level: 65, icon: "🎮" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          ⚔️ My Skill Arsenal
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-2xl font-bold text-blue-600">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-400 to-orange-400 rounded-full relative"
                >
                  {hoveredSkill === skill.name && (
                    <div className="absolute inset-0 bg-white bg-opacity-30 animate-pulse" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
