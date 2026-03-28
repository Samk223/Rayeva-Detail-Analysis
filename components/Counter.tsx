'use client';

import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function Counter({ value, suffix = '', prefix = '', duration = 2 }: { value: number, suffix?: string, prefix?: string, duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, { 
        duration, 
        ease: "easeOut",
        onUpdate: (v) => {
          setDisplayValue(Math.round(v));
        }
      });
      return controls.stop;
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
}
