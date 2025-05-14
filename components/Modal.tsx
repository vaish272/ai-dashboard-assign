"use client";

import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1e293b] text-slate-100 rounded-2xl p-8 w-11/12 max-w-md relative border border-sky-400/30 shadow-2xl shadow-pink-400/10"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-slate-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-sky-300">
              Create New Avatar
            </h2>
            <p className="text-slate-400">This is a futuristic modal UI example.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


