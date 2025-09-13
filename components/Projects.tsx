// components/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "🎮 Pixel Quest RPG",
    description: "A retro-style RPG game built with Unity featuring pixel art graphics and engaging storyline.",
    image: "/api/placeholder/400/250",
    tech: ["Unity", "C#", "Pixel Art"],
    link: "#",
    github: "#",
  },
  {
    title: "🌟 Cosmic Portfolio",
    description: "An interactive portfolio website with space theme and smooth animations.",
    image: "/api/placeholder/400/250",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "🤖 AI Chat Companion",
    description: "An intelligent chatbot that helps users with coding questions and productivity tips.",
    image: "/api/placeholder/400/250",
    tech: ["Python", "OpenAI", "React"],
    link: "#",
    github: "#",
  },
  {
    title: "🎨 Pixel Art Generator",
    description: "Transform regular images into pixel art with customizable settings and filters.",
    image: "/api/placeholder/400/250",
    tech: ["JavaScript", "Canvas API", "React"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          🏆 Featured Quests
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-200 to-orange-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">
                    {project.title.split(" ")[0]}
                  </span>
                </div>
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-white text-blue-600 rounded-lg font-bold hover:scale-110 transition-transform">
                        Live Demo
                      </button>
                      <button className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all">
                        GitHub
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
