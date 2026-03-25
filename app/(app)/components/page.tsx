"use client";

import { useState } from "react";
import { CORE_COMPONENTS } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { Server } from "lucide-react";

export default function CoreComponentsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = CORE_COMPONENTS.find((c) => c.name === selected);

  return (
    <div>
      <PageHeader
        title="Core Components"
        description="The platform consists of six core components that form the AI-Powered Digital Forensic Intelligence Platform."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Platform Components">
          <div className="space-y-2">
            {CORE_COMPONENTS.map((comp) => (
              <button
                key={comp.name}
                onClick={() => setSelected(selected === comp.name ? null : comp.name)}
                className={`w-full text-left px-4 py-3 rounded-md border text-sm transition-colors ${
                  selected === comp.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Server className={`h-4 w-4 shrink-0 ${selected === comp.name ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  <span className="font-medium">{comp.name}</span>
                </div>
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={active ? active.name : "Component Details"}>
          {active ? (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{active.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{active.description}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2">
              <Server className="h-10 w-10 opacity-30" />
              <p className="text-sm">Select a component to view its details.</p>
            </div>
          )}
        </SectionCard>
      </div>
    </div>
  );
}
