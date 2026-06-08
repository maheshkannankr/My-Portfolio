'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCards';
import PopupModel from './PopupModel';
import ProjectOverviewModal from './ProjectOverviewModal';
import { projects } from '@/data/projects';
import ProjectCarousel from './ProjectCarousel';

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
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'>
        <ProjectCarousel />
      </div>

      {/* MODAL */}
      <PopupModel isOpen={isOpen} onClose={handleClose}>
        {selectedProject && <ProjectOverviewModal project={selectedProject} />}
      </PopupModel>
    </section>
  );
}
