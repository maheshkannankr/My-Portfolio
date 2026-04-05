'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SkillGlassCard from '@/components/SkillGlassCard';
import { Braces, Code, Database, Server } from 'lucide-react';

const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: '/assets/skills/html.svg' },
      { name: 'CSS', icon: '/assets/skills/css.svg' },
      { name: 'SASS', icon: '/assets/skills/scss.svg' },
      { name: 'Tailwind', icon: '/assets/skills/tailwind.svg' },
      { name: 'React', icon: '/assets/skills/react.svg' },
      { name: 'React Native', icon: '/assets/skills/reactnative.svg' },
      { name: 'Next.js', icon: '/assets/skills/next.svg' },
      { name: 'Redux', icon: '/assets/skills/redux.svg' },
      { name: 'Zustand', icon: '/assets/skills/zustand.svg' },
      { name: 'Motion Framer', icon: '/assets/skills/motion.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '/assets/skills/node.svg' },
      { name: 'Java', icon: '/assets/skills/java.svg' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
      { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      { name: 'MongoDB', icon: '/assets/skills/mongo.svg' },
      { name: 'MySQL', icon: '/assets/skills/mysql.svg' },
      { name: 'Swagger', icon: '/assets/skills/swagger.svg' },
      { name: 'Postman', icon: '/assets/skills/postman.svg' },
      { name: 'Git', icon: '/assets/skills/git.svg' },
      { name: 'GitHub', icon: '/assets/skills/github.svg' },
      { name: 'Jira', icon: '/assets/skills/jira.svg' },
    ],
  },
];

const tabIcons: Record<string, any> = {
  Frontend: Code,
  Backend: Server,
  Languages: Braces,
  'Database & Tools': Database,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');
  const [direction, setDirection] = useState(1);

  const handleSwipe = (dir: 'left' | 'right') => {
    const currentIndex = skillsData.findIndex((g) => g.title === activeTab);

    let newIndex = currentIndex;

    if (dir === 'left' && currentIndex < skillsData.length - 1) {
      newIndex = currentIndex + 1;
      setDirection(1);
    }

    if (dir === 'right' && currentIndex > 0) {
      newIndex = currentIndex - 1;
      setDirection(-1);
    }

    setActiveTab(skillsData[newIndex].title);
  };

  const activeSkills = skillsData.find(
    (group) => group.title === activeTab,
  )?.skills;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <section className='relative min-h-screen flex justify-center px-6 pt-24'>
        <div className='max-w-7xl w-full'>
          {/* 🔥 TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-black/60 mb-10'
          >
            Skills
          </motion.h2>

          {/* 🔥 TABS */}
          <div className='flex flex-wrap gap-3 mb-10'>
            {skillsData.map((group) => {
              const Icon = tabIcons[group.title];

              return (
                <button
                  key={group.title}
                  onClick={() => {
                    const newIndex = skillsData.findIndex(
                      (g) => g.title === group.title,
                    );
                    const currentIndex = skillsData.findIndex(
                      (g) => g.title === activeTab,
                    );

                    setDirection(newIndex > currentIndex ? 1 : -1);
                    setActiveTab(group.title);
                  }}
                  className={`
    relative flex items-center gap-2 px-4 py-2 rounded-full text-sm overflow-hidden border transition-all duration-300
    ${
      activeTab === group.title
        ? 'text-white border-primary'
        : 'border-black/10 text-black/60 hover:bg-black/5'
    }
  `}
                >
                  {/* 🔥 Animated background */}
                  {activeTab === group.title && (
                    <motion.div
                      layoutId='activeTabIndicator'
                      className='absolute inset-0 rounded-full bg-primary'
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* 🔥 Content */}
                  <span className='relative z-10 flex items-center gap-2'>
                    <Icon size={16} />
                    <span className='hidden sm:inline'>{group.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <AnimatePresence mode='wait'>
            <motion.h6
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className='text-xl sm:hidden font-bold text-black/60 mb-10'
            >
              {activeTab}
            </motion.h6>
          </AnimatePresence>
          {/* 🔥 SKILLS GRID */}

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  handleSwipe('left');
                } else if (info.offset.x > 50) {
                  handleSwipe('right');
                }
              }}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center'
              style={{ touchAction: 'pan-y' }}
              dragElastic={0.2}
              dragMomentum={true}
            >
              {activeSkills?.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                >
                  <SkillGlassCard {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
}
