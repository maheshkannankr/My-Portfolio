'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type LeftNavbarProps = {
  active: string;
  onNavigate: (id: string) => void;
};

const navItems = [
  { id: 'home', icon: '/assets/icons/home.svg', label: 'Home' },
  { id: 'about', icon: '/assets/icons/profile.svg', label: 'About' },
  { id: 'skills', icon: '/assets/icons/skills.svg', label: 'Skills' },
  { id: 'projects', icon: '/assets/icons/projects.svg', label: 'Projects' },
  {
    id: 'experience',
    icon: '/assets/icons/experience.svg',
    label: 'Experience',
  },
  { id: 'contact', icon: '/assets/icons/contact.svg', label: 'Contact' },
];

export default function LeftNavbar({ active, onNavigate }: LeftNavbarProps) {
  return (
    <motion.div
      layout
      className='
    fixed z-50
    sm:left-10 sm:top-1/2 sm:-translate-y-1/2 sm:flex-col sm:gap-6
    bottom-8 left-1/2 -translate-x-1/2 flex-row gap-4
    flex items-center justify-center
    backdrop-blur-lg px-4 py-3 rounded-2xl
  '
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className='relative group w-12 h-12 flex items-center justify-center rounded-xl'
        >
          {/* 🔥 ACTIVE INDICATOR */}
          {active === item.id && (
            <motion.div
              layoutId='nav-indicator'
              className='absolute inset-0 rounded-xl bg-white shadow-lg'
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          )}

          {/* ICON */}
          <div className='relative z-10 flex items-center justify-center w-full h-full'>
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className={`transition ${
                active === item.id ? 'scale-110' : 'opacity-70'
              }`}
            />
          </div>

          {/* TOOLTIP */}
          <span className='hidden sm:block absolute left-16 opacity-0 group-hover:opacity-100 transition text-sm text-white bg-black px-2 py-1 rounded'>
            {item.label}
          </span>
        </button>
      ))}
    </motion.div>
  );
}
