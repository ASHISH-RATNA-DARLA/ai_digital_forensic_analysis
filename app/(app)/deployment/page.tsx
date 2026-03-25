"use client";

import { useState } from "react";
import { DEPLOYMENT_OPTIONS } from "@/lib/mock-data";
import { PageHeader, SectionCard, StatusBadge } from "@/components/shared";
import { Server, CheckCircle2 } from "lucide-react";

export default function DeploymentPage() {
  const [selected, setSelected] = useState<string>("On-Premise");
  const active = DEPLOYMENT_OPTIONS.find((d) => d.type === selected)!;

  return (
    <div>
      <PageHeader
        title="Deployment Options"
        description="The platform supports on-premise, hybrid, and government cloud infrastructure deployments."
      />

      {/* Options */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {DEPLOYMENT_OPTIONS.map((opt) => (
          <button
            key={opt.type}
            onClick={() => setSelected(opt.type)}
            className={`p-4 rounded-lg border text-left transition-colors ${
              selected === opt.type
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:bg-muted"
            }`}
          >
            <Server className={`h-5 w-5 mb-2 ${selected === opt.type ? "text-primary-foreground" : "text-muted-foreground"}`} />
            <p className="font-semibold text-sm">{opt.type}</p>
          </button>
        ))}
      </div>

      {/* Detail */}
      <SectionCard title={`${active.type} — Infrastructure Components`}>
        <div className="grid grid-cols-2 gap-3">
          {active.components.map((comp) => (
            <div key={comp} className="flex items-center gap-2 p-3 bg-muted/30 rounded-md border border-border">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <p className="text-sm text-foreground">{comp}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Summary table */}
      <div className="mt-6">
        <SectionCard title="Deployment Options Summary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Deployment Type</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Infrastructure</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Components</th>
                </tr>
              </thead>
              <tbody>
                {DEPLOYMENT_OPTIONS.map((opt) => (
                  <tr key={opt.type} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-foreground">{opt.type}</td>
                    <td className="py-2.5 px-3">
                      <StatusBadge label="Supported" variant="active" />
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{opt.components.join(", ")}</td>
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
