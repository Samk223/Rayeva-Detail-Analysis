'use client';

import { motion } from 'motion/react';

export function UXIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      {/* Abstract Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E0E7E1]/50 rounded-full"
      />

      {/* SVG Line Art */}
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wireframe Box */}
        <motion.rect
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          x="100" y="100" width="200" height="200" rx="16"
          stroke="#1A362D"
          strokeWidth="4"
        />
        
        {/* Header line */}
        <motion.line
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.8 }}
          x1="100" y1="140" x2="300" y2="140"
          stroke="#1A362D"
          strokeWidth="4"
        />
        
        {/* Buttons / Elements */}
        <motion.rect
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          x="120" y="160" width="60" height="20" rx="10"
          fill="#2ECC71"
        />
        <motion.rect
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
          x="190" y="160" width="90" height="20" rx="10"
          fill="#E67E22"
        />
        
        {/* Image placeholder */}
        <motion.rect
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, duration: 0.8 }}
          x="120" y="200" width="160" height="80" rx="8"
          fill="#1A362D"
          fillOpacity="0.1"
          stroke="#1A362D"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        
        {/* Magnifying Glass */}
        <motion.g
          initial={{ x: 50, y: 50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 2, duration: 1, type: "spring" }}
        >
          <circle cx="280" cy="280" r="24" stroke="#1A362D" strokeWidth="4" fill="#F5F5F0" />
          <line x1="296" y1="296" x2="320" y2="320" stroke="#1A362D" strokeWidth="6" strokeLinecap="round" />
          <circle cx="280" cy="280" r="10" fill="#E67E22" />
        </motion.g>
      </svg>
    </div>
  );
}
