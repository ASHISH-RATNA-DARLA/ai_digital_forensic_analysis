"use client";

import { useState } from "react";
import { SYSTEM_LAYERS } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { Layers } from "lucide-react";

export default function ArchitecturePage() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const active = SYSTEM_LAYERS.find((l) => l.layer === activeLayer);

  const layerColors = [
    "bg-slate-100 border-slate-300 text-slate-800",
    "bg-blue-50 border-blue-200 text-blue-800",
    "bg-indigo-50 border-indigo-200 text-indigo-800",
    "bg-violet-50 border-violet-200 text-violet-800",
    "bg-sky-50 border-sky-200 text-sky-800",
    "bg-teal-50 border-teal-200 text-teal-800",
    "bg-green-50 border-green-200 text-green-800",
  ];

  return (
    <div>
      <PageHeader
        title="System Architecture"
        description="Multi-layer enterprise architecture. Click any layer to view its responsibilities and components."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Layer Stack Visual */}
        <SectionCard title="Architecture Layers">
          <p className="text-sm text-muted-foreground mb-4">Click a layer to view details:</p>
          <div className="space-y-2">
            {SYSTEM_LAYERS.map((layer, i) => (
              <button
                key={layer.layer}
                onClick={() => setActiveLayer(activeLayer === layer.layer ? null : layer.layer)}
                className={`w-full text-left px-4 py-3 rounded-md border text-sm font-semibold transition-colors ${
                  activeLayer === layer.layer
                    ? "bg-primary text-primary-foreground border-primary"
                    : `${layerColors[i]} hover:opacity-80`
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 shrink-0" />
                    {layer.layer}
                  </div>
                  <span className="text-xs font-normal opacity-70">{layer.items.length} components</span>
                </div>
              </button>
            ))}
          </div>
        </SectionCard>

        {/* Detail Panel */}
        <SectionCard title={active ? `${active.layer} — Details` : "Layer Details"}>
          {active ? (
            <div>
              <p className="text-sm text-muted-foreground mb-4">{active.description}</p>
              <ul className="space-y-2">
                {active.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 p-2.5 bg-muted/30 rounded-md border border-border text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-muted-foreground gap-2">
              <Layers className="h-10 w-10 opacity-30" />
              <p className="text-sm">Select a layer from the left to view its responsibilities.</p>
            </div>
          )}
        </SectionCard>
      </div>

      {/* Full Architecture Table */}
      <div className="mt-6">
        <SectionCard title="Layer Responsibilities Summary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Layer</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {SYSTEM_LAYERS.map((layer) => (
                  <tr key={layer.layer} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3 font-semibold text-foreground whitespace-nowrap">{layer.layer}</td>
                    <td className="py-2.5 px-3 text-muted-foreground">{layer.description}</td>
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
