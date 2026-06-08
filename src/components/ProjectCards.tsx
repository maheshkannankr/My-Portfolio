'use client';

import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Folder, Terminal } from 'lucide-react';
import { usePopupModel } from '@/context/PopupModelContext';
import { useEffect, useState } from 'react';

type Props = {
  project: any;
};

export function ProjectCard({ project }: Props) {
  const { openModel } = usePopupModel();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <motion.div
      initial='rest'
      whileHover='hover' // ✅ desktop
      animate={isMobile ? 'rest' : isMobileOpen ? 'hover' : 'rest'}
      className='relative w-full pb-0'
      onClick={() => {
        if (isMobile) {
          openModel('PROJECT', project); // ✅ open modal
        } else {
          setIsMobileOpen((prev) => !prev); // ✅ keep desktop behavior
        }
      }}
    >
      {/* CARD */}
      <motion.div
        variants={{
          rest: {
            boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
            backgroundColor: 'rgb(237, 235, 235)',
            borderColor: 'rgba(255,255,255,0.2)',
            y: 0,
          },
          hover: {
            boxShadow: '0 12px 24px rgba(0,0,0,0.24)',
            backgroundColor: 'rgb(237, 235, 235)',
            borderColor: 'rgba(255,255,255,0.3)',
            y: -2,
          },
        }}
        transition={{ duration: 0.25 }}
        className='
          relative z-10
          rounded-2xl
          h-75
          border
          p-4 sm:p-6   // ✅ responsive padding
        '
      >
        <div className='flex items-center gap-3 mb-4'>
          <div className='w-10 h-10 flex items-center justify-center rounded-lg'>
            <Folder className='text-primary' size={18} />
          </div>

          <div>
            <h3 className='text-sm sm:text-base font-semibold text-black/80'>
              {project.title}
            </h3>
            <p className='text-xs sm:text-sm text-black/50 line-clamp-2'>
              {project.description}
            </p>
          </div>
        </div>

        {/* TOOLS */}
        <div className='space-y-2 mt-4'>
          {project.tools?.slice(0, 4).map((tool: string, i: number) => (
            <div
              key={i}
              className='flex items-center gap-2 text-xs sm:text-sm text-black/70'
            >
              <Terminal size={14} className='text-primary' />
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* DRAWER */}
      <motion.div
        variants={{
          rest: { scaleY: 0, opacity: 0 },
          hover: { scaleY: 1, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
        className='
            hidden sm:block   // ✅ hide drawer on mobile
            absolute top-full left-0 w-full
            pt-6
            -mt-4
            bg-primary/70 backdrop-blur-md
            border border-white/20
            rounded-b-2xl
            shadow-[0_12px_24px_rgba(0,0,0,0.12)]
            overflow-hidden
            z-0
          '
      >
        <div className='flex items-center justify-between px-4 sm:px-6 py-2'>
          <div>
            <p className='text-xs text-black/50'>More Information</p>
          </div>

          <div className='flex gap-2'>
            <button
              onClick={(e) => {
                e.stopPropagation(); // ✅ prevent toggle
                openModel('PROJECT', project);
              }}
              className='
                flex items-center gap-1
                text-xs px-3 py-1.5 rounded-md
                bg-black text-white
                hover:bg-black/80 transition
              '
            >
              <ExternalLink size={12} />
              Details
            </button>

            {project.github && (
              <a
                href={project.github}
                target='_blank'
                onClick={(e) => e.stopPropagation()} // ✅ prevent toggle
                className='
                  flex items-center gap-1
                  text-xs px-3 py-1.5 rounded-md
                  border border-white/20
                  text-black/70
                  hover:bg-white/10 transition
                '
              >
                <GitBranch size={12} />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
