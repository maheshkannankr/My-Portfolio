'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1}}
      viewport={{ once: false, amount: 0.4 }}
    >
      <section className='relative min-h-screen flex items-center justify-center px-6 overflow-hidden '>
        <div className='max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* 🔥 TEXT (LEFT) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black/60'>
              {"Hi, I'm"}{' '}
              <span className='text-primary font-display'>Mahesh Kannan</span>
            </h1>

            <p className='mt-6 text-base sm:text-lg md:text-xl text-gray/700'>
              Frontend Developer • React • API Integration
            </p>
          </motion.div>

          {/* 🔥 IMAGE (RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='relative w-full md:w-1/2 flex justify-center md:justify-end'
          >
            <div className='relative w-[280px] sm:w-[340px] md:w-[420px] lg:w-[480px]'>
              <Image
                src='/assets/profile (2).webp'
                alt='Mahesh'
                width={800}
                height={800}
                className='
                object-contain
                opacity-90
                contrast-110 brightness-90

                /* 🔥 BLEND EFFECT (NOW LEFT SIDE FADE) */
                
              '
              />

              {/* 🔥 subtle glow */}
              <div className='absolute inset-0 -z-10 blur-3xl bg-white/10 rounded-full' />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
