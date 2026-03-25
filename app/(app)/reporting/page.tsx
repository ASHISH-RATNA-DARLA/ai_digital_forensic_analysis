"use client";

import { useState } from "react";
import { CASES } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { FileText, Download, Loader2, CheckCircle2 } from "lucide-react";

type ReportState = "idle" | "loading" | "preview";

export default function ReportingPage() {
  const [selectedCase, setSelectedCase] = useState<string>(CASES[0].id);
  const [state, setState] = useState<ReportState>("idle");
  const caseData = CASES.find((c) => c.id === selectedCase)!;

  const handleGenerate = () => {
    setState("loading");
    setTimeout(() => setState("preview"), 2500);
  };

  return (
    <div>
      <PageHeader
        title="Automated Reporting"
        description="Generate standardized, court-ready forensic reports. Export in PDF or DOCX format."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <SectionCard title="Select Case">
            <div className="space-y-2">
              {CASES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => { setSelectedCase(c.id); setState("idle"); }}
                  className={`w-full text-left px-3 py-2.5 rounded-md border text-sm transition-colors ${
                    selectedCase === c.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:bg-muted"
                  }`}
                >
                  <p className="font-medium">{c.name}</p>
                  <p className={`text-xs mt-0.5 ${selectedCase === c.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{c.id}</p>
                </button>
              ))}
            </div>
            <button
              onClick={handleGenerate}
              className="mt-4 flex items-center gap-2 w-full justify-center px-4 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <FileText className="h-4 w-4" />}
              {state === "loading" ? "Generating..." : "Generate Report"}
            </button>
          </SectionCard>
        </div>

        {/* Report Preview */}
        <div className="lg:col-span-2">
          <SectionCard title="Court-Ready Report Preview">
            {state === "idle" && (
              <div className="flex flex-col items-center justify-center h-64 text-muted-foreground gap-2">
                <FileText className="h-10 w-10 opacity-40" />
                <p className="text-sm">Select a case and click "Generate Report" to preview.</p>
              </div>
            )}
            {state === "loading" && (
              <div className="flex flex-col items-center justify-center h-64 gap-3">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                <p className="text-sm text-muted-foreground">Compiling forensic report...</p>
              </div>
            )}
            {state === "preview" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-4 w-4 text-green-700" />
                  <span className="text-sm text-green-800 font-medium">Report generated successfully</span>
                  <div className="ml-auto flex gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md hover:bg-muted transition-colors text-foreground">
                      <Download className="h-3.5 w-3.5" />
                      Export PDF
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border rounded-md hover:bg-muted transition-colors text-foreground">
                      <Download className="h-3.5 w-3.5" />
                      Export DOCX
                    </button>
                  </div>
                </div>

                {/* Simulated report document */}
                <div className="border border-border rounded-md p-6 bg-white text-gray-900 text-sm font-sans shadow-sm">
                  <div className="text-center border-b border-gray-200 pb-4 mb-4">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Official Document — Confidential</p>
                    <h2 className="text-lg font-bold">Forensic Investigation Report</h2>
                    <p className="text-sm text-gray-600 mt-1">{caseData.name}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-xs">
                    <div><span className="font-semibold text-gray-700">Case ID:</span> {caseData.id}</div>
                    <div><span className="font-semibold text-gray-700">Analyst:</span> {caseData.analyst}</div>
                    <div><span className="font-semibold text-gray-700">Date Created:</span> {caseData.created}</div>
                    <div><span className="font-semibold text-gray-700">Report Date:</span> {new Date().toLocaleDateString()}</div>
                    <div><span className="font-semibold text-gray-700">Risk Score:</span> {caseData.riskScore}/100</div>
                    <div><span className="font-semibold text-gray-700">Total Artifacts:</span> {caseData.artifacts.toLocaleString()}</div>
                  </div>
                  <div className="mb-3">
                    <p className="font-semibold text-gray-700 mb-1 text-xs uppercase tracking-wide">Executive Summary</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      This report documents the findings of a forensic investigation conducted on case {caseData.id}. A total of {caseData.artifacts.toLocaleString('en-US')} forensic artifacts were extracted, analyzed, and correlated using the AI Evidence Analysis Engine. The overall risk score assigned is {caseData.riskScore}/100.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1 text-xs uppercase tracking-wide">AI Analysis Findings</p>
                    <ul className="text-xs text-gray-600 space-y-0.5 list-disc list-inside">
                      <li>Suspicious keywords detected in communication records.</li>
                      <li>Behavioral patterns consistent with organized activity identified.</li>
                      <li>Relationship graph analysis reveals {caseData.riskScore >= 80 ? "high-density" : "moderate"} network activity.</li>
                      <li>Multimedia artifacts reviewed for illicit content.</li>
                    </ul>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-400 flex justify-between">
                    <span>Digital Forensic Unit — AI-Powered System</span>
                    <span>Page 1 of 1 — Confidential</span>
                  </div>
                </div>
              </div>
            )}
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
