"use client";

import { PageHeader, SectionCard } from "@/components/shared";
import { MONITORING_METRICS } from "@/lib/mock-data";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, AreaChart, Area } from "recharts";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const systemMetricsData = [
  { time: "00:00", cpu: 32, memory: 54 },
  { time: "04:00", cpu: 28, memory: 51 },
  { time: "08:00", cpu: 65, memory: 72 },
  { time: "12:00", cpu: 82, memory: 80 },
  { time: "16:00", cpu: 74, memory: 76 },
  { time: "20:00", cpu: 48, memory: 63 },
  { time: "Now", cpu: 55, memory: 68 },
];

const ALERTS = [
  { id: "ALT-001", severity: "Warning", message: "Ingestion queue depth exceeding threshold — Apache Kafka", time: "14:32" },
  { id: "ALT-002", severity: "Info", message: "Scheduled backup completed successfully", time: "12:00" },
  { id: "ALT-003", severity: "Warning", message: "AI inference latency elevated — GPU utilization high", time: "11:45" },
];

const ELK_LOGS = [
  { timestamp: "2024-05-24 17:55:12", level: "INFO", service: "IngestionService", message: "Imported 847 records from UFED in 3.2s" },
  { timestamp: "2024-05-24 17:53:40", level: "INFO", service: "AIAnalysisService", message: "NLP analysis completed for CASE-2024-004 — 94 artifacts scored" },
  { timestamp: "2024-05-24 17:50:22", level: "WARN", service: "KafkaQueue", message: "Consumer lag exceeding 500 messages" },
  { timestamp: "2024-05-24 17:47:05", level: "INFO", service: "ReportingService", message: "Report generated for CASE-2024-001 — 2.1MB" },
  { timestamp: "2024-05-24 17:44:30", level: "INFO", service: "IntegrationService", message: "DOPAMS sync completed — 42 cases transmitted" },
  { timestamp: "2024-05-24 17:40:18", level: "ERROR", service: "EvidenceService", message: "Duplicate artifact detected — EV-099 skipped" },
];

const levelColor: Record<string, string> = {
  INFO: "text-green-700",
  WARN: "text-amber-700",
  ERROR: "text-red-700",
};

export default function MonitoringPage() {
  return (
    <div>
      <PageHeader
        title="Monitoring & Operations"
        description="System monitoring via Prometheus metrics, Grafana dashboards, ELK-style logs, and automated alerts."
      />

      {/* Prometheus Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {MONITORING_METRICS.map((m) => (
          <div key={m.name} className="bg-card border border-border rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">Prometheus: {m.name}</p>
            <p className="text-2xl font-bold text-foreground">
              {m.value.toLocaleString('en-US')}
              {m.unit && <span className="text-sm font-normal text-muted-foreground">{m.unit}</span>}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Grafana Chart — CPU/Memory */}
        <SectionCard title="Grafana — CPU & Memory Utilization (24h)">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={systemMetricsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="time" tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" />
              <YAxis tick={{ fontSize: 11 }} stroke="var(--muted-foreground)" unit="%" />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", fontSize: 12 }} />
              <Area type="monotone" dataKey="cpu" name="CPU" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.15} strokeWidth={2} />
              <Area type="monotone" dataKey="memory" name="Memory" stroke="var(--accent)" fill="var(--accent)" fillOpacity={0.15} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>

        {/* Alerts */}
        <SectionCard title="Automated Alerts">
          <div className="space-y-2">
            {ALERTS.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-start gap-3 p-3 rounded-md border ${
                  alert.severity === "Warning"
                    ? "bg-amber-50 border-amber-200"
                    : "bg-blue-50 border-blue-100"
                }`}
              >
                {alert.severity === "Warning" ? (
                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-semibold ${alert.severity === "Warning" ? "text-amber-800" : "text-blue-800"}`}>
                    [{alert.severity}] {alert.id}
                  </p>
                  <p className={`text-xs mt-0.5 ${alert.severity === "Warning" ? "text-amber-700" : "text-blue-700"}`}>
                    {alert.message}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{alert.time}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* ELK Logs */}
      <SectionCard title="Logs (ELK Style)">
        <div className="bg-gray-950 rounded-md p-4 font-mono text-xs overflow-x-auto">
          {ELK_LOGS.map((log, i) => (
            <div key={i} className="flex gap-3 mb-1.5 last:mb-0">
              <span className="text-gray-500 shrink-0">{log.timestamp}</span>
              <span className={`font-bold shrink-0 w-10 ${levelColor[log.level]}`}>{log.level}</span>
              <span className="text-blue-400 shrink-0">[{log.service}]</span>
              <span className="text-gray-200">{log.message}</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
