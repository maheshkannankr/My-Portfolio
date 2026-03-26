'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/abstract1.png',
  '/abstract2.png',
  '/abstract3.png',
  '/abstract4.png',
  '/abstract5.png',
  '/abstract6.png',
];

export default function ScrollParallaxBg({ activeIndex }) {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: activeIndex === index ? 0.25 : 0,
            scale: activeIndex === index ? 1 : 1.1,

            // 🔥 Rotation effect
            rotate: activeIndex * 90,

            // 🔥 Parallax shift
            y: (activeIndex - index) * -60,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className='absolute inset-0 flex items-center justify-center'
        >
          <Image
            src={src}
            alt='bg'
            width={800}
            height={800}
            className='blur-sm mix-blend-lighten'
          />
        </motion.div>
      ))}
    </div>
  );
}
