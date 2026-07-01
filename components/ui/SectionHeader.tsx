import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <FadeIn>
        <div
          className={cn(
            "mb-4 flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent" />
          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-accent">
            Bölüm
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent-2" />
        </div>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h2 className={cn("section-title", align === "center" && "mx-auto")}>{title}</h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.16}>
          <p
            className={cn(
              "section-subtitle",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
