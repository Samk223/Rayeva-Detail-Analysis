'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Missing Content', value: 90, color: '#E74C3C' },
  { name: 'Generic Titles', value: 85, color: '#E67E22' },
  { name: 'Keyword Integration', value: 20, color: '#F1C40F' },
  { name: 'Indexable Content', value: 30, color: '#3498DB' },
];

export function BarAnalysis() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="w-full h-[300px] md:h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E0E7E1" />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: '#1A362D' }} axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" width={150} tick={{ fill: '#1A362D', fontSize: 13, fontFamily: 'var(--font-sans)', fontWeight: 500 }} axisLine={false} tickLine={false} />
          <Tooltip 
            cursor={{ fill: '#E0E7E1', opacity: 0.4 }}
            contentStyle={{ backgroundColor: '#1A362D', color: '#F5F5F0', border: 'none', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            itemStyle={{ color: '#F5F5F0', fontWeight: 500 }}
            formatter={(value) => [`${value}%`, 'Severity']}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32} isAnimationActive={true} animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
