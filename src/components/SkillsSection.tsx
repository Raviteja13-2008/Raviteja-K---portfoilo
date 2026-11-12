import React, { useState } from 'react';
import { Code2, Layout, Sparkles, Terminal, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { SkillItem } from '../types/portfolio';

const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Python',
    category: 'core',
    level: 'Beginner / First-Year Core',
    proficiencyScore: 55,
    description:
      'Core programming language for problem-solving, algorithmic thinking, and scripting. Comfortable with procedural syntax, modular functions, control flow, and fundamental object-oriented patterns.',
    topics: [
      'Variables & Data Types',
      'Lists, Tuples, Dictionaries & Sets',
      'Control Flow & Loops (for, while)',
      'Functions & Scope Management',
      'Basic Object-Oriented Programming (Classes & Methods)',
      'File I/O & Exception Handling (try-except)',
      'Algorithmic Logic for Calculators & Utilities'
    ],
    badgeColor: 'text-blue-400'
  },
  {
    name: 'HTML5',
    category: 'web',
    level: 'Foundational',
    proficiencyScore: 70,
    description:
      'Structuring clean, accessible, and semantic web documents. Understanding HTML standards, forms, proper document hierarchies, and developer devtools inspection.',
    topics: [
      'Semantic Structure (<header>, <nav>, <main>, <section>, <article>)',
      'Form Elements, Inputs & Client-Side Validation',
      'Accessibility (a11y) & ARIA Attributes',
      'Responsive Meta Viewports & Document Head Meta Tags',
      'Clean Element Hierarchy & DOM Organization'
    ],
    badgeColor: 'text-amber-400'
  },
  {
    name: 'CSS3',
    category: 'web',
    level: 'Foundational',
    proficiencyScore: 65,
    description:
      'Styling responsive, modern user interfaces. Proficient in layout systems like CSS Flexbox and Grid, mobile-first design, color systems, and modern CSS frameworks like Tailwind CSS.',
    topics: [
      'Flexbox & Grid Layout Architecture',
      'Responsive Media Queries & Mobile-First Breakpoints',
      'CSS Custom Properties (Variables) & Theming',
      'Glassmorphism, Backdrop Filters & Subtle Transitions',
      'Tailwind CSS Utility-First Styling Workflow'
    ],
    badgeColor: 'text-cyan-400'
  },
  {
    name: 'Basic Generative AI',
    category: 'ai',
    level: 'Foundational & Exploring',
    proficiencyScore: 45,
    description:
      'Conceptual understanding of modern Foundation Models, prompt design techniques, tokenization, context windows, and utilizing AI APIs for software augmentation and intelligent tools.',
    topics: [
      'Prompt Engineering & Structured Output Formatting',
      'LLM Mechanics (Tokens, Temperature, Context Windows)',
      'System Prompts & Role-Based Prompting',
      'Integrating AI APIs with Python Scripts',
      'Heuristic & AI-Augmented Application Design'
    ],
    badgeColor: 'text-purple-400'
  }
];

const ROADMAP_ITEMS = [
  {
    title: 'Data Structures & Algorithms',
    timeline: 'Semester 2',
    topics: 'Arrays, Stacks, Queues, Linked Lists, Binary Trees, Time/Space Complexity (Big-O)'
  },
  {
    title: 'Python for Scientific Computing',
    timeline: 'Upcoming',
    topics: 'NumPy arrays, Pandas DataFrame manipulation, Matplotlib/Seaborn visualization'
  },
  {
    title: 'Git & GitHub Collaboration',
    timeline: 'Ongoing Practice',
    topics: 'Branching, Pull Requests, Commit hygiene, Semantic versioning, Open Source triage'
  },
  {
    title: 'RESTful APIs & Backend Foundations',
    timeline: 'Planned',
    topics: 'HTTP methods, JSON serialization, Flask/FastAPI microservices, Client-Server architecture'
  }
];

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
            <span>TECHNICAL SKILLS</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">HONEST EVALUATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Current Skillset & Learning Roadmap
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            A transparent overview of my current competencies as a first-year student.
            No inflated claims—just clear tracking of what I know, what I build with,
            and what I am actively learning.
          </p>
        </div>

        {/* 4 Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SKILLS_DATA.map(skill => {
            const isSelected = selectedSkill.name === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                className={`cursor-pointer p-5 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-blue-500/60 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-400">{skill.level}</span>
                    <span className={`text-xs font-mono font-bold ${skill.badgeColor}`}>
                      {skill.proficiencyScore}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  {/* Subtle Progress Bar */}
                  <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.proficiencyScore}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-[11px] text-slate-400">
                    <span>{skill.topics.length} key concepts</span>
                    <span className="text-blue-400 hover:text-blue-300">View Details &rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Deep Dive Detail Pane */}
        <div className="p-6 md:p-8 rounded-2xl border border-slate-800 bg-slate-950/70 backdrop-blur-md mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                <span>SKILL DEEP DIVE</span>
                <span aria-hidden="true" className="text-slate-600">/</span>
                <span className="text-slate-300">{selectedSkill.level}</span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                {selectedSkill.name}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-slate-400">Status: Active Study & Project Application</span>
              <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Foundational Phase
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
            <div className="md:col-span-5 space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Overview & Practical Application
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedSkill.description}
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                <span className="font-semibold text-slate-300 block">Where this is applied:</span>
                <span>
                  {selectedSkill.name === 'Python' && 'Powers both the Student Grade Calculator and Python Basic Calculator projects.'}
                  {selectedSkill.name === 'HTML5' && 'Used in semantic layout structuring and web application templates.'}
                  {selectedSkill.name === 'CSS3' && 'Implemented across responsive interfaces, dark themes, and flex/grid systems.'}
                  {selectedSkill.name === 'Basic Generative AI' && 'Integrated into the study recommendation module in the Student Grade Calculator.'}
                </span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Topics Mastered & Currently Practicing
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSkill.topics.map(topic => (
                  <div
                    key={topic}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Current Learning Roadmap */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-4 h-4 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Next Up on My Learning Roadmap</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROADMAP_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className="p-4 rounded-xl border border-slate-800/70 bg-slate-900/30 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-purple-400">Step 0{idx + 1}</span>
                  <span className="text-slate-400">{item.timeline}</span>
                </div>
                <h4 className="text-sm font-semibold text-slate-200">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
