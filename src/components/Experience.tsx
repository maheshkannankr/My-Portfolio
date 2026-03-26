'use client';

import { motion } from 'framer-motion';
import { experiences } from './ExperienceData';

export default function Experience() {
  return (
    <section className='relative py-24 px-6 max-w-5xl mx-auto'>
      {/* 🔥 Vertical Line */}
      <div
        className='absolute 
                md:left-1/2 left-4 
                top-0 h-full w-[2px] 
                border-l border-dashed border-gray-300'
      />

      <div className='space-y-16'>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className='
                relative grid grid-cols-1 md:grid-cols-2
                items-start gap-6 md:gap-10
                '
          >
            {/* 🔴 Node */}
            <div className='absolute left-1/2 -translate-x-1/2 top-2 z-10'>
              <div className='w-5 h-5 rounded-full bg-primary border-4 border-white shadow-md' />
            </div>

            {/* 🏢 LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:text-right md:pr-10 text-left'
            >
              <h3 className='font-semibold text-gray-900'>{exp.company}</h3>
              <p className='text-sm text-gray-500'>{exp.location}</p>
              <p className='text-xs text-gray-400 mt-1'>{exp.duration}</p>
            </motion.div>

            {/* 📦 RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:pl-10'
            >
              {/* 🪧 Role */}
              <h3 className='font-semibold text-gray-900 mb-2'>{exp.role}</h3>

              {/* Glass Card */}
              <div
                className='
                  relative
                  px-5 py-4
                  rounded-xl

                  bg-white/40
                  backdrop-blur-lg

                  border border-white/30
                  shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                '
              >
                <p className='text-sm text-gray-700 mb-3'>{exp.description}</p>

                {/* Highlights */}
                <ul className='space-y-1 mb-3'>
                  {exp.highlights.map((h, i) => (
                    <li key={i} className='text-xs text-gray-600'>
                      • {h}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className='flex flex-wrap gap-2'>
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className='text-xs px-2 py-1 rounded-full bg-black/5'
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
