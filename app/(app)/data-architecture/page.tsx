"use client";

import { PageHeader, SectionCard } from "@/components/shared";
import { HardDrive, CheckCircle2 } from "lucide-react";

const STRUCTURED = [
  { name: "Call Logs", description: "Timestamped records of incoming/outgoing calls with contact identifiers." },
  { name: "Contacts", description: "Extracted contact lists from devices including names, numbers, and metadata." },
  { name: "Metadata", description: "Device metadata including IMEI, serial numbers, timestamps, and GPS tags." },
];

const UNSTRUCTURED = [
  { name: "Messages", description: "SMS, MMS, and application message threads extracted from devices." },
  { name: "Images", description: "Photos and image files subject to content and object detection analysis." },
  { name: "Videos", description: "Video recordings and clips subject to facial recognition and content analysis." },
  { name: "Browsing History", description: "Web browsing records including URLs, timestamps, and visit frequency." },
  { name: "Social Media Artifacts", description: "Posts, messages, and account data extracted from social media applications." },
];

const QUALITY_CHECKS = [
  "Format Validation",
  "Schema Enforcement",
  "Duplicate Detection",
  "Metadata Verification",
];

export default function DataArchitecturePage() {
  return (
    <div>
      <PageHeader
        title="Data Architecture"
        description="The system handles both structured and unstructured forensic data with rigorous data quality mechanisms."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Structured */}
        <SectionCard title="Structured Data">
          <p className="text-sm text-muted-foreground mb-4">Tabular, queryable forensic data stored in PostgreSQL:</p>
          <div className="space-y-3">
            {STRUCTURED.map((item) => (
              <div key={item.name} className="p-3 bg-blue-50 rounded-md border border-blue-100">
                <p className="text-sm font-semibold text-blue-900">{item.name}</p>
                <p className="text-xs text-blue-700 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Unstructured */}
        <SectionCard title="Unstructured Data">
          <p className="text-sm text-muted-foreground mb-4">Binary and text artifacts stored in MinIO / Object Storage:</p>
          <div className="space-y-3">
            {UNSTRUCTURED.map((item) => (
              <div key={item.name} className="p-3 bg-amber-50 rounded-md border border-amber-100">
                <p className="text-sm font-semibold text-amber-900">{item.name}</p>
                <p className="text-xs text-amber-700 mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Data Pipeline */}
      <div className="mb-6">
        <SectionCard title="Data Pipeline">
          <div className="flex flex-wrap items-center gap-3">
            {["Forensic Tools", "Ingestion Engine", "ETL Processing (Airflow)", "Validation & Enrichment", "Evidence Repository", "AI Analysis", "Dashboard & Reports"].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-3">
                <div className="px-3 py-2 bg-muted rounded-md border border-border text-sm font-medium text-foreground text-center">
                  {step}
                </div>
                {i < arr.length - 1 && <span className="text-muted-foreground font-bold">→</span>}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Data Quality */}
      <SectionCard title="Data Quality Mechanisms">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {QUALITY_CHECKS.map((q) => (
            <div key={q} className="flex items-start gap-2 p-4 bg-green-50 rounded-md border border-green-100">
              <CheckCircle2 className="h-4 w-4 text-green-700 mt-0.5 shrink-0" />
              <p className="text-sm font-medium text-green-900">{q}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
