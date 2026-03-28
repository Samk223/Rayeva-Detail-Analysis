'use client';
import { motion } from 'motion/react';

export function AIIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#3498DB]/10 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Robot Head */}
        <motion.rect
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          x="120" y="140" width="160" height="120" rx="20"
          stroke="#1A362D" strokeWidth="4"
        />
        {/* Eyes */}
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 1 }} cx="160" cy="180" r="12" fill="#3498DB" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 1.2 }} cx="240" cy="180" r="12" fill="#3498DB" />
        {/* Smile */}
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ delay: 1.5 }} d="M160 220 Q200 240 240 220" stroke="#1A362D" strokeWidth="4" strokeLinecap="round" />
        {/* Antenna */}
        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }} x1="200" y1="140" x2="200" y2="90" stroke="#1A362D" strokeWidth="4" strokeLinecap="round" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.8 }} cx="200" cy="80" r="10" fill="#E67E22" />
        {/* Nodes */}
        <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 2 }} cx="80" cy="100" r="6" fill="#2ECC71" />
        <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 2.2 }} cx="320" cy="120" r="6" fill="#E67E22" />
        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ delay: 2.4 }} x1="86" y1="106" x2="120" y2="140" stroke="#1A362D" strokeWidth="2" strokeDasharray="4 4" />
        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: false }} transition={{ delay: 2.5 }} x1="314" y1="126" x2="280" y2="160" stroke="#1A362D" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
