import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  eyebrowClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-balance text-muted-foreground sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
