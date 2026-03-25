"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Upload,
  Brain,
  ShieldCheck,
  FileText,
  Link2,
  Server,
  Layers,
  Users,
  HardDrive,
  Activity,
  Map,
  BarChart3,
  AlertTriangle,
  Star,
  Database,
} from "lucide-react";

const NAV_SECTIONS = [
  {
    label: "Main",
    items: [
      { href: "/", label: "Investigation Dashboard", icon: LayoutDashboard },
      { href: "/data-ingestion", label: "Data Ingestion", icon: Upload },
      { href: "/ai-analysis", label: "AI Analysis", icon: Brain },
      { href: "/evidence", label: "Evidence Repository", icon: Database },
      { href: "/reporting", label: "Automated Reporting", icon: FileText },
      { href: "/dopams", label: "DOPAMS Integration", icon: Link2 },
    ],
  },
  {
    label: "Security & Access",
    items: [
      { href: "/security", label: "Security & Compliance", icon: ShieldCheck },
      { href: "/roles", label: "User Roles", icon: Users },
    ],
  },
  {
    label: "Platform",
    items: [
      { href: "/architecture", label: "System Architecture", icon: Layers },
      { href: "/components", label: "Core Components", icon: Server },
      { href: "/data-architecture", label: "Data Architecture", icon: HardDrive },
      { href: "/microservices", label: "Microservices", icon: Activity },
      { href: "/tech-stack", label: "Technology Stack", icon: BarChart3 },
      { href: "/scalability", label: "Scalability", icon: Star },
      { href: "/deployment", label: "Deployment Options", icon: Map },
      { href: "/monitoring", label: "Monitoring & Operations", icon: Activity },
    ],
  },
  {
    label: "Planning",
    items: [
      { href: "/roadmap", label: "Implementation Roadmap", icon: Map },
      { href: "/risks", label: "Risk & Mitigation", icon: AlertTriangle },
      { href: "/benefits", label: "Expected Benefits", icon: Star },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen fixed left-0 top-0 overflow-y-auto">
      {/* Header */}
      <div className="px-5 py-6 border-b border-sidebar-border space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-6 w-6 text-sidebar-primary shrink-0" />
            <span className="font-bold text-base leading-tight text-sidebar-foreground">
              Digital Forensic
            </span>
          </div>
          <p className="text-xs text-sidebar-foreground/60 ml-8 mb-4">AI Analysis & Reporting System</p>

          <div className="space-y-1 ml-8">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">
              Powered by
            </p>
            <p className="text-[11px] font-medium text-sidebar-foreground/80">
              Blue Cloud Softech Solutions
            </p>
            <p className="text-[10px] text-sidebar-foreground/40 leading-relaxed">
              Secure Government Platform<br />All access is logged and audited.
            </p>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg flex justify-center items-center shadow-md mx-2 min-h-[100px]">
          <img
            src="/bcss.png"
            alt="BCSS – Blue Cloud Softech Solutions"
            className="h-24 w-auto object-contain"
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.label} className="mb-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40 px-3 mb-1.5">
              {section.label}
            </p>
            {section.items.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm mb-0.5 transition-colors",
                    active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer - Simplified or Removed */}
      <div className="px-5 py-4 border-t border-sidebar-border">
        <p className="text-[10px] text-sidebar-foreground/20 text-center">
          v1.0.0-production
        </p>
      </div>
    </aside>
  );
}
