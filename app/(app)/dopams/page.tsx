"use client";

import { useState } from "react";
import { PageHeader, SectionCard } from "@/components/shared";
import { Link2, Loader2, CheckCircle2 } from "lucide-react";

type SyncState = "idle" | "loading" | "done";

export default function DOPAMSPage() {
  const [syncState, setSyncState] = useState<SyncState>("idle");

  const handleSync = () => {
    setSyncState("loading");
    setTimeout(() => setSyncState("done"), 2000);
  };

  return (
    <div>
      <PageHeader
        title="DOPAMS Integration"
        description="Secure case data synchronization with the DOPAMS case management system via API gateway."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="DOPAMS Connection Status">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-md border border-green-200 mb-5">
            <CheckCircle2 className="h-5 w-5 text-green-700 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-green-800">Integration Active</p>
              <p className="text-xs text-green-700 mt-0.5">API Gateway connected. OAuth2 authentication verified.</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { label: "Integration Type", value: "REST API via API Gateway" },
              { label: "Authentication", value: "OAuth2" },
              { label: "Last Sync", value: "2024-05-24 17:22:00" },
              { label: "Cases Synced", value: "42" },
              { label: "Status", value: "Connected" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-medium text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Synchronize Case Data">
          <p className="text-sm text-muted-foreground mb-5">
            Sync the latest forensic case data with DOPAMS. This will securely transmit case records, evidence summaries, and report metadata to the DOPAMS case management system.
          </p>

          {syncState === "idle" && (
            <button
              onClick={handleSync}
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Link2 className="h-4 w-4" />
              Sync with DOPAMS
            </button>
          )}

          {syncState === "loading" && (
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-md border border-border">
              <Loader2 className="h-5 w-5 text-primary animate-spin" />
              <div>
                <p className="text-sm font-semibold text-foreground">Synchronizing with DOPAMS</p>
                <p className="text-xs text-muted-foreground mt-0.5">Transmitting case data securely via API gateway...</p>
              </div>
            </div>
          )}

          {syncState === "done" && (
            <div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-md border border-green-200 mb-4">
                <CheckCircle2 className="h-5 w-5 text-green-700 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-800">Data synchronized successfully</p>
                  <p className="text-xs text-green-700 mt-0.5">All case records have been transmitted to DOPAMS.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Cases Transmitted", value: "42" },
                  { label: "Evidence Summaries", value: "186" },
                  { label: "Reports Synced", value: "28" },
                  { label: "Sync Duration", value: "1.8s" },
                ].map((s) => (
                  <div key={s.label} className="bg-muted/40 rounded-md p-3 border border-border">
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="text-xl font-bold text-foreground mt-1">{s.value}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setSyncState("idle")} className="mt-4 px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors text-foreground">
                Sync Again
              </button>
            </div>
          )}
        </SectionCard>
      </div>
    </div>
  );
}
