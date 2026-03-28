'use client';
import { motion } from 'motion/react';

export function RoadmapIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Winding Path */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 3, ease: "easeInOut" }}
          d="M50 350 C50 350, 100 300, 150 320 C200 340, 250 280, 300 300 C350 320, 350 250, 300 220 C250 190, 200 220, 150 180 C100 140, 150 80, 200 100 C250 120, 300 50, 350 80"
          stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"
          strokeDasharray="12 12"
        />
        {/* Milestones */}
        {[
          { cx: 150, cy: 320, delay: 0.5, color: "#E67E22" },
          { cx: 300, cy: 220, delay: 1.5, color: "#2ECC71" },
          { cx: 150, cy: 180, delay: 2.5, color: "#3498DB" },
          { cx: 350, cy: 80, delay: 3.5, color: "white" },
        ].map((milestone, i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: milestone.delay, type: "spring" }}
            cx={milestone.cx} cy={milestone.cy} r="12"
            fill={milestone.color}
          />
        ))}
        {/* Rocket (Floating) */}
        <motion.g
          initial={{ x: -20, y: 20, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 4, duration: 1, type: "spring" }}
        >
          <path d="M360 40 L340 60 L350 70 L370 50 Z" stroke="white" strokeWidth="2" fill="white" fillOpacity="0.2" />
          <path d="M340 60 L330 70 M350 70 L340 80" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
