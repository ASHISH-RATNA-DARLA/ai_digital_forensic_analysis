"use client";

import { useState } from "react";
import { AI_ANALYSIS_RESULTS } from "@/lib/mock-data";
import { PageHeader, SectionCard, StatusBadge } from "@/components/shared";
import { Brain, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

type AnalysisState = "idle" | "loading" | "done";

export default function AIAnalysisPage() {
  const [state, setState] = useState<AnalysisState>("idle");

  const handleRun = () => {
    setState("loading");
    setTimeout(() => setState("done"), 3000);
  };

  return (
    <div>
      <PageHeader
        title="AI Analysis"
        description="Run AI-driven analysis on forensic evidence. Detects suspicious keywords, drug-related communications, multimedia content, behavioral patterns, and relationships."
      />

      {/* Trigger */}
      <div className="mb-6">
        <SectionCard title="Run AI Analysis">
          {state === "idle" && (
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Activate the AI Evidence Analysis Engine to process all ingested artifacts. Analysis includes NLP, multimedia, behavioral patterns, and relationship detection.
              </p>
              <button
                onClick={handleRun}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Brain className="h-4 w-4" />
                Run AI Analysis
              </button>
            </div>
          )}
          {state === "loading" && (
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-md border border-border">
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
              <div>
                <p className="text-sm font-semibold text-foreground">AI Analysis in Progress</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Running NLP, multimedia analysis, behavioral pattern detection, and relationship identification...
                </p>
              </div>
            </div>
          )}
          {state === "done" && (
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-md border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-700 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-800">AI Analysis Complete</p>
                <p className="text-xs text-green-700 mt-0.5">All modules processed. Results are displayed below.</p>
              </div>
              <button onClick={() => setState("idle")} className="ml-auto text-xs px-3 py-1.5 border border-green-300 rounded text-green-800 hover:bg-green-100 transition-colors">
                Reset
              </button>
            </div>
          )}
        </SectionCard>
      </div>

      {state === "done" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Suspicious Keyword Detection */}
          <SectionCard title="Suspicious Keyword Detection">
            <div className="space-y-2">
              {AI_ANALYSIS_RESULTS.suspiciousKeywords.map((kw) => (
                <div key={kw.keyword} className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-md border border-border">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                    <span className="text-sm font-mono text-foreground">{`"${kw.keyword}"`}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{kw.count} occurrences</span>
                    <StatusBadge label={kw.severity} variant={kw.severity.toLowerCase() as "high" | "medium" | "low"} />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Drug-Related Communication Detection */}
          <SectionCard title="Drug-Related Communication Detection">
            <div className="space-y-3">
              {AI_ANALYSIS_RESULTS.drugCommunications.map((dc) => (
                <div key={dc.id} className="p-3 bg-red-50 rounded-md border border-red-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono text-red-700">{dc.id}</span>
                    <span className="text-xs font-semibold text-red-800">Confidence: {dc.confidence}%</span>
                  </div>
                  <p className="text-sm text-red-900">{dc.summary}</p>
                  <div className="mt-2 bg-red-200/50 rounded h-1.5">
                    <div className="bg-red-600 h-1.5 rounded" style={{ width: `${dc.confidence}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Multimedia Analysis */}
          <SectionCard title="Multimedia Analysis">
            <div className="space-y-2">
              {AI_ANALYSIS_RESULTS.multimediaAnalysis.map((m) => (
                <div key={m.file} className="p-3 bg-muted/30 rounded-md border border-border">
                  <p className="text-xs font-mono text-primary mb-1">{m.file}</p>
                  <p className="text-sm text-foreground">{m.finding}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className="flex-1 bg-muted rounded h-1.5">
                      <div className="bg-primary h-1.5 rounded" style={{ width: `${m.confidence}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">Confidence: {m.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Behavioral Pattern Detection */}
          <SectionCard title="Behavioral Pattern Detection">
            <div className="space-y-2">
              {AI_ANALYSIS_RESULTS.behavioralPatterns.map((bp) => (
                <div key={bp.pattern} className="flex items-start gap-2 p-3 bg-amber-50 rounded-md border border-amber-200">
                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-amber-900 font-medium">{bp.pattern}</p>
                    <p className="text-xs text-amber-700 mt-0.5">{bp.frequency}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Relationship Identification */}
          <SectionCard title="Relationship Identification" className="lg:col-span-2">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">From</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">To</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">Relationship Type</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-medium">Strength</th>
                  </tr>
                </thead>
                <tbody>
                  {AI_ANALYSIS_RESULTS.relationships.map((r, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/40 transition-colors">
                      <td className="py-2.5 px-3 font-medium text-foreground">{r.from}</td>
                      <td className="py-2.5 px-3 text-foreground">{r.to}</td>
                      <td className="py-2.5 px-3 text-muted-foreground">{r.type}</td>
                      <td className="py-2.5 px-3">
                        <StatusBadge label={r.strength} variant={r.strength.toLowerCase() as "high" | "medium" | "low"} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>
      )}
    </div>
  );
}
