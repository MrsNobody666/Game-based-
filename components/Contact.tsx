// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("🎉 Message sent! Thanks for reaching out!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-400 via-blue-500 to-orange-400">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          📬 Send Me a Message
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                👤 Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                📧 Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              💬 Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🚀 Send Message
          </button>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <p className="text-white mb-6">🌟 Connect with me on social media:</p>
          <div className="flex justify-center gap-6">
            {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:scale-110 transition-transform shadow-lg"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
