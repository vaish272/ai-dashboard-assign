"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 text-center"
    >
      <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 text-transparent bg-clip-text drop-shadow-lg">
        Welcome to Your AI Dashboard
      </h1>
      <p className="mt-4 text-slate-300 text-lg max-w-xl mx-auto">
        Explore your virtual avatars in a futuristic interface.
      </p>
    </motion.header>
  );
}


