import { Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function TechBadge({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium whitespace-nowrap text-foreground shadow-sm",
        className
      )}
    >
      <Code2 className="size-4 text-muted-foreground" />
      {label}
    </div>
  );
}
