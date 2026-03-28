'use client';
import { motion } from 'motion/react';

export function HealthIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-2xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Pulse Line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M50 200 L120 200 L140 140 L180 260 L220 180 L240 220 L280 200 L350 200"
          stroke="#E67E22" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Shield Outline */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 1.5 }}
          d="M200 80 C200 80, 120 100, 120 180 C120 260, 200 320, 200 320 C200 320, 280 260, 280 180 C280 100, 200 80, 200 80Z"
          stroke="white" strokeWidth="2" strokeOpacity="0.2"
        />
        {/* Floating Data Points */}
        {[
          { cx: 100, cy: 120, delay: 1 },
          { cx: 300, cy: 150, delay: 1.2 },
          { cx: 150, cy: 300, delay: 1.4 },
          { cx: 250, cy: 280, delay: 1.6 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: point.delay, type: "spring" }}
            cx={point.cx} cy={point.cy} r="6" fill="#E67E22"
          />
        ))}
      </svg>
    </div>
  );
}
