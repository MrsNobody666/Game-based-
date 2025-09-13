// components/Achievements.tsx
"use client";

import { motion } from "framer-motion";

const achievements = [
  { icon: "🏆", title: "Game Jam Winner", description: "1st place in Global Game Jam 2023" },
  { icon: "🎨", title: "Pixel Artist", description: "Created 100+ pixel art assets" },
  { icon: "🌟", title: "Open Source Contributor", description: "Contributed to 15+ projects" },
  { icon: "📚", title: "Tech Blogger", description: "Written 50+ technical articles" },
];

const interests = [
  { icon: "🎮", title: "Gaming" },
  { icon: "🎸", title: "Music" },
  { icon: "📸", title: "Photography" },
  { icon: "🚴", title: "Cycling" },
  { icon: "📚", title: "Reading" },
  { icon: "✈️", title: "Travel" },
];

export default function Achievements() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          🎖️ Achievements & Interests
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">🏅 Trophy Room</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4"
                >
                  <span className="text-4xl">{achievement.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">🎯 Passions</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <span className="text-4xl mb-2 block">{interest.icon}</span>
                  <h4 className="text-lg font-bold text-gray-800">
                    {interest.title}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
