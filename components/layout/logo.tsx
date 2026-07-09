import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logoMark from "@/public/brand/logo-mark.png";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={logoMark}
        alt="Appvora Technologies"
        width={36}
        height={36}
        priority
        className="size-9 shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-bold tracking-tight">
          <span className="text-foreground">App</span>
          <span className="bg-gradient-wordmark bg-clip-text text-transparent">
            vora
          </span>
        </span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">
          Technologies
        </span>
      </span>
    </Link>
  );
}
