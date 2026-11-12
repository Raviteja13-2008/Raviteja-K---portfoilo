import React, { useState } from 'react';
import { ArrowRight, Terminal, Github, Sparkles, Code2, Edit3, Check, Copy } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const Hero: React.FC = () => {
  const { profile, setIsEditModalOpen } = useProfile();
  const [copiedBio, setCopiedBio] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string | null>(null);

  const runSnippet = () => {
    setTerminalOutput(
      `[AI Engine Initialized]\n>>> Student: ${profile.name}\n>>> Status: ${profile.academicStatus}\n>>> Target: AI / Machine Learning Engineer\n>>> Focus: Python Algorithms, Neural Foundations & Modern UI\n>>> Status Code: 200 (Ready to Collaborate)`
    );
  };

  const copyQuickBio = async () => {
    try {
      await navigator.clipboard.writeText(
        `${profile.name} - ${profile.role} | ${profile.academicStatus} | GitHub: ${profile.github}`
      );
      setCopiedBio(true);
      setTimeout(() => setCopiedBio(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Ambient electric blue and purple background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Profile Avatar & Academic Status */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 group">
                {/* Subtle ambient electric glow behind avatar */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500/50 via-indigo-500/40 to-purple-500/50 blur-md pointer-events-none group-hover:opacity-100 transition-opacity" />

                {/* Circular container with professional border & subtle shadow */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-400/50 shadow-2xl shadow-blue-950/80 ring-4 ring-slate-900/90 bg-slate-950">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-12_at_1.37.32_PM_4268dfcc.jpeg"
                    alt={`${profile.name} - Profile Photo`}
                    className="w-full h-full object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-300"
                    loading="eager"
                    onError={(e) => {
                      if (!e.currentTarget.src.includes('/public/')) {
                        e.currentTarget.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-12_at_1.37.32_PM_4268dfcc.jpeg';
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                {/* Clean unboxed kicker with dot separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                  <span className="text-blue-400 font-semibold">{profile.academicStatus}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>Computer Science & Engineering</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-purple-400">Class of {profile.graduationYear}</span>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="text-slate-300">Raviteja K</span>
                  <span className="text-slate-600">/</span>
                  <span className="text-blue-400/90">@Raviteja13-2008</span>
                </div>
              </div>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Hello, I am{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                {profile.name}
              </span>
              .
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-2">
                Aspiring AI Engineer & Developer.
              </span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl">
              I am a first-year Computer Science undergraduate passionate about building
              intelligent computational solutions. Currently cultivating rigorous fundamentals in{' '}
              <strong className="text-blue-300 font-semibold">Python</strong>, exploring{' '}
              <strong className="text-purple-300 font-semibold">Artificial Intelligence & GenAI</strong>,
              and creating responsive web interfaces from first principles.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all hover:border-slate-600"
              >
                <Github className="w-4 h-4 text-blue-400" />
                <span>GitHub Profile</span>
              </a>

              <button
                onClick={() => setIsEditModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-xl transition-colors"
                title="Edit placeholders for College, Email, and LinkedIn"
              >
                <Edit3 className="w-3.5 h-3.5 text-blue-400" />
                <span>Edit Placeholders</span>
              </button>
            </div>

            {/* Quick Unboxed Metadata Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="font-mono text-slate-400">College:</span>
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="text-blue-400/90 hover:text-blue-300 underline underline-offset-4 decoration-dashed transition-colors"
              >
                {profile.collegeName}
              </button>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <span className="font-mono text-slate-400">Status:</span>
              <span className="text-slate-300">Open to mentorship & collaborative learning</span>
            </div>
          </div>

          {/* Right Column: High-Tech Developer Terminal Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl border border-slate-800/90 bg-slate-950/80 backdrop-blur-xl p-5 shadow-2xl overflow-hidden group hover:border-slate-700/80 transition-all">
              {/* Electric corner glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-blue-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    raviteja_profile.py
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyQuickBio}
                    className="p-1 text-slate-500 hover:text-slate-300 transition-colors"
                    title="Copy profile summary"
                  >
                    {copiedBio ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={runSnippet}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[11px] font-mono hover:bg-blue-600/30 transition-colors"
                  >
                    <Terminal className="w-3 h-3" />
                    <span>Run</span>
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-1 overflow-x-auto">
                <p className="text-slate-500"># Developer Profile & Current Trajectory</p>
                <p>
                  <span className="text-purple-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">"name"</span>: <span className="text-emerald-300">"{profile.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">"role"</span>: <span className="text-emerald-300">"{profile.role}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">"academic_year"</span>: <span className="text-amber-300">1</span>, <span className="text-slate-500"># B.Tech CSE</span>
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">"primary_stack"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"HTML5"</span>, <span className="text-emerald-300">"CSS3"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">"specialization"</span>: <span className="text-emerald-300">"Generative AI & ML Foundations"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-blue-300">"active_projects"</span>: [
                </p>
                <p className="pl-8 text-slate-300">
                  <span className="text-emerald-300">"Student Grade Calculator"</span>, <span className="text-slate-500"># GenAI / Python</span>
                </p>
                <p className="pl-8 text-slate-300">
                  <span className="text-emerald-300">"Python Basic Calculator"</span>  <span className="text-slate-500"># In Progress</span>
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-blue-300">"github"</span>: <span className="text-indigo-300">"Raviteja13-2008"</span>
                </p>
                <p>&#125;</p>
              </div>

              {/* Output Preview */}
              {terminalOutput && (
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 bg-slate-900/90 p-2.5 rounded-lg whitespace-pre-line animate-in fade-in duration-150">
                  {terminalOutput}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-width KPI / Highlights Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Academic Status</span>
            <div className="text-lg sm:text-xl font-bold text-white">1st Year B.Tech</div>
            <span className="text-xs text-slate-400 block">Computer Science & Eng.</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Programming Focus</span>
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-mono">
              Python 3.x
            </div>
            <span className="text-xs text-slate-400 block">Syntax, OOP & Logic</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Domain Track</span>
            <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">
              Generative AI & ML
            </div>
            <span className="text-xs text-slate-400 block">LLMs & Applied Systems</span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 block font-medium">Verified Codebase</span>
            <div className="text-lg sm:text-xl font-bold text-white font-mono">
              Raviteja13-2008
            </div>
            <span className="text-xs text-slate-400 block">Active GitHub Workspace</span>
          </div>
        </div>
      </div>
    </section>
  );
};
