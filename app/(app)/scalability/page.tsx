"use client";

import { PageHeader, SectionCard } from "@/components/shared";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const SCALING_STRATEGIES = [
  { title: "Horizontal Microservices Scaling", description: "Each microservice scales independently based on load, enabling efficient use of compute resources across ingestion, analysis, and reporting workloads." },
  { title: "Distributed Search (Elasticsearch)", description: "Elasticsearch shards are distributed across nodes, enabling sub-second search across millions of forensic artifacts." },
  { title: "Object Storage for Large Files", description: "Multimedia evidence (images, videos) is stored in MinIO / Object Storage, decoupling file storage from the database for efficient handling of large datasets." },
  { title: "GPU-Accelerated AI Inference", description: "AI analysis services leverage GPU acceleration for deep learning inference (PyTorch/TensorFlow), enabling rapid processing of large evidence batches." },
];

const analystData = [
  { name: "Current", analysts: 18, artifacts: 187 },
  { name: "Phase 2", analysts: 50, artifacts: 500 },
  { name: "Phase 3", analysts: 100, artifacts: 1200 },
  { name: "National", analysts: 200, artifacts: 5000 },
];

export default function ScalabilityPage() {
  return (
    <div>
      <PageHeader
        title="Scalability"
        description="The system is designed to support millions of forensic artifacts, hundreds of concurrent analysts, and large multimedia datasets."
      />

      {/* Capacity Overview */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Forensic Artifacts", value: "Millions", note: "Distributed storage" },
          { label: "Concurrent Analysts", value: "Hundreds", note: "Horizontal scaling" },
          { label: "Multimedia Datasets", value: "Large", note: "GPU-accelerated analysis" },
        ].map((c) => (
          <div key={c.label} className="bg-card border border-border rounded-lg p-5">
            <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
            <p className="text-xl font-bold text-foreground">{c.value}</p>
            <p className="text-xs text-primary mt-1">{c.note}</p>
          </div>
        ))}
      </div>

      {/* Scaling Strategies */}
      <div className="mb-6">
        <SectionCard title="Scaling Strategies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCALING_STRATEGIES.map((s) => (
              <div key={s.title} className="p-4 bg-muted/30 rounded-md border border-border">
                <p className="text-sm font-semibold text-foreground mb-1">{s.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Horizontal Scaling Visual */}
      <SectionCard title="Horizontal Scaling Concept — Analyst Capacity vs. Artifacts (thousands)">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={analystData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
            <YAxis tick={{ fontSize: 12 }} stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", fontSize: 12 }}
            />
            <Bar dataKey="analysts" name="Analysts" fill="var(--primary)" radius={[3, 3, 0, 0]} />
            <Bar dataKey="artifacts" name="Artifacts (k)" fill="var(--accent)" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-muted-foreground mt-2">Projected growth from current capacity to national-level forensic investigation scale.</p>
      </SectionCard>
    </div>
  );
}
