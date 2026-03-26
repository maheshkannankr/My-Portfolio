'use client';

import { useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from 'framer-motion';

export function CursorAura() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  // 🔥 ONLY circle mask here (safe)
  const mask = useMotionTemplate`
    radial-gradient(circle 140px at ${x}px ${y}px, white 0%, transparent 100%)
  `;

  return (
    <motion.div
      className="fixed inset-0 z-5 pointer-events-none"
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    >
      {/* 🔥 PRISM */}
      <div
        className="w-full h-full"
        style={{
          background: `
            conic-gradient(
              at 50% 50%,
              #ff00cc,
              #3333ff,
              #00ffcc,
              #ffcc00,
              #ff00cc
            )
          `,
          filter: 'blur(90px) brightness(1.3)',
        }}
      />

      {/* 🔥 DOT OVERLAY (separate layer) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(white 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          opacity:5, // 👈 control dot visibility
          mixBlendMode: 'overlay',
        }}
      />
    </motion.div>
  );
}