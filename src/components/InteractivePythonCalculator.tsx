import React, { useState } from 'react';
import { Terminal, Copy, Check, Clock, AlertTriangle, Play } from 'lucide-react';

export const InteractivePythonCalculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [history, setHistory] = useState<string[]>([
    '>>> calc = BasicCalculator()',
    '>>> calc.add(15, 27) -> 42.0',
    '>>> calc.divide(100, 4) -> 25.0'
  ]);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'demo' | 'code'>('demo');

  const handleNumber = (digit: string) => {
    setDisplay(prev => (prev === '0' || prev === 'Error' ? digit : prev + digit));
  };

  const handleOperator = (op: string) => {
    if (display === 'Error') return;
    setEquation(`${display} ${op} `);
    setDisplay('0');
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleCalculate = () => {
    if (!equation) return;
    const parts = equation.trim().split(' ');
    if (parts.length < 2) return;

    const num1 = parseFloat(parts[0]);
    const op = parts[1];
    const num2 = parseFloat(display);

    let result: number | string = 0;
    let logMsg = '';

    if (op === '/' && num2 === 0) {
      result = 'Error';
      logMsg = `>>> ZeroDivisionError: float division by zero [calc.divide(${num1}, 0)]`;
    } else {
      switch (op) {
        case '+':
          result = num1 + num2;
          logMsg = `>>> calc.add(${num1}, ${num2}) -> ${result}`;
          break;
        case '-':
          result = num1 - num2;
          logMsg = `>>> calc.subtract(${num1}, ${num2}) -> ${result}`;
          break;
        case '*':
          result = num1 * num2;
          logMsg = `>>> calc.multiply(${num1}, ${num2}) -> ${result}`;
          break;
        case '/':
          result = Number((num1 / num2).toFixed(6));
          logMsg = `>>> calc.divide(${num1}, ${num2}) -> ${result}`;
          break;
        default:
          return;
      }
    }

    setDisplay(String(result));
    setEquation('');
    setHistory(prev => [logMsg, ...prev.slice(0, 5)]);
  };

  const pythonScript = `"""
Python Basic Calculator (In Progress)
Author: Raviteja K (Aspiring AI Engineer)
Status: Under Active Development - Phase 1 (Core Arithmetic Engine)
Roadmap: Adding Memory Registers & Scientific Extensions
"""

from typing import Union, List

class BasicCalculator:
    """A modular arithmetic calculator engine with error handling and history."""

    def __init__(self):
        self.history: List[str] = []
        self._last_result: float = 0.0

    def add(self, a: float, b: float) -> float:
        result = a + b
        self._record(f"{a} + {b} = {result}")
        return result

    def subtract(self, a: float, b: float) -> float:
        result = a - b
        self._record(f"{a} - {b} = {result}")
        return result

    def multiply(self, a: float, b: float) -> float:
        result = a * b
        self._record(f"{a} * {b} = {result}")
        return result

    def divide(self, a: float, b: float) -> Union[float, str]:
        """Safely divides a by b, catching ZeroDivisionError."""
        try:
            if b == 0:
                raise ZeroDivisionError("Cannot divide by zero")
            result = a / b
            self._record(f"{a} / {b} = {result}")
            return result
        except ZeroDivisionError as err:
            self._record(f"ERROR: {a} / {b} -> {err}")
            return f"Error: {err}"

    def _record(self, entry: str):
        self.history.append(entry)

    def print_history(self):
        print("=== Calculation History ===")
        for idx, entry in enumerate(self.history, 1):
            print(f"[{idx}] {entry}")

# --- IN PROGRESS EXTENSION (Phase 2):
# def power(self, base: float, exp: float) -> float: ...
# def modulo(self, a: float, b: float) -> float: ...
# class ScientificCalculator(BasicCalculator): ...
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
          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              Python Basic Calculator
              <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" />
                In Progress
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              Modular arithmetic engine with robust exception handling and history stack
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'demo'
                ? 'bg-amber-600/80 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Terminal
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeTab === 'code'
                ? 'bg-amber-600/80 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Python Source
          </button>
        </div>
      </div>

      {activeTab === 'demo' ? (
        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Calculator Keypad Area (5 cols) */}
          <div className="md:col-span-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between">
            {/* Display screen */}
            <div className="mb-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800 font-mono text-right">
              <div className="text-xs text-slate-400 h-4">{equation}</div>
              <div className="text-2xl font-bold text-slate-100 truncate">{display}</div>
            </div>

            {/* Keypad Grid */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={handleClear}
                className="col-span-2 p-2.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-medium font-mono transition-colors"
              >
                CLEAR (AC)
              </button>
              <button
                onClick={() => handleOperator('/')}
                className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-blue-400 text-sm font-bold font-mono transition-colors"
              >
                /
              </button>
              <button
                onClick={() => handleOperator('*')}
                className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-blue-400 text-sm font-bold font-mono transition-colors"
              >
                *
              </button>

              {['7', '8', '9'].map(num => (
                <button
                  key={num}
                  onClick={() => handleNumber(num)}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium font-mono transition-colors"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleOperator('-')}
                className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-blue-400 text-sm font-bold font-mono transition-colors"
              >
                -
              </button>

              {['4', '5', '6'].map(num => (
                <button
                  key={num}
                  onClick={() => handleNumber(num)}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium font-mono transition-colors"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => handleOperator('+')}
                className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-blue-400 text-sm font-bold font-mono transition-colors"
              >
                +
              </button>

              {['1', '2', '3'].map(num => (
                <button
                  key={num}
                  onClick={() => handleNumber(num)}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium font-mono transition-colors"
                >
                  {num}
                </button>
              ))}
              <button
                onClick={handleCalculate}
                className="row-span-2 p-2.5 rounded-lg bg-gradient-to-b from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold font-mono text-base flex items-center justify-center transition-all shadow-md"
              >
                =
              </button>

              <button
                onClick={() => handleNumber('0')}
                className="col-span-2 p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium font-mono transition-colors"
              >
                0
              </button>
              <button
                onClick={() => {
                  if (!display.includes('.')) setDisplay(prev => prev + '.');
                }}
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium font-mono transition-colors"
              >
                .
              </button>
            </div>
          </div>

          {/* Terminal Log Area (7 cols) */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-3">
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs flex-1 flex flex-col">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Play className="w-3 h-3 text-emerald-400" />
                  Interactive Python REPL Output
                </span>
                <span className="text-amber-400/80">Build v0.4 (In Progress)</span>
              </div>

              <div className="space-y-1.5 flex-1 overflow-y-auto max-h-48 text-slate-300">
                {history.map((line, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed ${
                      line.includes('ZeroDivisionError') || line.includes('ERROR')
                        ? 'text-red-400 font-semibold'
                        : i === 0
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-500">
                <span className="text-blue-400">Tip:</span>
                <span>Try dividing by 0 to verify the custom ZeroDivisionError handling!</span>
              </div>
            </div>

            {/* Development Roadmap Callout */}
            <div className="p-3.5 rounded-lg bg-amber-500/5 border border-amber-500/20 text-xs text-slate-300 flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-300 block mb-0.5">
                  Phase 2 In Development:
                </span>
                <span>
                  Adding exponentiation (`**`), modulus (`%`), memory storage registers (`M+`, `MR`), and unit test coverage with pytest.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">
              calculator_engine.py (Phase 1 Codebase)
            </span>
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
                  <span>Copy Code</span>
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
