'use client';

import { motion } from 'framer-motion';

type SectionProps = {
  children: React.ReactNode;
  index: number;
  activeIndex: number;
};

export default function Section({
  children,
  index,
  activeIndex,
}: SectionProps) {
  const isActive = index === activeIndex;
  const isPrev = index < activeIndex;

  return (
    <motion.section
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : isPrev ? -120 : 120,
        scale: isActive ? 1 : 0.94,
        filter: isActive ? 'blur(0px)' : 'blur(10px)',
      }}
      exit={{ opacity: 0, y: -80, scale: 0.96 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformPerspective: 1000,
        zIndex: isActive ? 10 : 0,
      }}
      className='absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24'
    >
      <div className='max-w-7xl w-full rounded-3x backdrop-blur-xl p-5 sm:p-10'>
        {children}
      </div>
    </motion.section>
  );
}
