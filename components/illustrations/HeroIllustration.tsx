'use client';

import { motion } from 'motion/react';

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Abstract Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E67E22]/10 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#2ECC71]/10 rounded-full"
      />

      {/* SVG Line Art */}
      <svg viewBox="0 0 400 400" className="w-full max-w-md z-10 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M150 250 C 100 200, 100 100, 200 100 C 300 100, 300 200, 250 250"
          stroke="#1A362D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          cx="200" cy="150" r="30" fill="#E67E22"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1.5 }}
          d="M120 280 L 280 280"
          stroke="#1A362D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <motion.rect
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, duration: 0.8 }}
          x="160" y="200" width="20" height="80" fill="#2ECC71"
        />
        <motion.rect
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.7, duration: 0.8 }}
          x="190" y="170" width="20" height="110" fill="#1A362D"
        />
        <motion.rect
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.9, duration: 0.8 }}
          x="220" y="220" width="20" height="60" fill="#E67E22"
        />
        
        {/* Decorative elements */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 2, duration: 1 }}
          d="M320 120 L 340 100 M 340 120 L 320 100"
          stroke="#1A362D"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.circle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 2.2, duration: 1 }}
          cx="80" cy="180" r="5" fill="#2ECC71"
        />
      </svg>
    </div>
  );
}
