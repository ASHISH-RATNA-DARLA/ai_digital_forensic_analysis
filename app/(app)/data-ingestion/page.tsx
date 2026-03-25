"use client";

import { useState } from "react";
import { FORENSIC_TOOLS, FORENSIC_FORMATS } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { Upload, CheckCircle2, Loader2 } from "lucide-react";

type IngestionState = "idle" | "loading" | "done";

export default function DataIngestionPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [ingestionState, setIngestionState] = useState<IngestionState>("idle");

  const handleImport = () => {
    if (!selectedTool || !selectedFormat) return;
    setIngestionState("loading");
    setTimeout(() => setIngestionState("done"), 2500);
  };

  const handleReset = () => {
    setSelectedTool(null);
    setSelectedFormat(null);
    setIngestionState("idle");
  };

  return (
    <div>
      <PageHeader
        title="Data Ingestion"
        description="Import forensic tool outputs into the platform. Select a source tool and supported format to begin ingestion."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Source Selection */}
        <SectionCard title="Select Forensic Tool Source">
          <p className="text-sm text-muted-foreground mb-4">
            Supported tools:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {FORENSIC_TOOLS.map((tool) => (
              <button
                key={tool}
                onClick={() => { setSelectedTool(tool); setIngestionState("idle"); }}
                className={`px-4 py-3 rounded-md border text-sm font-medium text-left transition-colors ${
                  selectedTool === tool
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </SectionCard>

        {/* Format Selection */}
        <SectionCard title="Select Forensic Format">
          <p className="text-sm text-muted-foreground mb-4">
            Supported formats:
          </p>
          <div className="grid grid-cols-2 gap-3">
            {FORENSIC_FORMATS.map((fmt) => (
              <button
                key={fmt}
                onClick={() => { setSelectedFormat(fmt); setIngestionState("idle"); }}
                className={`px-4 py-3 rounded-md border text-sm font-mono font-medium text-left transition-colors ${
                  selectedFormat === fmt
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Summary + Trigger */}
      <div className="mt-6">
        <SectionCard title="Ingestion Summary">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <div className="flex-1 min-w-40">
              <p className="text-xs text-muted-foreground mb-1">Selected Source</p>
              <p className="text-sm font-semibold text-foreground">{selectedTool ?? "— Not selected —"}</p>
            </div>
            <div className="flex-1 min-w-40">
              <p className="text-xs text-muted-foreground mb-1">Selected Format</p>
              <p className="text-sm font-mono font-semibold text-foreground">{selectedFormat ?? "— Not selected —"}</p>
            </div>
          </div>

          {/* State display */}
          {ingestionState === "idle" && (
            <button
              onClick={handleImport}
              disabled={!selectedTool || !selectedFormat}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              <Upload className="h-4 w-4" />
              Import Data
            </button>
          )}

          {ingestionState === "loading" && (
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-md border border-border">
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
              <div>
                <p className="text-sm font-semibold text-foreground">Ingestion in Progress</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Importing from {selectedTool} ({selectedFormat}) — parsing and validating data...
                </p>
              </div>
            </div>
          )}

          {ingestionState === "done" && (
            <div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-md border border-green-200 mb-4">
                <CheckCircle2 className="h-5 w-5 text-green-700 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-800">Data Parsed &amp; Standardized</p>
                  <p className="text-xs text-green-700 mt-0.5">
                    Ingestion from <strong>{selectedTool}</strong> ({selectedFormat}) completed successfully.
                  </p>
                </div>
              </div>
              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Records Imported", value: "2,847" },
                  { label: "Artifacts Extracted", value: "1,204" },
                  { label: "Duplicates Removed", value: "38" },
                ].map((s) => (
                  <div key={s.label} className="bg-muted/40 rounded-md p-3 border border-border">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-xl font-bold text-foreground mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors text-foreground"
              >
                Import Another
              </button>
            </div>
          )}
        </SectionCard>
      </div>

      {/* Data Quality Mechanisms */}
      <div className="mt-6">
        <SectionCard title="Data Quality Mechanisms">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Format Validation", "Schema Enforcement", "Duplicate Detection", "Metadata Verification"].map((q) => (
              <div key={q} className="flex items-start gap-2 p-3 bg-muted/30 rounded-md border border-border">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-foreground font-medium">{q}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
