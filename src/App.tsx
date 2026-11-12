import React, { useState, useEffect } from 'react';
import { ProfileProvider } from './context/ProfileContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditProfileModal } from './components/EditProfileModal';

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'milestones', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200">
      {/* Subtle background ambient mesh */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(139,92,246,0.06),transparent)]" />
      <div className="fixed inset-0 pointer-events-none -z-30 bg-[#070b14]" />

      <Navbar activeSection={activeSection} />

      <main>
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Skills */}
        <SkillsSection />

        {/* 4. Projects */}
        <ProjectsSection />

        {/* 5. Achievements */}
        <AchievementsSection />

        {/* 6. Contact */}
        <ContactSection />
      </main>

      <Footer />

      {/* Global Edit Profile / Placeholders Modal */}
      <EditProfileModal />
    </div>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <PortfolioApp />
    </ProfileProvider>
  );
}
