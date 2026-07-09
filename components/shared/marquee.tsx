import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
};

export function Marquee({ children, className, reverse = false }: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex w-max shrink-0 animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
