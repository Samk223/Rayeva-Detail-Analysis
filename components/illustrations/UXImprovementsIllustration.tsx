'use client';
import { motion } from 'motion/react';

export function UXImprovementsIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2ECC71]/10 rounded-full blur-3xl"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wireframe Base */}
        <motion.rect
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          x="80" y="60" width="240" height="280" rx="12"
          stroke="#1A362D" strokeWidth="4" fill="#F5F5F0"
        />
        {/* Header */}
        <motion.rect
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          x="100" y="80" width="200" height="40" rx="6"
          fill="#E0E7E1"
        />
        {/* Content Blocks */}
        <motion.rect
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          x="100" y="140" width="200" height="80" rx="6"
          fill="#E67E22" fillOpacity="0.2" stroke="#E67E22" strokeWidth="2" strokeDasharray="4 4"
        />
        {/* Grid Items */}
        <motion.rect
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, type: "spring" }}
          x="100" y="240" width="90" height="80" rx="6"
          fill="#2ECC71" fillOpacity="0.2" stroke="#2ECC71" strokeWidth="2"
        />
        <motion.rect
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8, type: "spring" }}
          x="210" y="240" width="90" height="80" rx="6"
          fill="#3498DB" fillOpacity="0.2" stroke="#3498DB" strokeWidth="2"
        />
        {/* Cursor */}
        <motion.g
          initial={{ x: 150, y: 350, opacity: 0 }}
          whileInView={{ x: 250, y: 280, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
        >
          <path d="M0 0 L15 35 L20 20 L35 15 Z" fill="#1A362D" />
        </motion.g>
      </svg>
    </div>
  );
}
