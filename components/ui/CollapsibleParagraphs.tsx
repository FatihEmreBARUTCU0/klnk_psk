"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface CollapsibleParagraphsProps {
  paragraphs: string[];
  desktopContainerClassName?: string;
  mobileContainerClassName?: string;
  desktopParagraphClassName?: string;
  mobileParagraphClassName?: string;
  delayStart?: number;
}

export function CollapsibleParagraphs({
  paragraphs,
  desktopContainerClassName = "hidden space-y-6 md:block",
  mobileContainerClassName = "space-y-4 md:hidden",
  desktopParagraphClassName = "text-base leading-[1.85] text-muted md:text-lg",
  mobileParagraphClassName = "text-sm leading-relaxed text-muted",
  delayStart = 0.1,
}: CollapsibleParagraphsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [firstParagraph, ...remainingParagraphs] = paragraphs;

  return (
    <>
      <div className={desktopContainerClassName}>
        {paragraphs.map((paragraph, i) => (
          <FadeIn key={i} delay={delayStart + i * 0.1}>
            <p className={desktopParagraphClassName}>{paragraph}</p>
          </FadeIn>
        ))}
      </div>

      <div className={mobileContainerClassName}>
        {firstParagraph ? (
          <FadeIn delay={delayStart}>
            <p className={mobileParagraphClassName}>{firstParagraph}</p>
          </FadeIn>
        ) : null}

        {remainingParagraphs.length > 0 ? (
          <>
            <FadeIn delay={delayStart + 0.05}>
              <p
                className={`${mobileParagraphClassName} pt-1 ${
                  isExpanded ? "" : "line-clamp-4"
                }`}
              >
                {remainingParagraphs.join(" ")}
              </p>
            </FadeIn>

            <button
              type="button"
              className="text-sm font-medium text-accent transition-colors hover:text-text"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Daha az göster" : "Devamını oku"}
            </button>
          </>
        ) : null}
      </div>
    </>
  );
}
