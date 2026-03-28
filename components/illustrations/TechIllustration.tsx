'use client';
import { motion } from 'motion/react';

export function TechIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#1A362D]/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Code Brackets */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M100 150 L60 200 L100 250"
          stroke="#1A362D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          d="M300 150 L340 200 L300 250"
          stroke="#1A362D" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Gear (Center) */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="origin-center"
        >
          <circle cx="200" cy="200" r="40" stroke="#1A362D" strokeWidth="4" fill="white" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.rect
              key={i}
              x="185" y="145" width="30" height="20" rx="4"
              fill="#1A362D"
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
        </motion.g>
        {/* Checkmark (Floating) */}
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, type: "spring" }}
          d="M260 120 L280 140 L320 100"
          stroke="#2ECC71" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Binary Bits (Floating) */}
        {[
          { x: 120, y: 100, text: "1", delay: 2 },
          { x: 280, y: 300, text: "0", delay: 2.2 },
          { x: 80, y: 320, text: "1", delay: 2.4 },
        ].map((bit, i) => (
          <motion.text
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: bit.delay }}
            x={bit.x} y={bit.y}
            fill="#1A362D" fillOpacity="0.2"
            fontSize="24" fontWeight="bold" fontFamily="monospace"
          >
            {bit.text}
          </motion.text>
        ))}
      </svg>
    </div>
  );
}
