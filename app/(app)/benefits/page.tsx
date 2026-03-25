"use client";

import { BENEFITS } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { CheckCircle2, Zap, Database, Search, FileText, TrendingUp } from "lucide-react";

const benefitIcons = [Zap, Database, Search, FileText, TrendingUp];

export default function BenefitsPage() {
  return (
    <div>
      <PageHeader
        title="Expected Benefits"
        description="The proposed platform will significantly improve the operational capabilities of the Digital Forensic Unit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BENEFITS.map((benefit, i) => {
          const Icon = benefitIcons[i] ?? CheckCircle2;
          return (
            <div key={benefit.title} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{benefit.title}</h3>
              </div>
              <ul className="space-y-2">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <SectionCard title="Benefits Summary">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Benefit Area</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Key Points</th>
                </tr>
              </thead>
              <tbody>
                {BENEFITS.map((benefit) => (
                  <tr key={benefit.title} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3 font-medium text-foreground">{benefit.title}</td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{benefit.items.join("; ")}</td>
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
