'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  bgClass?: string;
}

export function Slide({ children, className, id, dark = false, bgClass }: SlideProps) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen w-full flex flex-col justify-center items-center py-24 px-6 md:px-16 lg:px-24 snap-start relative overflow-hidden',
        bgClass ? bgClass : (dark ? 'bg-[#1A362D] text-[#F5F5F0]' : 'bg-[#F5F5F0] text-[#1A1A1A]'),
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="w-full max-w-7xl mx-auto z-10 will-change-[transform,opacity]"
      >
        {children}
      </motion.div>
    </section>
  );
}
