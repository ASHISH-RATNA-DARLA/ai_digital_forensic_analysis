"use client";

import { RISKS } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function RisksPage() {
  return (
    <div>
      <PageHeader
        title="Risk Assessment & Mitigation"
        description="Identified risks and their corresponding mitigation strategies for the platform deployment."
      />

      <SectionCard title="Risk & Mitigation Matrix">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-muted-foreground font-medium w-1/2">Risk</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium w-1/2">Mitigation Strategy</th>
              </tr>
            </thead>
            <tbody>
              {RISKS.map((row) => (
                <tr key={row.risk} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                      <span className="font-medium text-foreground">{row.risk}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{row.mitigation}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Cards view */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {RISKS.map((row) => (
          <div key={row.risk} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
              <p className="font-semibold text-sm text-foreground">{row.risk}</p>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">{row.mitigation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
