"use client";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <div className={cn("flex items-start justify-between gap-4 mb-6", className)}>
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
        )}
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}

interface StatusBadgeProps {
  label: string;
  variant?: "high" | "medium" | "low" | "active" | "closed" | "pending" | "review" | "success" | "running";
}

export function StatusBadge({ label, variant = "active" }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-amber-100 text-amber-800 border-amber-200",
    low: "bg-green-100 text-green-800 border-green-200",
    active: "bg-blue-100 text-blue-800 border-blue-200",
    closed: "bg-gray-100 text-gray-700 border-gray-200",
    pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    review: "bg-indigo-100 text-indigo-800 border-indigo-200",
    success: "bg-green-100 text-green-800 border-green-200",
    running: "bg-emerald-100 text-emerald-800 border-emerald-200",
  };
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border", styles[variant] || styles.active)}>
      {label}
    </span>
  );
}

interface RiskBadgeProps {
  score: number;
}

export function RiskBadge({ score }: RiskBadgeProps) {
  const level = score >= 80 ? "High" : score >= 50 ? "Medium" : "Low";
  const style = score >= 80 ? "bg-red-100 text-red-800 border-red-200" : score >= 50 ? "bg-amber-100 text-amber-800 border-amber-200" : "bg-green-100 text-green-800 border-green-200";
  return (
    <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium border", style)}>
      <span className={cn("w-1.5 h-1.5 rounded-full", score >= 80 ? "bg-red-600" : score >= 50 ? "bg-amber-500" : "bg-green-600")} />
      Risk: {level} ({score})
    </span>
  );
}

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({ title, children, className }: SectionCardProps) {
  return (
    <div className={cn("bg-card border border-border rounded-lg p-5", className)}>
      <h2 className="text-base font-semibold text-foreground mb-4">{title}</h2>
      {children}
    </div>
  );
}
