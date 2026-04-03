import AboutSection from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export const sections = [
  { id: 'home', Component: Hero },
  { id: 'about', Component: AboutSection },
  { id: 'skills', Component: Skills },
  { id: 'projects', Component: Projects },
  { id: 'experience', Component: Experience },
  { id: 'contact', Component: Contact },
];
