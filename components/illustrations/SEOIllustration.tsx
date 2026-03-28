'use client';
import { motion } from 'motion/react';

export function SEOIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2ECC71]/10 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Target */}
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.8, type: "spring" }} cx="200" cy="200" r="80" stroke="#1A362D" strokeWidth="4" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.2, duration: 0.8, type: "spring" }} cx="200" cy="200" r="50" stroke="#1A362D" strokeWidth="4" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.4, duration: 0.8, type: "spring" }} cx="200" cy="200" r="20" fill="#E67E22" />
        {/* Arrow */}
        <motion.path
          initial={{ x: 100, y: -100, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
          d="M280 120 L210 190 M280 120 L250 120 M280 120 L280 150"
          stroke="#2ECC71" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Magnifying Glass */}
        <motion.g
          initial={{ x: -50, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
        >
          <circle cx="120" cy="280" r="30" stroke="#1A362D" strokeWidth="4" fill="#F5F5F0" />
          <line x1="141" y1="301" x2="170" y2="330" stroke="#1A362D" strokeWidth="6" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
