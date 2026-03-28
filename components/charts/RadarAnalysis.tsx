'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { subject: 'UI/UX', current: 30, target: 90, fullMark: 100 },
  { subject: 'Product Exp', current: 40, target: 90, fullMark: 100 },
  { subject: 'Auth & CRM', current: 25, target: 85, fullMark: 100 },
  { subject: 'SEO', current: 20, target: 80, fullMark: 100 },
  { subject: 'Tech Arch', current: 50, target: 90, fullMark: 100 },
  { subject: 'AI Readiness', current: 10, target: 80, fullMark: 100 },
];

export function RadarAnalysis() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="w-full h-[350px] md:h-[450px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#E0E7E1" strokeDasharray="3 3" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#F5F5F0', fontSize: 14, fontFamily: 'var(--font-sans)', fontWeight: 600 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1A362D', color: '#F5F5F0', border: 'none', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#F5F5F0', fontWeight: 500 }}
            cursor={{ stroke: '#E67E22', strokeWidth: 1, strokeDasharray: '3 3' }}
          />
          <Radar name="Current State" dataKey="current" stroke="#E67E22" strokeWidth={2} fill="#E67E22" fillOpacity={0.4} isAnimationActive={true} animationDuration={1500} />
          <Radar name="Target State" dataKey="target" stroke="#2ECC71" strokeWidth={2} fill="#2ECC71" fillOpacity={0.2} isAnimationActive={true} animationDuration={1500} animationBegin={500} />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
