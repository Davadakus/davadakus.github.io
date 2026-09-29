import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Tech as TechType, TechDefinitions } from "../data/tech";

interface TechProps {
  tech: TechType;
  className?: string;
}

export default function Tech({
  tech,
  className = "",
}: TechProps) {
  const { name, description, link } = TechDefinitions[tech];
  const ref = useRef<HTMLAnchorElement>(null);
  // Viewport position of the tooltip; rendered in a portal so overflow-hidden parents can't clip it
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const showTooltip = () => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top });
  };
  const hideTooltip = () => setTooltipPos(null);

  return (
    <>
      <a
        ref={ref}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        draggable="false"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
        className={`rounded bg-gray-300 text-black p-1 text-lg select-none cursor-pointer hover:bg-white ${className}`}
      >
        {name}
      </a>
      {tooltipPos && createPortal(
        <div
          role="tooltip"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
          className="fixed z-50 -translate-x-1/2 -translate-y-full -mt-2 w-64 rounded bg-neutral-800 p-2 text-sm text-white shadow-lg shadow-black/50 pointer-events-none transition-opacity duration-150 ease-out starting:opacity-0"
        >
          {description}
        </div>,
        document.body
      )}
    </>
  );
}
