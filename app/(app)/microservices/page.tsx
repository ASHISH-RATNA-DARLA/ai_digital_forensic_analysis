"use client";

import { useState } from "react";
import { MICROSERVICES } from "@/lib/mock-data";
import { PageHeader, SectionCard, StatusBadge } from "@/components/shared";
import { Activity } from "lucide-react";

export default function MicroservicesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = MICROSERVICES.find((s) => s.name === selected);

  return (
    <div>
      <PageHeader
        title="Microservices Architecture"
        description="The platform is built on a microservices architecture. All services communicate via REST APIs and message queues."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Services">
          <div className="space-y-2">
            {MICROSERVICES.map((svc) => (
              <button
                key={svc.name}
                onClick={() => setSelected(selected === svc.name ? null : svc.name)}
                className={`w-full text-left px-4 py-3 rounded-md border text-sm transition-colors ${
                  selected === svc.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className={`h-4 w-4 shrink-0 ${selected === svc.name ? "text-primary-foreground" : "text-muted-foreground"}`} />
                    <span className="font-medium">{svc.name}</span>
                  </div>
                  <StatusBadge label={svc.status} variant="running" />
                </div>
              </button>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={active ? active.name : "Service Details"}>
          {active ? (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">{active.name}</h3>
                <StatusBadge label={active.status} variant="running" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{active.description}</p>
              <div className="p-3 bg-muted/30 rounded-md border border-border">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Communication:</strong> REST APIs + Apache Kafka message queue
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2">
              <Activity className="h-10 w-10 opacity-30" />
              <p className="text-sm">Select a service to view its description.</p>
            </div>
          )}
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard title="Service Communication">
          <p className="text-sm text-muted-foreground mb-3">All services communicate via REST APIs and message queues (Apache Kafka).</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Service</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Status</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {MICROSERVICES.map((svc) => (
                  <tr key={svc.name} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-foreground">{svc.name}</td>
                    <td className="py-2.5 px-3"><StatusBadge label={svc.status} variant="running" /></td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs max-w-sm">{svc.description.split(".")[0]}.</td>
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
