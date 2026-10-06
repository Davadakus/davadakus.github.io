import React, { ReactNode, useEffect, useRef } from "react";
import DropdownButton from "./DropdownButton";
import useDetails from "./useDetails";

interface DropdownContainerProps {
  className?: string;
  buttonLabel?: string;
  children: (details: boolean, toggleDetails: () => void) => ReactNode;
}

export default function DropdownContainer({
  className = "",
  buttonLabel,
  children,
}: DropdownContainerProps) {
  const { details, toggleDetails, closeDetails } = useDetails();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when the user clicks anywhere outside this dropdown
  useEffect(() => {
    if (!details) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) closeDetails();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [details]);

  const handleClick = (e: React.MouseEvent) => {
    // Only the innermost dropdown reacts, so nested dropdowns don't toggle their parents
    e.stopPropagation();
    // Buttons and links handle their own clicks
    if ((e.target as HTMLElement).closest("button, a")) return;
    if (window.getSelection()?.toString()) return;
    toggleDetails();
  };

  return (
    <div ref={containerRef} className={`relative ${className} ${details ? "" : "cursor-pointer"}`} onClick={handleClick}>
      <div
        className={`relative z-10 flex bg-neutral-800 p-1 pl-4 shadow-lg shadow-black/50 transition-opacity duration-300 ease-out ${details ? "opacity-100" : "opacity-0 cursor-default"}`}
        // While hidden, swallow clicks so the invisible bar doesn't open the dropdown
        onClick={(e) => !details && e.stopPropagation()}
      >
        <div inert={!details}>
          <DropdownButton onClick={toggleDetails} label={buttonLabel} expanded />
        </div>
      </div>
      {children(details, toggleDetails)}
      {!details && (
        <div className="absolute bottom-3 right-3 text-right text-white transition-opacity duration-300 delay-300 ease-out starting:opacity-0">
          <DropdownButton onClick={toggleDetails} showLabel={false} expanded={details} />
        </div>
      )}
    </div>
  );
}
