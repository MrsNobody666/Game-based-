// components/VisitorCounter.tsx
"use client";

import { motion } from "framer-motion";

export default function VisitorCounter({ count }: { count: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-lg z-50"
    >
      <p className="text-sm font-bold text-gray-800">
        👥 {count} explorers visited
      </p>
    </motion.div>
  );
}
