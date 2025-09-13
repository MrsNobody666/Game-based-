// components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          🌍 About My Digital Realm
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-700">
              🎮 Welcome to my pixelated paradise! I'm a passionate developer who
              believes coding is the ultimate adventure game.
            </p>
            <p className="text-lg text-gray-700">
              🚀 With 3+ years in the tech wilderness, I've battled bugs,
              conquered complex algorithms, and built digital experiences that
              make people smile.
            </p>
            <p className="text-lg text-gray-700">
              🌟 When I'm not crafting code, you'll find me exploring new
              technologies, playing indie games, or creating pixel art that
              brings nostalgia to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-400 to-orange-400 p-1 rounded-3xl">
              <div className="bg-white p-8 rounded-3xl">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-gradient-to-br from-blue-200 to-orange-200 rounded-lg"
                    />
                  ))}
                </div>
                <p className="text-center mt-4 text-gray-600">
                  Pixel Art Avatar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
