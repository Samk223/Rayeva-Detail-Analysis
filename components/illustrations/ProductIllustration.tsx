'use client';
import { motion } from 'motion/react';

export function ProductIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E67E22]/10 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shopping Bag */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M120 160 L280 160 L260 320 L140 320 Z"
          stroke="#1A362D" strokeWidth="4" strokeLinejoin="round"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          d="M160 160 C160 100, 240 100, 240 160"
          stroke="#1A362D" strokeWidth="4" strokeLinecap="round"
        />
        {/* Leaf / Eco badge */}
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, type: "spring" }}
          cx="200" cy="240" r="30" fill="#2ECC71"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 0.5 }}
          d="M190 250 C190 230, 210 230, 210 230 C210 250, 190 250, 190 250 Z"
          stroke="#F5F5F0" strokeWidth="2" fill="#F5F5F0"
        />
      </svg>
    </div>
  );
}
