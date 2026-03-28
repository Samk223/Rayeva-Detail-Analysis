'use client';
import { motion } from 'motion/react';

export function TechAssessmentIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#3498DB]/10 rounded-full blur-3xl"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Server Rack 1 */}
        <motion.rect
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          x="100" y="120" width="200" height="60" rx="8"
          stroke="#1A362D" strokeWidth="4" fill="#F5F5F0"
        />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} cx="130" cy="150" r="6" fill="#2ECC71" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} cx="150" cy="150" r="6" fill="#2ECC71" />
        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} x1="180" y1="150" x2="270" y2="150" stroke="#1A362D" strokeWidth="4" strokeLinecap="round" />

        {/* Server Rack 2 */}
        <motion.rect
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          x="100" y="200" width="200" height="60" rx="8"
          stroke="#1A362D" strokeWidth="4" fill="#F5F5F0"
        />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} cx="130" cy="230" r="6" fill="#E74C3C" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} cx="150" cy="230" r="6" fill="#2ECC71" />
        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} x1="180" y1="230" x2="270" y2="230" stroke="#1A362D" strokeWidth="4" strokeLinecap="round" />

        {/* Server Rack 3 */}
        <motion.rect
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          x="100" y="280" width="200" height="60" rx="8"
          stroke="#1A362D" strokeWidth="4" fill="#F5F5F0"
        />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} cx="130" cy="310" r="6" fill="#2ECC71" />
        <motion.circle initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} cx="150" cy="310" r="6" fill="#2ECC71" />
        <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} x1="180" y1="310" x2="270" y2="310" stroke="#1A362D" strokeWidth="4" strokeLinecap="round" />

        {/* Connection Lines */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1 }}
          d="M200 180 V200 M200 260 V280"
          stroke="#3498DB" strokeWidth="4" strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}
