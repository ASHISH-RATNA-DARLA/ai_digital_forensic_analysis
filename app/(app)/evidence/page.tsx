"use client";

import { useState } from "react";
import { EVIDENCE_ITEMS } from "@/lib/mock-data";
import { PageHeader, SectionCard, StatusBadge, RiskBadge } from "@/components/shared";
import { Search, ArrowUpDown } from "lucide-react";

type SortOrder = "asc" | "desc";

export default function EvidencePage() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [filterRisk, setFilterRisk] = useState<string>("All");

  const riskOrder = { High: 3, Medium: 2, Low: 1 };

  const filtered = EVIDENCE_ITEMS
    .filter((e) => {
      const matchSearch =
        e.description.toLowerCase().includes(search.toLowerCase()) ||
        e.id.toLowerCase().includes(search.toLowerCase()) ||
        e.type.toLowerCase().includes(search.toLowerCase()) ||
        e.source.toLowerCase().includes(search.toLowerCase());
      const matchRisk = filterRisk === "All" || e.riskLevel === filterRisk;
      return matchSearch && matchRisk;
    })
    .sort((a, b) => {
      const diff = (riskOrder[b.riskLevel as keyof typeof riskOrder] || 0) - (riskOrder[a.riskLevel as keyof typeof riskOrder] || 0);
      return sortOrder === "desc" ? diff : -diff;
    });

  return (
    <div>
      <PageHeader
        title="Evidence Repository"
        description="Browse, search, and prioritize all forensic artifacts. High-risk items are automatically flagged for analyst review."
      />

      <SectionCard title="Evidence Items">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="relative flex-1 min-w-52">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search evidence..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select
            value={filterRisk}
            onChange={(e) => setFilterRisk(e.target.value)}
            className="px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="All">All Risk Levels</option>
            <option value="High">High Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="Low">Low Risk</option>
          </select>
          <button
            onClick={() => setSortOrder((s) => (s === "desc" ? "asc" : "desc"))}
            className="flex items-center gap-1.5 px-3 py-2 text-sm border border-input rounded-md bg-background text-foreground hover:bg-muted transition-colors"
          >
            <ArrowUpDown className="h-4 w-4" />
            Priority: {sortOrder === "desc" ? "High → Low" : "Low → High"}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">ID</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Type</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Description</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Source</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Risk Level</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Flagged</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((ev) => (
                <tr
                  key={ev.id}
                  className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${ev.flagged && ev.riskLevel === "High" ? "bg-red-50/40" : ""}`}
                >
                  <td className="py-2.5 px-2 font-mono text-xs text-primary">{ev.id}</td>
                  <td className="py-2.5 px-2 font-medium text-foreground">{ev.type}</td>
                  <td className="py-2.5 px-2 text-muted-foreground max-w-xs truncate">{ev.description}</td>
                  <td className="py-2.5 px-2">
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded font-mono">{ev.source}</span>
                  </td>
                  <td className="py-2.5 px-2">
                    <StatusBadge
                      label={ev.riskLevel}
                      variant={ev.riskLevel.toLowerCase() as "high" | "medium" | "low"}
                    />
                  </td>
                  <td className="py-2.5 px-2">
                    {ev.flagged ? (
                      <span className="text-xs font-semibold text-red-700">Flagged</span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="py-2.5 px-2 text-xs text-muted-foreground font-mono">{ev.timestamp}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-muted-foreground text-sm">
                    No evidence items match your filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          Showing {filtered.length} of {EVIDENCE_ITEMS.length} artifacts. High-risk rows are highlighted.
        </p>
      </SectionCard>
    </div>
  );
}
