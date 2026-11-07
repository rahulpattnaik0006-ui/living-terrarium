"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sun, Droplets, Wind, ShieldAlert, CheckCircle2 } from "lucide-react";

const diagnosticIssues = [
  {
    id: "foggy",
    label: "Excessive Glass Condensation",
    cause: "High internal temperature or excess water.",
    solution: "Open the jar lid for 30–60 minutes in a cool room to allow humidity to normalize.",
  },
  {
    id: "brown-moss",
    label: "Moss Turning Pale or Brown",
    cause: "Direct harsh sunlight causing scorch, or underwatered substrate.",
    solution: "Move 3–4 feet away from direct window rays into bright indirect light. Give 2–3 light sprays of RO water.",
  },
  {
    id: "mold",
    label: "White Fuzzy Mold",
    cause: "Stagnant humid air during early establishment.",
    solution: "Wipe with a clean cotton bud and leave open for 45 minutes. Springtails will naturally digest remaining spores.",
  },
];

export default function CareGuidePage() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const activeDiagnosis = diagnosticIssues.find((d) => d.id === selectedIssue);

  return (
    <div className="min-h-screen bg-[#070b08] text-[#f2f7f3] px-4 py-6 max-w-md mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="w-9 h-9 rounded-full bg-[#101712] border border-[#233526] flex items-center justify-center text-slate-300"
        >
          <ArrowLeft size={16} />
        </Link>
        <span className="font-serif text-sm tracking-wide lowercase text-slate-300">
          care manual
        </span>
        <div className="w-9" />
      </div>

      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-white mb-1">Ecosystem Longevity</h1>
        <p className="text-xs text-slate-400">Rules for keeping closed and open jars thriving.</p>
      </div>

      {/* Core Rules Grid */}
      <div className="space-y-3 mb-8">
        <div className="p-4 rounded-xl border border-[#1b261d] bg-[#0c130e] flex items-start gap-3">
          <Sun size={20} className="text-[#86efac] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-white">Lighting (Indirect Only)</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Never place sealed glass in direct noon sun—it creates an oven effect. Gentle morning light or ambient room lighting is ideal.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#1b261d] bg-[#0c130e] flex items-start gap-3">
          <Droplets size={20} className="text-[#86efac] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-white">Watering Frequency</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Enclosed jars recycle their own moisture. They rarely need misting more than once every 2–4 months. Use distilled or RO water.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-[#1b261d] bg-[#0c130e] flex items-start gap-3">
          <Wind size={20} className="text-[#86efac] shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-white">Occasional Airing</h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Open the jar for 15 minutes once a month to replenish carbon dioxide and regulate pressure.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Health Checker */}
      <div className="rounded-2xl border border-[#233526] bg-[#0e1610] p-4 mb-12">
        <div className="flex items-center gap-2 mb-2">
          <ShieldAlert size={16} className="text-[#86efac]" />
          <h2 className="font-serif font-bold text-sm text-white">Interactive Health Checker</h2>
        </div>
        <p className="text-[11px] text-slate-400 mb-3">
          Tap a symptom to get immediate diagnostic advice:
        </p>

        <div className="space-y-2 mb-4">
          {diagnosticIssues.map((issue) => (
            <button
              key={issue.id}
              onClick={() => setSelectedIssue(issue.id === selectedIssue ? null : issue.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-mono transition-colors flex items-center justify-between cursor-pointer ${
                selectedIssue === issue.id
                  ? "bg-[#22c55e] text-black font-bold"
                  : "bg-[#141f17] border border-[#203124] text-slate-300"
              }`}
            >
              <span>{issue.label}</span>
              <span className="text-[10px]">{selectedIssue === issue.id ? "▲" : "▼"}</span>
            </button>
          ))}
        </div>

        {activeDiagnosis && (
          <div className="p-3.5 rounded-xl bg-[#090f0b] border border-[#2d4634] space-y-2 text-xs">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Cause</span>
              <p className="text-slate-200 mt-0.5">{activeDiagnosis.cause}</p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#86efac] uppercase">Treatment</span>
              <p className="text-slate-100 font-medium mt-0.5">{activeDiagnosis.solution}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}