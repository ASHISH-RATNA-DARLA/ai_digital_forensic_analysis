"use client";

import { useState } from "react";
import { USER_ROLES } from "@/lib/mock-data";
import { PageHeader, SectionCard } from "@/components/shared";
import { Users, Shield } from "lucide-react";

export default function RolesPage() {
  const [activeRole, setActiveRole] = useState<string>("Forensic Analyst");
  const roleData = USER_ROLES.find((r) => r.role === activeRole)!;

  const roleColors: Record<string, string> = {
    "Super Administrator": "bg-red-100 text-red-800 border-red-200",
    Administrator: "bg-amber-100 text-amber-800 border-amber-200",
    "Forensic Analyst": "bg-blue-100 text-blue-800 border-blue-200",
    Investigator: "bg-green-100 text-green-800 border-green-200",
  };

  return (
    <div>
      <PageHeader
        title="User Roles & Access Control"
        description="Role-Based Access Control (RBAC) — switch role to see permissions available to each user type."
      />

      <p className="text-sm text-muted-foreground mb-4">
        Select a role below to view its permissions and assigned users:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {USER_ROLES.map((r) => (
          <button
            key={r.role}
            onClick={() => setActiveRole(r.role)}
            className={`p-4 rounded-lg border text-left transition-colors ${
              activeRole === r.role
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-foreground border-border hover:bg-muted"
            }`}
          >
            <Shield className={`h-5 w-5 mb-2 ${activeRole === r.role ? "text-primary-foreground" : "text-muted-foreground"}`} />
            <p className="font-semibold text-sm">{r.role}</p>
            <p className={`text-xs mt-1 ${activeRole === r.role ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {r.users.length} {r.users.length === 1 ? "user" : "users"}
            </p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title={`Permissions — ${roleData.role}`}>
          <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border mb-4 ${roleColors[roleData.role]}`}>
            {roleData.role}
          </span>
          <ul className="space-y-2">
            {roleData.permissions.map((perm) => (
              <li key={perm} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {perm}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title={`Assigned Users — ${roleData.role}`}>
          {roleData.users.map((user) => (
            <div key={user} className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                {user.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{user}</p>
                <p className="text-xs text-muted-foreground">{roleData.role}</p>
              </div>
            </div>
          ))}
          {roleData.users.length === 0 && (
            <p className="text-sm text-muted-foreground">No users assigned.</p>
          )}
        </SectionCard>
      </div>

      {/* All roles summary */}
      <div className="mt-6">
        <SectionCard title="All Roles Overview">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Role</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Permissions Count</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Assigned Users</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-medium">Key Responsibilities</th>
                </tr>
              </thead>
              <tbody>
                {USER_ROLES.map((r) => (
                  <tr key={r.role} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-3">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium border ${roleColors[r.role]}`}>{r.role}</span>
                    </td>
                    <td className="py-2.5 px-3 text-foreground">{r.permissions.length}</td>
                    <td className="py-2.5 px-3 text-foreground">{r.users.join(", ") || "—"}</td>
                    <td className="py-2.5 px-3 text-muted-foreground text-xs">{r.permissions[0]}</td>
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
