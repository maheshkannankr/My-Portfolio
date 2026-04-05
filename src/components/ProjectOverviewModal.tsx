'use client';

import { Briefcase, Wrench, Trophy } from 'lucide-react';

interface ProjectOverviewModalProps {
  project: {
    title: string;
    role: string;
    tools: string[];
    achievements: string[];
  };
}

export default function ProjectOverviewModal({
  project,
}: ProjectOverviewModalProps) {
  if (!project) return null;

  return (
    <div className='max-w-5xl mx-auto'>
      {/* GLASS CONTAINER */}
      <div className='rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden'>
        {/* HEADER */}
        <div className='px-6 py-5 text-xl font-semibold text-black/80 border-b border-white/20'>
          {project.title}
        </div>

        {/* GRID (KEY PART) */}
        <div className='grid grid-cols-[1fr_2fr]'>
          {/* ROW 1 */}
          <div className='flex items-start gap-3 px-5 py-6 border-b border-white/20'>
            <Briefcase size={18} className='text-green-500' />
            <span className='text-sm text-black/60'>What was my role?</span>
          </div>

          <div className='px-6 py-6 border-b border-white/20 hover:bg-white/10 transition'>
            <p className='text-black/80 leading-relaxed'>{project.role}</p>
          </div>

          {/* ROW 2 */}
          <div className='flex items-center gap-3 px-5 py-6 border-b border-white/20'>
            <Wrench size={18} className='text-blue-500' />
            <span className='text-sm text-black/60'>What I used?</span>
          </div>

          <div className='px-6 py-6 border-b border-white/20'>
            <div className='flex flex-wrap gap-3'>
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className='px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-black/70 hover:scale-105 transition'
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* ROW 3 */}
          <div className='flex items-start gap-3 px-5 py-6'>
            <Trophy size={18} className='text-yellow-500' />
            <span className='text-sm text-black/60'>What I achieved?</span>
          </div>
          <div className='px-6 py-6'>
            <div className='relative'>
              {/* LINE */}
              <div className='absolute left-1.5 top-0 bottom-0 w-px bg-black/10'></div>

              {project.achievements.map((item, i) => (
                <div key={i} className='flex items-start gap-4 mb-6 group'>
                  {/* DOT (aligned with line) */}
                  <span className='w-3 h-3 bg-green-500 rounded-full mt-[6px] flex-shrink-0 z-10 group-hover:scale-125 transition'></span>

                  {/* TEXT */}
                  <p className='text-black/70 group-hover:text-black transition leading-relaxed'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
