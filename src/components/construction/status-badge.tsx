import { AlertTriangle, CheckCircle2, CircleHelp, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { EvidenceStatus } from "@/lib/construction-data";

const config = {
  VERIFIED: { label: "Verified", icon: CheckCircle2, className: "bg-success/10 text-success border-success/20" },
  SUPPORTED: { label: "Supported", icon: ShieldCheck, className: "bg-primary/10 text-primary border-primary/20" },
  "NEEDS REVIEW": { label: "Needs Review", icon: AlertTriangle, className: "bg-warning/10 text-warning border-warning/20" },
  MISSING: { label: "Missing Information", icon: CircleHelp, className: "bg-destructive/10 text-destructive border-destructive/20" },
};

export function StatusBadge({ status, compact = false }: { status: EvidenceStatus; compact?: boolean }) {
  const item = config[status];
  const Icon = item.icon;
  return <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-semibold", item.className)}><Icon className="size-3.5" />{compact ? item.label.replace(" Information", "") : item.label}</span>;
}