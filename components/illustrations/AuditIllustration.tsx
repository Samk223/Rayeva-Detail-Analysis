'use client';
import { motion } from 'motion/react';

export function AuditIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#1A362D]/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Document */}
        <motion.rect
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          x="120" y="80" width="160" height="220" rx="10"
          stroke="#1A362D" strokeWidth="4" fill="white"
        />
        {/* Lines on Document */}
        {[120, 150, 180, 210, 240].map((y, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            x1="150" y1={y} x2="250" y2={y}
            stroke="#1A362D" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.2"
          />
        ))}
        {/* Warning Icon */}
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, type: "spring" }}
          d="M200 140 L180 180 L220 180 Z"
          stroke="#E67E22" strokeWidth="4" strokeLinejoin="round" fill="#E67E22"
        />
        <motion.circle
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.4 }}
          cx="200" cy="200" r="4" fill="#E67E22"
        />
        {/* Magnifying Glass */}
        <motion.g
          initial={{ x: 50, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
        >
          <circle cx="280" cy="280" r="40" stroke="#1A362D" strokeWidth="4" fill="white" />
          <line x1="308" y1="308" x2="340" y2="340" stroke="#1A362D" strokeWidth="6" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
