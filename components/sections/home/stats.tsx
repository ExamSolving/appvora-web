import { Container } from "@/components/layout/container";
import { StatCounter } from "@/components/shared/stat-counter";
import { stats } from "@/lib/data/stats";

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/30 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center">
              <span className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
