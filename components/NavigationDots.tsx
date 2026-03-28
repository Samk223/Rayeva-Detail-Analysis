'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function NavigationDots({ sections }: { sections: string[] }) {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden sm:flex">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-300 border border-transparent",
            active === id 
              ? "bg-[#E67E22] scale-150 border-white/20 shadow-sm" 
              : "bg-gray-400/40 hover:bg-gray-400/80"
          )}
          aria-label={`Go to ${id}`}
        />
      ))}
    </div>
  );
}
