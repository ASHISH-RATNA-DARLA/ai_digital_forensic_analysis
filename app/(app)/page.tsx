"use client";

import { useState } from "react";
import { CASES, EVIDENCE_ITEMS, MONITORING_METRICS } from "@/lib/mock-data";
import { PageHeader, RiskBadge, StatusBadge, SectionCard } from "@/components/shared";
import { Search, BarChart3, ShieldAlert, FolderOpen, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const statusVariantMap: Record<string, "active" | "review" | "closed" | "pending"> = {
  Active: "active",
  "In Review": "review",
  Closed: "closed",
  Pending: "pending",
};

const chartData = [
  { name: "Jan", artifacts: 820 },
  { name: "Feb", artifacts: 1140 },
  { name: "Mar", artifacts: 900 },
  { name: "Apr", artifacts: 2100 },
  { name: "May", artifacts: 390 },
];

export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const filtered = CASES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.analyst.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        title="Investigation Dashboard"
        description="Centralized forensic intelligence overview — search, filter, and correlate evidence across all active cases."
      />

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {MONITORING_METRICS.map((m) => (
          <div key={m.name} className="bg-card border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">{m.name}</p>
            <p className="text-2xl font-bold text-foreground">
              {m.value.toLocaleString('en-US')}
              {m.unit && <span className="text-base font-normal text-muted-foreground">{m.unit}</span>}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Case List */}
        <div className="lg:col-span-2">
          <SectionCard title="Case List">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search cases by name, ID, or analyst..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 text-muted-foreground font-medium">Case ID</th>
                    <th className="text-left py-2 px-2 text-muted-foreground font-medium">Name</th>
                    <th className="text-left py-2 px-2 text-muted-foreground font-medium">Status</th>
                    <th className="text-left py-2 px-2 text-muted-foreground font-medium">Risk Score</th>
                    <th className="text-left py-2 px-2 text-muted-foreground font-medium">Artifacts</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((c) => (
                    <tr key={c.id} className="border-b border-border/50 hover:bg-muted/40 transition-colors">
                      <td className="py-2.5 px-2 font-mono text-xs text-primary">{c.id}</td>
                      <td className="py-2.5 px-2 font-medium text-foreground">{c.name}</td>
                      <td className="py-2.5 px-2">
                        <StatusBadge label={c.status} variant={statusVariantMap[c.status]} />
                      </td>
                      <td className="py-2.5 px-2">
                        <RiskBadge score={c.riskScore} />
                      </td>
                      <td className="py-2.5 px-2 text-muted-foreground">{c.artifacts.toLocaleString('en-US')}</td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-6 text-center text-muted-foreground text-sm">
                        No cases match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </SectionCard>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Artifacts Chart */}
          <SectionCard title="Artifacts by Month">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" />
                <YAxis tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" />
                <Tooltip
                  contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", fontSize: 12 }}
                />
                <Bar dataKey="artifacts" fill="var(--primary)" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </SectionCard>

          {/* Evidence Correlation */}
          <SectionCard title="Evidence Correlation">
            <div className="space-y-2">
              {EVIDENCE_ITEMS.filter((e) => e.flagged).slice(0, 4).map((ev) => (
                <div key={ev.id} className="flex items-start gap-2 p-2 rounded-md bg-muted/40 border border-border">
                  <ShieldAlert className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">{ev.type} — {ev.id}</p>
                    <p className="text-xs text-muted-foreground">{ev.case}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Relationship Visualization */}
          <SectionCard title="Relationship Visualization">
            <div className="relative h-48 rounded-md bg-muted/30 border border-border overflow-hidden">
              {/* Simple node graph visualization */}
              <svg width="100%" height="100%" viewBox="0 0 260 180">
                {/* Lines */}
                <line x1="80" y1="50" x2="180" y2="50" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 2" opacity="0.6"/>
                <line x1="80" y1="50" x2="130" y2="130" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.4"/>
                <line x1="180" y1="50" x2="130" y2="130" stroke="var(--primary)" strokeWidth="2" strokeDasharray="4 2" opacity="0.6"/>
                <line x1="80" y1="50" x2="230" y2="110" stroke="var(--muted-foreground)" strokeWidth="1" strokeDasharray="4 2" opacity="0.3"/>
                {/* Nodes */}
                <circle cx="80" cy="50" r="18" fill="var(--primary)" opacity="0.9"/>
                <text x="80" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">A</text>
                <circle cx="180" cy="50" r="14" fill="var(--primary)" opacity="0.7"/>
                <text x="180" y="54" textAnchor="middle" fill="white" fontSize="9">#14</text>
                <circle cx="130" cy="130" r="14" fill="var(--primary)" opacity="0.7"/>
                <text x="130" y="134" textAnchor="middle" fill="white" fontSize="9">#22</text>
                <circle cx="230" cy="110" r="11" fill="var(--muted-foreground)" opacity="0.5"/>
                <text x="230" y="114" textAnchor="middle" fill="white" fontSize="8">#7</text>
                {/* Labels */}
                <text x="80" y="75" textAnchor="middle" fill="var(--foreground)" fontSize="9">Subject A</text>
                <text x="180" y="70" textAnchor="middle" fill="var(--foreground)" fontSize="9">Contact #14</text>
                <text x="130" y="152" textAnchor="middle" fill="var(--foreground)" fontSize="9">Contact #22</text>
              </svg>
              <p className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-muted-foreground">
                Relationship graph — Subject A network
              </p>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
