import React from 'react';
import { GraduationCap, Target, Compass, Sparkles, BookOpen, Edit3, ArrowUpRight } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

export const AboutSection: React.FC = () => {
  const { profile, setIsEditModalOpen } = useProfile();

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>ABOUT ME</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">FOUNDATIONS & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Building Strong Computer Science Fundamentals
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            As a first-year Computer Science undergraduate, my current priority is building deep,
            unshakeable foundations in algorithmic thinking, data structures, and Python programming
            while actively exploring the rapid evolution of artificial intelligence.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Profile & Education Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Academic Status</h3>
                    <p className="text-xs text-slate-400">{profile.degree}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditModalOpen(true)}
                  className="p-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                  title="Edit education details"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              {/* Education Breakdown */}
              <div className="mt-5 space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <span className="text-xs text-slate-400 block font-medium">Institution / University</span>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-100 font-mono">
                      {profile.collegeName}
                    </span>
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="text-[11px] text-blue-400 hover:underline inline-flex items-center gap-0.5"
                    >
                      Edit <Edit3 className="w-2.5 h-2.5" />
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-400 block">
                    Placeholder for your college name (editable anytime)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                    <span className="text-xs text-slate-400 block font-medium">Current Standing</span>
                    <span className="text-sm font-semibold text-slate-100 font-mono">
                      1st Year (B.Tech)
                    </span>
                    <span className="text-[11px] text-slate-400 block">CSE Core Track</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                    <span className="text-xs text-slate-400 block font-medium">Graduation Year</span>
                    <span className="text-sm font-semibold text-slate-100 font-mono">
                      {profile.graduationYear}
                    </span>
                    <span className="text-[11px] text-slate-400 block">4-Year Program</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <span className="text-xs text-slate-400 block font-medium">Registration / Roll No.</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-200">
                      {profile.registrationNo}
                    </span>
                    <button
                      onClick={() => setIsEditModalOpen(true)}
                      className="text-[11px] text-blue-400 hover:underline"
                    >
                      Edit Placeholder
                    </button>
                  </div>
                </div>
              </div>

              {/* Coursework Focus */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  First-Year Core Coursework Focus:
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
                    Python Programming
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
                    Discrete Mathematics
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
                    Digital Logic Design
                  </span>
                  <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 font-mono text-[11px]">
                    Problem Solving with C/Python
                  </span>
                </div>
              </div>
            </div>

            {/* Honest Mindset Box */}
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-blue-950/20 via-slate-900/60 to-purple-950/20 p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
                <Compass className="w-4 h-4" />
                <span>My Learning Philosophy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                "I believe in honest progress over premature hype. Rather than claiming years of expertise,
                I focus on writing readable code, understanding mathematical underpinnings, and building
                functional projects that reinforce every concept I study."
              </p>
            </div>
          </div>

          {/* Right Column: Interests & Career Goals */}
          <div className="lg:col-span-7 space-y-8">
            {/* Interests Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Areas of Active Interest</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.interests.map(interest => (
                  <div
                    key={interest.title}
                    className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-700 transition-all space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-100">{interest.title}</h4>
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {interest.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {interest.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-slate-400 bg-slate-950/80 border border-slate-800 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Goals */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Long-Term Career Goals</h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                My roadmap is designed around disciplined progression from foundational computer science
                concepts to production-ready AI engineering:
              </p>

              <div className="space-y-3 pt-1">
                {profile.careerGoals.map((goal, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800/70"
                  >
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{index + 1}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
