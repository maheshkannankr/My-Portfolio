'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCards';
import { ChevronLeftCircle, ChevronRightCircleIcon } from 'lucide-react';

export default function ProjectCarousel() {
  return (
    <div className='relative w-full px-4'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
          disabledClass: 'opacity-30 pointer-events-none', // 🔥 disables buttons
        }}
        pagination={{
          clickable: true,

          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className='h-full p-4 pb-20'>
              <ProjectCard project={project} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION DOTS */}
      <div className='custom-pagination flex justify-center mt-4 gap-2'></div>

      {/* NAV BUTTONS */}
      <div className='hidden md:flex justify-between mt-4 px-2'>
        <button className='custom-prev text-black transition'>
          <ChevronLeftCircle size={40} strokeWidth={1.5} />
        </button>

        <button className='custom-next text-black transition'>
          <ChevronRightCircleIcon size={40} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
