'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import StatGlassCard from './StatGlassCard';

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      viewport={{ once: false, amount: 0.4 }}
      className='relative min-h-screen flex items-center justify-center px-3 overflow-hidden'
    >
      <div className='max-w-7xl w-full flex flex-col gap-6'>
        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black/60'>
            About <span className='text-primary font-display'>Me</span>
          </h2>
        </motion.div>

        {/* 🔥 CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='max-w-3xl'
        >
          {/* ✅ JUSTIFIED TEXT */}
          <p className='text-gray/700 text-base sm:text-lg leading-relaxed text-justify'>
            I'm Mahesh, a passionate full-stack developer specializing in
            building modern, scalable web applications. I work extensively with
            React, Next.js, Node.js, and databases like MySQL and MongoDB. My
            focus is on creating clean, performant, and user-centric digital
            experiences.
          </p>

          <p className='mt-4 text-gray/600 text-base sm:text-lg leading-relaxed text-justify'>
            I enjoy solving real-world problems, optimizing performance, and
            continuously learning new technologies to stay ahead in the
            ever-evolving tech landscape.
          </p>

          {/* 🔥 CTA */}
          <div className='mt-8'>
            <a
              href='/MaheshKannan_Resume.pdf'
              download='MaheshKannan_Resume.pdf'
              className='
                  flex items-center gap-2 
                  px-5 py-3 rounded-xl 
                  text-black/70 border border-black/10
                  hover:bg-black/5 transition
                  w-fit
                '
            >
              <Download size={18} />
              <span className='hidden sm:inline'>Download</span>
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        {/* 🔥 STATS (LIGHT STYLE — NO HEAVY CARDS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='grid grid-cols-3 md:grid-cols-4 sm:gap-6 md:gap-8 gap-2 pt-2 sm:pt-10'
        >
          {[
            { label: 'Projects', value: '6+' },
            { label: 'Experience', value: '3+ Yr' },
            { label: 'Technologies', value: '15+' },
          ].map((item, index) => (
            <StatGlassCard key={index} label={item.label} value={item.value} />
          ))}
        </motion.div>
      </div>

      {/* 🔥 Subtle Glow (matching hero) */}
      <div className='absolute inset-0 -z-10 blur-3xl bg-white/10 rounded-full' />
    </motion.section>
  );
}
