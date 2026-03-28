'use client';
import { motion } from 'motion/react';

export function AuthIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lock Body */}
        <motion.rect
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: "spring" }}
          x="140" y="180" width="120" height="100" rx="15"
          stroke="white" strokeWidth="4" fill="white" fillOpacity="0.1"
        />
        {/* Lock Shackle */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          d="M170 180 V140 C170 110, 230 110, 230 140 V180"
          stroke="white" strokeWidth="4" strokeLinecap="round"
        />
        {/* Keyhole */}
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, type: "spring" }}
          cx="200" cy="220" r="10" fill="#E67E22"
        />
        <motion.rect
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, type: "spring" }}
          x="195" y="225" width="10" height="15" fill="#E67E22"
        />
        {/* User Icon (Floating) */}
        <motion.g
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, duration: 1, type: "spring" }}
        >
          <circle cx="100" cy="150" r="30" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
          <path d="M70 210 C70 180, 130 180, 130 210" stroke="white" strokeWidth="2" strokeOpacity="0.3" />
        </motion.g>
        {/* Barriers (Lines) */}
        {[80, 100, 120].map((x, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
            x1={x} y1="250" x2={x + 20} y2="300"
            stroke="white" strokeWidth="2" strokeOpacity="0.2"
          />
        ))}
      </svg>
    </div>
  );
}
