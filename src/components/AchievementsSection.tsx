import React, { useState } from 'react';
import { Award, CheckCircle2, Clock, Plus, Trash2, Edit3, ShieldAlert, Sparkles } from 'lucide-react';
import { useProfile } from '../context/ProfileContext';

interface HonestMilestone {
  title: string;
  category: string;
  timeframe: string;
  description: string;
  highlights: string[];
}

const HONEST_MILESTONES: HonestMilestone[] = [
  {
    title: 'B.Tech Computer Science Admission & Core Onboarding',
    category: 'Academic Milestone',
    timeframe: 'Year 1 / Semester 1',
    description:
      'Began rigorous undergraduate studies in Computer Science & Engineering, mastering discrete mathematics, problem-solving, and computational logic.',
    highlights: [
      'Active coursework in programming, calculus, and digital systems',
      'Maintaining consistent academic discipline and lab attendance'
    ]
  },
  {
    title: '100+ Hours of Python Programming & Scripting Practice',
    category: 'Skill Milestone',
    timeframe: 'Ongoing (2024 - 2025)',
    description:
      'Completed foundational exercises covering data structures, control flow, functions, object-oriented concepts, and basic error handling.',
    highlights: [
      'Solved introductory algorithmic challenges and script tasks',
      'Refactored procedural scripts into clean, reusable functions'
    ]
  },
  {
    title: 'Shipped First Working Applications: Grade & Basic Calculators',
    category: 'Project Milestone',
    timeframe: 'First-Year Term',
    description:
      'Engineered two end-to-end Python applications implementing algorithmic GPA calculations, heuristic study insights, and safe arithmetic parsing.',
    highlights: [
      'Integrated real math formulas into code logic',
      'Implemented defensive programming against zero-division errors'
    ]
  },
  {
    title: 'Active GitHub Workspace & Version Control Workflow',
    category: 'Developer Workflow',
    timeframe: 'Active',
    description:
      'Established regular Git version control practices, repository management, and structured commits at github.com/Raviteja13-2008.',
    highlights: [
      'Maintaining public repository for verified learning artifacts',
      'Writing meaningful commit messages and clean README documentation'
    ]
  }
];

export const AchievementsSection: React.FC = () => {
  const { certificatePlaceholders, addCertificatePlaceholder, removeCertificatePlaceholder } = useProfile();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTimeframe, setNewTimeframe] = useState('');
  const [newStatus, setNewStatus] = useState('Planned / In Progress');
  const [newDesc, setNewDesc] = useState('');

  const handleAddCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    addCertificatePlaceholder({
      title: newTitle.startsWith('[') ? newTitle : `[${newTitle}]`,
      timeframe: newTimeframe || 'Planned',
      statusText: newStatus,
      description: newDesc || 'Planned verification or learning milestone.',
      details: ['Targeted for upcoming semester evaluation']
    });

    setNewTitle('');
    setNewTimeframe('');
    setNewDesc('');
    setShowAddModal(false);
  };

  return (
    <section id="milestones" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>ACHIEVEMENTS & ROADMAP</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">TRANSPARENT RECORDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Honest Learning Milestones
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            I prioritize integrity over inflated resumes. As a first-year student, these are my
            authentic academic and programming achievements, alongside editable placeholders for
            future certifications currently underway.
          </p>
        </div>

        {/* Milestone Integrity Notice */}
        <div className="mb-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white font-medium">Anti-Fabrication Guarantee:</strong> No fake
            awards, mock corporate certifications, or fabricated trophies are listed here. Every
            entry represents genuine coursework, self-study milestones, or clearly marked future placeholders.
          </p>
        </div>

        {/* Part 1: Honest Accomplishments Timeline */}
        <div className="space-y-4 mb-16">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Completed & Ongoing Learning Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HONEST_MILESTONES.map((milestone, idx) => (
              <div
                key={milestone.title}
                className="p-5 rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-blue-400">{milestone.category}</span>
                    <span className="text-slate-400 font-mono">{milestone.timeframe}</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">{milestone.title}</h4>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {milestone.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  {milestone.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Future Certifications & Competitions Placeholders */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Future Certifications & Competitions (Underway)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Editable placeholders for credentials, courses, and hackathons currently in progress.
              </p>
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-medium transition-colors self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Placeholder</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificatePlaceholders.map(item => (
              <div
                key={item.id}
                className="p-5 rounded-2xl border border-dashed border-slate-700/80 bg-slate-950/50 hover:bg-slate-900/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono text-amber-400 font-semibold">
                      {item.statusText}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">{item.timeframe}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-100 font-mono mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 italic">
                    Editable placeholder
                  </span>
                  <button
                    onClick={() => removeCertificatePlaceholder(item.id)}
                    className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                    title="Remove placeholder"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal to Add New Certificate Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h4 className="text-base font-semibold text-white">Add Certificate Placeholder</h4>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddCertificate} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Certificate / Competition Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. [Python Certified Associate - In Progress]"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500 font-mono"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Target Timeframe
                  </label>
                  <input
                    type="text"
                    value={newTimeframe}
                    onChange={e => setNewTimeframe(e.target.value)}
                    placeholder="e.g. 2025"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Status Tag
                  </label>
                  <input
                    type="text"
                    value={newStatus}
                    onChange={e => setNewStatus(e.target.value)}
                    placeholder="Planned / In Progress"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Description & Focus
                </label>
                <textarea
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  rows={3}
                  placeholder="What topics or competencies are covered in this planned certification?"
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold"
                >
                  Save Placeholder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
