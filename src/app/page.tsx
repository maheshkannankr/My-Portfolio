'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import Projects from '@/components/Projects';
import ScrollArrow from '@/components/ScrollArrow';
import { CursorAura } from '@/components/CursorAura';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

/* =========================
   SECTION COMPONENT
========================= */

/* =========================
   MAIN PAGE
========================= */
export default function Home() {
  const sections = [
    { id: 'home', Component: Hero },
    { id: 'about', Component: About },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects },
    { id: 'experience', Component: Experience },
    { id: 'contact', Component: Contact },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);

  /* =========================
     NAVIGATION FUNCTIONS
  ========================= */
  const goToSmooth = useCallback(
    (index: number) => {
      if (index === activeIndex) return;

      isAnimating.current = true;
      setActiveIndex(index);

      setTimeout(() => {
        isAnimating.current = false;
      }, 650);
    },
    [activeIndex],
  );

  const goToInstant = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  /* =========================
     WHEEL CONTROL (IMPROVED)
  ========================= */
  useEffect(() => {
    let wheelLock = false;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current || wheelLock) return;

      if (Math.abs(e.deltaY) < 40) return;

      wheelLock = true;
      setTimeout(() => (wheelLock = false), 300);

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        goToSmooth(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        goToSmooth(activeIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, goToSmooth, sections.length]);

  /* =========================
     KEYBOARD NAV
  ========================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') goToSmooth(activeIndex + 1);
      if (e.key === 'ArrowUp') goToSmooth(activeIndex - 1);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, goToSmooth]);

  /* =========================
     TOUCH SWIPE (MOBILE)
  ========================= */
  const touchStartY = useRef(0);

  /* =========================
     BACKGROUND (PREMIUM)
  ========================= */
  const backgrounds = [
    'radial-gradient(circle at 20% 20%, #ffe5e5, #3a1c1c)',
    'radial-gradient(circle at 80% 30%, #e0f2fe, #dafd87)',
    'radial-gradient(circle at 30% 80%, #f3e8ff, #5df8c5)',
    'radial-gradient(circle at 70% 70%, #dcfce7, #82e6ff)',
    'radial-gradient(circle at 50% 20%, #fef9c3, #859bf8)',
    'radial-gradient(circle at 20% 80%, #fce7f3, #fc7cebc1)',
  ];

  return (
    <>
      <CursorAura />

      {/* 🔥 Progress Bar */}
      <motion.div
        className='fixed top-0 left-0 h-0.75 bg-black z-50'
        animate={{
          width: `${((activeIndex + 1) / sections.length) * 100}%`,
        }}
      />
      <div className='relative w-16 h-16 mb-4'>
        {/* 🔥 Light reflection */}
        <div
          className='
    absolute top-1 left-2 w-3 h-3 rounded-full
    bg-white/60 blur-sm
  '
        />
      </div>
      {/* 🔥 Background */}
      {/* <motion.div
        className='fixed inset-0 -z-10'
        animate={{ background: backgrounds[activeIndex] }}
        transition={{ duration: 0.8 }}
      /> */}

      {/* 🔥 Navbar */}
      <Navbar
        active={sections[activeIndex].id}
        onNavigate={(id: string) => {
          const index = sections.findIndex((s) => s.id === id);
          if (index !== -1) goToInstant(index);
        }}
      />

      {/* 🔥 Dot Nav */}
      {/* <DotNavigation
        active={sections[activeIndex].id}
        onClick={(id: string) => {
          const index = sections.findIndex((s) => s.id === id);
          if (index !== -1) goToInstant(index);
        }}
      /> */}

      {/* 🔥 Sections */}
      <motion.div
        className='fixed inset-0 overflow-hidden z-10 bg-white/20 backdrop-blur-xl'
        drag='y'
        dragDirectionLock
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        style={{ touchAction: 'none' }}
        onDragEnd={(e, info) => {
          if (isAnimating.current) return;

          if (info.offset.y < -80 && activeIndex < sections.length - 1) {
            goToSmooth(activeIndex + 1);
          }

          if (info.offset.y > 80 && activeIndex > 0) {
            goToSmooth(activeIndex - 1);
          }
        }}
      >
        <AnimatePresence mode='wait'>
          <Section
            key={sections[activeIndex].id}
            index={activeIndex}
            activeIndex={activeIndex}
          >
            {(() => {
              const ActiveComponent = sections[activeIndex].Component;
              return <ActiveComponent />;
            })()}
          </Section>
        </AnimatePresence>
        {activeIndex === 0 && (
          <ScrollArrow
            direction='down'
            onClick={() => goToSmooth(activeIndex + 1)}
          />
        )}

        {activeIndex === sections.length - 1 && (
          <ScrollArrow direction='up' onClick={() => goToSmooth(0)} />
        )}

        {activeIndex > 0 && activeIndex < sections.length - 1 && (
          <ScrollArrow
            direction='down' // 👈 choose what you prefer here
            onClick={() => goToSmooth(activeIndex + 1)}
          />
        )}
      </motion.div>
    </>
  );
}
