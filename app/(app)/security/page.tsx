"use client";

import { useState } from "react";
import { AUDIT_LOG, CHAIN_OF_CUSTODY } from "@/lib/mock-data";
import { PageHeader, SectionCard, StatusBadge } from "@/components/shared";
import { ShieldCheck, Loader2, CheckCircle2, Lock } from "lucide-react";

type MFAState = "idle" | "code" | "verified";

export default function SecurityPage() {
  const [mfaState, setMfaState] = useState<MFAState>("idle");
  const [otpInput, setOtpInput] = useState("");
  const [otpError, setOtpError] = useState(false);

  const handleSendCode = () => setMfaState("code");
  const handleVerify = () => {
    if (otpInput === "123456") {
      setMfaState("verified");
      setOtpError(false);
    } else {
      setOtpError(true);
    }
  };

  return (
    <div>
      <PageHeader
        title="Security & Compliance"
        description="Authentication, chain of custody, audit logs, and compliance controls for government-grade forensic security."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* MFA Simulation */}
        <SectionCard title="Authentication — Multi-Factor Authentication (Simulation)">
          <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-md border border-border mb-4">
            <Lock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <div className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Security Controls:</strong> AES-256 data encryption, TLS 1.3 for transmission, OAuth2 + API gateway. MFA required for all users.
            </div>
          </div>
          {mfaState === "idle" && (
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Username</label>
                <input defaultValue="det.sarah.malik" readOnly className="w-full px-3 py-2 text-sm border border-input rounded-md bg-muted text-foreground" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Password</label>
                <input type="password" defaultValue="••••••••" readOnly className="w-full px-3 py-2 text-sm border border-input rounded-md bg-muted text-foreground" />
              </div>
              <button onClick={handleSendCode} className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90">
                <ShieldCheck className="h-4 w-4" />
                Send MFA Code
              </button>
            </div>
          )}
          {mfaState === "code" && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to your registered device. <span className="text-xs text-primary">(Demo code: 123456)</span></p>
              <input
                type="text"
                maxLength={6}
                placeholder="000000"
                value={otpInput}
                onChange={(e) => { setOtpInput(e.target.value); setOtpError(false); }}
                className={`w-full px-3 py-2 text-lg font-mono tracking-widest border rounded-md bg-background text-foreground text-center focus:outline-none focus:ring-2 focus:ring-ring ${otpError ? "border-destructive" : "border-input"}`}
              />
              {otpError && <p className="text-xs text-destructive">Invalid code. Please try again.</p>}
              <button onClick={handleVerify} className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90">
                Verify Code
              </button>
            </div>
          )}
          {mfaState === "verified" && (
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-md border border-green-200">
              <CheckCircle2 className="h-5 w-5 text-green-700" />
              <div>
                <p className="text-sm font-semibold text-green-800">Authentication Verified</p>
                <p className="text-xs text-green-700 mt-0.5">MFA passed. Session established for Det. Sarah Malik (Forensic Analyst).</p>
              </div>
              <button onClick={() => { setMfaState("idle"); setOtpInput(""); }} className="ml-auto text-xs px-3 py-1.5 border border-green-300 rounded text-green-800 hover:bg-green-100 transition-colors">
                Reset
              </button>
            </div>
          )}
        </SectionCard>

        {/* Encryption & Protocol info */}
        <SectionCard title="Security Controls">
          <div className="space-y-3">
            {[
              { label: "Data Encryption", value: "AES-256", status: "active" },
              { label: "Data Transmission", value: "TLS 1.3", status: "active" },
              { label: "Authentication", value: "Multi-factor authentication", status: "active" },
              { label: "Authorization", value: "Role-based access control (RBAC)", status: "active" },
              { label: "API Security", value: "OAuth2 + API Gateways", status: "active" },
              { label: "Audit Logs", value: "Immutable, full chain-of-custody", status: "active" },
              { label: "Government SSO", value: "Government identity integration", status: "active" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <span className="text-sm text-muted-foreground">{row.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{row.value}</span>
                  <StatusBadge label="Active" variant="active" />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Chain of Custody */}
      <div className="mb-6">
        <SectionCard title="Chain of Custody Timeline">
          <div className="relative">
            {CHAIN_OF_CUSTODY.map((step, i) => (
              <div key={step.step} className="flex gap-4 mb-4 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < CHAIN_OF_CUSTODY.length - 1 && <div className="w-0.5 bg-border flex-1 mt-1" />}
                </div>
                <div className="pb-4 flex-1">
                  <p className="text-sm font-semibold text-foreground">{step.action}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Officer: {step.officer} &bull; {step.timestamp}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-0.5">{step.hash}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Audit Logs */}
      <SectionCard title="Audit Logs Viewer">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Timestamp</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">User</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Role</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">Action</th>
                <th className="text-left py-2 px-2 text-muted-foreground font-medium">IP Address</th>
              </tr>
            </thead>
            <tbody>
              {AUDIT_LOG.map((log) => (
                <tr key={log.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-2 font-mono text-xs text-muted-foreground">{log.timestamp}</td>
                  <td className="py-2.5 px-2 font-medium text-foreground">{log.user}</td>
                  <td className="py-2.5 px-2 text-xs text-muted-foreground">{log.role}</td>
                  <td className="py-2.5 px-2 text-sm text-foreground">{log.action}</td>
                  <td className="py-2.5 px-2 font-mono text-xs text-muted-foreground">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3">All logs are immutable and form part of the forensic chain of custody.</p>
      </SectionCard>
    </div>
  );
}
