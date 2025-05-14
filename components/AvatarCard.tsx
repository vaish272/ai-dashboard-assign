"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  image: string;
};

export default function AvatarCard({ name, image }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#243045] border border-sky-400/20 shadow-inner shadow-sky-400/10 p-6 rounded-2xl hover:shadow-pink-400/20 transition-all duration-300 text-center text-slate-100"
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full border-2 border-sky-400 mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <button className="px-4 py-2 bg-sky-400 text-slate-900 rounded-lg hover:bg-pink-400 hover:text-white transition">
        Edit
      </button>
    </motion.div>
  );
}


