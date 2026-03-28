'use client';
import { motion } from 'motion/react';

export function CRMIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#9B59B6]/10 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chat Bubble 1 */}
        <motion.path
          initial={{ scale: 0, opacity: 0, originX: 0, originY: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, type: "spring" }}
          d="M100 200 C100 150, 180 150, 180 200 C180 250, 100 250, 100 200 Z"
          stroke="#1A362D" strokeWidth="4" fill="#F5F5F0"
        />
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          d="M100 230 L70 260 L120 245"
          stroke="#1A362D" strokeWidth="4" strokeLinejoin="round" fill="#F5F5F0"
        />
        {/* Chat Bubble 2 */}
        <motion.path
          initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          d="M200 140 C200 90, 300 90, 300 140 C300 190, 200 190, 200 140 Z"
          stroke="#1A362D" strokeWidth="4" fill="#E67E22"
        />
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1 }}
          d="M300 170 L330 200 L280 185"
          stroke="#1A362D" strokeWidth="4" strokeLinejoin="round" fill="#E67E22"
        />
        {/* Dots */}
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.8 }} cx="125" cy="200" r="4" fill="#1A362D" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.9 }} cx="140" cy="200" r="4" fill="#1A362D" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 1.0 }} cx="155" cy="200" r="4" fill="#1A362D" />
      </svg>
    </div>
  );
}
