'use client';
import { motion } from 'motion/react';

export function LoginSignupIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E67E22]/10 rounded-full blur-3xl"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M200 80 L120 110 L120 200 C120 260, 180 310, 200 330 C220 310, 280 260, 280 200 L280 110 Z"
          stroke="#1A362D" strokeWidth="6" strokeLinejoin="round" fill="#F5F5F0"
        />
        {/* Lock Body */}
        <motion.rect
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" }}
          x="160" y="190" width="80" height="60" rx="10"
          fill="#1A362D"
        />
        {/* Lock Shackle */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          d="M175 190 V165 C175 150, 225 150, 225 165 V190"
          stroke="#1A362D" strokeWidth="8" strokeLinecap="round"
        />
        {/* Keyhole */}
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }} cx="200" cy="215" r="8" fill="#E67E22" />
        <motion.path initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }} d="M196 220 L204 220 L202 235 L198 235 Z" fill="#E67E22" />
      </svg>
    </div>
  );
}
