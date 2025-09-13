// components/Experience.tsx
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "🎮 Game Developer",
    company: "Pixel Studios",
    period: "2022 - Present",
    description: "Developing indie games with Unity and creating immersive gaming experiences.",
    icon: "🎯",
  },
  {
    title: "⚛️ Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - 2022",
    description: "Built responsive web applications using React and modern JavaScript.",
    icon: "🚀",
  },
  {
    title: "🔧 Junior Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description: "Started my journey in web development and game design.",
    icon: "🌱",
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          🗺️ My Adventure Log
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-orange-400" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600 mb-2">{exp.period}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {exp.icon}
                </div>
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
