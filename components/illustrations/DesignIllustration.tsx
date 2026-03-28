'use client';
import { motion } from 'motion/react';

export function DesignIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E67E22]/5 rounded-full"
      />
      <svg viewBox="0 0 400 400" className="w-full max-w-sm z-10 drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Grid Lines */}
        {[100, 150, 200, 250, 300].map((pos, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            x1={pos} y1="100" x2={pos} y2="300"
            stroke="#1A362D" strokeWidth="1" strokeOpacity="0.1"
          />
        ))}
        {[100, 150, 200, 250, 300].map((pos, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            x1="100" y1={pos} x2="300" y2={pos}
            stroke="#1A362D" strokeWidth="1" strokeOpacity="0.1"
          />
        ))}
        {/* Pen Tool Path */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M100 250 C150 150, 250 150, 300 250"
          stroke="#E67E22" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Anchor Points */}
        {[
          { cx: 100, cy: 250, delay: 1 },
          { cx: 200, cy: 150, delay: 1.5 },
          { cx: 300, cy: 250, delay: 2 },
        ].map((point, i) => (
          <motion.rect
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: point.delay, type: "spring" }}
            x={point.cx - 6} y={point.cy - 6} width="12" height="12"
            stroke="#1A362D" strokeWidth="2" fill="white"
          />
        ))}
        {/* Pen Tip (Floating) */}
        <motion.path
          initial={{ x: -20, y: -20, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 2.2, duration: 0.8, type: "spring" }}
          d="M180 130 L200 150 L220 130 L200 110 Z"
          stroke="#1A362D" strokeWidth="2" fill="#1A362D"
        />
        {/* Transformation Arrows */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 2.5 }}
          d="M320 120 L350 120 M350 120 L350 150 M350 120 L320 150"
          stroke="#1A362D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
}
