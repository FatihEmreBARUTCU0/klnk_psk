import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  variant?: "hero" | "subtle" | "vivid";
  className?: string;
}

export function AmbientBackground({
  variant = "hero",
  className,
}: AmbientBackgroundProps) {
  const isHero = variant === "hero";
  const isVivid = variant === "vivid";

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "absolute -left-[10%] -top-[20%] h-[55%] w-[55%] rounded-full blur-[90px]",
          isHero || isVivid ? "bg-accent-2/45 animate-mesh-drift-1" : "bg-accent-2/30 opacity-60"
        )}
      />
      <div
        className={cn(
          "absolute -right-[5%] top-[15%] h-[45%] w-[45%] rounded-full blur-[100px]",
          isHero || isVivid ? "bg-accent/40 animate-mesh-drift-2" : "bg-accent/25 opacity-50"
        )}
      />
      <div
        className={cn(
          "absolute bottom-[5%] left-[25%] h-[40%] w-[40%] rounded-full blur-[110px]",
          isHero || isVivid ? "bg-accent-2/35 animate-mesh-drift-3" : "bg-accent-2/20 opacity-40"
        )}
      />
      {(isHero || isVivid) && (
        <div className="absolute right-[8%] top-[30%] h-72 w-72 animate-blob-float rounded-full bg-gradient-to-br from-accent/35 to-accent-2/40 blur-3xl md:right-[15%] md:h-96 md:w-96" />
      )}
      <div className="grain-overlay absolute inset-0" />
    </div>
  );
}
