'use client';

import Image from 'next/image';

type ProjectOverviewModalProps = {
  project: any;
};

export default function ProjectOverviewModal({
  project,
}: ProjectOverviewModalProps) {
  return (
    <div className='text-white max-w-2xl max-h-[80vh] overflow-y-auto'>
      {/* Title */}
      <h2 className='text-2xl font-bold mb-4'>{project.title}</h2>

      {/* Screenshots */}
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <Image
          height={100}
          width={200}
          src={project.image}
          alt='screenshot'
          className='rounded-lg object-cover'
        />
        <Image
          height={100}
          width={200}
          src={project.image}
          alt='screenshot'
          className='rounded-lg object-cover'
        />
      </div>

      {/* Description */}
      <p className='text-white/80 mb-4'>{project.description}</p>

      {/* Tech Stack */}
      <div className='flex flex-wrap gap-2'>
        {project.tech.map((tech: string, i: number) => (
          <span
            key={i}
            className='px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
