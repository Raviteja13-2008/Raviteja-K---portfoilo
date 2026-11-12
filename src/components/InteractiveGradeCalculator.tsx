import React, { useState, useMemo } from 'react';
import { Plus, Trash2, RotateCcw, Copy, Check, Calculator, Sparkles, BookOpen } from 'lucide-react';

interface SubjectEntry {
  id: string;
  name: string;
  credits: number;
  marks: number;
}

const DEFAULT_SUBJECTS: SubjectEntry[] = [
  { id: '1', name: 'Python Programming', credits: 4, marks: 92 },
  { id: '2', name: 'Discrete Mathematics', credits: 4, marks: 84 },
  { id: '3', name: 'Digital Logic & Design', credits: 3, marks: 78 },
  { id: '4', name: 'Engineering Physics', credits: 3, marks: 88 },
  { id: '5', name: 'Intro to GenAI & Computing', credits: 2, marks: 95 }
];

export const InteractiveGradeCalculator: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectEntry[]>(DEFAULT_SUBJECTS);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');

  const addSubject = () => {
    const newId = String(Date.now());
    setSubjects(prev => [
      ...prev,
      { id: newId, name: `Course Elective ${prev.length + 1}`, credits: 3, marks: 80 }
    ]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects(prev => prev.filter(s => s.id !== id));
  };

  const updateSubject = (id: string, field: keyof SubjectEntry, val: string | number) => {
    setSubjects(prev =>
      prev.map(s => {
        if (s.id !== id) return s;
        if (field === 'marks') {
          const num = Math.max(0, Math.min(100, Number(val) || 0));
          return { ...s, marks: num };
        }
        if (field === 'credits') {
          const num = Math.max(1, Math.min(6, Number(val) || 1));
          return { ...s, credits: num };
        }
        return { ...s, [field]: val };
      })
    );
  };

  const resetDefaults = () => {
    setSubjects(DEFAULT_SUBJECTS);
  };

  // Grading logic
  const getGradePoint = (marks: number) => {
    if (marks >= 90) return { grade: 'O', point: 10, label: 'Outstanding' };
    if (marks >= 80) return { grade: 'A+', point: 9, label: 'Excellent' };
    if (marks >= 70) return { grade: 'A', point: 8, label: 'Very Good' };
    if (marks >= 60) return { grade: 'B+', point: 7, label: 'Good' };
    if (marks >= 50) return { grade: 'B', point: 6, label: 'Above Average' };
    if (marks >= 40) return { grade: 'C', point: 5, label: 'Pass' };
    return { grade: 'F', point: 0, label: 'Re-appear' };
  };

  const stats = useMemo(() => {
    let totalCredits = 0;
    let weightedPoints = 0;
    let totalMarks = 0;

    subjects.forEach(s => {
      const { point } = getGradePoint(s.marks);
      totalCredits += s.credits;
      weightedPoints += point * s.credits;
      totalMarks += s.marks;
    });

    const gpa = totalCredits > 0 ? (weightedPoints / totalCredits).toFixed(2) : '0.00';
    const avgPercentage = subjects.length > 0 ? (totalMarks / subjects.length).toFixed(1) : '0';

    // Algorithmic study guidance
    const lowest = [...subjects].sort((a, b) => a.marks - b.marks)[0];
    const highest = [...subjects].sort((a, b) => b.marks - a.marks)[0];

    return {
      gpa,
      totalCredits,
      weightedPoints,
      avgPercentage,
      lowest,
      highest
    };
  }, [subjects]);

  const pythonScript = `"""
Student Grade Calculator & Academic Study Insights
Author: Raviteja K (Aspiring AI Engineer)
Tech Stack: Python 3, Algorithmic Grading Logic, Heuristic Study Recommendations
"""

from dataclasses import dataclass
from typing import List, Dict

@dataclass
class Subject:
    name: str
    credits: int
    marks: float

    @property
    def grade_point(self) -> int:
        if self.marks >= 90: return 10
        elif self.marks >= 80: return 9
        elif self.marks >= 70: return 8
        elif self.marks >= 60: return 7
        elif self.marks >= 50: return 6
        elif self.marks >= 40: return 5
        return 0

    @property
    def letter_grade(self) -> str:
        grades = {10: "O", 9: "A+", 8: "A", 7: "B+", 6: "B", 5: "C", 0: "F"}
        return grades.get(self.grade_point, "F")

class AcademicPerformanceEngine:
    def __init__(self, student_name: str = "Raviteja K"):
        self.student_name = student_name
        self.subjects: List[Subject] = []

    def add_subject(self, name: str, credits: int, marks: float):
        self.subjects.append(Subject(name=name, credits=credits, marks=marks))

    def calculate_gpa(self) -> float:
        total_credits = sum(s.credits for s in self.subjects)
        if total_credits == 0:
            return 0.0
        total_points = sum(s.grade_point * s.credits for s in self.subjects)
        return round(total_points / total_credits, 2)

    def generate_study_insights(self) -> Dict[str, str]:
        """GenAI-inspired heuristic recommendation engine."""
        if not self.subjects:
            return {"status": "No courses recorded"}
        
        lowest = min(self.subjects, key=lambda s: s.marks)
        highest = max(self.subjects, key=lambda s: s.marks)
        gpa = self.calculate_gpa()

        advice = (
            f"Strongest domain is {highest.name} ({highest.marks}%). "
            f"Prioritize focused review for {lowest.name} ({lowest.marks}%) "
            f"to boost overall GPA from {gpa} towards 9.5+."
        )
        return {
            "gpa": str(gpa),
            "top_subject": highest.name,
            "focus_subject": lowest.name,
            "recommendation": advice
        }

if __name__ == "__main__":
    calc = AcademicPerformanceEngine()
    calc.add_subject("Python Programming", credits=4, marks=92.0)
    calc.add_subject("Discrete Mathematics", credits=4, marks=84.0)
    calc.add_subject("Digital Logic", credits=3, marks=78.0)
    
    print(f"Computed SGPA: {calc.calculate_gpa()}")
    print("Insights:", calc.generate_study_insights()["recommendation"])
`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(pythonScript);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur-md overflow-hidden shadow-2xl">
      {/* Top Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-800/80 bg-slate-950/60">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              Student Grade Calculator
              <span className="text-xs font-normal text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                Interactive Demo
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Python Algorithm & GenAI-Assisted Study Recommendations
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'demo'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'code'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Python Source
          </button>
        </div>
      </div>

      {activeTab === 'demo' ? (
        <div className="p-5 md:p-6 space-y-6">
          {/* Summary Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Calculated SGPA</span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-mono">
                {stats.gpa}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Scale: 10.00</span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Average Score</span>
              <span className="text-2xl font-bold text-slate-100 font-mono">
                {stats.avgPercentage}%
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Across all subjects</span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Total Credits</span>
              <span className="text-2xl font-bold text-slate-100 font-mono">
                {stats.totalCredits}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">Earned Points: {stats.weightedPoints}</span>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block mb-1">Classification</span>
              <span className="text-sm font-semibold text-emerald-400 block truncate">
                {Number(stats.gpa) >= 8.5 ? 'First Class Distinction' : Number(stats.gpa) >= 7.0 ? 'First Class' : 'Second Class'}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">{subjects.length} Course Units</span>
            </div>
          </div>

          {/* Subject Rows Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Enrolled Courses & Marks
              </h5>
              <div className="flex items-center gap-2">
                <button
                  onClick={resetDefaults}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
                  title="Reset to default courses"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
                <button
                  onClick={addSubject}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-md text-xs font-medium transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Course
                </button>
              </div>
            </div>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {subjects.map(subject => {
                const gradeInfo = getGradePoint(subject.marks);
                return (
                  <div
                    key={subject.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg bg-slate-950/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors"
                  >
                    <div className="flex-1 min-w-[140px]">
                      <input
                        type="text"
                        value={subject.name}
                        onChange={e => updateSubject(subject.id, 'name', e.target.value)}
                        className="w-full bg-transparent text-sm font-medium text-slate-200 focus:outline-none focus:border-b focus:border-blue-500"
                        placeholder="Course Name"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Credits Input */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-500">Credits:</span>
                        <input
                          type="number"
                          min="1"
                          max="6"
                          value={subject.credits}
                          onChange={e => updateSubject(subject.id, 'credits', e.target.value)}
                          className="w-14 px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-center text-slate-200 font-mono focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      {/* Marks Input */}
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-500">Marks:</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={subject.marks}
                          onChange={e => updateSubject(subject.id, 'marks', e.target.value)}
                          className="w-16 px-2 py-1 bg-slate-900 border border-slate-800 rounded text-xs text-center text-slate-200 font-mono focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      {/* Grade Badge */}
                      <div className="w-16 text-right">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {gradeInfo.grade} ({gradeInfo.point}pt)
                        </span>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => removeSubject(subject.id)}
                        disabled={subjects.length <= 1}
                        className="p-1.5 text-slate-500 hover:text-red-400 transition-colors disabled:opacity-30 disabled:hover:text-slate-500"
                        title="Remove Course"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI-Assisted Recommendation Card */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-950/50 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-semibold text-purple-300">
                GenAI & Heuristic Study Recommendation
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Based on your current distribution, you excel in{' '}
              <strong className="text-blue-300">{stats.highest?.name} ({stats.highest?.marks}%)</strong>.
              To reach a 9.5+ target SGPA, allocate an additional 3–4 weekly practice hours to{' '}
              <strong className="text-purple-300">{stats.lowest?.name} ({stats.lowest?.marks}%)</strong>{' '}
              focusing on fundamental practice problems and past exam algorithms.
            </p>
          </div>
        </div>
      ) : (
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Python 3.x Implementation with Type Hints & OOP</span>
            </div>
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Python Code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-[11px] sm:text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed max-h-96">
            <code>{pythonScript}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
