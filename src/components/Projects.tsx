'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCards';
import PopupModel from './PopupModel';
import ProjectOverviewModal from './ProjectOverviewModal';
import { projects } from '@/data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (project: any) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className='w-full py-16'>
      {/* TITLE */}
      <h2 className='text-3xl sm:text-4xl font-bold text-black/60 mb-10 px-10'>
        Projects
      </h2>

      {/* GRID */}
      <div className='px-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15'>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              x={0}
              cardWidth={0}
              onDetailsClick={() => handleOpen(project)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      <PopupModel isOpen={isOpen} onClose={handleClose}>
        {selectedProject && (
          <ProjectOverviewModal
            isOpen
            onClose={handleClose}
            project={selectedProject}
          />
        )}
      </PopupModel>
    </section>
  );
}
