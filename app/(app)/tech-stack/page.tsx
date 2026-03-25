"use client";

import { TECH_STACK } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";

const TECH_RATIONALE: Record<string, string> = {
  "Python (FastAPI)": "High-performance APIs",
  "Node.js": "Asynchronous event-driven backend",
  "React": "Component-based UI",
  "Next.js": "Server-rendered React framework",
  "PostgreSQL": "Reliable relational database",
  "Elasticsearch": "Fast forensic evidence search",
  "MinIO / Object Storage": "Scalable object storage for large forensic files",
  "Apache Airflow": "Orchestrated ETL pipelines",
  "PyTorch": "AI/ML model training and inference",
  "TensorFlow": "Production AI/ML deployment",
  "Transformers": "Pre-trained NLP models",
  "BERT models": "Contextual language understanding",
  "Neo4j": "Relationship analysis and graph queries",
  "Apache Kafka": "Streaming forensic data ingestion",
  "Docker": "Containerized microservices",
  "Kubernetes": "Scalable container orchestration",
  "Prometheus": "Metrics collection and alerting",
  "Grafana": "Observability dashboards",
};

export default function TechStackPage() {
  return (
    <div>
      <PageHeader
        title="Technology Stack"
        description="The technology stack is designed for enterprise scalability and government-grade security."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {TECH_STACK.map((row) => (
          <SectionCard key={row.layer} title={row.layer}>
            <div className="flex flex-wrap gap-2">
              {row.technologies.map((tech) => (
                <div key={tech} className="group relative">
                  <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-md text-sm font-medium border border-primary/20 cursor-default">
                    {tech}
                  </span>
                  {TECH_RATIONALE[tech] && (
                    <div className="absolute bottom-full left-0 mb-1.5 hidden group-hover:block z-10 bg-foreground text-background text-xs rounded px-2 py-1 whitespace-nowrap shadow-md">
                      {TECH_RATIONALE[tech]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>

      {/* Full Table */}
      <SectionCard title="Full Technology Stack">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Layer</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Technology</th>
                <th className="text-left py-2 px-3 text-muted-foreground font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {TECH_STACK.flatMap((row) =>
                row.technologies.map((tech) => (
                  <tr key={`${row.layer}-${tech}`} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-foreground">{row.layer}</td>
                    <td className="py-2.5 px-3">
                      <span className="font-mono text-primary text-xs bg-primary/5 px-1.5 py-0.5 rounded">{tech}</span>
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{TECH_RATIONALE[tech] ?? "—"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
