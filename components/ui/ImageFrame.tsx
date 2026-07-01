import { cn } from "@/lib/utils";

interface ImageFrameProps {
  label?: string;
  aspect?: "portrait" | "hero";
  className?: string;
  children?: React.ReactNode;
}

export function ImageFrame({
  label = "Fotoğraf",
  aspect = "portrait",
  className,
  children,
}: ImageFrameProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent-2/20 to-transparent blur-md",
          aspect === "hero" && "-inset-5"
        )}
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/60 bg-white/30 shadow-[0_32px_80px_-16px_rgba(44,44,44,0.18)] backdrop-blur-xl",
          aspect === "hero" ? "aspect-[3/4]" : "aspect-[4/5]"
        )}
      >
        {children ?? (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              {label}
            </p>
            <div className="h-px w-14 bg-gradient-to-r from-transparent via-accent-2 to-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}
