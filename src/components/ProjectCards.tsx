import { motion, useTransform } from 'framer-motion';
import { ExternalLink, GitBranch, Folder } from 'lucide-react';

type Props = {
  project: any;
  index: number;
  x: any;
  cardWidth: number;
};

export function ProjectCard({ project, index, x, cardWidth }: Props) {
  const input = [
    -(index + 1) * cardWidth,
    -index * cardWidth,
    -(index - 1) * cardWidth,
  ];

  const scale = useTransform(x, input, [0.95, 1, 0.95]);
  const opacity = useTransform(x, input, [0.7, 1, 0.7]);

  return (
    <motion.div
      style={{ scale, opacity }}
      className='
        group
        min-w-[280px] sm:min-w-[320px]
        h-[300px]   /* 🔥 FIXED HEIGHT */
        rounded-2xl
        bg-white/5
        backdrop-blur-sm
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        border border-white/10
        p-5
        flex flex-col justify-between   /* 🔥 IMPORTANT */
        transition duration-300
        hover:bg-white/10
      '
    >
      {/* 🔥 TOP CONTENT */}
      <div>
        {/* Icon */}
        <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 mb-4'>
          <Folder className='text-amber-500' size={20} />
        </div>

        {/* Title */}
        <h3 className='text-base font-semibold text-black/80'>
          {project.title}
        </h3>

        {/* Description (fixed height) */}
        <p className='text-sm text-black/60 mt-1 h-[40px] line-clamp-2'>
          {project.description}
        </p>

        {/* Tech (fixed space) */}
        <div className='flex flex-wrap gap-2 mt-3 min-h-[40px]'>
          {project.tech.slice(0, 3).map((tech: string, i: number) => (
            <span
              key={i}
              className='
                text-xs px-2 py-1
                rounded-md
                bg-white/10
                border border-white/10
                text-black/70
              '
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 🔥 FOOTER (always aligned) */}
      <div className='flex justify-between items-center mt-4'>
        <div className='flex gap-4'>
          <a
            href={project.live}
            target='_blank'
            className='flex items-center gap-1 text-xs text-amber-600 hover:text-amber-700'
          >
            <ExternalLink size={14} />
            Live
          </a>

          <a
            href={project.github}
            target='_blank'
            className='flex items-center gap-1 text-xs text-black/60 hover:text-black'
          >
            <GitBranch size={14} />
            Code
          </a>
        </div>

        <span className='text-black/40 group-hover:translate-x-1 transition'>
          →
        </span>
      </div>
    </motion.div>
  );
}
