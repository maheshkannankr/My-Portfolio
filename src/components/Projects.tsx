'use client';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import {
  ExternalLink,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { ProjectCard } from './ProjectCards';

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setDragWidth(
          containerRef.current.scrollWidth - containerRef.current.offsetWidth,
        );
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  const projects = [
    {
      title: 'Cronus – Data Extraction Platform',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
      tech: ['Next.js', 'TypeScript', 'REST APIs', 'AI Integration'],
      live: '#',
      github: '#',
      description:
        'Built dashboards for data-intensive automation workflows with AI-powered parsing and real-time updates.',
    },
    {
      title: 'PMS – Performance Management System',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800',
      tech: ['Next.js', 'Figma', 'TypeScript', 'HTML', 'CSS'],
      live: '#',
      github: '#',
      description:
        'Designed role-based workflow interfaces with multi-level approvals and scalable navigation architecture.',
    },
    {
      title: 'TBTA – Mobile App (PlayStore)',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
      tech: ['React Native', 'API Integration'],
      live: '#',
      github: '#',
      description:
        'Developed and deployed a production mobile app with real-time price tracking and multi-role access control.',
    },
    {
      title: 'Sevanun – Patient Monitoring System',
      image:
        'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800',
      tech: ['React', 'React Native', 'Healthcare UI'],
      live: '#',
      github: '#',
      description:
        'Built real-time patient monitoring UI with scheduling and structured healthcare workflows.',
    },
  ];

  const x = useMotionValue(0);

  const scroll = (direction: 'left' | 'right') => {
    const moveBy = 320;

    const currentX = x.get(); // current position

    let newX;

    if (direction === 'left') {
      newX = Math.min(currentX + moveBy, 0);
    } else {
      newX = Math.max(currentX - moveBy, -dragWidth);
    }

    animate(x, newX, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    });
  };

  const CARD_WIDTH = 320 + 24; // width + gap

  return (
    <section className='w-full h-full flex flex-col justify-center'>
      {/* 🔥 Title */}
      <h2 className='text-3xl sm:text-4xl font-bold text-black/60 mb-8 px-10'>
        Projects
      </h2>

      {/* 🔥 Wrapper (handles padding + fade) */}
      <div className='relative px-10 overflow-hidden'>
        <button
          onClick={() => scroll('left')}
          //   disabled={x.get() >= 0}
          className='
            absolute left-2 top-1/2 -translate-y-1/2 z-20
            bg-white/70 backdrop-blur-md
            border border-white/30
            rounded-full p-2
            shadow-md
            hover:scale-110 transition
        '
        >
          <ChevronLeft size={20} />
        </button>
        <button
          //   disabled={x.get() <= -dragWidth}
          onClick={() => scroll('right')}
          className='
            absolute right-2 top-1/2 -translate-y-1/2 z-20
            bg-white/70 backdrop-blur-md
            border border-white/30
            rounded-full p-2
            shadow-md
            
            hover:scale-110 transition
        '
        >
          <ChevronRight size={20} />
        </button>
        {/* 🔥 Right Fade Edge */}
        <div className='absolute right-0 top-0 h-full w-20 pointer-events-none z-10' />

        {/* 🔥 Draggable Row */}
        <motion.div
          ref={containerRef}
          className='
            flex gap-6 
            py-10
            cursor-grab active:cursor-grabbing
          '
          drag='x'
          dragConstraints={{ left: -dragWidth, right: 0 }}
          dragElastic={0.1}
          style={{ x }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              x={x}
              cardWidth={CARD_WIDTH}
            />
          ))}

          {/* 🔥 Spacer (fix last card clipping) */}
          <div className='w-6 shrink-0' />
        </motion.div>
      </div>
    </section>
  );
}
