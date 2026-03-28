'use client';
import { motion } from 'motion/react';

export function VisionIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lightbulb Base */}
        <motion.rect
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, type: "spring" }}
          x="180" y="280" width="40" height="20" rx="5"
          stroke="white" strokeWidth="4" fill="white" fillOpacity="0.1"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1 }}
          d="M185 305 L215 305 M190 315 L210 315"
          stroke="white" strokeWidth="4" strokeLinecap="round"
        />
        {/* Lightbulb Glass */}
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 1, type: "spring" }}
          d="M200 280 C150 280, 130 220, 130 180 C130 120, 160 80, 200 80 C240 80, 270 120, 270 180 C270 220, 250 280, 200 280Z"
          stroke="white" strokeWidth="4" fill="white" fillOpacity="0.05"
        />
        {/* Filament (Globe Shape) */}
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.2, duration: 0.8 }}
          cx="200" cy="180" r="30" stroke="white" strokeWidth="2" strokeOpacity="0.3"
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5, duration: 1 }}
          d="M170 180 Q200 150 230 180 M170 180 Q200 210 230 180"
          stroke="white" strokeWidth="2" strokeOpacity="0.3"
        />
        {/* Rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 2 + i * 0.1, duration: 0.5 }}
            x1="200" y1="60" x2="200" y2="30"
            stroke="white" strokeWidth="4" strokeLinecap="round"
            transform={`rotate(${angle} 200 180)`}
          />
        ))}
        {/* Floating Stars */}
        {[
          { cx: 100, cy: 100, delay: 3 },
          { cx: 300, cy: 120, delay: 3.2 },
          { cx: 320, cy: 250, delay: 3.4 },
        ].map((star, i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: star.delay, type: "spring" }}
            cx={star.cx} cy={star.cy} r="4" fill="white"
          />
        ))}
      </svg>
    </div>
  );
}
