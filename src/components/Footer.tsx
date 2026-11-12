import React from 'react';
import { Github, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const Footer: React.FC = () => {
  const { profile, setIsEditModalOpen } = useProfile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>{profile.name}</span>
              <span className="text-xs font-mono text-blue-400 font-normal">
                · {profile.role}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              First-Year B.Tech Computer Science student building foundational AI & Python software.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#milestones" className="hover:text-white transition-colors">Milestones</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Customize Placeholders
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with clean code, React & Tailwind CSS</span>
            <span aria-hidden="true">·</span>
            <span>Zero synthetic slop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
