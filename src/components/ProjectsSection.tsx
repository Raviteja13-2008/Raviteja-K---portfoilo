import React, { useState } from 'react';
import { FolderGit2, Calculator, Terminal, Github, ExternalLink, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { InteractiveGradeCalculator } from './InteractiveGradeCalculator';
import { InteractivePythonCalculator } from './InteractivePythonCalculator';
import { useProfile } from '../context/ProfileContext';

export const ProjectsSection: React.FC = () => {
  const { profile } = useProfile();
  const [selectedProject, setSelectedProject] = useState<'grade' | 'basic'>('grade');

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>PORTFOLIO PROJECTS</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">WORKING APPLICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Real Projects & Hands-On Engineering
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            No dummy mockups or fabricated systems. These are my authentic academic and self-directed
            learning projects written in Python, featuring fully interactive simulators right below.
          </p>
        </div>

        {/* Project Selector Cards / Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {/* Card 1: Student Grade Calculator */}
          <div
            onClick={() => setSelectedProject('grade')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all text-left relative overflow-hidden flex flex-col justify-between ${
              selectedProject === 'grade'
                ? 'bg-slate-900 border-blue-500/70 shadow-xl shadow-blue-500/10'
                : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
            }`}
          >
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Completed / Interactive Learning Project
                </span>
                <span className="text-xs font-mono text-slate-400">01</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                Student Grade Calculator
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                An academic grading system calculating weighted GPAs, subject percentages, and
                generating heuristic GenAI-assisted study advice tailored to student performance gaps.
              </p>

              {/* Stack & Metadata */}
              <div className="flex flex-wrap gap-2 text-xs font-mono mb-4">
                <span className="px-2 py-0.5 rounded bg-slate-950 text-blue-300 border border-slate-800">
                  Python 3
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-950 text-purple-300 border border-slate-800">
                  GenAI Heuristics
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                  GPA Algorithms
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Features interactive simulator & code</span>
              <span className={`font-semibold ${selectedProject === 'grade' ? 'text-blue-400' : 'text-slate-400'}`}>
                {selectedProject === 'grade' ? 'Currently Active' : 'Click to View'} &rarr;
              </span>
            </div>
          </div>

          {/* Card 2: Python Basic Calculator */}
          <div
            onClick={() => setSelectedProject('basic')}
            className={`cursor-pointer p-6 rounded-2xl border transition-all text-left relative overflow-hidden flex flex-col justify-between ${
              selectedProject === 'basic'
                ? 'bg-slate-900 border-amber-500/70 shadow-xl shadow-amber-500/10'
                : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
            }`}
          >
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  In Progress (Active Development)
                </span>
                <span className="text-xs font-mono text-slate-400">02</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                Python Basic Calculator
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                A modular arithmetic calculation engine in Python handling core operations (+, -, *, /)
                with robust error handling for division by zero and calculation history tracking.
              </p>

              {/* Stack & Metadata */}
              <div className="flex flex-wrap gap-2 text-xs font-mono mb-4">
                <span className="px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-800">
                  Python CLI / Engine
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                  Exception Handling
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                  Modular Architecture
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-400">Phase 1 interactive engine ready</span>
              <span className={`font-semibold ${selectedProject === 'basic' ? 'text-amber-400' : 'text-slate-400'}`}>
                {selectedProject === 'basic' ? 'Currently Active' : 'Click to View'} &rarr;
              </span>
            </div>
          </div>
        </div>

        {/* Live Interactive Project Viewer */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <h3 className="text-lg font-bold text-white">
                {selectedProject === 'grade'
                  ? 'Project Showcase: Student Grade Calculator'
                  : 'Project Showcase: Python Basic Calculator (In Progress)'}
              </h3>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source on GitHub ({profile.github.replace('https://github.com/', '')})</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Render Active Interactive Tool */}
          {selectedProject === 'grade' ? (
            <InteractiveGradeCalculator />
          ) : (
            <InteractivePythonCalculator />
          )}

          {/* Project Architecture & Learnings Note */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-slate-300 block">Problem Solved</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {selectedProject === 'grade'
                  ? 'Manual GPA calculation is error-prone. This script automates credit-weighted point aggregation and generates constructive study recommendations.'
                  : 'Provides a clean, modular calculation engine with clear separation between arithmetic logic, exception trapping, and state history.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-slate-300 block">Key Python Principles</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {selectedProject === 'grade'
                  ? 'Dataclasses, properties, list comprehensions, sorting dictionaries by values, and formatted f-strings.'
                  : 'Try/except blocks, catching ZeroDivisionError explicitly, instance state management, and docstrings.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-slate-300 block">Repository Note</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Verified genuine student project code. No broken links or fictional dependencies. You can
                copy the source code directly or test the interactive runner above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
