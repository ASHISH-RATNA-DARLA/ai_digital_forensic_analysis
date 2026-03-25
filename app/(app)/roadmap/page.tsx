"use client";

import { ROADMAP } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { CheckCircle2 } from "lucide-react";

const phaseColors = [
  "bg-blue-50 border-blue-200 text-blue-700",
  "bg-indigo-50 border-indigo-200 text-indigo-700",
  "bg-violet-50 border-violet-200 text-violet-700",
  "bg-purple-50 border-purple-200 text-purple-700",
  "bg-slate-50 border-slate-200 text-slate-700",
];

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader
        title="Implementation Roadmap"
        description="A phased implementation plan for deploying the AI-Powered Digital Forensic Analysis & Reporting System."
      />

      {/* Timeline */}
      <SectionCard title="Implementation Phases">
        <div className="space-y-0">
          {ROADMAP.map((phase, i) => (
            <div key={phase.phase} className="flex gap-5 mb-0">
              {/* Left column */}
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold shrink-0 ${phaseColors[i]}`}>
                  {i + 1}
                </div>
                {i < ROADMAP.length - 1 && <div className="w-0.5 bg-border flex-1 my-1" style={{ minHeight: "2rem" }} />}
              </div>
              {/* Content */}
              <div className="pb-6 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${phaseColors[i]}`}>{phase.phase}</span>
                  <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
                </div>
                <ul className="space-y-1 mt-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Table view */}
      <div className="mt-6">
        <SectionCard title="Phase Summary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Phase</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Title</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Key Tasks</th>
                </tr>
              </thead>
              <tbody>
                {ROADMAP.map((phase, i) => (
                  <tr key={phase.phase} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${phaseColors[i]}`}>{phase.phase}</span>
                    </td>
                    <td className="py-2.5 px-3 font-medium text-foreground">{phase.title}</td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{phase.tasks.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
