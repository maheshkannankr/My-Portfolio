'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/maheshkannankr/',
    icon: '/assets/icons/linkedin.svg',
    alt: 'LinkedIn',
    size: 30,
  },
  {
    href: 'https://github.com/maheshkannankr',
    icon: '/assets/icons/github.svg',
    alt: 'GitHub',
    size: 40,
  },
  {
    href: 'https://www.instagram.com/mahesh_behind_the_lens/',
    icon: '/assets/icons/instagram.svg',
    alt: 'Instagram',
    size: 40,
  },
  {
    href: 'https://wa.me/919788979892/',
    icon: '/assets/icons/whatsapp.svg',
    alt: 'WhatsApp',
    size: 40,
  },
];

export default function Contact() {
  return (
    <section className='py-32 px-6 max-w-6xl mx-auto'>
      {/* 🔥 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='text-3xl font-semibold mb-16 text-center'
      >
        Get in Touch
      </motion.h2>

      <div className='grid md:grid-cols-2 gap-12 items-start'>
        {/* 📍 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='space-y-8'
        >
          <p className='text-gray-600'>
            I’m open to opportunities, collaborations, or just a friendly chat.
            Feel free to reach out anytime.
          </p>

          {/* Contact Items */}
          <div className='space-y-6'>
            <div className='flex items-center gap-4'>
              <Mail className='w-5 h-5 text-primary' />
              <span>maheshkannankr@gmail.com</span>
            </div>

            <div className='flex items-center gap-4'>
              <Phone className='w-5 h-5 text-primary' />
              <span>+91 97889 79892</span>
            </div>

            <div className='flex items-center gap-4'>
              <MapPin className='w-5 h-5 text-primary' />
              <span>Anthiyur, Erode, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex gap-4 pt-4'
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -6, scale: 1.1 }} // 🔥 bounce effect
                transition={{ type: 'spring', damping: 20, stiffness: 500 }}
                className='
        relative z-10
        w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15
        rounded-2xl
        bg-white/5
        backdrop-blur-sm
        border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        p-2
        flex justify-center items-center
        transition duration-150 ease-out
      '
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={item.size}
                  height={item.size}
                  className='
          grayscale
          hover:grayscale-0
          transition duration-150 ease-out
        '
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 🧊 RIGHT SIDE (FORM) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div
            className='
              relative
              px-6 py-6
              rounded-2xl

              bg-white/5
              backdrop-blur-xl

              border border-white/10
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            '
          >
            <form className='space-y-5'>
              {/* Name */}
              <input
                type='text'
                placeholder='Your Name'
                className='
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 border border-white/10
                  outline-none
                  focus:ring-2 focus:ring-primary/40
                '
              />

              {/* Email */}
              <input
                type='email'
                placeholder='Your Email'
                className='
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 border border-white/10
                  outline-none
                  focus:ring-2 focus:ring-primary/40
                '
              />

              {/* Message */}
              <textarea
                rows={4}
                placeholder='Your Message'
                className='
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 border border-white/10
                  outline-none
                  focus:ring-2 focus:ring-primary/40
                '
              />

              {/* Button */}
              <button
                type='submit'
                className='
                  w-full py-3 rounded-xl
                  bg-primary text-white font-medium
                  hover:opacity-90 transition
                '
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
